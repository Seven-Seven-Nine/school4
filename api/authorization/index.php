<?php
    include("../include/connect.php");

    header("Content-type: application/json");

    function get_user_token($connect, $token) {
        $sql = "SELECT * FROM users WHERE token = '$token'";
        $result = $connect->query($sql);

        if($result->num_rows) {
            foreach($result as $row) {
                $arr["status"] = "200";
                $arr["access"] = true;
                $arr["body"]["message"] = "true login";
                $arr["body"]["role"] = $row["role"];
                $arr["body"]["login"] = $row["login"];
                $arr["body"]["email"] = $row["email"];
                $arr["body"]["password"] = $row["password"];
                $arr["body"]["token"] = $row["token"];
    
                echo json_encode($arr);
            }
        } else {
            $arr["status"] = "user false";
            $arr["access"] = true;
            $arr["body"]["message"] = "no user data";

            echo json_encode($arr);
        }
    }

    function get_user($connect, $login, $password) {
        $sql = "SELECT * FROM users WHERE `login` = '$login' AND `password` = '$password'";
        $result = $connect->query($sql);

        if($result->num_rows) {
            return "yes";
        } else {
            return "no";
        }
    }

    function getRoleUser($connect, $login) {
        $sql = "SELECT `role` FROM users WHERE `login` = '$login'";
        $result = $connect->query($sql);
        foreach($result as $row) {
            $userRole = $row['role'];
            return $userRole;
        }
    }

    function getEmailUser($connect, $login) {
        $sql = "SELECT `email` FROM users WHERE `login` = '$login'";
        $result = $connect->query($sql);
        foreach($result as $row) {
            $userEmail = $row['email'];
            return $userEmail;
        }
    }

    function edit_token($connect, $login, $password) {
        $token = bin2hex(random_bytes(20));
        $sql = "UPDATE users SET `token` = '$token' WHERE `login` = '$login'";
        $result = $connect->query($sql);

        $userRole = getRoleUser($connect, $login);
        $userEmail = getEmailUser($connect, $login);

        $arr["status"] = "200";
        $arr["access"] = true;
        $arr["body"]["message"] = "true login";
        $arr["body"]["login"] = $login;
        $arr["body"]["email"] = $userEmail;
        $arr["body"]["password"] = $password;
        $arr["body"]["role"] = $userRole;
        $arr["body"]["token"] = $token;

        echo json_encode($arr);
    }

    if(isset($_POST["token"])) {
        $token = $_POST["token"];

        get_user_token($connect, $token); 
    } else {
        $login = $_POST["login"];
        $password = $_POST["password"];

        $get = get_user($connect, $login, $password);

        if($get == "yes") {
            edit_token($connect, $login, $password);
        } else {
            $arr["status"] = "user false";
            $arr["access"] = true;
            $arr["body"]["message"] = "no user data";

            echo json_encode($arr);
        } 
    }