<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace AdminConsole;

use Zend\Mvc\ModuleRouteListener;
use Zend\Mvc\MvcEvent;
use Zend\Console\Adapter\AdapterInterface as Console;

/**
 * Description of Module
 *
 * @author rolf
 */
class Module {
    public function onBootstrap(MvcEvent $e)
    {
        $eventManager        = $e->getApplication()->getEventManager();
        $moduleRouteListener = new ModuleRouteListener();
        $moduleRouteListener->attach($eventManager);
    }

    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }

    public function getAutoloaderConfig()
    {
        return array(
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__,
                ),
            ),
        );
    }
    
    /**
     * get console usage commands
     */
    public function getConsoleUsage(Console $console)
    {
        return [
            'test'
                // Describe available commands
//                'get happen [--verbose|-v] <doname>'    => 'Get Process already happen',

                // Describe expected parameters
//                array( 'doname',            'Process Name' ),
//                array( '--verbose|-v',     '(optional) turn on verbose mode'        ),

        ];
    }
    
    
}
