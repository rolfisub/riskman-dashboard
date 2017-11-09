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
    
    public function deleteBookAuth($bookId) {
        $d = new Delete('oauth_clients');
        $d->where(['user_id' => $bookId]);
        $this->queryObject($d);
        
        //delete the tokens as well
        $this->deleteBookAuthTokens($bookId);
        return[$bookId];
    }
    
    /**
     * deletes the tokens so access is disabled
     * @param type $bookId
     */
    private function deleteBookAuthTokens($bookId) {
        $d = new Delete('oauth_access_tokens');
        $d->where(['user_id' => $bookId]);
        $this->queryObject($d);
        return[$bookId];
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
    
}
