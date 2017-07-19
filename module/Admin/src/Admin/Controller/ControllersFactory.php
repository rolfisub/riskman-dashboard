<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Controller;
use Zend\ServiceManager\Factory\AbstractFactoryInterface;
use Interop\Container\ContainerInterface;
/**
 * Description of ControllersFactory
 *
 * @author rolf
 */
class ControllersFactory implements AbstractFactoryInterface
{
    public function canCreate(ContainerInterface $serviceLocator, $requestedName) 
    {
        $objects = array(
            0 => 'Admin\\Controller\\IndexController',
            1 => 'Admin\\Controller\\AuthController',
            2 => 'Admin\\Controller\\StatsRestController',
            3 => 'Admin\\Controller\\AdminsRestController',
            4 => 'Admin\\Controller\\AuthRestController',
        );
        return in_array($requestedName, $objects);
    }
    
    public function __invoke(ContainerInterface $serviceLocator, $requestedName, array $options = null) 
    {
        $services = $serviceLocator;
        if (class_exists($requestedName)) {
            switch ($requestedName){
                case 'Admin\\Controller\\IndexController':
                    $o = new $requestedName($serviceLocator);
                    return $o;
                case 'Admin\\Controller\\AuthController':
                    $o = new $requestedName($serviceLocator);
                    return $o;
                case 'Admin\\Controller\\StatsRestController':
                    $stats = $services->get('Admin\\Model\\Stats'); 
                    $o = new $requestedName($serviceLocator, $stats);
                    return $o;
                case 'Admin\\Controller\\AdminsRestController':
                    $model = $services->get('Admin\\Model\\Admins'); 
                    $o = new $requestedName($serviceLocator, $model);
                    return $o;
                case 'Admin\\Controller\\AuthRestController':
                    $o = new $requestedName($serviceLocator);
                    return $o;
            }
        }
        else {
            echo "you are looking for a class that doesn't exist : " . $requestedName;
            die();
        }
        return false;
    }
}
