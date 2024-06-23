'use strict';

export default class AudioReturn {
    start() {
        let audioButton = new Audio('../../sound/return-button.wav');
        audioButton.volume = 0.5;
        audioButton.play();
    }
}