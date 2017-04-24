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
        ])->setUpdateReqFields([
            'username'
        ])
        ->setUpdateOptFields([
            'password',
            'passwordnew',            
            'email',
            'firstname',
            'lastname'
        ]);
        parent::__construct($data);
    }
    
    public function checkUpdateValid()
    {
        //check structure integrity
        $this->isUpdateStructValid();
        
        //username
        $strlen = new StringLength(['min'=>'4', 'max'=>'32']);
        if(!$strlen->isValid($this->data['username'])){
            throw new Error400('username needs to be between 4 and 32 in length');
        }
        $alnum = new Alnum();
        if(!$alnum->isValid($this->data['username'])){
            throw new Error400('username can only contain alpha numeric characters ?');
        }
        
        //email optional
        if(isset($this->data['email'])) {
            $email = new EmailAddress();
            if (!$email->isValid($this->data['email'])) {
                throw new Error400($email->getMessages());
            }
        }
        
        $namesLen = new StringLength(['min'=> '1', 'max' => '64']);
        //firstname
        if(isset($this->data['firstname'])) {
            if(!$namesLen->isValid($this->data['firstname'])) {
                throw new Error400('firstname needs to be between 1 and 64 in length');
            }
        }
        
        //lastname
        if(isset($this->data['lastname'])) {
            if(!$namesLen->isValid($this->data['lastname'])) {
                throw new Error400('lastname needs to be between 1 and 64 in length');
            }
        }
        
        //password
        if(isset($this->data['password'])) {
            //check for minimum
            $password = new Password();
            if(!$password->isValid($this->data['password'])) {
                throw new Error400($password->getMessages());
            }
            
            //hash password
            $this->data['password'] = $this->getHash($this->data['password']);
            
        }
        
        //passwordnew
        if(isset($this->data['passwordnew'])) {
            //check for minimum
            $password = new Password();
            if(!$password->isValid($this->data['passwordnew'])) {
                throw new Error400($password->getMessages());
            }
            
            //check that password is set
            if(!isst($this->data['password'])) {
                throw new Error400('Please provide current password to update it.');
            }
            
            $this->data['passwordnew'] = $this->getHash($this->data['passwordnew']);
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
        $this->data['password'] = $this->getHash($this->data['password']);         
        
        return true;
        
    }
    
    /**
     * returns the hash of a string using BCrypt
     * @return string hash
     */
    private function getHash()
    {
        $b = new Bcrypt();
        return $b->create($this->data['password']);
    }
    
    public function toArray()
    {
        return $this->data;
    }
    
}
