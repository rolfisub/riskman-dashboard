<?php

namespace Admin\Error;

use Admin\Error\Abstract4xx;

/**
 * Error class for not Unauthorized
 */
class Error401 extends Abstract4xx
{
    protected $code = 401;
    protected $message = 'Unauthorized';
}
