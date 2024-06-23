<?php
    include("../include/connect.php");

    header("Content-type: application/json");

    function check_user_in_db($connect, $login, $email) {
        $sql = "SELECT *FROM users WHERE `login` = '$login' AND `login` = '$login' OR `email` = '$email'";

        $result = $connect->query($sql);

        if($result->num_rows) {
            return "user false";
        } else {
            return "user true";
        }
    }

    function add_user($connect, $login, $email, $password) {
        $token = bin2hex(random_bytes(20));

        $sql = "INSERT INTO users (`role`,`login`, `email`, `password`, `token`) VALUE ('user', '$login', '$email', '$password', '$token')";

        $result = $connect->query($sql);

        $arr["status"] = 200;
        $arr["access"] = true;
        $arr["body"]["message"] = "user add in db";
        $arr["body"]["role"] = "user";
        $arr["body"]["login"] = $login;
        $arr["body"]["email"] = $email;
        $arr["body"]["password"] = $password;
        $arr["body"]["token"] = $token;

        echo json_encode($arr);
    }

    if($_POST["login"] != "" && $_POST["email"] != "") {
        $login = $_POST["login"];
        $email = $_POST["email"];
        $password = $_POST["password"];

        $check = check_user_in_db($connect, $login, $email);

        if($check == "user true") {
            add_user($connect, $login, $email, $password);
        } else {
            $arr["status"] = "user false";
            $arr["access"] = true;
            $arr["body"]["message"] = "no data from";

            echo json_encode($arr);
        }
    } else {
        $arr["status"] = "error";
        $arr["access"] = true;
        $arr["body"]["message"] = "no data from";

        echo json_encode($arr);
    }
    
    