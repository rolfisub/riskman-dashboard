<?php

namespace Admin\Error;

use Admin\Error\Abstract5xx;

/**
 * Error class for internal service errors
 */
class Error500 extends Abstract5xx
{
    protected $code = 500;
    protected $message = 'Internal Server Error';
}
