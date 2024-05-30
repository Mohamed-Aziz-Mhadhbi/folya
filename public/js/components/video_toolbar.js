// -*- Mode: c++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*-
//
// Copyright (C) 2017 Opera Software AS.  All rights reserved.
//
// This file is an original work developed by Opera Software AS

'use strict';

const QR_CONTAINER_HEIGHT = 424;
const QR_CONTAINER_WIDTH = 716;

/* eslint-disable */
// clang-format off
const PALETTE_COLORS =
    // 
    // 
    // 
    `
      --opera-video-toolbar-button-color: #5021FF;
      --opera-video-toolbar-compare-button-color: #5021FF;
      --opera-video-toolbar-dialog-shadow-color: rgba(80, 33, 255, 0.48);
      --opera-video-toolbar-dialog-bg-color-dark: rgba(80, 33, 255, 0.12);
      --opera-video-toolbar-dialog-bg-color-light: #5021FF;
      --opera-video-toolbar-dialog-text-color-dark: #5021FF;
      --opera-video-toolbar-dialog-text-color-light: rgba(80, 33, 255, 0.12);
      --opera-video-toolbar-dialog-icon-color-dark: rgba(80, 33, 255, 0.12);
      --opera-video-toolbar-dialog-icon-color-light: rgba(80, 33, 255, 0.12);
      --opera-video-toolbar-dialog-cover-color: rgba(80, 33, 255, 0.12);
      --opera-video-toolbar-dialog-border-color: #5021FF;
      --opera-video-toolbar-gradient-background-color: #5021FF;
      --opera-video-toolbar-rgx-button-overlay-background-color: rgba(103, 103, 103, 0.8);
      --opera-video-toolbar-custom-button-background: radial-gradient(#3B3C3D, #3B3C3D);
      --opera-video-toolbar-custom-button-background-hovered: radial-gradient(closest-side, #666667, #3B3C3D);
      --opera-video-toolbar-custom-button-active-background: radial-gradient(closest-side, #5021FF, #5021FF);
      --opera-video-toolbar-custom-button-active-background-hovered: radial-gradient(closest-side, #7651FF, #5021FF);
    `;
// 
// 
// 
'';
// 
// clang-format on
/* eslint-enable */

class VideoToolbar {
    static get USE_SIMPLIFIED_LAYOUT() {
        return ['tiktok.com'].some(domain => window.location.host.endsWith(domain));
    }
    static get BUTTONS() {
        return [
            VideoDetachButton, SendByQRCodeButton,
            // clang-format off
            // 
            // 
            LucidModeButton,
            // 
            // clang-format on
        ];
    }
    static get VISIBLE_CSS_CLASS() {
        return 'visible';
    }
    static get HIDDEN_CSS_CLASS() {
        return 'hide';
    }
    static get HIDE_TIMEOUT() {
        return 3000;
    }
    static get TIMEOUT_UPDATE() {
        return 100;
    }
    static get MIN_VIDEO_DURATION() {
        return 15;
    }
    static get HOST() {
        return ['div'];
    }
    static get CONTAINER_TOP_OFFSET() {
        return 12;
    }
    static get CONTAINER_WIDTH() {
        return 2 * (Button.WIDTH + Button.MARGIN);
    }
    static get CONTAINER_HEIGHT() {
        return Button.HEIGHT;
    }
    static get CONTAINER() {
        return [
            'div',
            {
                'class': 'container'
            },
            ['div', {
                'class': 'button-container'
            }],
        ]
    }
    static get CLOSE_IMAGE_1X() {
        return chrome.extension.getURL('images/icon_close_1x.png');
    }
    static get CLOSE_IMAGE_2X() {
        return chrome.extension.getURL('images/icon_close_2x.png');
    }

