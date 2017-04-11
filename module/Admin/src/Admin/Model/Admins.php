<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Model;

use Admin\Mapper\AdminsMapper;
use Admin\Entity\Admin;
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
    
    
}
