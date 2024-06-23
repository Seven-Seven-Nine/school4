"use strict";

import { index, circles, user, account  } from "../main.js";
import AudioReturn from "../audio/AudioReturn.js";
import AudioLogo from "../audio/AudioLogo.js";

export default class Activity {
    createScreen() {
        let main = document.getElementById("main");

        main.innerHTML = `
            <button id="activityBtnReturn" class="btnReturnLeft" type="button">←</button>

            <div id="activityDivLogo" class="flexColumnCenter">
                <img id="activityLogo" class="logo" src="image/logo.svg" alt="logo">
            </div> 

            <div id="activityTypeActivity" class="flexColumnCenter">
                <h2>Виды деятельности</h2>
            </div>
            <div id="activityType1" class="activityType">
                <img class="ico" src="image/ico/ico-teaching.png" alt="ico">
                <p>Осуществление обучения и воспитания в интересах личности, общества,  государства, обеспечение охраны здоровья и создание благоприятных  условий для разностороннего развития личности, в том числе возможности  удовлетворения потребности обучающегося в самообразовании и получении  дополнительного образования.</p>
            </div>
            <div id="activityType2" class="activityType">
                <img class="ico" src="image/ico/ico-tech.png" alt="ico">
                <p>Использование и совершенствование методик образовательного процесса и  образовательных технологий, в том числе с использованием дистанционных  образовательных технологий.</p>
            </div>
            <div id="activityType3" class="activityType">
                <img class="ico" src="image/ico/ico-conditions.png" alt="ico">
                <p>Создание в Школе необходимых условий для работы подразделений  организаций общественного питания и медицинских учреждений, контроль их  работы в целях охраны и укрепления здоровья обучающихся, воспитанников и  работников Школы.</p>
            </div>
            <div id="activityType4" class="activityType">
                <img class="ico" src="image/ico/ico-help.png" alt="ico">
                <p>Оказание социально-психологической и педагогической помощи обучающимся имеющим проблемы в обучении.</p>
            </div>
            <div id="activityType5" class="activityType">
                <img class="ico" src="image/ico/ico-identification.png" alt="ico">
                <p>Выявление несовершеннолетних, находящихся в социально опасном  положении, а также не посещающих или систематически пропускающих по  неуважительным причинам занятия в Школе, принятие мер по их воспитанию и  получению ими общего образования.</p>
            </div>
            <div id="activityType6" class="activityType">
                <img class="ico" src="image/ico/ico-helpfamily.png" alt="ico">
                <p>Выявление семей, находящихся в социально опасном положении, и оказание им помощи в обучении и воспитании детей.</p>
            </div>
            <div id="activityType7" class="activityType">
                <img class="ico" src="image/ico/ico-sport.png" alt="ico">
                <p>Обеспечение организации в Школе общедоступных спортивных секций и иных кружков и привлечение к участию в них несовершеннолетних.</p>
            </div>
            <div id="activityType8" class="activityType">
                <img class="ico" src="image/ico/ico-law.png" alt="ico">
                <p>Осуществление мер по реализации программ и методик, направленных на формирование законопослушного поведения несовершеннолетних.</p>
            </div>
            <div id="activityType9" class="activityType">
                <img class="ico" src="image/ico/ico-board.png" alt="ico">
                <p>Материально-техническое обеспечение и оснащение образовательного  процесса, оборудование помещений в соответствии с государственными и  местными нормами и требованиями, осуществляемыми в пределах собственных  финансовых средств.</p>
            </div>
            <div id="activityType10" class="activityType">
                <img class="ico" src="image/ico/ico-quality.png" alt="ico">
                <p>Обеспечение функционирования системы внутреннего мониторинга качества образования в Школе.</p>
            </div>
            <div id="activityType11" class="activityType">
                <img class="ico" src="image/ico/ico-site.png" alt="ico">
                <p>Обеспечение создания и ведения официального сайта Школы в сети «Интернет».</p>
            </div>
            <div id="activityType12" class="activityType">
                <img class="ico" src="image/ico/ico-eat.png" alt="ico">
                <p>Организация питания обучающихся.</p>
            </div>

            <div class="flexColumnCenter">
                <h2>Образование</h2>
                <div class="text">
                    <p>Школа, исходя из государственной гарантии прав граждан на получение  бесплатного общего образования в пределах федеральных государственных  образовательных стандартов, осуществляет образовательный процесс, в  соответствии с уровнями общеобразовательных программ следующих ступеней  общего образования:</p>
                </div>
            </div>
            <div id="activityCart1" class="flexRowCenter">
                <div class="activityCart">
                    <h2>Дошкольное образование</h2>
                    <img class="activityImgSmall" src="image/Schoolboy.svg" alt="image">
                    <p>Обеспечивает разностороннее развитие детей в возрасте с 2-х месяцев  до 7 лет (при наличии условий) с учётом их возрастных и индивидуальных  особенностей по основным направлениям развития: физическому,  социально-личностному, познавательно-речевому и  художественно-эстетическому.</p>
                </div>
                <div class="activityCart">
                    <h2>Начальное общее образование</h2>
                    <img src="image/Student.svg" alt="image">
                    <p>Обеспечивает воспитание и развитие обучающихся, овладение ими  навыками чтения, письма, счета, основными умениями и навыками учебной  деятельности, элементами теоретического мышления, простейшими навыками  самоконтроля учебных действий, культурой поведения и речи, основами  личной гигиены и здорового образа жизни. Начальное образование в Школе  является базой для получения основного общего образования.</p>
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

        let divLogo = document.getElementById("activityDivLogo");
        let typeActivity = document.getElementById("activityTypeActivity");
        let activityType1 = document.getElementById("activityType1");
        let activityType2 = document.getElementById("activityType2");
        let activityType3 = document.getElementById("activityType3");
        let activityType4 = document.getElementById("activityType4");
        let activityType5 = document.getElementById("activityType5");
        let activityType6 = document.getElementById("activityType6");
        let activityType7 = document.getElementById("activityType7");
        let activityType8 = document.getElementById("activityType8");
        let activityType9 = document.getElementById("activityType9");
        let activityType10 = document.getElementById("activityType10");
        let activityType11 = document.getElementById("activityType11");
        let activityType12 = document.getElementById("activityType12");

        divLogo.style.animation = "1s appearance normal";
        typeActivity.style.animation = "1s appearance normal";
        activityType1.style.animation = "0.2s activityType normal";
        activityType2.style.animation = "0.4s activityType normal";
        activityType3.style.animation = "0.6s activityType normal";
        activityType4.style.animation = "0.8s activityType normal";
        activityType5.style.animation = "1s activityType normal";
        activityType6.style.animation = "1.2s activityType normal";
        activityType7.style.animation = "1.4s activityType normal";
        activityType8.style.animation = "1.6s activityType normal";
        activityType9.style.animation = "1.8s activityType normal";
        activityType10.style.animation = "2s activityType normal";
        activityType11.style.animation = "2.2s activityType normal";
        activityType12.style.animation = "2.4s activityType normal";
    }

    eventBtn() {
        let logo = document.getElementById("activityLogo");
        let btnReturn = document.getElementById("activityBtnReturn");

        logo.onclick = this.Logo;
        btnReturn.onclick = this.Return;
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