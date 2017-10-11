<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Validators;

use Zend\Validator\AbstractValidator;
use Admin\Traits\OddFormatList;
/**
 * Description of Password
 *
 * @author rolf
 */
class OddFormat extends AbstractValidator
{
    use OddFormatList;
    
    const AVAIL = 'avail';

    protected $messageTemplates = array(
        self::AVAIL => "'%value%' Must be a valid Odd Format string."
    );

    public function isValid($value)
    {
        $this->setValue($value);

        $isValid = true;
        
        if(!in_array($value, $this->oddFormatList)) {
            $this->error(self::AVAIL);
            $isValid = false;
        }

        return $isValid;
    }
}
