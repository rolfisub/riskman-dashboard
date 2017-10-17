<?php
/**
 * @license   http://opensource.org/licenses/BSD-3-Clause BSD-3-Clause
 * @copyright Copyright (c) 2014 Zend Technologies USA Inc. (http://www.zend.com)
 */

namespace Admin\Controller;

use Admin\Controller\ProtectedRestfulController;
use Zend\View\Model\JsonModel;

use Admin\Model\BookFormat as BookFormatModel;

class BookFormatRestController extends ProtectedRestfulController
{
    protected $model;
    public function __construct($cn,  BookFormatModel $model) 
    {
        $this->model = $model;
        parent::__construct($cn);
    }
    /**
     * Get a list of the admin data
     */
    public function getList() 
    {
        return new JsonModel();
    }
    
    public function get($id)
    {
        return new JsonModel($this->model->getBookFormatByBookId($id));
    }
    
    /**
     * Creates an admin
     * @param array $data
     * @return JsonModel response
     */
    public function create($data)
    {
        
        return new JsonModel(['test' => $data]);
    }
    
    /**
     * deletes and admin by its username
     * @param string $username
     * @return JsonModel response
     */
    public function delete($id) 
    {
        return new JsonModel(['test' => 'test']);
    }
    
    /**
     * updates an admin based on the provided array
     * @param type $id
     * @param type $data
     */
    public function update($bookId, $data) 
    {
        return new JsonModel($this->model->updateBookFormat($bookId, $data));
    }
    
    
}
