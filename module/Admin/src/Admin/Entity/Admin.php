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
class Admin extends AbstractEntity
{
    public function __construct($data) 
    {
        $this->setCreateReqFields([
            'username',
            'password',
            'email',
            'firstname',
            'lastname'
        ])->setCreateOptFields([
        ]);
        parent::__construct($data);
    }
    
    /**
     * checks that the entity has been fed with validated data
     */
    public function checkCreateValid()
    {
        //validate structure
        $this->isCreateStructValid();
        
        //validate each field
        /*
         * 'username',
            'password',
            'email',
            'firstname',
            'lastname'
         */
        
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
        
        //email
        $email = new EmailAddress();
        if (!$email->isValid($this->data['email'])) {
            throw new Error400($email->getMessages());
        }
        
        //firstname & lastname
        $namesLen = new StringLength(['min'=> '1', 'max' => '64']);
        if(!$namesLen->isValid($this->data['firstname'])) {
            throw new Error400('firstname needs to be between 1 and 64 in length');
        }
        if(!$namesLen->isValid($this->data['lastname'])) {
            throw new Error400('lastname needs to be between 1 and 64 in length');
        }
        
        
        /**
         * once everything is ready we hash the password
         */
        
        //create password hash and save it
        $hash = $this->getPasswordHash();
        $this->data['password'] = $hash;
        
        return true;
        
    }
    
    /**
     * returns the hash of the entity password
     * @return string password hash
     * @throws Error500
     */
    private function getPasswordHash()
    {
        if(isset($this->data['password'])) {
            $b = new Bcrypt();
            return $b->create($this->data['password']);
        } else {
            throw new Error500('getPasswordHash failed because password string is not yet set');
        }
        
    }
    
}