    static get QR_STYLE() {
        return [
            'style',
            {
                'type': 'text/css'
            },
            `
        :host {
          ${PALETTE_COLORS};
          width: ${QR_CONTAINER_WIDTH}px;
          height: ${QR_CONTAINER_HEIGHT}px;
          position: fixed;
          z-index: 9999;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --opera-video-toolbar-dialog-bg-color:
              var(--opera-video-toolbar-dialog-bg-color-dark);
            --opera-video-toolbar-dialog-text-color:
              var(--opera-video-toolbar-dialog-text-color-dark);
            --opera-video-toolbar-dialog-icon-color:
              var(--opera-video-toolbar-dialog-icon-color-dark);
            --opera-video-toolbar-dialog-illustration-color:
              var(--opera-video-toolbar-dialog-text-color-dark);
          }
        }

        @media (prefers-color-scheme: light) {
          :host {
            --opera-video-toolbar-dialog-bg-color:
              var(--opera-video-toolbar-dialog-bg-color-light);
            --opera-video-toolbar-dialog-text-color:
              var(--opera-video-toolbar-dialog-text-color-light);
            --opera-video-toolbar-dialog-icon-color:
              var(--opera-video-toolbar-dialog-icon-color-light);
            --opera-video-toolbar-dialog-illustration-color:
              var(--opera-video-toolbar-dialog-icon-color-light);
          }
        }

       :host(.hidden) {
         display: none !important;
       }

       .qr-cover {
         background: var(--opera-video-toolbar-dialog-cover-color);
         position: absolute:
         width: 100%;
         height: 100%;
       }

       .qr-container {
         --dialog-width: 716px;
         --dialog-height: 424px;
         display: flex;
         flex-direction: row;
         padding: 12px;
         background: var(--opera-video-toolbar-dialog-bg-color);
         width: var(--dialog-width);
         height: var(--dialog-height);
         box-sizing: border-box;
         color: var(--opera-video-toolbar-dialog-text-color);
         position: absolute;
         top: calc(50% - var(--dialog-height)/2);
         left: calc(50% - var(--dialog-width)/2);
         font-family: system-ui;
         font-size: 16px;
         font-style: normal;
         font-weight: 400;
         line-height: 22px;
         letter-spacing: 0em;
         text-align: center;
         border-radius: 4px;
         border: 1px solid var(--opera-video-toolbar-dialog-border-color);
         box-shadow: 0px 4px 40px
                     var(--opera-video-toolbar-dialog-shadow-color);
       }

       #qr-code {
         width: 400px;
         background: white;
         padding: 20px;
         box-sizing: border-box;
         position: relative;
       }

       #qr-description {
         flex: 1 1;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         position: relative;
       }

       #qr-description > #illustration {
         background-color: var(--opera-video-toolbar-dialog-illustration-color);
         -webkit-mask-image: url(${
          chrome.runtime.getURL('images/send_to_phone.svg')});
         height: 122px;
         width: 219px;
         margin-bottom: 32px;
       }

       #close-btn {
         width: 20px;
         height: 20px;
         position: absolute;
         background: var(--opera-video-toolbar-dialog-icon-color);
         top: 12px;
         right: 12px;
         cursor: pointer;
         -webkit-mask-position: center;
         -webkit-mask-repeat: no-repeat;
         -webkit-mask-image: url(${chrome.runtime.getURL('images/close.svg')});
       }

       #feedback-btn {
         position: absolute;
         background: var(--opera-video-toolbar-button-color);
         right: 48px;
         top: 13px;
         cursor: pointer;
         height: 16px;
         font-weight: 700;
         font-size: 13px;
         line-height: 16px;
         text-align: right;
         padding: 1px 4px;
         border-radius: 2px;
       }

       #qr-description-text {
         height: 44px;
         width: 215px;
       }

       #qr-phone-icon {
         height: 70px;
         width: 70px;
         top: 165px;
         left: 165px;
         position: absolute;
         background: white;
         border: 6px solid #000000;
         border-radius: 36px;
         box-sizing: border-box;
       }

       #qr-phone-icon::after {
         display: block;
         content: '';
         position: absolute;
         height: 58px;
         width: 58px;
         position: absolute;
         background-color: var(--opera-video-toolbar-button-color);
         -webkit-mask-image: url(${chrome.runtime.getURL('images/logo.svg')});
         -webkit-mask-position: center;
         -webkit-mask-repeat: no-repeat;
         -webkit-mask-size: 44px 44px;
       }

       @keyframes scan-line-animation {
         0%   {top:0px;}
         50%  {top: calc(100% - 2px);}
         100%   {top:0px;}
       }

       #scan-line {
         left: 0px;
         position: absolute;
         height: 2px;
         width: 400px;
         box-shadow: 0px 0px 8px var(--opera-video-toolbar-button-color);
         box-sizing: content-box;
         background: var(--opera-video-toolbar-button-color);
         animation-name: scan-line-animation;
         animation-duration: 2s;
         animation-iteration-count: infinite;
         z-index: 1;
         animation-timing-function: cubic-bezier(.75,0,.25,1);
       }
      `,
        ];
    }

