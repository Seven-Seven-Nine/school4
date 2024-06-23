<?php

    $connect = new mysqli("localhost", "root", "","school4");

    if($connect->connect_error) {
        die("Подключение мертво...");
    }