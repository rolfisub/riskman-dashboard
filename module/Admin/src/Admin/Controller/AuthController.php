<?php
//module/SanAuth/src/SanAuth/Controller/AuthController.php
namespace Admin\Controller;
 
use Zend\Mvc\Controller\AbstractActionController;
use Zend\Form\Annotation\AnnotationBuilder;
use Zend\View\Model\ViewModel;
 
use Admin\Forms\Login;
 
class AuthController extends AbstractActionController
{
    protected $form;
    protected $storage;
    protected $authservice;
    protected $sm;
    protected $viewModel;
    public function __construct($sm) {
        if($this->sm === null){
            $this->sm = $sm;
        }
       
        
        
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
     
    public function getForm()
    {
        if (!$this->form) {
            $login = new Login();
            $builder = new AnnotationBuilder();
            $this->form = $builder->createForm($login);
        }
         
        return $this->form;
    }
     
    public function loginAction()
    {
        $this->layout('layout/auth');
        //if already login, redirect to success page 
        if ($this->getAuthService()->hasIdentity()){
            return $this->redirect()->toRoute('Home');
        }
        
        
        $form = $this->getForm();
         
        return new ViewModel([
            'form'      => $form,
            'messages'  => $this->flashmessenger()->getMessages()
        ]);
    }
     
    public function authenticateAction()
    {
        $form = $this->getForm();
        $redirect = 'Login';
        
        $request = $this->getRequest();
        if ($request->isPost()){
            $form->setData($request->getPost());
            if ($form->isValid()){
                //check authentication...
                $this->getAuthService()->getAdapter()
                    ->setIdentity($request->getPost('username'))
                    ->setCredential($request->getPost('password'));
                                        
                $result = $this->getAuthService()->authenticate();
                foreach($result->getMessages() as $message)
                {
                    //save message temporary into flashmessenger
                    $this->flashmessenger()->addMessage($message);
                }
                 
                if ($result->isValid()) {
                    $redirect = 'Home';
                    //check if it has rememberMe :
                    if ($request->getPost('rememberme') == 1 ) {
                        $this->getSessionStorage()
                             ->setRememberMe(1);
                        //set storage again 
                        $this->getAuthService()->setStorage($this->getSessionStorage());
                    }
                    $this->getAuthService()->getStorage()->write($request->getPost('username'));
                }
            }
        }
         
        return $this->redirect()->toRoute($redirect);
    }
     
    public function logoutAction()
    {
        $this->getSessionStorage()->forgetMe();
        $this->getAuthService()->clearIdentity();
         
        $this->flashmessenger()->addMessage("You've been logged out");
        return $this->redirect()->toRoute('Login');
    }
}