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
            //save id
            $book->data['id'] = (int)$id;
            
            //check if book exist
            $myBookData = $this->mapper->getBookById($book->data['id']);
            if(empty($myBookData)) {
                throw new Error400('Book id ' . $book->data['id'] . ' not found.');
            }
            
            //update book
            return $this->mapper->updateBook($book);
        }
    }
    
    public function createBook($data) {
        $book = new Book($data);
        if($book->checkCreateValid()) {
            return $this->mapper->createBook($book);
        }
    }
    
    
}
