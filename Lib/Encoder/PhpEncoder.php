<?php

namespace Faparicior\CryptApi\Encoder;

class PhpEncoder implements Encoder
{
    private $key;

    /**
     * PhpEncoder constructor
     *
     * @param string $key
     */
    public function __construct($key)
    {
        $this->key = substr(sha1($key, true), 0, 16);;
    }

    /**
     * @inheritDoc
     */
    public function encode($data)
    {
        $iv = openssl_random_pseudo_bytes(16);
        //$ciphertext = openssl_encrypt($data_to_encrypt, 'AES-128-CBC', $key, OPENSSL_RAW_DATA, $iv);
        $ciphertext = openssl_encrypt($data, 'AES-256-CBC', $this->key, OPENSSL_RAW_DATA, $iv);

        // Use urlEncode with Get calls
        // return urlencode(base64_encode($iv.$ciphertext));
        return base64_encode(CryptoJS.enc.Utf8$ciphertext);
    }
}
