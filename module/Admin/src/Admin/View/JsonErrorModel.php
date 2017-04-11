<?php

namespace Admin\View;

use Zend\View\Model\JsonModel;

/**
 * JSON view-model class for error responses
 */
class JsonErrorModel extends JsonModel
{
    /**
     * Wraps the error message around the standard JSON error package.
     *
     * @param string $errorMessage
     * @param array $errorFeedback additional information on the error
     * @param array $errorValidation field validation information on the error
     * @param array|Traversable $options
     */
    public function __construct(
        $errorMessage,
        array $errorFeedback = [],
        array $errorValidation = [],
        $options = null
    ) {
        $errorPackage = [
            'success' => false,
            'error' => $errorMessage,
            'feedback' => $errorFeedback,
            'validation' => $errorValidation
        ];
        parent::__construct($errorPackage, $options);
    }
}
