'use strict';

import AudioLogo from "../audio/AudioLogo.js";
import AudioReturn from "../audio/AudioReturn.js";
import { index, choiceDocuments  } from "../main.js";

export default class Enrollment {
    createScreen() {
        let main = document.getElementById("main");

        main.innerHTML = `
            <button id="enrollmentBtnReturn" class="btnReturnLeft" type="button">←</button>

            <div class="enrollmentDocuments">

                <div class="flexColumnCenter">
                    <img id="enrollmentDocumentsLogo" class="logo" src="image/logo.svg" alt="logo">
                </div> 

                <div class="flexColumnCenter">
                    <p class="text">На сайте <a href="http://минобрнауки.рф/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/6147">минобрнауки.рф</a> размещена Памятка Минобрнауки РФ для родителей первоклассников.</p>
                    
                    <div id="entrolmentDeclaration" class="enrollmentDeclaration">
                        <div>
                            <img src="image/ico/warning.png" alt="icon">
                        </div>
                        <div>
                            <p>Подать заявление в электронном виде могут только пользователи, зарегистрированные на портале госуслуг.</p>
                            <p><a href="https://r1.nubex.ru/s139788-bcb/f669_e2/kak_podat_dokumenty_v_1_klass.pdf">Как записать ребёнка в 1 класс в электронной форме.</a></p>
                        </div>
                    </div>

                    <div id="enrollmentDoc1" class="enrollmentDoc">
                        <div>
                            <img src="image/ico/ico_doc.png" alt="icon">
                        </div>
                        <div>
                            <a href="https://r1.nubex.ru/s139788-bcb/f667_7d/%D0%9F%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%90%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8%20%D0%9A%D0%B0%D1%82%D0%B0%D0%B2-%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%BC%D1%83%D0%BD%D0%B8%D1%86%D0%B8%D0%BF%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%B0%20%D0%9E%20%D0%B7%D0%B0%D0%BA%D1%80%D0%B5%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B8%20%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B9%20%D0%B7%D0%B0%20%D0%BE%D0%B1%D1%89%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%BC%D0%B8%20%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%D0%BC%D0%B8%20%D0%9A%D0%B0%D1%82%D0%B0%D0%B2-%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%BC%D1%83%D0%BD%D0%B8%D1%86%D0%B8%D0%BF%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%B0%20%E2%84%96103%20%D0%BE%D1%82%2011.02.2021%D0%B3.pdf">Постановление Администрации Катав-Ивановского муниципального района О закреплении территорий за общеобразовательными организациями Катав-Ивановского муниципального района №103 от 11.02.2021г.pdf (243 КБ)</a>
                        </div>
                    </div>

                    <div id="enrollmentDoc2" class="enrollmentDoc">
                        <div>
                            <img src="image/ico/ico_doc.png" alt="icon">
                        </div>
                        <div>
                            <a href="https://r1.nubex.ru/s139788-bcb/f664_56/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B,%20%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D0%B5%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D1%80%D0%B8%D0%B5%D0%BC%D0%B0%20%D1%80%D0%B5%D0%B1%D0%B5%D0%BD%D0%BA%D0%B0%20%D0%B2%201%20%D0%BA%D0%BB%D0%B0%D1%81%D1%81.doc">Документы, необходимые для приема ребенка в 1 класс.doc (24 КБ)</a>
                        </div>
                    </div>

                    <div id="enrollmentDoc3" class="enrollmentDoc">
                        <div>
                            <img src="image/ico/ico_doc.png" alt="icon">
                        </div>
                        <div>
                            <a href="https://r1.nubex.ru/s139788-bcb/f668_78/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0%20%D0%BF%D1%80%D0%B8%D1%91%D0%BC%D0%B0.pdf">Правила приёма.pdf (890 КБ)</a>
                        </div>
                    </div>

                    <div id="enrollmentDoc4" class="enrollmentDoc">
                        <div>
                            <img src="image/ico/ico_doc.png" alt="icon">
                        </div>
                        <div>
                            <a href="https://r1.nubex.ru/s139788-bcb/f666_7d/%D0%A4%D0%BE%D1%80%D0%BC%D0%B0%20%D0%B7%D0%B0%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B2%201%20%D0%BA%D0%BB%D0%B0%D1%81%D1%81.docx">Форма заявления в 1 класс.docx (33 КБ)</a>
                        </div>
                    </div>

                    <div id="enrollmentDoc5" class="enrollmentDoc">
                        <div>
                            <img src="image/ico/ico_doc.png" alt="icon">
                        </div>
                        <div>
                            <a href="https://r1.nubex.ru/s139788-bcb/f665_20/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5%20%D0%BD%D0%B0%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.docx">Согласие на обработку персональных данных.docx (29 КБ)</a>
                        </div>
                    </div>
                    
                </div>

            </div>
        `;

        this.animation();
    }

    deleteScreen() {
        let main = document.getElementById('main');

        main.innerHTML = "";
    }

    animation() {
        let doc1 = document.getElementById('enrollmentDoc1');
        let doc2 = document.getElementById('enrollmentDoc2');
        let doc3 = document.getElementById('enrollmentDoc3');
        let doc4 = document.getElementById('enrollmentDoc4');
        let doc5 = document.getElementById('enrollmentDoc5');

        doc1.style.animation = '0.4s documentLeft normal';
        doc2.style.animation = '0.6s documentRight normal';
        doc3.style.animation = '0.8s documentLeft normal';
        doc4.style.animation = '1s documentRight normal';
        doc5.style.animation = '1.2s documentLeft normal';
    }

    eventBtn() {
        let logo = document.getElementById('enrollmentDocumentsLogo');
        let btnReturn = document.getElementById('enrollmentBtnReturn');

        logo.onclick = this.Logo;
        btnReturn.onclick = this.Return;
    }

    Return() {
        new AudioReturn().start();
        choiceDocuments.createScreen();
        choiceDocuments.eventBtn();

        this.deleteScreen;
    }

    Logo() {
        new AudioLogo().start();
        index.createScreen();
        index.eventBtn();

        this.deleteScreen;
    }

}