    static MAKE_QR_CONTAINER(strings) {
        return [
            'div',
            {
                'class': 'qr-cover'
            },
            [
                'div',
                {
                    'class': 'qr-container'
                },
                [
                    'div',
                    {
                        'id': 'qr-code'
                    },
                    [
                        'div',
                        {
                            'id': 'qr-phone-icon'
                        },
                    ],
                    ['div', {
                        'id': 'qr-code-internal'
                    }],
                    [
                        'div',
                        {
                            'id': 'scan-line',
                        },
                    ],
                ],
                [
                    'div',
                    {
                        'id': 'qr-description'
                    },
                    [
                        'div',
                        {
                            'id': 'illustration',
                        },
                    ],
                    [
                        'div',
                        {
                            'id': 'qr-description-text'
                        },
                        strings['sendToPhoneDescription'],
                    ],
                ],
                [
                    'div',
                    {
                        'id': 'feedback-btn',
                    },
                    strings['sendToPhoneFeedback'],
                ],
                [
                    'div',
                    {
                        'id': 'close-btn',
                    },
                ],
            ],
        ];
    }

    static get STYLE() {
        return [
            'style',
            {
                'type': 'text/css'
            },
            `
        :host {
          --opera-video-toolbar-button-color: #0199FF;
          --opera-video-toolbar-custom-button-background:
            linear-gradient(rgba(103,105,105,0.5), rgba(68,70,71,0.5));
          --opera-video-toolbar-custom-button-background-hovered:
            linear-gradient(rgba(103,105,105,0.75), rgba(68,70,71,0.75));
          ${PALETTE_COLORS};
          font-family: system-ui;
          min-height: ${this.CONTAINER_HEIGHT + this.CONTAINER_TOP_OFFSET}px;
          overflow: visible;
          pointer-events: none;
          position: ${this.USE_SIMPLIFIED_LAYOUT ? 'absolute' : 'fixed'};
          top: 0;
          width: ${this.CONTAINER_WIDTH}px;
          z-index: 2147483647;
        }

        .container {
          clip: rect(0px, 10000px, ${
          this.CONTAINER_HEIGHT + this.CONTAINER_TOP_OFFSET + 9999}px, 0px);
          position: absolute;
          height: ${this.CONTAINER_HEIGHT + this.CONTAINER_TOP_OFFSET}px;
        }

        .button-container {
          box-sizing: border-box;
          display: flex;
          justify-content: space-around;
          height: ${this.CONTAINER_HEIGHT}px;
          pointer-events: none;
          position: absolute;
          text-align: center;
          top: -${this.CONTAINER_HEIGHT}px;
          transition: top .3s;
          font-family: system-ui;
      }

      .custom-button-wrapper {
        box-sizing: border-box;
        overflow: visible;
        pointer-events: none;
        position: relative;
      }

      .custom-button {
        background: var(--opera-video-toolbar-custom-button-background);
        border-radius: ${Button.HEIGHT / 2}px;
        font-size: 0px;
        line-height: ${Button.HEIGHT}px;
        pointer-events: initial;
        white-space: nowrap;
        margin: 0 ${Button.MARGIN}px;
        height: ${Button.HEIGHT}px;
      }

      .custom-button:hover {
        background: var(--opera-video-toolbar-custom-button-background-hovered);
      }

      .custom-button[active] {
        background: var(--opera-video-toolbar-button-color) !important;
      }

      .custom-button-contents {
        align-items: center;
        display: inline-flex;
        height: ${Button.HEIGHT}px;
        justify-content: center;
        pointer-events: none;
        vertical-align: middle;
      }

      .custom-button-image {
        width: ${Button.WIDTH}px;
      }

      .custom-button-image .image {
        background-repeat: no-repeat;
        background-position: center left;
        height: 16px;
        width: 20px;
      }

      .custom-button-text {
        color: white;
        display: inline-block;
        font-size: 11px;
        font-weight: 400;
        line-height: 30px;
        max-width: 0px;
        opacity: 0;
        overflow: hidden;
        padding: 0;
        text-align: start;
        transition: all .2s;
        user-select: none;
      }

      .custom-button-popout {
        padding: 10px;
        background: white;
        height: fit-content;
        width: fit-content;
      }

      .custom-button-text[enabled] {
        max-width: 999px;
        opacity: 1;
        padding: 0 10px 0 0;
        transition: all .2s;
      }

      .custom-button[active][hovered] .custom-button-image .image:not(.animating) {
        background-image: -webkit-image-set(
            url(${this.CLOSE_IMAGE_1X}) 1x,
            url(${this.CLOSE_IMAGE_2X}) 2x
        ) !important;
      }

      .custom-button[inactive] {
        background: linear-gradient(rgba(103,105,105,0.25),
                                    rgba(68,70,71,0.25)) !important;
      }

      .custom-button[inactive] .custom-button-contents {
        opacity: 0.25;
      }

      .custom-button[disabled] {
        display: none;
      }

      .button-container.${this.VISIBLE_CSS_CLASS} {
        top: ${this.CONTAINER_TOP_OFFSET}px;
      }

      .hidden {
        display: none;
      }

      .button-container.${this.HIDDEN_CSS_CLASS} {
        visibility: hidden;
      }
    `,
        ];
    }

