<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Controller;
use Zend\Mvc\Controller\AbstractRestfulController;
use Zend\Mvc\MvcEvent as e;
use Admin\Error\Error403;
/**
 * Description of ProtectedController
 *
 * @author rolf
 */
class ProtectedRestfulController extends AbstractRestfulController
{
    /*
     *@var auth 
     */
    public $auth;
    
    public function __construct($cn) 
    {
        $sm = $cn;
        $this->auth = $sm->get('myAuthService');
    }
    
    public function onDispatch(e $e) 
    {
        if(!$this->auth->hasIdentity()){
            throw new Error403("User not Authenticated");
            //return $this->redirect()->toRoute('Login');
        }
        return parent::onDispatch($e);
    }
    
    
}
