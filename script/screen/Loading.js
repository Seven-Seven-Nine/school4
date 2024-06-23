"use strict";

export default class Loading {
    createScreen() {
        let main = document.getElementById("main");
        // main.style.height = "100vh";

        main.innerHTML = `
            <div class="loadingTopContent">
                <div class="flexColumnCenter">
                    <img class="logoIndex" src="image/logo.svg" alt="logo">
                    <h1>МОУ “ООШ №4 г. Катав-Ивановск”</h1>
                </div> 
            </div>
            <div class="loadingBottomContent">
                <div class="flexColumnCenter">
                    <p class="loadingText">Загрузка...</p>
                </div>
            </div>
        `;

    }

    deleteScreen() {
        let main = document.getElementById("main");

        main.innerHTML = "";
    }
}