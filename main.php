<?php

require "vendor/autoload.php";

use Faparicior\CryptApi\Encoder\PhpEncoder;
use Faparicior\CryptApi\Decoder\PhpDecoder;

const KEY = 'test_purposes';

$action = htmlspecialchars($_GET["action"]);
$data = htmlspecialchars($_GET["data"]);

switch ($action) {
    case 'encode':
        $encoder = new PhpEncoder(KEY);
        echo $encoder->encode($data);
        break;
    case 'decode':
        $decoder = new PhpDecoder(KEY);
        echo $decoder->decode($data);
        break;
    default:
        echo "NO ACTION OR DATA TO PROCESS...";
        break;
}

