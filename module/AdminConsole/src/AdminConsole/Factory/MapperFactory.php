<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace AdminConsole\Factory;

use Zend\ServiceManager\Factory\AbstractFactoryInterface;
use Interop\Container\ContainerInterface;


//mappers
use AdminConsole\Crons\Currency\CurrencyMapper;
//end


/**
 * Description of ControllerFactory
 *
 * @author rolf
 */
class MapperFactory implements AbstractFactoryInterface
{
    public function canCreate(ContainerInterface $container, $requestedName) {
        $arr = [
            CurrencyMapper::class
        ];
        return in_array($requestedName, $arr);
    }
    
    public function __invoke(ContainerInterface $container, $requestedName, array $options = null) {
        if(class_exists($requestedName)) {
            $db = $container->get('DatabaseService');
            switch ($requestedName) {
                case CurrencyMapper::class:
                    return new CurrencyMapper($db);
            }
        } else {
            throw new Exception("Class " . $requestedName . " does not exist. :-(");
        }
    }
}
