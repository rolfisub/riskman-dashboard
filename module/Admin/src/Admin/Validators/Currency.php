<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Validators;

use Zend\Validator\AbstractValidator;
use Admin\Traits\CurrencyList;
/**
 * Description of Password
 *
 * @author rolf
 */
class Currency extends AbstractValidator
{
    use CurrencyList;
    
    const AVAIL = 'avail';

    protected $messageTemplates = array(
        self::AVAIL => "'%value%' Not a valid currency code."
    );

    public function isValid($value)
    {
        $this->setValue($value);
        
        $isValid = true;

        if(!array_key_exists($value, $this->currencyList)) {
            $this->error(self::AVAIL);
            $isValid = false;
        }        
        
        return $isValid;
    }
}