    static get COVERPOINTS() {
        return [
            [0, 0],
            [0, this.CONTAINER_HEIGHT / 2],
            [0, this.CONTAINER_HEIGHT],
            [this.CONTAINER_WIDTH / 2, 0],
            [this.CONTAINER_WIDTH / 2, this.CONTAINER_HEIGHT / 2],
            [this.CONTAINER_WIDTH / 2, this.CONTAINER_HEIGHT],
            [this.CONTAINER_WIDTH, 0],
            [this.CONTAINER_WIDTH, this.CONTAINER_HEIGHT / 2],
            [this.CONTAINER_WIDTH, this.CONTAINER_HEIGHT],
        ]
    }

    static get QR_HOST() {
        return ['div', {
            'class': 'hidden'
        }];
    }

    constructor() {
        this.strings_promise = new Promise(resolve => {
            chrome.operaResourcesPrivate.getStrings(
                chrome.operaResourcesPrivate.Component.VIDEOPOPOUT, resolve);
        });
        this.button_container_ = null;
        this.hideTimestamp_ = 0;
        this.host_ = null;
        this.mouseMoveCallbackId_ = null;
        this.seenVideoElements_ = new WeakSet();
        this.root_ = null;
        this.rootHovered_ = false;
        this.video_ = null;

        this.buttons_ = [];
        this.constructor.BUTTONS.forEach(
            Item => this.buttons_.push(new Item(this, this.strings_promise)));

        opr.mediaPlayerPrivate.onVideoElementInserted.addListener(
            () => this.searchForVideoElements_());
        VideoHandler.Events.onVideoAreaOut.addListener(
            v => this.onVideoAreaOut_(v));
        VideoHandler.Events.onVideoAreaOver.addListener(
            v => this.onVideoAreaOver_(v));
        // 
        chrome.settingsPrivate.onPrefsChanged.addListener(
            prefs => this.onPrefsChanged(prefs));
    }

    onPrefsChanged(prefs) {
        for (const button of this.buttons_) {
            button.onPrefsChanged(prefs);
        }
    }

    video() {
        return this.video_;
    }

    isTracking() {
        return Boolean(this.video_);
    }

    isTrackingVideo_(video) {
        return this.isTracking() && this.video_ === video;
    }

    setButtonsVisibility_(isVisible) {
        this.buttons_.forEach(b => {
            if (!b.isDisabled()) {
                if (isVisible) {
                    b.onVisible();
                } else {
                    b.onHidden();
                }
            }
        });

        this.button_container_.classList.toggle(
            this.constructor.VISIBLE_CSS_CLASS, isVisible);
    }

    setHideTimeout_(timeout) {
        this.hideTimestamp_ = Date.now() + timeout;
    }

    isVideoTooSmall_(video) {
        if (!video.videoHeight || !video.videoWidth) {
            return true;
        }
        const player = video[VideoHandler.PLAYER_ELEMENT] || video;
        if (player.offsetHeight < Button.HEIGHT * 3 ||
            player.offsetWidth < Button.WIDTH * 3) {
            return true;
        }

        return false;
    }

    canTrack_(video) {
        return !(
            document.webkitIsFullScreen || document.hidden ||
            !this.buttons_.some(b => b.isAvailable(video)) ||
            !video.parentElement || this.isVideoTooSmall_(video) ||
            video.duration < this.constructor.MIN_VIDEO_DURATION);
    }

