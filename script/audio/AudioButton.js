'use strict';

export default class AudioButton {
    start() {
        let audioButton = new Audio('../../sound/button.wav');
        audioButton.volume = 0.5;
        audioButton.play();
    }
}