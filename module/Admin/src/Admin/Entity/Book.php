<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Entity;

use Admin\Entity\AbstractEntity;

use Zend\Validator\StringLength;
use Zend\I18n\Validator\Alnum;
use Zend\Validator\EmailAddress;
use Zend\Crypt\Password\Bcrypt;

use Admin\Validators\Password;
use Admin\Error\Error400;
use Admin\Error\Error500;
/**
 * Description of Admin
 *
 * @author rolf
 */
class Book extends AbstractEntity
{
    public function __construct($data) 
    {
        $this->setCreateReqFields([
            'name'
        ])->setCreateOptFields([])->setUpdateReqFields([])->setUpdateOptFields([]);
        parent::__construct($data);
    }
    
    public function checkUpdateValid()
    {
        //check structure integrity
        $this->isUpdateStructValid();
        
        return true;
    }
    
    /**
     * checks that the entity has been fed with validated data for creating an admin
     */
    public function checkCreateValid()
    {
        //validate structure
        $this->isCreateStructValid();
        
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
