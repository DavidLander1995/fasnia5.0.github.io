<!-- THIS IS USING GOOGLES reCaptcha V2 -->

<?php 
    if(isset($_POST['ContactButton'])) {
        $url = "https://www.google.com/recaptcha/api/siteverify";
        $privateKey = "PUT YOUR PRIVATE KEY HERE";
        $response = file_get_contents($url."?secret=".$privateKey."&response=".$_POST['g-recaptcha-response']."&remoteip=".$_SERVER['REMOTE_ADDR']);
        $data = json_decode($response);
        if (isset($data->success) AND $data->success==true) {
            $error = "";
            $successMsg = "";
            if ($_POST) {
                if ($_POST['email'] && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) === false) {
                    $error .= "The email is invalid!<br>";
                }
                if (!$_POST['email']) {
                    $error .= "An email address is required!<br>";
                }
                if (!$_POST['subject']) {
                    $error .= "A subject is required!<br>";
                }
                if (!$_POST['body']) {
                    $error .= "Content in the body is required!<br>";
                }
                if ($error != "") {
                    $error = '<div class="alert alert-danger" role="alert"><strong>There is an error with your form!</strong><br>' . $error . '</div>';
                } else {
                    $emailTo = 'CONTACT FORM DELIVERY EMAIL';
                    $subject = $_POST['subject'];
                    $body = $_POST['body'];
                    $headers = "From: ".$_POST['email'];
                    if (mail($emailTo, $subject, $body, $headers)) {
                        $successMsg = '<div class="alert alert-success" role="alert">The message has successfully been sent. We will contact you ASAP!</div>';
                    } else {
                        $error = '<div class="alert alert-danger" role="alert">There was a problem sending your message, please try again later!</div>';
                    }
                }
            }
        } else {
            $captchaFail = '<div class="alert alert-danger" role="alert"><strong>There is an error with your form!</strong><br>reCaptcha Verification Failed, Please Try Again.</div>';
        }
    }
?>