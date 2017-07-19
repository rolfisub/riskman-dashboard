<?php
/**
 * @license   http://opensource.org/licenses/BSD-3-Clause BSD-3-Clause
 * @copyright Copyright (c) 2014 Zend Technologies USA Inc. (http://www.zend.com)
 */

namespace Admin\Controller;

use Admin\Entity\Auth;
use Zend\Mvc\Controller\AbstractRestfulController;
use Zend\View\Model\JsonModel;

use Admin\Model\Stats;

class AuthRestController extends AbstractRestfulController
{
    protected $sm;
    protected $admin;
    
    public function __construct($cn) 
    {
       $this->sm = $cn;
    }
    
    public function getAuthService()
    {
        if (! $this->authservice) {
            $this->authservice = $this->sm->get('myAuthService');
        }
        return $this->authservice;
    }
     
    public function getSessionStorage()
    {
        if (! $this->storage) {
            $this->storage = $this->sm->get('myAuthStorage');
        }
         
        return $this->storage;
    }
    
    
    public function getList() 
    {
       return new JsonModel([
           'test' => 'test'
       ]);
    }
    
    public function create($data) {
        $request = $this->getRequest();
        $auth = new Auth($data);
        if($auth->checkCreateValid()) {
            $this->getAuthService()->getAdapter()
                    ->setIdentity($auth->data['username'])
                    ->setCredential($auth->data['password']);
            $result = $this->getAuthService()->authenticate();

            if($result->isValid()) {
                //check if it has rememberMe :
                if ($auth->data['remmemberme'] == 1 ) {
                    $this->getSessionStorage()
                         ->setRememberMe(1);
                    //set storage again 
                    $this->getAuthService()->setStorage($this->getSessionStorage());
                }
                $this->getAuthService()->getStorage()->write($auth->data['username']);
                return new JsonModel([
                    'success' => true
                ]);
            }
            sleep(3);//avoid brute force attacks
            return new JsonModel([
                'success' => false
            ]);
        }
    }
    
    
}
