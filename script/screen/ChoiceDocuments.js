"use strict";

import AudioButton from "../audio/AudioButton.js";
import AudioLogo from "../audio/AudioLogo.js";
import AudioReturn from "../audio/AudioReturn.js";
import { index, enrollment, circles, documents, user, account  } from "../main.js";

export default class ChoiceDocuments {
    createScreen() {
        let main = document.getElementById("main");

        main.innerHTML = `
            <button id="choiceDocumentsBtnReturn" class="btnReturnLeft" type="button">←</button>

            <div class="choiceDocuments">
                <div class="flexColumnCenter">
                    <img id="choiceDocumentsLogo" class="logo" src="image/logo.svg" alt="logo">
                    <h2>Документы МОУ “ООШ №4 г. Катав-Ивановск”</h2>
                </div> 
                <div class="flexRowCenter">
                    <button id="choiceDocumentsBtnEnrollment" class="choiceDocumentsBtn1" type="button">
                        Документы на зачисление <img src="image/Add_Documents.svg" alt="image">
                    </button>
                    <button id="choiceDocumentsBtnDocuments" class="choiceDocumentsBtn2" type="button">
                        Общие документы <img src="image/Documents.svg" alt="image">
                    </button>
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
        circles.hideCircles();
    }

    eventBtn() {
        let logo = document.getElementById("choiceDocumentsLogo");
        let btnReturn = document.getElementById("choiceDocumentsBtnReturn");
        let btnEnrollment = document.getElementById("choiceDocumentsBtnEnrollment");
        let btnDocuments = document.getElementById("choiceDocumentsBtnDocuments");
        
        logo.onclick = this.Logo;
        btnReturn.onclick = this.Return;
        btnEnrollment.onclick = this.Enrollment;
        btnDocuments.onclick = this.Documents;
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

    Logo() {
        new AudioLogo().start();
        if(user.token === '' || user.token === undefined) {
            index.createScreen();
            index.eventBtn();
        } else {
            account.createScreen();
            account.eventBtn();
        }

        this.deleteScreen;
    }

    Enrollment() {
        new AudioButton().start();
        enrollment.createScreen();
        enrollment.eventBtn();

        this.deleteScreen;
    }

    Documents() {
        new AudioButton().start();
        documents.createScreen();
        documents.eventBtn();

        this.deleteScreen;
    }
}