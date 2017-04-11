<?php

namespace Admin\View;

use Zend\View\Model\JsonModel;

/**
 * JSON view-model class for successful responses
 */
class JsonResponseModel extends JsonModel
{
    /**
     * Wraps the response data around the standard JSON response package.
     *
     * @param mixed $data
     * @param array|Traversable $options
     */
    public function __construct($data = null, $options = null)
    {
        $dataPackage = [
            'success' => true,
            'data' => $data,
        ];

        parent::__construct($dataPackage, $options);
    }
}
