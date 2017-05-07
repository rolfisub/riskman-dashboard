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
    
    public function get($username)
    {
        return new JsonModel($this->model->getAdminByUsername($username));
    }
    
    /**
     * Creates an admin
     * @param array $data
     * @return JsonModel response
     */
    public function create($data)
    {
        return new JsonModel($this->model->createAdmin($data));
    }
    
    /**
     * deletes and admin by its username
     * @param string $username
     * @return JsonModel response
     */
    public function delete($username) 
    {
        return new JsonModel($this->model->deleteAdmin($username));
    }
    
    /**
     * updates an admin based on the provided array
     * @param type $username
     * @param type $data
     */
    public function update($username, $data) 
    {
        return new JsonModel($this->model->updateAdmin($username, $data));
    }
    
    
}
