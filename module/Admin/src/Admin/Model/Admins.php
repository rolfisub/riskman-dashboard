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
    
    
    /**
     * Gets a list of existing admins
     * @return array
     */
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
     * @param string $username
     */
    public function deleteAdmin($username)
    {
        if($this->isAdminExistentAndNotMain($username)) {
            $admin = new Admin([
                'username' => $username
            ]);
            return $this->mapper->deleteAdmin($admin);
        }
    }
    
    /**
     * updates an admin if exists and valid
     * @param string $username
     * @param array $data
     * @return array
     */
    public function updateAdmin($username, $data) 
    {
        if($this->isAdminExistentAndNotMain($username)) {
            $admin = new Admin($data);
            $admin->data['username'] = $username;
            if($admin->checkUpdateValid()){
                return $this->mapper->updateAdmin($admin);
            }
        }
    }
 
    /**
     * gets an admin by its username for editing, while is not the main admin
     * @param string $username
     * @return array
     */
    public function getAdminByUsername($username) 
    {
        $admin = $this->mapper->getAdminByUser($username);
        return $admin->toArray();   
    }
    
    /**
     * checks that the admin exists, and that is not the main admin
     * @param string $username
     * @return boolean
     * @throws Error400
     */
    private function isAdminExistentAndNotMain ($username) 
    {
        $admin = new Admin([
            'username' => $username
        ]);
        if($this->mapper->isAdminUserExist($admin)) {
            //make sure we dont delete admin.id = 1
            $id = $this->mapper->getAdminId($admin);
            if($id == 1) {
                throw new Error400('You can\'t modify the main Admin account.');
            } else {
                //yes we can do things
                return true;
            }
        } else {
            //throw error 400
            throw new Error400('Admin ' . $user . ' doesn\'t exist.');
        }
    }
    
    
    
}
