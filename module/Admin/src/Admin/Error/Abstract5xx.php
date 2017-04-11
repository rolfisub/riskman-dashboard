<?php

namespace Admin\Error;

use Exception;

/**
 * Parent class for all 500 level (internal service) errors
 */
abstract class Abstract5xx extends Exception
{
    /**
     *
     * @param string $message
     * @param array $replacements
     */
    public function __construct($message = null, ...$replacements)
    {
        if ($message) {
            $message = sprintf($message, ...$replacements);
            parent::__construct($message);
        } else {
            parent::__construct();
        }
    }
}
