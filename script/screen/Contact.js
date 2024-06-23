"use strict";

import { index, user, account  } from "../main.js";
import AudioReturn from "../audio/AudioReturn.js";

export default class Contact {
    createScreen() {
        let main = document.getElementById("main");

        main.innerHTML = `
            <button id="activityBtnReturn" class="btnReturnLeft" type="button">←</button>

            <div class="flexColumnCenter">
                <img class="contactLogo" class="logo" src="image/logo.svg" alt="logo">
            </div> 

            <div class="contactDiv">
                <div>
                    <p>Челябинская область, Катав – Ивановский район, г. Катав – Ивановск, ул. Гагарина, д. 16</p>
                    <hr>
                </div>
                <div>
                    <p>Телефон: 8 (351 47) 2-30-89</p>
                    <hr>
                </div>
                <div>
                    <p>Почта: katavschool4@mail.ru</p>
                    <hr>
                </div>
                <div>
                    <p>Директор: Беловолов Павел Александрович</p>
                    <hr>
                </div>
                <div>
                    <p>График приема граждан по личным вопроса: Каждый вторник с 12  до 14 часов</p>
                    <hr>
                </div>
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