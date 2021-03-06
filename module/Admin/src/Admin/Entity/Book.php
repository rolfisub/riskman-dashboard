<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Entity;

use Admin\Entity\AbstractEntity;

use Zend\Validator\Digits;

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
        ])->setCreateOptFields([])->setUpdateReqFields([])->setUpdateOptFields([
            'name',
            'enabled'
        ]);
        parent::__construct($data);
    }
    
    public function checkUpdateValid()
    {
        //check structure integrity
        $this->isUpdateStructValid();
        
        //enabled field
        if(isset($this->data['enabled'])) {
            //validate field
            $enabled = $this->data['enabled'];
            if($enabled < 0 || $enabled > 1) {
                throw new Error400('Enabled field can only be 1 or 0, received: ' . $enabled);
            }
        }
        
        //check if is a string
        if(isset($this->data['name'])) {
            $name = $this->data['name'];
            if(!is_string($name)) {
                throw new Error400('Name field must be a string.');
            } elseif(strlen($name) < 3) {
                throw new Error400('Name field must at least 3 characters in length.');
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
        
        //validate name field
        if(isset($this->data['name'])) {
            if(strlen($this->data['name']) < 4) {
                throw new Error400('Name must be at least 4 characters in length.');
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
