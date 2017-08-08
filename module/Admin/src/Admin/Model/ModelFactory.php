<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Model;

use Zend\ServiceManager\Factory\AbstractFactoryInterface;
use Interop\Container\ContainerInterface;

/**
 * Description of ModelFactory
 *
 * @author rolf
 */
class ModelFactory implements AbstractFactoryInterface
{
    public function canCreate(ContainerInterface $serviceLocator, $requestedName) 
    {
        $objects = array(
            0 => 'Admin\\Model\\Stats',
            1 => 'Admin\\Model\\Admins',
            2 => 'Admin\\Model\\Books',
        );
        return in_array($requestedName, $objects);
    }
    
    public function __invoke(ContainerInterface $serviceLocator, $requestedName, array $options = null) 
    {
        if (class_exists($requestedName)) {
            switch ($requestedName){
                case 'Admin\\Model\\Stats':
                    $mapper = $serviceLocator->get('Admin\\Mapper\\StatsMapper');
                    $o = new $requestedName($mapper);
                    return $o;
                case 'Admin\\Model\\Admins':
                    $mapper = $serviceLocator->get('Admin\\Mapper\\AdminsMapper');
                    $o = new $requestedName($mapper);
                    return $o;
                case 'Admin\\Model\\Books':
                    $mapper = $serviceLocator->get('Admin\\Mapper\\BooksMapper');
                    $o = new $requestedName($mapper);
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