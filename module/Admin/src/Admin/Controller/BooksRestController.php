<?php
/**
 * @license   http://opensource.org/licenses/BSD-3-Clause BSD-3-Clause
 * @copyright Copyright (c) 2014 Zend Technologies USA Inc. (http://www.zend.com)
 */

namespace Admin\Controller;

use Admin\Controller\ProtectedRestfulController;
use Zend\View\Model\JsonModel;

use Admin\Model\Books;
use Admin\Model\BookModel;

class BooksRestController extends ProtectedRestfulController
{
    protected $model;
    protected $bookModel;
    
    public function __construct($cn,  Books $model, BookModel $bookModel) 
    {
        $this->model = $model;
        $this->bookModel = $bookModel;
        parent::__construct($cn);
    }
    /**
     * Get a list of the admin data
     */
    public function getList() 
    {
        return new JsonModel($this->model->getBooks());
    }
    
    public function get($id)
    {
        return new JsonModel($this->bookModel->getBook($id));
    }
    
    /**
     * Creates an admin
     * @param array $data
     * @return JsonModel response
     */
    public function create($data)
    {
        return new JsonModel($this->model->createBook($data));
    }
    
    /**
     * deletes and admin by its username
     * @param string $username
     * @return JsonModel response
     */
    public function delete($username) 
    {
        return new JsonModel([$username]);
    }
    
    /**
     * updates an admin based on the provided array
     * @param type $id
     * @param type $data
     */
    public function update($id, $data) 
    {
        return new JsonModel($this->model->updateBook($id, $data));
    }
    
    
}
