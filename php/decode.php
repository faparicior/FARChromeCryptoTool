<?php

$data_to_decrypt = htmlspecialchars($_GET["data"]);
$key = htmlspecialchars($_GET["key"]);

// Decode
$key = substr(sha1($key, true), 0, 16);

$ciphertext = base64_decode($data_to_decrypt);

$iv2 = substr($ciphertext, 0, 16);
$ciphertext = substr($ciphertext, 16);
//$original = openssl_decrypt($ciphertext, 'AES-128-CBC', $key2, OPENSSL_RAW_DATA, $iv2);
$original = openssl_decrypt($ciphertext, 'AES-256-CBC', $key, OPENSSL_RAW_DATA, $iv2);

echo $original;
