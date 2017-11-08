<?php
/**
 * @author Rolf Bansbach
 */

return array(
    'console' => [
        'router' => [
            'routes' => [
                'get-currency-update' => [
                    'options' => [
                        'route' => 'currency rate update',
                        'defaults' => [
                            'controller' => AdminConsole\Crons\Currency\CurrencyController::class,
                            'action' => 'updateRates'
                        ]
                    ]
                ]
            ]
        ]
    ],
    'service_manager' => [
        'abstract_factories' => [
            AdminConsole\Factory\ModelFactory::class,
            AdminConsole\Factory\MapperFactory::class
        ],
        'factories' => [],
        'invokables' => []
    ],
    'controllers' => [
        'abstract_factories' => [
            AdminConsole\Factory\ControllerFactory::class
        ],
        'invokables' => [
            
        ],
    ],
    'listeners' => [       
    ],
);
