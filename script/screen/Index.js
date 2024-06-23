"use strict";

import { registration, login, activity, contact, author, choiceDocuments, circles } from "../main.js";
import AudioButton from "../audio/AudioButton.js";

export default class Index {
    animationCreateCircles = true;

    createScreen() {
        let main = document.getElementById("main");
        // main.style.height = "100vh";

        main.innerHTML = `
            <div id="indexDivLogo" class="flexColumnCenter">
                <img id="indexLogo" class="logoIndex" src="image/logo.svg" alt="logo">
                <h1>МОУ “ООШ №4 г. Катав-Ивановск”</h1>
            </div> 
            <div class="flexColumnCenter">
                <div id="indexTopMenuBtn" class="indexMenu">
                    <button id="indexBtnRegistration" type="button">Регистрация <img class="ico" src="image/ico/ico-reg.png" alt="ico"></button>
                    <button id="indexBtnActivity" type="button">Деятельность <img class="ico" src="image/ico/ico-school.png" alt="ico"></button>
                    <button id="indexBtnDocuments" type="button">Документы <img class="ico" src="image/ico/ico-documents.png" alt="ico"></button>
                </div>
                <div id="indexBottomMenuBtn" class="indexMenu">
                    <button id="indexBtnLogin" type="button">Войти <img class="ico" src="image/ico/ico-login.png" alt="ico"></button>
                    <button id="indexBtnContacts" type="button">Контакты <img class="ico" src="image/ico/ico-map.png" alt="ico"></button>
                    <button id="indexBtnAuthor" type="button">Автор <img class="ico" src="image/ico/ico-heart.png" alt="ico"></button>
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
        if(this.animationCreateCircles == true) {
            circles.createCircles();
            this.animationCreateCircles = false;
        }

        let divLogo = document.getElementById("indexDivLogo");
        let topMenu = document.getElementById("indexTopMenuBtn");
        let bottomMenu = document.getElementById("indexBottomMenuBtn");

        divLogo.style.animation = "1s appearance normal";
        topMenu.style.animation = "0.5s appearanceBtn normal";
        bottomMenu.style.animation = "1s appearanceBtn normal";
    }

    eventBtn() {
        let indexLogo = document.getElementById("indexLogo");

        let btnRegistration = document.getElementById("indexBtnRegistration");
        let btnActivity = document.getElementById("indexBtnActivity");
        let btnDocuments = document.getElementById("indexBtnDocuments");
        
        let btnLogin = document.getElementById("indexBtnLogin");
        let btnContacts = document.getElementById("indexBtnContacts");
        let btnAuthor = document.getElementById("indexBtnAuthor");

        indexLogo.onclick = this.Logo;

        btnRegistration.onclick = this.Registration;
        btnActivity.onclick = this.Activity;
        btnDocuments.onclick = this.Documents;

        btnLogin.onclick = this.Login;
        btnContacts.onclick = this.Contact;
        btnAuthor.onclick = this.Author;
    }

    Logo() {
        new AudioButton().start();
        location.reload();
    }

    Registration() {
        new AudioButton().start();
        registration.createScreen();
        registration.eventBtn();

        this.deleteScreen;
    }

    Login() {
        new AudioButton().start();
        login.createScreen();
        login.eventBtn();
        login.checkToken();

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
