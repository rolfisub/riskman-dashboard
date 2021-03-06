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
            3 => 'Admin\\Model\\BookModel',
            4 => 'Admin\\Model\\BookAuth',
            5 => 'Admin\\Model\\BookFormat',
            6 => 'Admin\\Model\\BookRanking',
            7 => 'Admin\\Model\\BookCentline',
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
                case 'Admin\\Model\\BookModel':
                    $mapper = $serviceLocator->get('Admin\\Mapper\\BookMapper');
                    $books = $serviceLocator->get('Admin\\Mapper\\BooksMapper');
                    $o = new $requestedName($mapper, $books);
                    return $o;
                case 'Admin\\Model\\BookAuth':
                    $mapper = $serviceLocator->get('Admin\\Mapper\\BookAuthMapper');
                    $o = new $requestedName($mapper);
                    return $o;
                case 'Admin\\Model\\BookFormat':
                    $mapper = $serviceLocator->get('Admin\\Mapper\\BookFormatMapper');
                    $o = new $requestedName($mapper);
                    return $o;
                case 'Admin\\Model\\BookRanking':
                    $mapper = $serviceLocator->get('Admin\\Mapper\\BookRankingMapper');
                    $o = new $requestedName($mapper);
                    return $o;
                case 'Admin\\Model\\BookCentline':
                    $mapper = $serviceLocator->get('Admin\\Mapper\\BookCentlineMapper');
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