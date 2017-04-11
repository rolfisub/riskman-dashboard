<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Mapper;

use Admin\Mapper\AbstractMapper;
use Zend\Db\Sql\Select;
use Zend\Db\Sql\Update;
use Zend\Db\Sql\Insert;
use Zend\Db\Sql\Where;
use Zend\Db\Sql\Expression as SqlExpression;
use Zend\Crypt\Password\Bcrypt;
use Admin\Error\Error400;
use Admin\Entity\Admin;

/**
 * Description of StatsMapper
 *
 * @author rolf
 */
class AdminsMapper extends AbstractMapper
{
    
    
    public function getAdminsData()
    {
        return [
            'admins_data' => $this->_getAdminsData(),
        ];
    }
    
    /**
     * gets the amount of successful requests
     * @return array
     */
    private function _getAdminsData()
    {
        $s = new Select();
        $s->from(['a'=>'admins'])
            ->columns([
                'user_name',
                'datetime'
            ])
            ->join(
                ['ai'=>'admins_info'],
                'a.id = ai.id',
                [
                    'email',
                    'first_name',
                    'last_name'
                    ]
                    
            );   
        $result = $this->queryObject($s);
        $data = $result->toArray();
        return $data;
    }
    
    /**
     * gets an admin entity from sql result
     * @param string $username
     * @return Admin
     */
    public function getAdminByUser($username)
    {
        $s = new Select();
        $s->from(['a'=>'admins'])
            ->columns([
                'user_name as username',
                'pass_word as password',
                'datetime'
            ])
            ->join(
                ['ai'=>'admins_info'],
                'a.id = ai.id',
                [
                    'email',
                    'first_name',
                    'last_name'
                    ]
                    
            )->where(['a.user_name'=> $username]);
        $result = $this->queryObject($s);
        $data = $result->toArray();
        $adminData = $this->getAdminDataFromSqlResult($data);
        return new Admin($adminData);
    }
    
    /**
     * maps sql result to Admin entity
     * @param array $data
     * @return array
     */
    private function getAdminDataFromSqlResult(array $data)
    {
        if(isset($data[0])) {
            return [
                'username' => $data[0]['username'],
                'password' => $data[0]['password'],
                'email' => $data[0]['email'],
                'firstname' => $data[0]['first_name'],
                'lastname' => $data[0]['last_name']
            ];
        }
        return [];
    }
    
    /**
     * is the username taken?
     * @param Admin $admin
     * @return boolean
     */
    private function isAdminUserExist(Admin $admin)
    {
       $a = $this->getAdminByUser($admin->data['username']);
       if($a->data['username'] !== null){
           return true;
       }
       return false;
    }
    
    
    public function createAdmin(Admin $admin)
    {
        //check if username already taken
        if($this->isAdminUserExist($admin)) {
            throw new Error400('username already exists');
        }

        //create user access
        $admin = $this->createAdminAccess($admin);
        
        //save user info
        $admin = $this->createAdminInfo($admin);

        return [
            'admin' => $admin
        ];
    }
    
    /**
     * create the admin access
     * @param Admin $admin
     * @return Admin
     */
    private function createAdminAccess(Admin $admin)
    {
        $i = new Insert('admins');
        $i->columns(['user_name','pass_word'])
            ->values([
                $admin->data['username'],
                $admin->data['password']
            ]);
        $this->queryObject($i);
        $id = $this->getAdminId($admin);
        $admin->data['id'] = $id;
        return $admin;
    }
    
    
    private function createAdminInfo(Admin $admin) 
    {
        $id = $admin->data['id'];
        $i = new Insert('admins_info');
        $i->columns(['id','email','first_name', 'last_name'])
            ->values([
                $admin->data['id'],
                $admin->data['email'],
                $admin->data['firstname'],
                $admin->data['lastname']
            ]);
        $this->queryObject($i);
        return $admin;
    }
    
    private function getAdminId(Admin $admin)
    {
        $s = new Select('admins');
        $s->columns(['id'])
            ->where(['user_name'=> $admin->data['username']]);
        $res = $this->queryObject($s);
        $data = $res->toArray();
        if(isset($data[0]['id'])) {
            return $data[0]['id'];
        }
        return null;
    }
    
    
}
