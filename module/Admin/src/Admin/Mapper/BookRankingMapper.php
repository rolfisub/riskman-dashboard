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
use Admin\Entity\BookRanking;

/**
 * Description of StatsMapper
 *
 * @author rolf
 */
class BookRankingMapper extends AbstractMapper
{
    
    public function getBookRankingByBookId($bookId){
        $s = new Select('book_format');
        $s->columns([
            'odd_format',
            'time_zone',
            'currency'
        ]);
        $s->where([
            'book_id' => $bookId
        ]);
        $result = $this->queryObject($s);
        $data = $result->toArray();
        if(isset($data[0])) {
            $return = $data[0];
        } else {
            $return = $data;
        }
        return $return;
        
    }
    
    public function updateBookRanking ($bookId, BookRanking $ba) {
        $u = new Update('book_format');
        $u->set([
            'odd_format' => $ba->data['odd_format'],
            'time_zone' => $ba->data['time_zone'],
            'currency' => $ba->data['currency']
        ]);
        $u->where([
            'book_id' => $bookId
        ]);
        $result = $this->queryObject($u);
        return [$result];
    }
    
    public function insertBookRanking($bookId, BookRanking $ba) {
        $i = new Insert('book_format');
        $i->columns(['book_id', 'odd_format', 'time_zone', 'currency'])
                ->values([
                    $bookId,
                    $ba->data['odd_format'],
                    $ba->data['time_zone'],
                    $ba->data['currency']
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
