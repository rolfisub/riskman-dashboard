<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Entity;

use Admin\Entity\AbstractEntity;
use Admin\Error\Error400;
use Admin\Validators\Currency;
use Admin\Validators\OddFormat;
use Admin\Validators\TimeZone;

/**
 * Description of Admin
 *
 * @author rolf
 */
class BookFormat extends AbstractEntity
{
    public function __construct($data) 
    {
        $this->setCreateReqFields([
            'odd_format',
            'time_zone',
            'currency'
        ])->setCreateOptFields([
        ])->setUpdateReqFields([
            'odd_format',
            'time_zone',
            'currency'
        ])->setUpdateOptFields([
        ]);
        parent::__construct($data);
    }
    
    public function checkUpdateValid()
    {
        //check structure integrity
        $this->isUpdateStructValid();
        
        //odd_format
        if(isset($this->data['odd_format'])) {
            $oddFormat = new OddFormat();
            if(!$oddFormat->isValid($this->data['odd_format'])) {
                throw new Error400($oddFormat->getMessages());
            }
        }
        
        //time_zone
        if(isset($this->data['time_zone'])) {
            $timeZone = new TimeZone();
            if(!$timeZone->isValid($this->data['time_zone'])){
                throw new Error400($timeZone->getMessages());
            }
        }
        
        //currency
        if(isset($this->data['currency'])) {
            $currency = new Currency();
            if(!$currency->isValid($this->data['currency'])) {
                throw new Error400($currency->getMessages());
            }
        }
        
        //default
        if(isset($this->data['default'])) {
            $type = gettype($this->data['default']);
            if($type !== 'boolean') {
                throw new Error400('default field must be a boolean if specified.');
            }
        }
        
        return true;
    }
    
    /**
     * checks that the entity has been fed with validated data for creating an admin
     */
    public function checkCreateValid()
    {
        //validate structure
        $this->isCreateStructValid();
        
        $oddFormat = new OddFormat();
        if(!$oddFormat->isValid($this->data['odd_format'])) {
            throw new Error400($oddFormat->getMessages());
        }
        
        $timeZone = new TimeZone();
        if(!$timeZone->isValid($this->data['time_zone'])){
            throw new Error400($timeZone->getMessages());
        }
        
        $currency = new Currency();
        if(!$currency->isValid($this->data['currency'])) {
            throw new Error400($currency->getMessages());
        }
        
        //default
        if(isset($this->data['default'])) {
            $type = gettype($this->data['default']);
            if($type !== 'boolean') {
                throw new Error400('default field must be a boolean if specified.');
            }
        }
                
        
        return true;
        
    }
    
    /**
     * returns the hash of a string using BCrypt
     * @return string hash
     */
    public function getHash($input)
    {
        return (new Bcrypt())->create($input);
    }
    
    public function toArray()
    {
        return $this->data;
    }
    
}
