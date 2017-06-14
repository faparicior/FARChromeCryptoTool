<?php

namespace Faparicior\CryptApi\Decoder;

interface Decoder
{
    /**
     * Decode
     *
     * @param string $data
     * @return string
     */
    public function decode($data);
}