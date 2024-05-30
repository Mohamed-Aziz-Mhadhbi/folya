// Copyright (C) 2024 Opera Norway AS.  All rights reserved.
//
// This file is an original work developed by Opera Norway AS

'use strict';

const RGX_BUTTON_ENABLED_PREF = 'ui.sharpen_videos_overlay_button';
const RGX_BUTTON_SHOW_TEXT_COUNT_PREF = 'ui.sharpen_videos_shown_count';
const RGX_BUTTON_SHOW_TEXT_THRESHOLD = 3;
const RGX_COMPARE_ENABLED_PREF = 'ui.sharpen_videos_dynamic_preview';
const RGX_ENABLED_PREF = 'ui.sharpen_videos';

class LucidModeButton extends Button {
    static get ID() {
        return 'lucid-mode-button';
    }
    static get LABEL() {
        return 'Lucid Mode Button';
    }
    static get BUTTON() {
        return [
            'div',
            {
                class: 'rgx-button-wrapper',
                'aria-label': this.LABEL
            },
            [
                'div',
                {
                    class: 'rgx-button-overlay'
                },
                [
                    'div',
                    {
                        class: 'rgx-button enabled-button',
                        id: this.ID
                    },
                    ['div', {
                        class: 'image'
                    }],
                ],
                ['div', {
                    class: 'rgx-button-text'
                }],
                [
                    'div',
                    {
                        class: 'rgx-button compare-button'
                    },
                    ['div', {
                        class: 'image'
                    }],
                ],
            ],
        ];
    }

    /* eslint-disable */
    static get CSS() {
        const star = `url("${chrome.extension.getURL('images/star.svg')}")`;
        const compare = `url("${chrome.extension.getURL(
      'images/lucid_compare.svg',
    )}")`;
        const rgx = `url("${chrome.extension.getURL('images/lucid.svg')}")`;
        return `
      .rgx-button-wrapper {
        height: ${Button.HEIGHT}px;
        padding: 0 4px;
        pointer-events: initial;
        position: relative;
        white-space: nowrap;
        width: 32px;
      }

      .rgx-button-wrapper[disabled] {
        display: none;
      }

      .rgx-button-overlay {
        align-items: center;
        background: transparent;
        border-radius: 20px;
        display: flex;
        gap: 4px;
        left: 0;
        padding: 4px;
        position: absolute;
        overflow: hidden;
        top: -4px;
        width: 32px;
        z-index: 1;
      }

      @keyframes rgx-long-hover {
        to {
         background: var(--opera-video-toolbar-rgx-button-overlay-background-color);
         width: fit-content;
         backdrop-filter: blur(25px);
        }
      }

      .rgx-button-wrapper:has(.enabled-button[active]):hover .rgx-button-overlay {
        animation: rgx-long-hover 0.2s ease-in-out 0.5s forwards;
      }

      .rgx-button-overlay:has(.enabled-button[exploding]) {
        background: var(--opera-video-toolbar-rgx-button-overlay-background-color);
        overflow: visible;
        width: fit-content;
        backdrop-filter: blur(25px);
       }

      .rgx-button-overlay:has(.rgx-button-text[disabled]):has(.compare-button[disabled]) {
        background: none;
      }

      .rgx-button-text {
        color: #fff;
        font-family: system-ui;
        font-size: 11px;
        font-weight: 400;
        opacity: 0;
        padding: 0 6px 0 3px;
        transition: opacity 0.3s ease-in-out 0.6s;
        user-select: none;
      }

      .rgx-button-wrapper:hover .rgx-button-text {
        opacity: 1;
      }

      .rgx-button-text[disabled] {
        display: none;
      }

      .rgx-button {
        border-radius: 50%;
        height: 32px;
        pointer-events: initial;
        position: relative;
        user-select: none;
        width: 32px;
      }

      .rgx-button:focus {
        outline: 0;
      }

      .rgx-button-text:not([disabled]) + .rgx-button.compare-button {
         margin-left: -4px;
      }

      .rgx-button[disabled] {
        display: none;
        pointer-events: none;
      }

      .rgx-button .image {
        background-position: center;
        background-repeat: no-repeat;
        background-size: auto;
        border-radius: 50%;
        box-sizing: border-box;
        height: 32px;
        width: 32px;
      }

      .rgx-button[active] .image::after {
        content: '';
        background-position: center, left;
        background-repeat: no-repeat;
        background-size: auto;
        border-radius: 50%;
        position: absolute;
        top: 1px;
        left: 0;
        height: 30px;
        width: 32px;
      }


      .rgx-button.enabled-button .image {
        background-image: ${rgx},
          var(--opera-video-toolbar-custom-button-background);
      }

      .rgx-button.enabled-button:hover .image {
        background-image: ${rgx},
          var(--opera-video-toolbar-custom-button-background-hovered);
      }

      .rgx-button.enabled-button[active] .image {
        background-image: ${rgx},
          var(--opera-video-toolbar-custom-button-active-background);
      }

      .rgx-button.enabled-button[active]:hover .image {
        background-image: ${rgx},
          var(--opera-video-toolbar-custom-button-active-background-hovered);
      }

      .rgx-button.compare-button {
        opacity: 0;
        transition: opacity 0.3s ease-in-out 0.6s;
      }

      .rgx-button-wrapper:hover .rgx-button.compare-button {
        opacity: 1;
      }

      .rgx-button.compare-button .image {
        background-image: ${compare},
          var(--opera-video-toolbar-custom-button-background);
      }

      .rgx-button.compare-button:hover .image {
        background-image: ${compare},
          var(--opera-video-toolbar-custom-button-background-hovered);
      }

      .rgx-button.compare-button[active] .image {
        background-image: ${compare},
          var(--opera-video-toolbar-custom-button-active-background);
      }

      .rgx-button.compare-button[active]:hover .image {
        background-image: ${compare},
          var(--opera-video-toolbar-custom-button-active-background-hovered);
      }

      /* Click animation: Explosion effect */
      .rgx-button.enabled-button::before,
      .rgx-button.enabled-button::after {
        background-repeat: no-repeat;
        content: "";
        display: none;
        left: -20%;
        width: 140%;
        height: 100%;
        position: absolute;
        z-index: -1000;
        transition: all ease-in-out 0.5s;
      }

      .rgx-button.enabled-button::before {
        top: -75%;
        background-image: ${Array(9).fill(star).join()};
        background-size: 7px, 9px, 6px, 11px, 10px, 7px, 9px, 7px, 10px;
      }

      .rgx-button.enabled-button::after {
        bottom: -75%;
        background-image: ${Array(7).fill(star).join()};
        background-size: 9px, 11px, 10px, 11px, 9px, 7px, 11px;
      }

      .rgx-button.enabled-button[exploding]::before {
        display: block;
        animation: topExplosion ease-out 0.75s forwards;
      }

      .rgx-button.enabled-button[exploding]::after {
        display: block;
        animation: bottomExplosion ease-out 0.75s forwards;
      }

      @keyframes topExplosion {
        0% {
          background-position: 20% 110%, 24% 110%, 39% 110%, 45% 110%, 50% 110%,
                               58% 110%, 62% 110%, 70% 110%, 80% 110%;
        }
        50% {
          background-position: 10% 80%, 14% 40%, 20% 50%, 40% 40%, 60% 45%,
                               70% 55%, 80% 45%, 84% 50%, 90% 40%;
        }
        100% {
          background-position: 0% 70%, 4% 10%, 1% 30%, 35% -10%, 70% 20%,
                               82% 40%, 104% 40%, 110% 10%, 130% 20%;
          background-size: 0, 0, 0, 0, 0, 0;
        }
      }

      @keyframes bottomExplosion {
        0% {
          background-position: 20% -30%, 30% -10%, 55% -30%, 60% -30%, 65% -30%,
                               70% -30%, 73% -20%;
        }
        50% {
          background-position: 10% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%,
                               85% 60%, 95% 0%;
        }
        100% {
          background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%,
                               95% 70%, 110% 10%;
          background-size: 0, 0, 0, 0;
        }
      }
    `;
    }
    /* eslint-enable */

