<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace AdminConsole\Crons\Currency;

use Admin\Error\Error400;

/**
 * Description of CurrencyEntity
 *
 * @author rolf
 */
class CurrencyEntity 
{
    public $rates;
    
    public function __construct(array $rates) {
        $this->rates = $rates;
        $this->isValid();
    }
    
    private function isValid()
    {
        if(!isset($this->rates['rates'])) {
            throw new Error400("rates is not set. Check API.");
        }
        if(empty($this->rates['rates'])) {
            throw new Error400("rates is empty. Check API.");
        }
    }
}
