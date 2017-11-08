<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace AdminConsole\Crons\Currency;

use AdminConsole\Crons\Currency\CurrencyMapper;
/**
 * Description of CurrencyModel
 *
 * @author rolf
 */
class CurrencyModel 
{
    private $mapper;
    
    public function __construct(CurrencyMapper $mapper) {
        $this->mapper = $mapper;
    }
    
    
    public function updateCurrencyRates () 
    {
        return 'test model is up and running :-)';
    }
}
