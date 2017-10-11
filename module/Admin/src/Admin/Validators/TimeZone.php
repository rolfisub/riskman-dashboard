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
class TimeZone extends AbstractValidator
{
    const AVAIL = 'avail';

    protected $messageTemplates = array(
        self::AVAIL => "'%value%' must be a valid php timezone format."
    );

    public function isValid($value)
    {
        $this->setValue('Password');
 
        $isValid = true;
        
        $tzlist = \DateTimeZone::listIdentifiers();
        
        if(!in_array($value, $tzlist)) {
            $this->error(self::AVAIL);
            $isValid = false;
        }
        
        return $isValid;
    }
}
