<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Entity;

use Admin\Entity\AbstractEntity;
use Admin\Error\Error400;
use Admin\Validators\Rankings;

/**
 * Description of Admin
 *
 * @author rolf
 */
class BookRanking extends AbstractEntity
{
    public function __construct($data) 
    {
        $this->setCreateReqFields([
            'rankings'
        ])->setCreateOptFields([
        ])->setUpdateReqFields([
            'rankings'
        ])->setUpdateOptFields([
        ]);
        parent::__construct($data);
    }
    
    public function checkUpdateValid()
    {
        //check structure integrity
        $this->isUpdateStructValid();
        
        //rankings
        if(isset($this->data['rankings'])) {
            $Rankings = new Rankings();
            if(!$Rankings->isValid($this->data['rankings'])) {
                throw new Error400($Rankings->getMessages());
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
        
        //rankings
        $Rankings = new Rankings();
        if(!$Rankings->isValid($this->data['rankings'])) {
            throw new Error400($Rankings->getMessages());
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
