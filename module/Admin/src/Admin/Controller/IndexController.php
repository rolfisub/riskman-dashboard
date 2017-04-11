<?php
/**
 * @license   http://opensource.org/licenses/BSD-3-Clause BSD-3-Clause
 * @copyright Copyright (c) 2014 Zend Technologies USA Inc. (http://www.zend.com)
 */

namespace Admin\Controller;

use Admin\Controller\ProtectedController;
use Zend\View\Model\ViewModel;

class IndexController extends ProtectedController
{
    public function indexAction()
    {
        return new ViewModel();
    }
    
    public function usersAction()
    {
        return new ViewModel();
    }
    
    public function booksAction()
    {
        return new ViewModel();
    }
    
    public function adminsAction()
    {
        return new ViewModel();
    }
    
    public function reportsAction()
    {
        return new ViewModel();
    }
}
