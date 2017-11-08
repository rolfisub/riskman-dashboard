<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace AdminConsole\Crons\Currency;

use AdminConsole\Crons\Currency\CurrencyModel;

use Zend\Mvc\Controller\AbstractActionController;

/**
 * Description of CurrencyController
 *
 * @author rolf
 */
class CurrencyController extends AbstractActionController
{
    private $model;
    
    public function __construct(CurrencyModel $model) {
       $this->model = $model;
    }
    
    public function updateRatesAction()
    {
        return $this->model->updateCurrencyRates();
    }
}
