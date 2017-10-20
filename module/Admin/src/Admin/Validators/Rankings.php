<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Validators;

use Zend\Validator\AbstractValidator;

/**
 * Description of Password
 *
 * @author rolf
 */
class Rankings extends AbstractValidator
{
    const INVALID = 'invalid';

    protected $messageTemplates = array(
        self::INVALID => "Invalid ranking object received."
    );

    public function isValid($value)
    {
        $this->setValue($value);
        
        $isValid = true;
        
        if(false) {
            $this->error(self::INVALID);
            $isValid = false;
        }        
        
        return $isValid;
    }
}
