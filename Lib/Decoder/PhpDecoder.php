<?php

namespace Faparicior\CryptApi\Decoder;

class PhpDecoder implements Decoder
{
    private $key;

    /**
     * PhpEncoder constructor
     *
     * @param string $key
     */
    public function __construct($key)
    {
        $this->key = substr(sha1($key, true), 0, 16);
    }

    /**
     * @inheritDoc
     */
    public function decode($data)
    {
        $ciphertext = base64_decode($data);

        $iv = substr($ciphertext, 0, 16);
        $ciphertext = substr($ciphertext, 16);
        //$original = openssl_decrypt($ciphertext, 'AES-128-CBC', $key, OPENSSL_RAW_DATA, $iv2);

        return openssl_decrypt($ciphertext, 'AES-256-CBC', $this->key, OPENSSL_RAW_DATA, $iv);
    }
}
