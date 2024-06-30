'use strict';

import { index, activity, contact, author, choiceDocuments, user, addNews, news, circles, chat, adminChat } from "../main.js";
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

        if(user.role === 'admin') {
            this.adminMenu(main, roleUser);    
        } else {
            this.userMenu(main, roleUser);
        }

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

        let accountUserData = document.getElementById('accountUserData');
        let accountBtn = document.getElementById('accountBtn');

        accountUserData.style.animation = '0.7s appearance normal';
        accountBtn.style.animation = '0.5s appearanceBtn normal';
    }

    eventBtn() {
        let btnExit = document.getElementById('accountBtnExit');
        let btnAdminChat = document.getElementById('accountAdminBtnChats');
        let BtnChat = document.getElementById('accountBtnChat');
        let btnAddNews = document.getElementById('accountAdminBtnAddNews');
        let BtnNews = document.getElementById('accountBtnNews');
        let btnActivity = document.getElementById('accountBtnActivity');
        let BtnChoiceDocuments = document.getElementById('accountBtnChoiceDocuments');
        let BtnContact = document.getElementById('accountBtnContact');
        let BtnAuthor = document.getElementById('accountBtnAuthor');

        btnExit.onclick = () => {
            this.Exit();
        }

        if(btnAdminChat !== null) {
            btnAdminChat.onclick = () => {
                this.AdminChat();
            }
        }

        BtnChat.onclick = () => {
            this.Chat();
        }

        BtnNews.onclick = () => {
            this.News();
        }

        if(btnAddNews !== null) {
            btnAddNews.onclick = () => {
                this.AddNews();
            }
        }

        btnActivity.onclick = () => {
            this.Activity();
        }

        BtnChoiceDocuments.onclick = () => {
            this.Documents();
        }

        BtnContact.onclick = () => {
            this.Contact();
        }

        BtnAuthor.onclick = () => {
            this.Author();
        }
    }

    adminMenu(main, roleUser) {
        main.innerHTML = `
            <div class="account">

                <div id="accountUserData" class="accountUser">
                    <p class="loginUser">${user.login}</p>
                    <p class="roleUser">${roleUser}</p>
                    <img class="accountImage" src="image/Autor.svg" alt="image">
                    <button id="accountBtnExit" class="btnExit" type="button">Выйти <img class="ico" src="image/ico/ico-exit.png" alt="ico"></button>
                </div>
                <div id="accountBtn" class="accountMenu">
                    <button id="accountAdminBtnChats" type="button">Чаты <img class="ico" src="image/ico/ico-admin-chats.png" alt="ico"></button>
                    <button id="accountAdminBtnAddNews" type="button">Добавить новость <img class="ico" src="image/ico/ico-add-news.png" alt="ico"></button>
                    <button id="accountBtnChat" type="button">Чат <img class="ico" src="image/ico/ico-chat.png" alt="ico"></button>
                    <button id="accountBtnNews" type="button">Новости <img class="ico" src="image/ico/ico-news.png" alt="ico"></button>
                    <button id="accountBtnActivity" type="button">Деятельность <img class="ico" src="image/ico/ico-school.png" alt="ico"></button>
                    <button id="accountBtnChoiceDocuments" type="button">Документы <img class="ico" src="image/ico/ico-documents.png" alt="ico"></button>
                    <button id="accountBtnContact" type="button">Контакты <img class="ico" src="image/ico/ico-map.png" alt="ico"></button>
                    <button id="accountBtnAuthor" type="button">Автор <img class="ico" src="image/ico/ico-heart.png" alt="ico"></button>
                </div>

            </div>
        `;
    }

    userMenu(main, roleUser) {
        main.innerHTML = `
            <div class="account">

                <div id="accountUserData" class="accountUser">
                    <p class="loginUser">${user.login}</p>
                    <p class="roleUser">${roleUser}</p>
                    <img class="accountImage" src="image/Autor.svg" alt="image">
                    <button id="accountBtnExit" class="btnExit" type="button">Выйти <img class="ico" src="image/ico/ico-exit.png" alt="ico"></button>
                </div>
                <div id="accountBtn" class="accountMenu">
                    <button id="accountBtnChat" type="button">Чат <img class="ico" src="image/ico/ico-chat.png" alt="ico"></button>
                    <button id="accountBtnNews" type="button">Новости <img class="ico" src="image/ico/ico-news.png" alt="ico"></button>
                    <button id="accountBtnActivity" type="button">Деятельность <img class="ico" src="image/ico/ico-school.png" alt="ico"></button>
                    <button id="accountBtnChoiceDocuments" type="button">Документы <img class="ico" src="image/ico/ico-documents.png" alt="ico"></button>
                    <button id="accountBtnContact" type="button">Контакты <img class="ico" src="image/ico/ico-map.png" alt="ico"></button>
                    <button id="accountBtnAuthor" type="button">Автор <img class="ico" src="image/ico/ico-heart.png" alt="ico"></button>
                </div>

            </div>
        `;
    }

    Exit() {
        new AudioReturn().start();
        this.deleteScreen();
        index.createScreen();
        index.eventBtn();
        user.deleteData();
    }

    AdminChat() {
        new AudioButton().start();
        this.deleteScreen();
        adminChat.createScreen();
        adminChat.eventBtn();
    }

    Chat() {
        new AudioButton().start();
        this.deleteScreen();
        chat.createScreen();
        chat.eventBtn();
    }

    AddNews() {
        new AudioButton().start();
        this.deleteScreen();
        addNews.createScreen();
        addNews.eventBtn();
    }
    
    News() {
        new AudioButton().start();
        this.deleteScreen();
        news.createScreen();
        news.eventBtn();
    }

    Activity() {
        new AudioButton().start();
        this.deleteScreen();
        activity.createScreen();
        activity.eventBtn();
    }

    Contact() {
        new AudioButton().start();
        this.deleteScreen();
        contact.createScreen();
        contact.eventBtn();
    }

    Author() {
        new AudioButton().start();
        this.deleteScreen();
        author.createScreen();
        author.eventBtn();
    }

    Documents() {
        new AudioButton().start();
        this.deleteScreen();
        choiceDocuments.createScreen();
        choiceDocuments.eventBtn();
    }
}