    onCanTrackChange_() {
        if (this.isTracking() && !this.canTrack_(this.video_)) {
            this.button_container_.classList.add(this.constructor.HIDDEN_CSS_CLASS);
            this.untrack_(this.video_);
        }
    }

    onVideoAreaOver_(video) {
        if (this.mouseMoveCallbackId_) {
            return;
        }

        const id = this.mouseMoveCallbackId_ = this.runInIdlePeriod_(() => {
            if (this.mouseMoveCallbackId_ !== id) {
                return;
            }
            this.mouseMoveCallbackId_ = null;
            if (this.isTrackingVideo_(video)) {
                this.setHideTimeout_(this.constructor.HIDE_TIMEOUT);
            } else {
                this.track_(video);
            }
        }, 500, 0);
    }

    onVideoAreaOut_(video) {
        this.mouseMoveCallbackId_ = null;
        if (this.isTrackingVideo_(video)) {
            this.setHideTimeout_(0);
        }
    }

    onVideoSourceChange_(video) {
        this.untrack_(video);
    }

    updateColor(cssVar, paletteColor, alpha = 1) {
        opr.palette.getColorHSL(paletteColor, ({
            h,
            s,
            l
        }) => {
            const cssVal = `hsla(${h}, ${s * 100}%, ${l * 100}%, ${alpha})`;
            this.applyColor(cssVar, cssVal);
        });
    }

    updateNamedColor(cssVar, color, alpha = 1) {
        opr.palette.getResourceColor(color, ({
            h,
            s,
            l
        }) => {
            const cssVal = `hsla(${h}, ${s * 100}%, ${l * 100}%, ${alpha})`;
            this.applyColor(cssVar, cssVal);
        });
    }

    applyColor(cssVar, cssVal) {
        if (this.host_) {
            this.host_.style.setProperty(cssVar, cssVal);
        }
        if (this.qr_host_) {
            this.qr_host_.style.setProperty(cssVar, cssVal);
        }
    }

    updateColors() {
        // 
        this.updateColor('--opera-video-toolbar-button-color', 'gx_accent');
        this.updateColor(
            '--opera-video-toolbar-dialog-shadow-color', 'gx_accent', 0.48);
        this.updateColor('--opera-video-toolbar-dialog-bg-color-dark', 'gx_no_12');
        this.updateColor(
            '--opera-video-toolbar-dialog-bg-color-light', 'gx_no_100');
        this.updateColor(
            '--opera-video-toolbar-dialog-text-color-dark', 'gx_no_100');
        this.updateColor(
            '--opera-video-toolbar-dialog-text-color-light', 'gx_no_00');
        this.updateColor(
            '--opera-video-toolbar-dialog-icon-color-dark', 'gx_no_77');
        this.updateColor(
            '--opera-video-toolbar-dialog-icon-color-light', 'gx_no_12');
        this.updateColor('--opera-video-toolbar-dialog-border-color', 'gx_accent');
        this.updateColor(
            '--opera-video-toolbar-dialog-cover-color', 'gx_no_04', 0.6);
        // 
        this.updateNamedColor(
            '--opera-video-toolbar-button-color-contrasting',
            'COLOR_GX_ACCENT_CONTRASTING');
    }

    createButtonsConatinerElement_() {
        this.host_ = BragiElementFactory.bragiToElement(this.constructor.HOST);
        this.host_.id = 'detach-button-host';
        this.root_ = this.host_.attachShadow({
            mode: 'open'
        });
        this.root_.appendChild(
            BragiElementFactory.bragiToElement(this.constructor.STYLE));
        this.root_.appendChild(BragiElementFactory.bragiToElement(Hint.STYLE));

        let container =
            BragiElementFactory.bragiToElement(this.constructor.CONTAINER);
        this.button_container_ = container.firstChild;
        this.buttons_.forEach(b => {
            const button = b.button();

            this.root_.appendChild(b.constructor.STYLE);
            this.button_container_.appendChild(button);

            // 
        });
        this.button_container_.addEventListener(
            'mouseenter', () => this.rootHovered_ = true);
        this.button_container_.addEventListener(
            'mouseleave', () => this.rootHovered_ = false);
        this.root_.appendChild(container);

        document.addEventListener(
            'webkitfullscreenchange', () => this.onCanTrackChange_());
        document.addEventListener(
            'visibilitychange', () => this.onCanTrackChange_());
    }

