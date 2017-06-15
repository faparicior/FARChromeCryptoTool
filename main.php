<?php
header('Access-Control-Allow-Origin: *');
require "vendor/autoload.php";

use Faparicior\CryptApi\Encoder\PhpEncoder;
use Faparicior\CryptApi\Decoder\PhpDecoder;

const KEY = 'test_purposes';
const TOKEN = 'test_token';

if(!hasCorrectToken()){
    die('Incorrect token!!!');
}

$action = htmlspecialchars($_POST["action"]);
// $data = htmlspecialchars($_POST["data"]);

switch ($action) {
    case 'encode':
        $encoder = new PhpEncoder(KEY);
        if(paramExistsAndIsFilled("textToEncode")) {
            echo $encoder->encode(htmlspecialchars($_POST["textToEncode"]));
            // echo $encoder->encode($_POST["textToEncode"]);
        } else {
            echo "Error: Void text or empty parameter";
        }
        break;
    case 'decode':
        $decoder = new PhpDecoder(KEY);
        if(paramExistsAndIsFilled("textToDecode")) {
            // echo htmlspecialchars($_POST["textToDecode"]);
            echo $decoder->decode(htmlspecialchars($_POST["textToDecode"]));
            // echo $decoder->decode($_POST["textToDecode"]);
        } else {
            echo "Error: Void text or empty parameter";
        }
        // echo $decoder->decode($data);
        break;
    default:
        echo "Error: NO ACTION OR DATA TO PROCESS...";
        break;
}

function paramExistsAndIsFilled($param)
{
    return (isset($_POST[$param]) && !empty($_POST[$param]));
}

function hasCorrectToken()
{
    return (paramExistsAndIsFilled('token') && $_POST["token"] === TOKEN);
}