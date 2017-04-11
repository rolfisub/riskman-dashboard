<?php

namespace Admin\Error;

use Admin\Error\Abstract4xx;

/**
 * Error class for not forbidden errors
 */
class Error403 extends Abstract4xx
{
    protected $code = 403;
    protected $message = 'Forbidden';
}
