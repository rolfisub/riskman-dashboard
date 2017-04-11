<?php

namespace Admin\Forms;
 
use Zend\Form\Annotation;
 
/**
 * @Annotation\Hydrator("Zend\Stdlib\Hydrator\ObjectProperty")
 * @Annotation\Name("Login")
 */
class Login
{
    /**
     * @Annotation\Type("Zend\Form\Element\Text")
     * @Annotation\Required({"required":"true" })
     * @Annotation\Filter({"name":"StripTags"})
     * @Annotation\Options({"label":"Username"})
     * @Annotation\Attributes({"class":"form-control"})
     */
    public $username;
     
    /**
     * @Annotation\Type("Zend\Form\Element\Password")
     * @Annotation\Required({"required":"true" })
     * @Annotation\Filter({"name":"StripTags"})
     * @Annotation\Options({"label":"Password"})
     * @Annotation\Attributes({"class":"form-control"})
     */
    public $password;
     
    /**
     * @Annotation\Type("Zend\Form\Element\Checkbox")
     * @Annotation\Options({"label":"Remember me: "})
     * @Annotation\Attributes({"class":"checkbox-inline"})
     */
    public $rememberme;
     
    /**
     * @Annotation\Type("Zend\Form\Element\Submit")
     * @Annotation\Attributes({"value":"Login","class":"btn btn-lg btn-primary btn-block btn-signin"})
     */
    public $submit;
}