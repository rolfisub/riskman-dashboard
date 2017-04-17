<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Model;

use Admin\Mapper\AdminsMapper;
use Admin\Entity\Admin;
use Admin\Error\Error400;
/**
 * Description of Admins
 *
 * @author rolf
 */
class Admins 
{
    protected $mapper;
    
    public function __construct(AdminsMapper $mapper) 
    {
        $this->mapper = $mapper;
    }
    
    public function getAdminsData()
    {
        return $this->mapper->getAdminsData();
    }
    
    /**
     * creates an admin if valid
     * @param type $data
     * @return JsonModel
     * @throws Error400
     */
    public function createAdmin($data)
    {
        $admin = new Admin($data);
        if ($admin->checkCreateValid()) {
            return $this->mapper->createAdmin($admin);
        }
    }
    
    /**
     * deletes an admin if it exists
     * @param string $user
     */
    public function deleteAdmin($user)
    {
        $admin = new Admin([
            'username' => $user
        ]);
        
        if($this->mapper->isAdminUserExist($admin)) {
            //yes we can delete here
            return $this->mapper->deleteAdmin($admin);
        } else {
            //throw error 400
            throw new Error400('Admin ' . $user . ' doesn\'t exist.');
        }
    }
    
    
    
    
}
