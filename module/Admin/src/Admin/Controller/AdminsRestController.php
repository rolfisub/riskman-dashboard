<?php
/**
 * @license   http://opensource.org/licenses/BSD-3-Clause BSD-3-Clause
 * @copyright Copyright (c) 2014 Zend Technologies USA Inc. (http://www.zend.com)
 */

namespace Admin\Controller;

use Admin\Controller\ProtectedRestfulController;
use Zend\View\Model\JsonModel;

use Admin\Model\Admins;

class AdminsRestController extends ProtectedRestfulController
{
    protected $model;
    public function __construct($cn,  Admins $model) 
    {
       $this->model = $model;
       parent::__construct($cn);
    }
    /**
     * Get a list of the admin data
     */
    public function getList() 
    {
       return new JsonModel($this->model->getAdminsData());
    }
    
    public function get($name)
    {
//        switch ($name) 
//        {
//            case 'general_api_model':
//                return new JsonModel($this->model->getApiGeneralStats());
//            case 'book_api_model':
//                return new JsonModel($this->model->getBookApiStats());            
//            case 'last24_activity':
//                return new JsonModel($this->model->get24HrsGraphData());
//            case 'monthly_activity':
//                return new JsonModel($this->model->getMonthlyGraphData());
//            case 'users_model':
//                return new JsonModel($this->model->getUsersStats());
//        }
        return;
    }
    
    /**
     * Creates an admin
     * @param JsonModel $data
     */
    public function create($data)
    {
        return new JsonModel($this->model->createAdmin($data));
    }
    
    
}
