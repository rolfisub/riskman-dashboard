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
use Zend\Crypt\Password\Bcrypt;

use Admin\Validators\Password;
use Admin\Error\Error400;

/**
 * Description of Admin
 *
 * @author rolf
 */
class BookAuth extends AbstractEntity
{
    public function __construct($data) 
    {
        $this->setCreateReqFields([
            'client_id',
            'client_secret'
        ])->setCreateOptFields([
            'query_type'
        ])->setUpdateReqFields([
            'client_id'
        ])->setUpdateOptFields([
            'client_secret'
        ]);
        parent::__construct($data);
    }
    
    public function checkUpdateValid()
    {
        //check structure integrity
        $this->isUpdateStructValid();
        
        //client_id
        $strlen = new StringLength(['min'=>'4', 'max'=>'32']);
        if(!$strlen->isValid($this->data['client_id'])){
            throw new Error400('Username needs to be between 4 and 32 in length');
        }
        $alnum = new Alnum();
        if(!$alnum->isValid($this->data['client_id'])){
            throw new Error400('Username can only contain alpha numeric characters ?');
        }
        
        //client_secret
        if(isset($this->data['client_secret']) && !empty($this->data['client_secret'])) {
            //check for minimum
            $password = new Password();
            if(!$password->isValid($this->data['client_secret'])) {
                throw new Error400($password->getMessages());
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
        
        //username
        //alphanumeric
        //min 4 max 32
        $strlen = new StringLength(['min'=>'4', 'max'=>'32']);
        if(!$strlen->isValid($this->data['username'])){
            throw new Error400('username needs to be between 4 and 32 in length');
        }
        $alnum = new Alnum();
        if(!$alnum->isValid($this->data['username'])){
            throw new Error400('username can only contain alpha numeric characters ?');
        }
        //password
        $password = new Password();
        if(!$password->isValid($this->data['password'])) {
            throw new Error400($password->getMessages());
        }

        /**
         * once everything is ready we hash the password
         */
        
        //create password hash and save it
        $this->data['password'] = $this->getHash($this->data['password']);         
        
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
