<?php
// header('Content-Type: application/json');
// echo "hello";

require_once 'vendor/phpmailer/PHPMailerAutoload.php';


date_default_timezone_set('Etc/UTC');

// $fname = $_POST['name'];
// $lname = $_POST['surname'];

// $mail = $_POST['email'];
$mail = "vasilie.91@gmail.com";


// $subject = $_POST['sub'];
// $message = $_POST['themessage'];
$message = 'vasa';


//PHPMailer Object
$mail = new PHPMailer;

//From email address and name
$mail->From = "vasilie.91@gmail.com";
$mail->FromName = "vasilije Mielnlivci";

//To address and name
// $mail->addAddress("recepient1@example.com", "Recepient Name");
$mail->addAddress("vasilie.91@gmail.com"); //Recipient name is optional

//Address to which recipient will reply
// $mail->addReplyTo("reply@yourdomain.com", "Reply");

//CC and BCC
// $mail->addCC("cc@example.com");
// $mail->addBCC("bcc@example.com");

//Send HTML or Plain Text email
$mail->isHTML(true);

$mail->Subject = "Zezanje u najabvi brate potpuno";
$mail->Body = "nema sanse da li je moguce Matori sta ima novo";
$mail->AltBody = "This is the plain text version of the email content";

if(!$mail->send())
{
    echo "Mailer Error: " . $mail->ErrorInfo;
}
else
{
    echo "Message has been sent successfully";
}
?>
