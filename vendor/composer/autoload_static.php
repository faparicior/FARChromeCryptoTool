<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit2e2d39eeb23c98c223046ad84d601af1
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Faparicior\\CryptApi\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Faparicior\\CryptApi\\' => 
        array (
            0 => __DIR__ . '/../..' . '/Lib',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit2e2d39eeb23c98c223046ad84d601af1::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit2e2d39eeb23c98c223046ad84d601af1::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}