    get ENABLED_PREF_NAME() {
        return RGX_ENABLED_PREF;
    }

    constructor(container, strings_promise) {
        super(null);
        this.container_ = container;
        this.button_container_ = BragiElementFactory.bragiToElement(
            this.constructor.BUTTON,
        );
        this.button_ = this.button_container_;
        this.enabledButton_ = this.button_container_.querySelector(
            '.rgx-button.enabled-button',
        );
        this.compareButton_ = this.button_container_.querySelector(
            '.rgx-button.compare-button',
        );

        this.enabledButton_.addEventListener(
            'click',
            e => this.onButtonClick_(e),
            true,
        );
        this.compareButton_.addEventListener(
            'click',
            e => this.onCompareButtonClick_(e),
            true,
        );

        this.rgx3Available_ = false;
        this.hideTextEnabled_ = false;
        this.textShouldBeHidden_ = false;
        this.isVideoConference_ = false;
        this.isButtonEnabled_ = true;
        this.isPrefCompareEnabled_ = false;

        this.updatePrefEnabled();
        this.updatePrefButtonEnabled();
        this.updatePrefCompareButton();
        this.updateThresholdCount();

        strings_promise.then(strings => {
            this.rgx3Available_ = strings['rgx3AdvancedPrefs'];
            this.hideTextEnabled_ = strings['lucidModeHideTextEnabled'];
            this.updateLabel(strings['lucidModeOff'], strings['lucidModeOn']);
            this.updatePrefEnabled();
            this.updatePrefButtonEnabled();
            this.updatePrefCompareButton();
            this.updateThresholdCount();
        });

        opr.videoConferencePrivate.isVideoConferencePage(isConference => {
            this.isVideoConference_ = isConference;
        });
    }

