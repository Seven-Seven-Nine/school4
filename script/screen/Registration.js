"use strict";

import { index, login, registration, user, helloUser } from "../main.js";
import AudioButton from "../audio/AudioButton.js";
import AudioReturn from "../audio/AudioReturn.js";

export default class Registration {
    createScreen() {
        let main = document.getElementById("main");

        main.innerHTML = `
            <div class="toys">
                <img class="Ruler1" src="image/Ruler1.svg" alt="image">
                <img class="Ruler2" src="image/Ruler1.svg" alt="image">
                <img class="pencil" src="image/pencil.svg" alt="image">
                <img class="Scissors" src="image/Scissors1.svg" alt="image">
            </div>
            <div class="flexColumnCenter">
                <form id="registrationForm">
                    <h2>Регистрация</h2>
                    <input id="registrationLogin"  name="login" type="text" placeholder="*Логин">
                    <input id="registrationEmail" name="email" type="email" placeholder="*Почта">
                    <input id="registrationPassword" name="password" type="password" placeholder="*Пароль">
                    <input id="registrationPasswordRepeat" type="password" placeholder="*Повторите пароль">
                    <button id="registrationBtnRegistration" type="button">Зарегистрироваться <img class="ico" src="image/ico/ico-chain.png" alt="ico"></button>
                    <p class="linkText" id="registrationLinkLogin">Войти в систему</p>
                    <button id="registrationBtnReturn" class="btnReturn" type="button">←</button>
                </form>
            </div>
        `;
    }

    deleteScreen() {
        let main = document.getElementById("main");

        main.innerHTML = "";
    }

    eventBtn() {
        let btnRegistration = document.getElementById("registrationBtnRegistration");
        let LinkLogin = document.getElementById("registrationLinkLogin");
        let btnReturn = document.getElementById("registrationBtnReturn");

        btnRegistration.onclick = this.validateForm;
        LinkLogin.onclick = this.btnLogin;
        btnReturn.onclick = this.btnReturn;
    }

    btnLogin() {
        new AudioButton().start();
        login.createScreen();
        login.eventBtn();

        this.deleteScreen;
    }

    HelloUser() {
        new AudioButton().start();
        helloUser.createScreen();
        helloUser.eventBtn();

        this.deleteScreen;
    }

    btnReturn() {
        new AudioReturn().start();
        index.createScreen();
        index.eventBtn();

        this.deleteScreen;
    }

    validateForm() {
        new AudioButton().start();
        let registrationLogin = document.getElementById("registrationLogin");
        let registrationEmail = document.getElementById("registrationEmail");
        let registrationPassword = document.getElementById("registrationPassword");
        let registrationPasswordRepeat = document.getElementById("registrationPasswordRepeat");

        if(registrationLogin.value == "") {
            registrationLogin.placeholder = "Поле логин обязательное!";
            registrationLogin.className = "inputError";
        } else {
            registrationLogin.placeholder = ""
            registrationLogin.className = "";

            if(registrationEmail.value == "") {
                registrationEmail.placeholder = "Поле почта обязательное!";
                registrationEmail.className = "inputError";
            } else {
                registrationEmail.placeholder = "";
                registrationEmail.className = "";

                if(registrationPassword.value == "") {
                    registrationPassword.placeholder = "Поле пароля обязательное!";
                    registrationPassword.className = "inputError";
                } else {
                    registrationPassword.placeholder = "";
                    registrationPassword.className = "";

                    if(registrationPasswordRepeat.value == "") {
                        registrationPasswordRepeat.placeholder = "Поле повторения пароля обязательное!";
                        registrationPasswordRepeat.className = "inputError";
                    } else {
                        if(registrationPasswordRepeat.value != registrationPassword.value) {
                            registrationPasswordRepeat.value = "";
                            registrationPasswordRepeat.placeholder = "Пароли не совпадают!";
                            registrationPasswordRepeat.className = "inputError";
                        } else {
                            registrationPasswordRepeat.placeholder = "";
                            registrationPasswordRepeat.className = "";
                            
                            registration.require();
                        }
                    }
                }
            }
        }
    }

    async require() {
        let form = document.getElementById("registrationForm");

        let response = await fetch("api/registration/",{
            method: "post",
            body: new FormData(form),
        });

        if(response.ok) {
            let json = await response.json();
            if(json.status == "error") {
                console.error("Данные не отправлены на сервер.");
            } else if(json.status == 200 && json.body.message == "user add in db") {
                user.login = json.body.login;
                user.password = json.body.password;
                user.email = json.body.email;
                user.role = json.body.role;
                user.token = json.body.token;
                registration.HelloUser();
            } else if(json.status == "user false") {
                alert("Такой пользователь уже существует!");
            }
        } else {
            console.error("Серверу писец!");
        }
    }
}