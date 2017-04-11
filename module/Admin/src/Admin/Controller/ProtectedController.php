<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Controller;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\Mvc\MvcEvent as e;
use Admin\Auth\RiskManAuthService;
/**
 * Description of ProtectedController
 *
 * @author rolf
 */
class ProtectedController extends AbstractActionController
{
    /*
     *@var auth 
     */
    public $auth;
    
    public function __construct($cn) 
    {
        $sm = $cn->getServiceLocator();
        $this->auth = $sm->get('myAuthService');
    }
    
    public function onDispatch(e $e) 
    {
        if(!$this->auth->hasIdentity()){
            return $this->redirect()->toRoute('Login');
        }
        return parent::onDispatch($e);
    }
    
    
}
