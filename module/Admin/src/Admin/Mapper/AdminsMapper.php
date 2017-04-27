<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Mapper;

use Admin\Mapper\AbstractMapper;
use Zend\Db\Sql\Select;
use Zend\Db\Sql\Delete;
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
    public function isAdminUserExist(Admin $admin)
    {
       $a = $this->getAdminByUser($admin->data['username']);
       if($a->data['username'] !== null){
           return true;
       }
       return false;
    }
    
    /**
     * 
     * @param Admin $admin
     * @return type
     * @throws Error400
     */
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
     * 
     * @param Admin $admin
     * @throws Error400
     */
    public function updateAdmin(Admin $admin)
    {
        //check if username exists
        if(!$this->isAdminUserExist($admin)) {
            throw new Error400('username doesn\'t exist.');
        }
        
        //if sending current pasword verify is matching records
        if(isset($admin->data['password']) && !empty($admin->data['password'])) {
            if(!$this->isPasswordMatch($admin)) {
                throw new Error400('password doesn\'t match current password.');
            }
        }
        
        //are we updating password?
        if(isset($admin->data['passwordnew']) && !empty($admin->data['passwordnew'])) {
            $this->setNewPassword($admin);
        }
        
        //update admin info
        $id = $this->getAdminId($admin);
        $u = new Update('admins_info');
        $u->set([
            'email' => $admin->data['email'],
            'first_name' => $admin->data['firstname'],
            'last_name' => $admin->data['lastname']
        ]);
        $u->where([
            'id' => $id
        ]);
        $this->queryObject($u);
        return [
            'admin' => $admin->toArray()
        ];
    }
    
    /**
     * 
     * @param string $newPssword
     */
    private function setNewPassword(Admin $admin)
    {
        $u = new Update('admins');
        $u->set([
            'pass_word' => $admin->getHash($admin->data['passwordnew'])
        ]);
        $u->where([
            'id' => $this->getAdminId($admin)
        ]);
        $this->queryObject($u);
        return true;
    }
    
    /**
     * 
     * @param Admin $admin
     */
    private function isPasswordMatch(Admin $admin)
    {
        sleep(1);//method to avoid brute force
        return (new Bcrypt())->verify($admin->data['password'], $this->getPasswordHashFromDB($admin));
    }
    
    /**
     * 
     * @param Admin $admin
     */
    private function getPasswordHashFromDB (Admin $admin)
    {
        $s = new Select();
        $s->from(['a'=>'admins'])
            ->columns([
                'pass_word as password'
            ])
            ->where(['a.user_name'=> $admin->data['username']]);
        $result = $this->queryObject($s);
        $data = $result->toArray();
        return $data[0]['password'];
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
    
    /**
     * Creates an admin in the database
     * @param Admin $admin
     * @return Admin
     */
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
    
    /**
     * Gets an admin Id by username
     * @param Admin $admin
     * @return type
     */
    public function getAdminId(Admin $admin)
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
    
    /**
     * Deletes and admin in the database
     * @param Admin $admin
     * @return type
     */
    public function deleteAdmin(Admin $admin) 
    {
        $d = new Delete('admins');
        $d->where([
            'user_name' => $admin->data['username']
        ]);
        $this->queryObject($d);
        return [
            'admin' => $admin
        ];
    }
    
    
}
