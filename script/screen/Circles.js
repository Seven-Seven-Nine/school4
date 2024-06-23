'use strict';

import { index } from "../main.js";

export default class Circles {
    createCircles() {
        let blockCircles = document.getElementById('blockCircles');

        blockCircles.innerHTML = `
            <img id="Circle1" class="Circle1Return" src="image/Circle1.svg" alt="image">
            <img id="Circle2" class="Circle2Return" src="image/Circle2.svg" alt="image">
        `;

        index.animationCreateCircles = false;
    }

    hideCircles() {
        let circle1 = document.getElementById('Circle1');
        let circle2 = document.getElementById('Circle2');

        circle1.className = 'Circle1Hide';
        circle2.className = 'Circle2Hide';

        index.animationCreateCircles = true;
    }
}