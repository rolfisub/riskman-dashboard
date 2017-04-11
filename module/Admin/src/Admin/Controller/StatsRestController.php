<?php
/**
 * @license   http://opensource.org/licenses/BSD-3-Clause BSD-3-Clause
 * @copyright Copyright (c) 2014 Zend Technologies USA Inc. (http://www.zend.com)
 */

namespace Admin\Controller;

use Admin\Controller\ProtectedRestfulController;
use Zend\View\Model\JsonModel;

use Admin\Model\Stats;

class StatsRestController extends ProtectedRestfulController
{
    protected $stats;
    public function __construct($cn, Stats $stats) 
    {
       $this->stats = $stats;
       parent::__construct($cn);
    }
    
    public function getList() 
    {
       return new JsonModel($this->stats->getAllStats());
    }
    
    public function get($name)
    {
        switch ($name) 
        {
            case 'general_api_stats':
                return new JsonModel($this->stats->getApiGeneralStats());
            case 'book_api_stats':
                return new JsonModel($this->stats->getBookApiStats());            
            case 'last24_activity':
                return new JsonModel($this->stats->get24HrsGraphData());
            case 'monthly_activity':
                return new JsonModel($this->stats->getMonthlyGraphData());
            case 'users_stats':
                return new JsonModel($this->stats->getUsersStats());
        }
        return;
    }
}
