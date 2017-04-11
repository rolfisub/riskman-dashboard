<?php

namespace Admin\Error;

use Admin\Error\Abstract4xx;

/**
 * Error class for not found errors
 */
class Error404 extends Abstract4xx
{
    protected $code = 404;
    protected $message = 'Not Found';
}
