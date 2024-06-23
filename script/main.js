"use strict";

import Loading from "./screen/Loading.js";
import Index from "./screen/Index.js";
import Registration from "./screen/Registration.js";
import Login from "./screen/Login.js";
import Activity from "./screen/Activity.js";
import Contact from "./screen/Contact.js";
import Author from "./screen/Author.js";
import ChoiceDocuments from "./screen/ChoiceDocuments.js";
import Enrollment from "./screen/Enrollment.js";
import User from "./user/user.js";
import Circle from "./screen/Circles.js";
import Documents from "./screen/Documents.js";
import HelloUser from "./screen/HelloUser.js";
import Account from "./screen/Account.js"

let loading = new Loading();
export let circles = new Circle();
export let index = new Index();
export let registration = new Registration();
export let login = new Login();
export let activity = new Activity();
export let contact = new Contact();
export let author = new Author();
export let choiceDocuments = new ChoiceDocuments();
export let enrollment = new Enrollment();
export let documents = new Documents();
export let user = new User();
export let helloUser = new HelloUser();
export let account = new Account();

loading.createScreen();

window.onload = () => {
    setTimeout(() => {
        loading.deleteScreen();
        index.createScreen();
        index.eventBtn();
    }, 1000)
}
