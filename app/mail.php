<?php
require_once 'vendor/phpmailer/PHPMailerAutoload.php';


echo 'hey';
date_default_timezone_set('Etc/UTC');

header('Content-Type: application/json');
// $fname = $_POST['name'];
// $lname = $_POST['surname'];
$mail = $_POST['email'];
// $mail = "vasilie.91@gmail.com";


// $subject = $_POST['sub'];
$message = $_POST['themessage'];
// $message = 'vasa';


// $tel = $_POST['tel'];
// echo $mail;
$mail = new PHPMailer(true);
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->SMTPDebug = 2;
$mail->Debugoutput = 'html';
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'vasilie.91@gmail.com';                 // SMTP username
$mail->Password = 'winstonbluetacka1';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to
$mail->SMTPAuth = true;
$mail->setFrom($_POST['email']);
$mail->SMTPSecure = 'ssl';
$mail->Subject = 'PHPMailer GMail SMTP test';
// Add a recipient
$mail->addAddress('vasilie.91@gmail.com');               // Name is optional


$mail->isHTML(true);                                  // Set email format to HTML

// $mail->Subject = $subject;
$mail->Body    = $message;
$mail->AltBody = $message;
if(!$mail->send()) {
  echo 'Message could not be sent.';
  echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
  echo 'Message has been sent';
}
?>
