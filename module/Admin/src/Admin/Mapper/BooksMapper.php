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
use Admin\Entity\Book;

/**
 * Description of StatsMapper
 *
 * @author rolf
 */
class BooksMapper extends AbstractMapper
{
    public function getAllBooks()
    {
        return[
            'books' => $this->_getAllBooks()
        ];
    }
    
    private function _getAllBooks()
    {
        $s = new Select();
        $s->from(['b'=>'books'])
            ->columns([
                'id',
                'name',
                'enabled',
                'datetime'
            ]);
        $result = $this->queryObject($s);
        $data = $result->toArray();
        return $data;
    }
    
    public function updateBook(Book $book)
    {   
        //update all optional fields
        $this->_updateBookAll($book);
        
        return [
            'book' => $this->getBookById($book->data['id'])[0]
        ];
    }
    
    public function getBookById($id)
    {
        $s = new Select();
        $s->from('books')->where(['id' => (int)$id]);
        $res = $this->queryObject($s);
        $data = $res->toArray();
        return $data;
    }
    
    private function _updateBookAll(Book $book)
    {
        $set = [];
        if(isset($book->data['enabled'])) {
            $set = array_merge($set, ['enabled' => (int)$book->data['enabled']]);
        }
        if(isset($book->data['name'])) {
            $set = array_merge($set, ['name' => $book->data['name']]);
        }
        $u = new Update('books');
        $u->set($set);
        $u->where(['id' => (int)$book->data['id']]);
        $this->queryObject($u);
    }
    
    public function createBook(Book $book) {
        $i = new Insert('books');
        $i->columns(['name'])
                ->values([$book->data['name']]);
        $this->queryObject($i);
        return $this->getAllBooks();
    }
}
