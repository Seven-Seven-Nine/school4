'use strict';

import { index, user, account } from "../main.js";
import AudioButton from "../audio/AudioButton.js";
import AudioReturn from "../audio/AudioReturn.js";

export default class Chat {
    animationCreateCircles = true;

    createScreen() {
        main.innerHTML = `
            <div class="addNews">
                <button id="addNewsBtnReturn" class="btnReturnLeft" type="button">←</button>
                
                <h1 class="flexColumnCenter">// В разработке</h1>

            </div>
        `;

        this.animation();
    }

    deleteScreen() {
        let main = document.getElementById("main");

        main.innerHTML = "";
    }

    animation() {

    }

    eventBtn() {
        let btnReturn = document.getElementById('addNewsBtnReturn');

        btnReturn.onclick = () => {
            this.Return();
        }
    }

    Return() {
        new AudioReturn().start();
        this.deleteScreen();
        if(user.token === '' || user.token === undefined) {
            index.createScreen();
            index.eventBtn();
        } else {
            account.createScreen();
            account.eventBtn();
        }
    }

}
