<?php

$data_to_encrypt = htmlspecialchars($_GET["data"]);
$key = htmlspecialchars($_GET["key"]);

// Encode
$key = substr(sha1($key, true), 0, 16);


$iv = openssl_random_pseudo_bytes(16);
//$ciphertext = openssl_encrypt($data_to_encrypt, 'AES-128-CBC', $key, OPENSSL_RAW_DATA, $iv);
$ciphertext = openssl_encrypt($data_to_encrypt, 'AES-256-CBC', $key, OPENSSL_RAW_DATA, $iv);
$output = base64_encode($iv.$ciphertext);

// For GET action
//echo urlencode($output);
echo $output;
