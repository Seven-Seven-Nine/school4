"use strict";

import { index, registration, login, user, helloUser } from "../main.js";
import AudioButton from "../audio/AudioButton.js";
import AudioReturn from "../audio/AudioReturn.js";

export default class Login {
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
                <form id="loginForm">
                    <h2>Вход</h2>
                    <label class="labelError" id="loginLabelError"></label>
                    <input id="loginLogin" name="login" type="text" placeholder="Логин">
                    <input id="loginPassword" name="password" type="password" placeholder="Пароль">
                    <button id="loginBtnLogin" type="button">Войти  <img class="ico" src="image/ico/ico-login.png" alt="ico"></button>
                    <p class="linkText">Забыл пароль?</p>
                    <p id="LoginLinkRegistration" class="linkText">Регистрация</p>
                    <button id="loginBtnReturn" class="btnReturn" type="button">←</button>
                </form>
            </div>
        `;
    }

    deleteScreen() {
        let main = document.getElementById("main");

        main.innerHTML = "";
    }

    eventBtn() {
        let loginBtnLogin = document.getElementById("loginBtnLogin");
        let LoginLinkRegistration = document.getElementById("LoginLinkRegistration");
        let btnReturn = document.getElementById("loginBtnReturn");

        loginBtnLogin.onclick = this.validateForm;;
        LoginLinkRegistration.onclick = this.Registration;
        btnReturn.onclick = this.Return;
    }

    checkToken() {
        if(user.token !== undefined && user.token !== '') {
            this.require();
        }
    }

    Registration() {
        new AudioButton().start();
        registration.createScreen();
        registration.eventBtn();

        this.deleteScreen;
    }

    Return() {
        new AudioReturn().start();
        index.createScreen();
        index.eventBtn();

        this.deleteScreen;
    }

    HelloUser() {
        new AudioButton().start();
        helloUser.createScreen();
        helloUser.eventBtn();

        this.deleteScreen;
    }

    validateForm() {
        new AudioButton().start();
        let loginLogin = document.getElementById("loginLogin");
        let loginPassword = document.getElementById("loginPassword");

        if(loginLogin.value == "") {
            loginLogin.placeholder = "Введите логин!";
            loginLogin.className = "inputError";
        } else {
            loginLogin.placeholder = "";
            loginLogin.className = "";

            if(loginPassword.value == "") {
                loginPassword.placeholder = "Введите пароль!";
                loginPassword.className = "inputError";
            } else {
                loginPassword.placeholder = "";
                loginPassword.className = "";

                login.require();
            }
        }
    }

    async require() {
        let form = document.getElementById("loginForm");

        if(user.token === '' || user.token === undefined) {
            let response = await fetch("api/authorization/", {
                method: "POST",
                body: new FormData(form)
            });
    
            if(response.ok) {
                let json = await response.json();
                if(json.status == 200 && json.body.message == "true login") {
                    let loginLabelError = document.getElementById("loginLabelError");
                    loginLabelError.textContent = "";
                    user.login = json.body.login;
                    user.email = json.body.email;
                    user.password = json.body.password;
                    user.role = json.body.role;
                    user.token = json.body.token;
                    this.HelloUser();
                } else if(json.status == "user false" && json.body.message == "no user data") {
                    let loginLabelError = document.getElementById("loginLabelError");
                    loginLabelError.innerHTML = "Неправильно введён логин или пароль";
                }
            } else {
                console.error("Серверу писец!");
            }
        } else {
            let token = user.token;
            let formData = new FormData();

            formData.append("token", token);

            let response = await fetch("api/authorization/", {
                method: "POST",
                body: formData
            });
    
            if(response.ok) {
                let json = await response.json();
                if(json.status == 200 && json.body.message == "true login") {
                    let loginLabelError = document.getElementById("loginLabelError");
                    loginLabelError.textContent = "";
                    user.role = json.body.role;
                    user.login = json.body.login;
                    user.email = json.body.email;
                    user.password = json.body.password;
                    user.token = json.body.token;
                    this.HelloUser();
                } else if(json.status == "user false" && json.body.message == "no user data") {
                    let loginLabelError = document.getElementById("loginLabelError");
                    loginLabelError.innerHTML = "Неправильно введён логин или пароль";
                }
            } else {
                console.error("Серверу писец!");
            }
        }
    }
}