"use strict";

import AudioReturn from "../audio/AudioReturn.js";
import { index, user, account  } from "../main.js";

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
        if(user.token === '' || user.token === undefined) {
            index.createScreen();
            index.eventBtn();
        } else {
            account.createScreen();
            account.eventBtn();
        }

        this.deleteScreen;
    }
}