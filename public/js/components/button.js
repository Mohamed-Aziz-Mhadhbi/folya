'use strict';

class Button {
    static get WIDTH() {
        return 32;
    }
    static get HEIGHT() {
        return 32;
    }
    static get MARGIN() {
        return 2;
    }
    static get ID() {
        return '';
    }
    static get LABEL() {
        return '';
    }
    static get BUTTON_IMAGE_1X() {
        return '';
    }
    static get BUTTON_IMAGE_2X() {
        return '';
    }
    static get BUTTON() {
        return [
            'div',
            {
                'class': 'custom-button-wrapper'
            },
            [
                'div',
                {
                    'class': 'custom-button',
                    'id': this.ID,
                    'aria-label': this.LABEL
                },
                [
                    'div',
                    {
                        'class': 'custom-button-contents custom-button-image'
                    },
                    [
                        'div',
                        {
                            'class': 'image'
                        },
                    ],
                ],
                [
                    'div',
                    {
                        'class': 'custom-button-contents custom-button-text'
                    },
                ],
            ],
        ];
    }
    static get STYLE() {
        return BragiElementFactory.bragiToElement(
            ['style', {
                'type': 'text/css'
            }, this.CSS]);
    }
    static get CSS() {
        return `
      #${this.ID} .custom-button-image .image {
        background-image: -webkit-image-set(
            url(${this.BUTTON_IMAGE_1X}) 1x,
            url(${this.BUTTON_IMAGE_2X}) 2x
        );
      }
    `;
    }

    static get ENABLED_PREF_NAME() {
        return undefined;
    }

    constructor(container) {
        if (!container) {
            return;
        }
        this.button_container_ =
            BragiElementFactory.bragiToElement(this.constructor.BUTTON);
        this.button_ = this.button_container_.firstChild;
        this.container_ = container;
        this.button_.addEventListener('click', e => this.onButtonClick_(e), true);
        this.button_.addEventListener('mouseover',
            e => this.handleMouseEvent_(e, true), true);
        this.button_.addEventListener('mouseout',
            e => this.handleMouseEvent_(e, false), true);
        this.prefEnabled_ = false;
        // update prefs async so that we do it when it is fully constructed
        this.updatePrefEnabled();
    }

    button() {
        return this.button_container_;
    }

    setToggled_(toggled) {
        if (toggled) {
            this.button_.setAttribute('active', '');
        } else {
            this.button_.removeAttribute('active');
        }
    }

    setDisabled_(disabled) {
        if (disabled) {
            this.button_.setAttribute('disabled', '');
        } else {
            this.button_.removeAttribute('disabled');
        }
    }

    isDisabled_() {
        return this.button_.hasAttribute('disabled');
    }

    setInactive_(inactive) {
        if (inactive) {
            this.button_.setAttribute('inactive', '');
        } else {
            this.button_.removeAttribute('inactive');
        }
    }

    setHovered_(hovered) {
        if (hovered) {
            this.button_.setAttribute('hovered', '');
        } else {
            this.button_.removeAttribute('hovered');
        }
    }

    onButtonClick_(e) {
        if (e.isTrusted && e.target === this.button_) {
            e.stopImmediatePropagation();
            e.preventDefault();

            if (this.container_.isTracking()) {
                this.triggerAction_(this.container_.video());
            }
        }
    }

    onVisible() {}
    onHidden() {}
    onPrefEnabledChanged() {}

    handleMouseEvent_(e, mouseover) {
        if (e.isTrusted && e.target === this.button_) {
            e.stopImmediatePropagation();
            e.preventDefault();

            if (this.container_.isTracking() &&
                this.isToggled(this.container_.video()) && mouseover) {
                this.setHovered_(true);
            } else {
                this.setHovered_(false);
            }
        }
    }

    isToggled(video) {
        return false;
    }
    isAvailable(video) {
        return false;
    }
    isInactive_() {
        return this.button_.hasAttribute('inactive');
    }
    triggerAction_(video) {}
    registerVideoListeners(video) {}
    updateState(video) {
        this.setDisabled_(!this.isAvailable(video));
    }

    setText_(text) {
        let textElement = this.button_.querySelector('.custom-button-text');
        // Keep existing text when disabling text element to have it nicely
        // nicely animated.
        if (text) {
            textElement.innerText = text;
        }
        if (text) {
            textElement.setAttribute('enabled', '');
        } else {
            textElement.removeAttribute('enabled');
        }
    }

    showHint_(data) {
        this.container_.showHint(this.button_, data);
    }

    isPrefEnabled() {
        return this.isPrefEnabled_;
    }

    updatePrefEnabled() {
        chrome.settingsPrivate.getPref(
            this.ENABLED_PREF_NAME, isEnabled => {
                this.isPrefEnabled_ = isEnabled.value;
                this.onPrefEnabledChanged();
            });
    }

    onPrefsChanged(prefs) {
        for (const pref of prefs) {
            if (pref.key === this.ENABLED_PREF_NAME) {
                this.updatePrefEnabled();
            }
        }
    }
}