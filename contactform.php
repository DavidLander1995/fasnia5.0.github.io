<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "lander.david@rocketmail.com";
    $headers = "From: ".$mailFrom;
    $text = "You have recieved an Email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $text, $headers);
    header("Location: contacto.php?mailsend");

}

?>