    createQRContainerElement_(strings) {
        this.qr_host_ =
            BragiElementFactory.bragiToElement(this.constructor.QR_HOST);
        this.qr_host_.id = 'qr-host';
        this.qr_root_ = this.qr_host_.attachShadow({
            mode: 'open'
        });
        this.qr_root_.appendChild(
            BragiElementFactory.bragiToElement(this.constructor.QR_STYLE));
        let container = BragiElementFactory.bragiToElement(
            this.constructor.MAKE_QR_CONTAINER(strings));
        this.qr_root_.appendChild(container);

        this.qr_root_.querySelector('#close-btn').addEventListener('click', () => {
            this.qr_host_.classList.add('hidden');
        });
        this.qr_root_.querySelector('#feedback-btn')
            .addEventListener('click', evt => {
                const anchor = evt.target.getClientRects()[0];
                return opr.feedbackPopupPrivate.showPopupWithDesc({
                        topic: 'video-pickup',
                        arrow: opr.feedbackPopupPrivate.Arrow.TOP_RIGHT,
                        frameSize: {
                            height: parseInt(window.innerHeight),
                            width: parseInt(window.innerWidth),
                        },
                        anchorBounds: {
                            x: parseInt(anchor.x),
                            y: parseInt(anchor.y),
                            width: parseInt(anchor.width),
                            height: parseInt(anchor.height),
                        },
                        anchorId: opr.feedbackPopupPrivate.AnchorId.PAGE,
                        hideLearnMore: true,
                    },
                    () => {});
            });

        const qrCover = this.qr_root_.querySelector('.qr-cover');
        qrCover.addEventListener('click', evt => {
            if (evt.target === qrCover) {
                this.qr_host_.classList.add('hidden');
            }
        });
        // 
    }

    registerVideoListeners_(video) {
        video.addEventListener('emptied', () => this.onVideoSourceChange_(video));
        video.addEventListener(
            'mousemove', () => VideoHandler.Events.onVideoAreaOver.dispatch(video));
        video.addEventListener('playing', () => this.track_(video));
    }

    runInIdlePeriod_(callback, timeout, delay) {
        return window.setTimeout(
            () => window.requestIdleCallback(callback, {
                'timeout': timeout
            }),
            delay);
    }

    searchForVideoElements_() {
        let videos = Array.from(document.getElementsByTagName('video'));
        videos = videos.filter(video => !this.seenVideoElements_.has(video));
        if (videos.length && !this.button_container_) {
            this.createButtonsConatinerElement_();
        }

        if (videos.length && !this.qr_container_) {
            this.strings_promise.then(strings => {
                // re-check qr_container_ in case we call searchForVideoElements_ twice.
                if (!this.qr_container_ && strings['videoToPhoneEnabled']) {
                    this.createQRContainerElement_(strings);
                }
            });
        }

        let videoToTrack = null;
        videos.forEach(video => {
            this.seenVideoElements_.add(video);
            this.registerVideoListeners_(video);
            this.buttons_.forEach(b => b.registerVideoListeners(video))
            VideoHandler.Events.onCreate.dispatch(video);
            if (!video.paused) {
                videoToTrack = video;
            }
        });

        if (videoToTrack) {
            this.track_(videoToTrack);
        }
    }

    show_() {
        this.setHideTimeout_(this.constructor.HIDE_TIMEOUT);
        if (!this.host_.parentElement) {
            document.documentElement.appendChild(this.host_);
            // make sure that the appear effect will be animated.
            this.runInIdlePeriod_(
                () => this.setButtonsVisibility_(true), 100,
                this.constructor.TIMEOUT_UPDATE / 2);
        } else {
            this.setButtonsVisibility_(true);
        }

        if (this.qr_host_ && !this.qr_host_.parentElement) {
            document.documentElement.appendChild(this.qr_host_);
        }

        this.updatePosition_(this.video_);
    }

    track_(video) {
        if (this.isTrackingVideo_(video)) {
            if (this.canTrack_(video)) {
                this.setHideTimeout_(this.constructor.HIDE_TIMEOUT);
            } else {
                this.untrack_(this.video_);
            }
        } else {
            this.untrack_(this.video_);
            if (this.canTrack_(video)) {
                this.video_ = video;
                this.buttons_.forEach(b => b.updateState(this.video_));
                this.show_();
            }
        }
    }

