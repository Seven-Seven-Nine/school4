'use strict';

import { index, activity, contact, author, choiceDocuments, user } from "../main.js";
import AudioButton from "../audio/AudioButton.js";
import AudioReturn from "../audio/AudioReturn.js";

export default class Account {
    animationCreateCircles = true;

    createScreen() {
        let main = document.getElementById("main");
        let roleUser = '';
        if(user.role === 'user') {
            roleUser = 'Пользователь';
        } else if(user.role === 'admin') {
            roleUser = 'Админ';
        }

        main.innerHTML = `
            <div class="account">

                <div class="accountUser">
                    <p class="loginUser">${user.login}</p>
                    <p class="roleUser">${roleUser}</p>
                    <img class="accountImage" src="image/Autor.svg" alt="image">
                    <button id="btnExit" class="btnExit" type="button">Выйти <img class="ico" src="image/ico/ico-exit.png" alt="ico"></button>
                </div>
                <div class="accountMenu">
                    <button id="" type="button">Чат <img class="ico" src="image/ico/ico-chat.png" alt="ico"></button>
                    <button id="" type="button">Новости <img class="ico" src="image/ico/ico-news.png" alt="ico"></button>
                    <button id="" type="button">Деятельность <img class="ico" src="image/ico/ico-school.png" alt="ico"></button>
                    <button id="" type="button">Документы <img class="ico" src="image/ico/ico-documents.png" alt="ico"></button>
                    <button id="" type="button">Контакты <img class="ico" src="image/ico/ico-map.png" alt="ico"></button>
                    <button id="" type="button">Автор <img class="ico" src="image/ico/ico-heart.png" alt="ico"></button>
                </div>

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
        let btnExit = document.getElementById('btnExit');

        btnExit.onclick = () => {
            this.Exit();
        }
    }

    Exit() {
        new AudioReturn().start();
        index.createScreen();
        index.eventBtn();

        user.deleteData();

        this.deleteScreen;
    }

    Activity() {
        new AudioButton().start();
        activity.createScreen();
        activity.eventBtn();

        this.deleteScreen;
    }

    Contact() {
        new AudioButton().start();
        contact.createScreen();
        contact.eventBtn();

        this.deleteScreen;
    }

    Author() {
        new AudioButton().start();
        author.createScreen();
        author.eventBtn();

        this.deleteScreen;
    }

    Documents() {
        new AudioButton().start();
        choiceDocuments.createScreen();
        choiceDocuments.eventBtn();

        this.deleteScreen;
    }
}
