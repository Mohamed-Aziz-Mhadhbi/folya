// -*- Mode: c++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*-
//
// Copyright (C) 2017 Opera Software AS.  All rights reserved.
//
// This file is an original work developed by Opera Software AS

'use strict';

class VideoDetachButton extends Button {
    static get ID() {
        return 'video-detach-button';
    }
    static get LABEL() {
        return 'Detach button';
    }
    static get BUTTON_IMAGE_1X() {
        return chrome.extension.getURL('images/icon_popout_1x.png');
    }
    static get BUTTON_IMAGE_2X() {
        return chrome.extension.getURL('images/icon_popout_2x.png');
    }

    get ENABLED_PREF_NAME() {
        return 'video_popout.enabled';
    }

    constructor(container) {
        super(container);
        this.ui_data_ = null;
        opr.detachedVideoPrivate.getUiData(data => this.onGotUiData_(data));
    }

    onGotUiData_(data) {
        this.ui_data_ = data;
        if (this.ui_data_.showOnboardingMessageDetachVideo) {
            this.setText_(this.ui_data_.onboardingTextDetachVideo)
        }
    }

    triggerAction_(video) {
        if (this.hasDetachedView_(video)) {
            opr.detachedVideoPrivate.notifyClosedViaDetachButton();
            video.ownerDocument.exitPictureInPicture();
        } else {
            video.requestPictureInPicture();
        }
    }

    onStateChange_(video) {
        this.setToggled_(this.hasDetachedView_(video));
        this.container_.track_(video);
    }

    onDetachStateChange_(video) {
        if (this.hasDetachedView_(video)) {
            VideoHandler.Events.onDetach.dispatch(video);
            this.setText_(null);
        } else {
            VideoHandler.Events.onRelease.dispatch(video);
        }
        this.onStateChange_(video);
    }

    onVisible() {
        if (this.ui_data_ && this.ui_data_.showOnboardingMessageDetachVideo) {
            opr.detachedVideoPrivate.notifyOnboardingMessageShown(
                opr.detachedVideoPrivate.UiElement.VIDEO_DETCH_BUTTON);
        }
    }

    updateState(video) {
        super.updateState(video);
        this.onStateChange_(video);
    }

    isDisabled() {
        return !this.isPrefEnabled();
    }

    registerVideoListeners(video) {
        video.addEventListener(
            'enterpictureinpicture', () => this.onDetachStateChange_(video));
        video.addEventListener(
            'leavepictureinpicture', () => this.onDetachStateChange_(video));
    }

    isAvailable(video) {
        if (!this.isPrefEnabled()) {
            return false;
        }

        // Always show the detach button if we're already detached.
        if (this.hasDetachedView_(video)) {
            return true;
        }

        return video.ownerDocument.pictureInPictureEnabled &&
            !video.disablePictureInPicture;
    }

    isToggled(video) {
        return this.hasDetachedView_(video);
    }

    hasDetachedView_(video) {
        return video.ownerDocument.pictureInPictureElement === video;
    }
}