<?php

namespace lib\core;

function formatter_md5($val, $salt = '') {
    return md5($val . $salt);
}

function formatter_sha1($val, $salt = '') {
    return sha1($val . $salt);
}

function formatter_sha256($val, $salt = '') {
    return hash('sha256', $val . $salt);
}

function formatter_sha512($val, $salt = '') {
    return hash('sha512', $val . $salt);
}

function formatter_encodeBase64($val) {
    return base64_encode($val);
}

function formatter_decodeBase64($val) {
    return base64_decode($val);
}

function formatter_encrypt($val, $password) {
    $key = hash('sha256', $password, TRUE);
    $iv = mcrypt_create_iv(mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC), MCRYPT_RAND);
    return base64_encode($iv . mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, $val, MCRYPT_MODE_CBC, $iv));
}

function formatter_decrypt($val, $password) {
    $size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC);
    $key = hash('sha256', $password, TRUE);
    $val = base64_decode($val);
    return rtrim(mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, substr($val, $size), MCRYPT_MODE_CBC, substr($val, 0, $size)), "\0");
}