    untrack_(video) {
        if (!this.isTrackingVideo_(video)) {
            return;
        }

        this.setButtonsVisibility_(false);
        this.video_ = null;
        if (this.hasVisibleHint_) {
            this.hint_.hide();
        }
    }

    showQRCode(video) {
        const qr_code = this.qr_root_.querySelector('#qr-code-internal');
        qr_code.innerHTML = '';

        const url = VideoHandler.getCurrentURL(video);
        new QRCode(qr_code, {
            text: `https://vtp.operagx.gg/?url=${encodeURIComponent(url)}`,
            width: 360,
            height: 360,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H,
        });
        this.qr_host_.classList.toggle('hidden', false);
        // Clear the title set by QR code renderer
        qr_code.title = '';
        this.setButtonsVisibility_(false);
        video.pause();
        opr.statsPrivate.recordSessionEvent(
            'feature_events.event_video_to_phone_popout',
            JSON.stringify({
                action: 'SendByQRCode'
            }),
            opr.statsPrivate.Priority.NORMAL);
    }

    updatePosition_(video) {
        if (!this.isTrackingVideo_(video)) {
            return;
        }

        if (Date.now() > this.hideTimestamp_ && !this.rootHovered_ &&
            !this.hasVisibleHint_ && !this.buttons_.some(b => b.isToggled(video))) {
            this.untrack_(video);
            return;
        }

        let element = video[VideoHandler.PLAYER_ELEMENT] || video;
        let elementRect = element.getBoundingClientRect();
        const videoRect = elementRect;
        let top = elementRect.top;
        let left = elementRect.left;
        let right = elementRect.right;
        let isInsideScrolledElement = false;
        while (element.parentElement) {
            element = element.parentElement;
            const styles = window.getComputedStyle(element);
            if (styles.overflow === 'hidden') {
                elementRect = element.getBoundingClientRect();
                top = Math.max(elementRect.top, top);
                left = Math.max(elementRect.left, left);
                right = Math.min(elementRect.right, right);
            } else if (element.scrollTop || element.scrollLeft) {
                isInsideScrolledElement = true;
            }

            if (styles.position === 'fixed') {
                break;
            }
        }

        let buttons_width = 0;
        let i = 0;
        for (; i < this.button_container_.children.length; i++) {
            if (!this.button_container_.children[i].firstChild.hasAttribute(
                    'disabled')) {
                buttons_width += this.button_container_.children[i].clientWidth;
            }
        }

        if (this.constructor.USE_SIMPLIFIED_LAYOUT) {
            this.host_.style.top = `${videoRect.top + window.scrollY}px`;
            this.host_.style.left = `${
          (videoRect.left + videoRect.right - buttons_width) / 2 +
          window.scrollX}px`;
        } else {
            const pos = left + right;
            left = pos > 0 ? (pos - buttons_width) / 2 : -buttons_width;
            this.host_.style.top = `${top}px`;
            this.host_.style.left = `${left}px`;
        }

        let isCovered = false;
        if (isInsideScrolledElement) {
            isCovered = this.constructor.COVERPOINTS.some(point => {
                let elements =
                    document.elementsFromPoint(left + point[0], top + point[1]);
                elements = elements.filter(element => element !== this.host_);
                for (let element of elements) {
                    if (element === this.video_) {
                        break;
                    } else {
                        if (window.getComputedStyle(element).position === 'fixed') {
                            return true;
                        }
                    }
                }

                return false;
            });
        }
        this.button_container_.classList.toggle(
            this.constructor.HIDDEN_CSS_CLASS, isCovered);

        this.runInIdlePeriod_(
            () => this.updatePosition_(video), 100,
            this.constructor.TIMEOUT_UPDATE);
    }

    showHint(target, data) {
        let targetRect = target.getBoundingClientRect();
        let rootRect = this.host_.getBoundingClientRect();
        this.hint_ = new Hint(this.root_, data);
        this.hint_.show(
            targetRect.right - rootRect.left,
            (targetRect.top - rootRect.top) + targetRect.height / 2);
    }

    get hasVisibleHint_() {
        return this.hint_ && this.hint_.isVisible;
    }
}

new VideoToolbar();