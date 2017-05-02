<?php

$data_to_encrypt = 'RLEi2015';

// Encrypt

$key = 'tarta';
$key = substr(sha1($key, true), 0, 16);

$iv = openssl_random_pseudo_bytes(16);
//$ciphertext = openssl_encrypt($data_to_encrypt, 'AES-128-CBC', $key, OPENSSL_RAW_DATA, $iv);
$ciphertext = openssl_encrypt($data_to_encrypt, 'AES-256-CBC', $key, OPENSSL_RAW_DATA, $iv);
$output = base64_encode($iv.$ciphertext);

echo $output;

// Decrypt
$key2 = 'tarta';
$key2 = substr(sha1($key2, true), 0, 16);

$input = $output;
$ciphertext2 = base64_decode($input);

$iv2 = substr($ciphertext2, 0, 16);
$ciphertext2 = substr($ciphertext2, 16);
//$original = openssl_decrypt($ciphertext2, 'AES-128-CBC', $key2, OPENSSL_RAW_DATA, $iv2);
$original = openssl_decrypt($ciphertext2, 'AES-256-CBC', $key2, OPENSSL_RAW_DATA, $iv2);

//echo $original;