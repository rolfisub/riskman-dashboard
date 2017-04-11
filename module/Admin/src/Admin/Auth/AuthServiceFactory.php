<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Auth;
use Zend\Authentication\Adapter\DbTable\CallbackCheckAdapter as DbTableAuthAdapter;
use Zend\Crypt\Password\Bcrypt;   
use Admin\Auth\RiskManAuthService;


/**
 * Description of AuthServiceFactory
 *
 * @author rolf
 */
class AuthServiceFactory 
{
    public function __invoke($sm) 
    {
         
        $config = $sm->get('config');
        $dbService = $config['database_config']['database_service'];
        $dbAdapter = $sm->get($dbService);
        $credentialCallBack = function($dbCredential, $requestCredential) {
            return (new Bcrypt())->verify($requestCredential, $dbCredential);
        };
        
        $dbTableAuthAdapter = new DbTableAuthAdapter(
            $dbAdapter, 
            'admins','user_name','pass_word', $credentialCallBack
        );
        

        $authService = new RiskManAuthService();
        
        $authService->setAdapter($dbTableAuthAdapter);
        $storage = $sm->get('myAuthStorage');
        $authService->setStorage($storage);
        
        return $authService;
    }
}
