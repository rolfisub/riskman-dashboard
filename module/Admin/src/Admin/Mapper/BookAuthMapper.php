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
use Admin\Entity\BookAuth;

/**
 * Description of StatsMapper
 *
 * @author rolf
 */
class BookAuthMapper extends AbstractMapper
{
    
    public function getBookAuthByBookId($bookId){
        $s = new Select('oauth_clients');
        $s->columns([
            'client_id'
        ]);
        $s->where([
            'user_id' => $bookId
        ]);
        $result = $this->queryObject($s);
        $data = $result->toArray();
        if($data) {
            $data[0]['client_secret'] = '********';
            return $data[0];
        }
        return $data;
        
    }
    
    public function updateBookAuth($bookId, BookAuth $bookAuth) {
        $bookAuth2 = $this->getBookAuthByBookId($bookId);
        if($bookAuth2) {
            //update
            $this->updateAuth($bookId, $bookAuth);
            $bookAuth2 = $this->getBookAuthByBookId($bookId);
        } else {
            //create
            $this->insertAuth($bookId, $bookAuth);
            $bookAuth2 = $this->getBookAuthByBookId($bookId);
        }
        return [
            $bookAuth2
        ];
    }
    
    private function updateAuth ($bookId, BookAuth $ba) {
        $u = new Update('oauth_clients');
        $u->set([
            'client_id' => $ba->data['client_id'],
            'client_secret' => $this->getHash($ba->data['client_secret'])
        ]);
        $u->where([
            'user_id' => $bookId
        ]);
        $this->queryObject($u);
        return;
    }
    
    private function insertAuth ($bookId, BookAuth $ba) {
        $i = new Insert('oauth_clients');
        $i->columns(['client_id', 'client_secret', 'user_id', 'redirect_uri'])
                ->values([
                    $ba->data['client_id'],
                    $this->getHash($ba->data['client_secret']),
                    $bookId,
                    ''
                ]);
        $this->queryObject($i);
        return;
    }
    
    /**
     * returns the hash of a string using BCrypt
     * @return string hash
     */
    private function getHash($input)
    {
        return (new Bcrypt())->create($input);
    }
    
    
    /**
     * checks if a username is available
     * @param type $user
     * @return boolean
     */
    public function isUserAvail($user) {
        $s = new Select('oauth_clients');
        $s->columns([
            'client_id'
        ]);
        $s->where([
            'client_id' => $user
        ]);
        $res = $this->queryObject($s);
        $data = $res->toArray();
        if($data) {
            return false;
        } 
        return true;
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
