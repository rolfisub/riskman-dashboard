<?php

namespace Admin\Error;

use Exception;

/**
 * Parent class for all 400 level (user driven) errors
 */
abstract class Abstract4xx extends Exception
{
    /**
     * Array of feedback messages to provide additional detail of the error to
     * the client.
     *
     * @var array
     */
    protected $feedback = [];

    /**
     * Array of validation error messages to provide field validation specific
     * details to the client.
     *
     * @var array
     */
    protected $validation = [];

    public static function withValidation($field, $error, ...$message)
    {
        $error400 = new static();
        $error400->addValidation([
            $field => [
                $error => sprintf(...$message)
            ]
        ]);
        return $error400;
    }

    /**
     *
     * @param string $message
     * @param array $replacements
     */
    public function __construct($message = null, ...$replacements)
    {
        parent::__construct();

        if ($message) {
            $this->addFeedback($message, ...$replacements);
        }
    }

    /**
     *
     * @return array
     */
    public function getFeedback()
    {
        return $this->feedback;
    }

    /**
     *
     * @param array $feedback
     */
    public function addFeedback($message, ...$replacements)
    {
        if (count($replacements)) {
            $message = sprintf($message, ...$replacements);
        }

        $this->feedback[] = $message;
        return $this;
    }

    /**
     *
     * @return array
     */
    public function getValidation()
    {
        return $this->validation;
    }

    /**
     *
     * @param array $validation
     */
    public function addValidation(array $validation)
    {
        $this->validation = array_merge($this->validation, $validation);
        return $this;
    }
}
