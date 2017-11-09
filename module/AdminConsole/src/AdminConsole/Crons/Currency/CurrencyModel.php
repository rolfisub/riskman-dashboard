<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace AdminConsole\Crons\Currency;

use AdminConsole\Crons\Currency\CurrencyMapper;

use Zend\Http\Client\Adapter\Curl;
use Zend\Http\Client;
/**
 * Description of CurrencyModel
 *
 * @author rolf
 */
class CurrencyModel 
{
    private $mapper;
    private $curlAdapter;
    private $curl;
    private $config;
    
    public function __construct(CurrencyMapper $mapper, array $currencyConfig) {
        $this->mapper = $mapper;
        $this->config = $currencyConfig;
        $this->curlAdapter = new Curl();
        $this->curl = new Client();
        $this->curl->setAdapter($this->curlAdapter);
        $this->setUpRatesAPI();
    }
    
    private function setUpRatesAPI()
    {
        $this->curl->setUri($this->config['uri']);
        $this->curl->setMethod('GET');
        $this->curl->setParameterGet([
            'app_id' => $this->config['appId']
        ]);        
    }
    
    protected function getRates()
    {
        echo "Getting currency update from API...";
        $this->curl->send();
        echo " done.\n";
        return new CurrencyEntity(json_decode($this->curl->getResponse()->getBody(), true));
    }
    
    
    public function updateCurrencyRates () 
    {
        echo "Updating Rates...\n";
        $rates = $this->getRates();
        $this->mapper->updateRates($rates);
        return "Rates UPDATED.\n";
    }
}
