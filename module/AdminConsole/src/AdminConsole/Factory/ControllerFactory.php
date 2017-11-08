<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace AdminConsole\Factory;

use Zend\ServiceManager\Factory\AbstractFactoryInterface;
use Interop\Container\ContainerInterface;

//controllers
use AdminConsole\Crons\Currency\CurrencyController;
//end

//models
use AdminConsole\Crons\Currency\CurrencyModel;
//end


/**
 * Description of ControllerFactory
 *
 * @author rolf
 */
class ControllerFactory implements AbstractFactoryInterface
{
    public function canCreate(ContainerInterface $container, $requestedName) {
        $arr = [
            CurrencyController::class
        ];
        return in_array($requestedName, $arr);
    }
    
    public function __invoke(ContainerInterface $container, $requestedName, array $options = null) {
        if(class_exists($requestedName)) {
            switch ($requestedName) {
                case CurrencyController::class:
                    $model = $container->get(CurrencyModel::class);
                    return new CurrencyController($model);
            }
        } else {
            throw new Exception("Class " . $requestedName . " does not exist. :-(");
        }
    }
}
