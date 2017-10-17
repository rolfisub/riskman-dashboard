<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Mapper;

use Zend\ServiceManager\Factory\AbstractFactoryInterface;
use Interop\Container\ContainerInterface;
/**
 * Description of MapperFactory
 *
 * @author rolf
 */
class MapperFactory implements AbstractFactoryInterface
{
    public function canCreate(ContainerInterface $serviceLocator, $requestedName) 
    {
        $objects = array(
            0 => 'Admin\\Mapper\\StatsMapper',
            1 => 'Admin\\Mapper\\AdminsMapper',
            2 => 'Admin\\Mapper\\BooksMapper',
            3 => 'Admin\\Mapper\\BookMapper',
            4 => 'Admin\\Mapper\\BookAuthMapper',
            5 => 'Admin\\Mapper\\BookFormatMapper'
        );
        return in_array($requestedName, $objects);
    }
    
    public function __invoke(ContainerInterface $serviceLocator, $requestedName, array $options = null) 
    {
        if (class_exists($requestedName)) {
            switch ($requestedName){
                case 'Admin\\Mapper\\StatsMapper':
                    $adapter = $serviceLocator->get('DatabaseService');
                    $o = new $requestedName($adapter);
                    return $o;
                case 'Admin\\Mapper\\AdminsMapper':
                    $adapter = $serviceLocator->get('DatabaseService');
                    $o = new $requestedName($adapter);
                    return $o;
                case 'Admin\\Mapper\\BooksMapper':
                    $adapter = $serviceLocator->get('DatabaseService');
                    $o = new $requestedName($adapter);
                    return $o;    
                case 'Admin\\Mapper\\BookMapper':
                    $adapter = $serviceLocator->get('DatabaseService');
                    $o = new $requestedName($adapter);
                    return $o;
                case 'Admin\\Mapper\\BookAuthMapper':
                    $adapter = $serviceLocator->get('DatabaseService');
                    $o = new $requestedName($adapter);
                    return $o;
                case 'Admin\\Mapper\\BookFormatMapper':
                    $adapter = $serviceLocator->get('DatabaseService');
                    $o = new $requestedName($adapter);
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