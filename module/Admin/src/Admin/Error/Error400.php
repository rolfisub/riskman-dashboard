<?php

namespace Admin\Error;

use Admin\Error\Abstract4xx;

/**
 * Error class for not bad request errors
 */
class Error400 extends Abstract4xx
{
    protected $code = 400;
    protected $message = 'Bad Request';
}
