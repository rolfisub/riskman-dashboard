<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace AdminConsole\Factory;

use Zend\ServiceManager\Factory\AbstractFactoryInterface;
use Interop\Container\ContainerInterface;


//models
use AdminConsole\Crons\Currency\CurrencyModel;
//end

//mappers
use AdminConsole\Crons\Currency\CurrencyMapper;
//end


/**
 * Description of ControllerFactory
 *
 * @author rolf
 */
class ModelFactory implements AbstractFactoryInterface
{
    public function canCreate(ContainerInterface $container, $requestedName) {
        $arr = [
            CurrencyModel::class
        ];
        return in_array($requestedName, $arr);
    }
    
    public function __invoke(ContainerInterface $container, $requestedName, array $options = null) {
        if(class_exists($requestedName)) {
            switch ($requestedName) {
                case CurrencyModel::class:
                    $mapper = $container->get(CurrencyMapper::class);
                    return new CurrencyModel($mapper);
            }
        } else {
            throw new Exception("Class " . $requestedName . " does not exist. :-(");
        }
    }
}
