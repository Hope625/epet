<?php
    include 'connect.php';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : null; 
    $username = isset($_POST['username']) ? $_POST['username'] : null; 
    $password = isset($_POST['password']) ? $_POST['password'] : null; 
    $sql = "insert into user(username,password,phone) values ('$username','$password','$phone')";
    $result = $mydb->query($sql);
    if($result<=0){
        echo "no";
    }else{
        echo "yes";
    }
?>