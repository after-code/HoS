<?php
require_once 'vendor/phpmailer/PHPMailerAutoload.php';


// $fname = $_POST['name'];
// $lname = $_POST['surname'];

// $mail =  "test";
// $mail = $_POST['email'];


// $subject = $_POST['sub'];
$message =  $_POST['themessage'];
// $message = 'vasa';


//PHPMailer Object
$mail = new PHPMailer();

//From email address and name
$parts = explode("@", $_POST['email']);
$name = $parts[0];

$mail->From = $_POST['email'];
$mail->FromName = $name;
$mail->Sender = "ask.me@house-of-social.com";
//To address and name
// $mail->addAddress("recepient1@example.com", "Recepient Name");
// $mail->addAddress("vasilie.91@gmail.com"); //Recipient name is optional
$mail->addAddress("alexandra@house-of-social.com"); //Recipient name is optional

//Address to which recipient will reply
// $mail->addReplyTo("reply@yourdomain.com", "Reply");

//CC and BCC
// $mail->addCC("cc@example.com");
// $mail->addBCC("bcc@example.com");

//Send HTML or Plain Text email
$mail->isHTML(true);

$mail->Subject = "Ask me anything from House Of Social";
$mail->Body = $message;
// $mail->AltBody = "This is the plain text version of the email content";

if(!$mail->send())
{
    echo "Mailer Error: " . $mail->ErrorInfo;
}
else
{
    echo "Message has been sent successfully";
}
?>
