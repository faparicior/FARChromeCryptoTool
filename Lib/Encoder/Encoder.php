<?php

namespace Faparicior\CryptApi\Encoder;

interface Encoder
{
    /**
     * Encode
     *
     * @param string $data
     * @return string
     */
    public function encode($data);
}