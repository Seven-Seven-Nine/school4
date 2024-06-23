'use strict';

import AudioLogo from "../audio/AudioLogo.js";
import { account, user  } from "../main.js";

export default class HelloUser {
    createScreen() {
        let main = document.getElementById("main");

        main.innerHTML = `
            <div class="helloUser">

                <div class="flexColumnCenter">
                    <p>Добро пожаловать,</p>
                    <p>${user.login}</p>
                </div>

            </div>
        `;
    }

    deleteScreen() {
        let main = document.getElementById('main');

        main.innerHTML = "";
    }

    eventBtn() {
        setTimeout(() => {
            this.Account();  
        }, 1500);
    }

    Account() {
        new AudioLogo().start();
        account.createScreen();
        account.eventBtn();

        this.deleteScreen;
    }
}