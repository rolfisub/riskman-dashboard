<?php
/**
 * Database factory
 *
 * @package   WebServices 
 * @author    Rolf
 * @copyright Copyright 2016 Trxadegroup, Inc.
 */

namespace Admin\Database;
use Zend\Db\Adapter\Adapter as DbAdapter;
use Zend\ServiceManager\Factory\FactoryInterface;
use Interop\Container\ContainerInterface;

class DatabaseFactory implements FactoryInterface
{
    public function __invoke (ContainerInterface $serviceLocator, $requestedName, array $options = null) 
    {
        $config = $serviceLocator->get('config'); 
        $config_key = $config['database_config']['database_config_key'];
        $adapter = new DbAdapter($config['db']['adapters'][$config_key]);
        return $adapter;
    }
}
