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
/**
 * Description of Admin
 *
 * @author rolf
 */
class Auth extends AbstractEntity
{
    public function __construct($data) 
    {
        $this->setCreateReqFields([
            'username',
            'password'
        ])->setCreateOptFields([
            'remmemberme'
        ]);
        parent::__construct($data);
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
        
        //remmemberme OPTIONAL
        $remmemberme = $this->data['remmemberme'];
        if($remmemberme !== null) {
            if($remmemberme != 1 || $remmemberme != 0) {
                throw new Error400('remmemberme field needs to be 0 or 1');
            }
        }
        
        return true;
        
    }
    
    
    public function toArray()
    {
        return $this->data;
    }
    
}
