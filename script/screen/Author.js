"use strict";

import AudioReturn from "../audio/AudioReturn.js";
import { index  } from "../main.js";

export default class Author {
    createScreen() {
        let main = document.getElementById("main");

        main.innerHTML = `
            <button id="activityBtnReturn" class="btnReturnLeft" type="button">←</button>

            <div class="authorDiv">
                <p>© Умбеталиев Данила Вадимович</p>
                <img src="image/Autor.svg" alt="image">
                <p>Студент ГБПОУ «Катав-Ивановский индустриальный техникум»</p>
            </div>
        `;
    }

    deleteScreen() {
        let main = document.getElementById("main");

        main.innerHTML = "";
    }

    eventBtn() {
        let btnReturn = document.getElementById("activityBtnReturn");

        btnReturn.onclick = this.Return;
    }

    Return() {
        new AudioReturn().start();
        index.createScreen();
        index.eventBtn();

        this.deleteScreen;
    }
}