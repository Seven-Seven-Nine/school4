'use strict';

export default class AudioLogo {
    start() {
        let audioLogo = new Audio('../../sound/logo.wav');
        audioLogo.volume = 0.3;
        audioLogo.play();
    }
}