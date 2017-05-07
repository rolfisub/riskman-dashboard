<?php

namespace Admin\Forms;
 
use Zend\Form\Form;
//use Zend\Form\Element;
 
/**
 * @Annotation\Hydrator("Zend\Stdlib\Hydrator\ObjectProperty")
 * @Annotation\Name("Login")
 */
class Login extends Form
{
    public function __construct() 
    {
        
        parent::__construct();
        
        //username
        $this->add([
            'name' => 'username',
            'options' => [
                'label' => 'Username'
            ],
            'attributes' => [
                'class' => 'form-control',
                'required' => true
            ],
            'type' => 'Text'
        ]);
        
        //password
        $this->add([
            'name' => 'password',
            'options' => [
                'label' => 'Password'
            ],
            'attributes' => [
                'class' => 'form-control',
                'required' => true
            ],
            'type' => 'Zend\Form\Element\Password'
        ]);
        
        //rememberme
        $this->add([
            'name' => 'rememberme',
            'options' => [
                'label' => 'Remember me: '
            ],
            'attributes' => [
                'class' => 'checkbox-inline'               
            ],
            'type' => 'Zend\Form\Element\Checkbox'
        ]);
        
        //submit
        $this->add([
            'name' => 'submit',
            'attributes' => [
                'class' => 'btn btn-lg btn-primary btn-block btn-signin',
                'value' => 'Login'
            ],
            'type' => 'Zend\Form\Element\Submit'
        ]);
    }
    
    
}