<?php
//
// *** To Email ***
$to = 'merilikovask0@gmail.com';
//
// *** Subject Email ***
$subject = 'Kiri kliendilt';
$subject2 = 'Kiri Aarna OÜ-lt';
//
// *** Content Email ***
$content = $_POST['linfo'];
//
//*** Head Email ***
$headers = "From: " . $_POST['email'] . "\r\n";
$headers2 = "From: " . $to . "\r\n";
//

$message2 = "Tere, " . "\n"
	. "Aitäh, et võtsite ühendust. Kirjutame teile esimesel võimalusel tagasi!" . "\r\n"
	. "Kõike paremat," . "\n" . "- Aarna OÜ";

$status = mail($to, $subject, $content, $headers);
$status = mail($_POST['email'], $subject2, $message2, $headers2);