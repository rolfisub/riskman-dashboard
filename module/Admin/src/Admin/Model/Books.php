<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Model;

use Admin\Entity\Book;
use Admin\Mapper\BooksMapper;


/**
 * Description of Admins
 *
 * @author rolf
 */
class Books 
{
    protected $mapper;
    
    public function __construct(BooksMapper $mapper) 
    {
        $this->mapper = $mapper;
    }
    
    /**
     * Get list of books
     */
    public function getBooks()
    {
        return $this->mapper->getAllBooks();
    }
    
    
    public function updateBook($id, $data)
    {
        $book = new Book($data);
        if($book->checkUpdateValid()) {
            $book->data['id'] = $id;
            return $this->mapper->updateBook($book);
        }
    }
    
    
}
