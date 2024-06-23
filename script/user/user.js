"use strict";

// Получить почту.
// Починить вход уже с имеющимся токеном.

export default class User {
    constructor(login, email, password, role, token) {
        this.login = login;
        this.email = email;
        this.password = password;
        this.role = role;
        this.token = token;
    }

    deleteData() {
        this.login = '';
        this.email = '';
        this.password = '';
        this.role = '';
        this.token = '';
    }

    getData() {
        console.log(this.login);
        console.log(this.email);
        console.log(this.password);
        console.log(this.role);
        console.log(this.token);
    }
}