    onButtonClick_(e) {
        if (e.isTrusted && e.currentTarget === this.enabledButton_) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();

            if (this.container_.isTracking()) {
                const willBeEnabled = !this.isPrefEnabled();
                chrome.settingsPrivate.setPref(this.ENABLED_PREF_NAME, willBeEnabled);

                if (willBeEnabled) {
                    this.enabledButton_.setAttribute('exploding', '');
                    setTimeout(() => {
                        this.enabledButton_.removeAttribute('exploding');
                    }, 750);
                }

                opr.statsPrivate.recordSessionEvent(
                    'event_lucid_mode',
                    JSON.stringify({
                        context: 'VideoButton',
                        type: 'Video',
                        action: willBeEnabled ? 'Enable' : 'Disable',
                    }),
                    opr.statsPrivate.Priority.NORMAL,
                );
            }
        }
    }

    onCompareButtonClick_(e) {
        if (
            this.rgx3Available_ &&
            e.isTrusted &&
            e.currentTarget === this.compareButton_
        ) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();

            if (this.container_.isTracking()) {
                chrome.settingsPrivate.setPref(
                    RGX_COMPARE_ENABLED_PREF,
                    !this.isPrefCompareEnabled_,
                );
            }
        }
    }

    isDisabled() {
        return false;
    }

    isAvailable(video) {
        return (
            this.isButtonEnabled_ &&
            !this.isVideoConference_ &&
            !this.hasDetachedView_(video)
        );
    }

    setToggled_(toggled, element) {
        if (!element) {
            return;
        }
        if (toggled) {
            element.setAttribute('active', '');
        } else {
            element.removeAttribute('active');
        }
    }

    setDisabled_(disabled, element) {
        if (!element) {
            return false;
        }
        if (disabled) {
            element.setAttribute('disabled', '');
        } else {
            element.removeAttribute('disabled');
        }
    }

    updateState(video) {
        this.setDisabled_(!this.isAvailable(video), this.button_);
    }

    onPrefEnabledChanged() {
        this.setToggled_(this.isPrefEnabled(), this.enabledButton_);
        this.setText_(this.isPrefEnabled() ? this.onText_ : this.offText_);
        this.setDisabled_(
            !(this.rgx3Available_ && this.isPrefEnabled()),
            this.compareButton_,
        );
    }

    onPrefsChanged(prefs) {
        for (const pref of prefs) {
            if (pref.key === RGX_ENABLED_PREF) {
                this.updatePrefEnabled();
            }
            if (pref.key === RGX_BUTTON_ENABLED_PREF) {
                this.updatePrefButtonEnabled();
            }
            if (pref.key === RGX_COMPARE_ENABLED_PREF) {
                this.updatePrefCompareButton();
            }
        }
    }

    updatePrefButtonEnabled() {
        chrome.settingsPrivate.getPref(RGX_BUTTON_ENABLED_PREF, isEnabled => {
            this.isButtonEnabled_ = isEnabled.value;
        });
    }

    updatePrefCompareButton() {
        if (this.rgx3Available_) {
            chrome.settingsPrivate.getPref(RGX_COMPARE_ENABLED_PREF, isEnabled => {
                this.isPrefCompareEnabled_ = isEnabled.value;
                this.setToggled_(this.isPrefCompareEnabled_, this.compareButton_);
                this.setDisabled_(!this.isPrefEnabled(), this.compareButton_);
            });
        } else {
            this.setDisabled_(true, this.compareButton_);
        }
    }

    isThresholdMet(value) {
        return this.hideTextEnabled_ && value >= RGX_BUTTON_SHOW_TEXT_THRESHOLD;
    }

    async updateThresholdCount() {
        const currentCount = await new Promise(resolve =>
            chrome.settingsPrivate.getPref(RGX_BUTTON_SHOW_TEXT_COUNT_PREF, resolve),
        );
        if (this.isThresholdMet(currentCount.value)) {
            this.textShouldBeHidden_ = true;
        }
    }

    onVisible() {
        chrome.settingsPrivate.getPref(RGX_BUTTON_SHOW_TEXT_COUNT_PREF, pref => {
            if (this.isThresholdMet(pref.value)) {
                this.textShouldBeHidden_ = true;
            }
            chrome.settingsPrivate.setPref(
                RGX_BUTTON_SHOW_TEXT_COUNT_PREF,
                pref.value + 1,
            );
        });
        super.onVisible();
    }

    onHidden() {
        if (this.textShouldBeHidden_) {
            this.setText_(null);
        }
        super.onHidden();
    }

    updateLabel(offLabel, onLabel) {
        this.offText_ = offLabel;
        this.onText_ = onLabel;
    }

    setText_(text) {
        const textElement =
            this.button_container_.querySelector('.rgx-button-text');

        if (text) {
            textElement.innerText = text;
            this.setDisabled_(false, textElement);
        } else {
            this.setDisabled_(true, textElement);
        }
    }

    registerVideoListeners(video) {
        video.addEventListener('enterpictureinpicture', () =>
            this.updateState(video),
        );
        video.addEventListener('leavepictureinpicture', () =>
            this.updateState(video),
        );
    }

    hasDetachedView_(video) {
        return video.ownerDocument.pictureInPictureElement === video;
    }
}