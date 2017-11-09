<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace AdminConsole\Crons\Currency;
use AdminConsole\Crons\Currency\CurrencyEntity;

use Admin\Mapper\AbstractMapper;

use Zend\Db\Sql\Select;
use Zend\Db\Sql\Update;
use Zend\Db\Sql\Insert;

/**
 * Description of CurrencyMapper
 *
 * @author rolf
 */
class CurrencyMapper extends AbstractMapper
{
    public function updateRates(CurrencyEntity $rates)
    {   
        echo "\n";
        foreach($rates->rates['rates'] as $code => $rate) {
            $myRate = $this->getRateByCode($code);
            //code exists
            if($myRate) {
                //update
                $this->updateRate($code, $rate);
            } else {
                //insert
                $this->insertRate($code, $rate);
            }
            echo ".";
        }
        echo "\n";
    }
    
    
    private function getRateByCode($code) 
    {
        $s = new Select('exchange_rates');
        $s->where([
            'code' => $code
        ]);
        $res = $this->queryObject($s);
        $data = $res->toArray();
        return $data;
    }
    
    private function updateRate($code, $rate, $base = 'USD') 
    {
        $u = new Update('exchange_rates');
        $u->set([
            'rate' => $rate,
            'base' => $base
        ]);
        $u->where([
            'code' => $code
        ]);
        return $this->queryObject($u);
    }
    
    private function insertRate($code, $rate, $base = 'USD') 
    {
        $i = new Insert('exchange_rates');
        $i->columns([
            'code',
            'rate',
            'base'
        ]);
        $i->values([
            $code,
            $rate,
            $base
        ]);
        return $this->queryObject($i);
    }
    
}
