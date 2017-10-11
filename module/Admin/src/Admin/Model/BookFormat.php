<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Model;

use Admin\Mapper\BookFormatMapper;
use Admin\Error\Error400;

use Admin\Entity\BookFormat as BookFormatEntity;
/**
 * Description of AuthBook
 *
 * @author rolf
 */
class BookFormat
{
    public $mapper;
    
    public function __construct(BookFormatMapper $mapper) {
        $this->mapper = $mapper;
    }
    
    
    /**
     * get oauth2 info by book id
     */
    public function getBookAuthByBookId($bookId)
    {
        return [
            'bookAuth' => $this->mapper->getBookAuthByBookId($bookId)
        ];
    }
    
    public function createUpdateBookAuth($bookId, $data) 
    {
        $bookAuth = new BookFormatEntity($data);
        $result = [];
        if($bookAuth->checkUpdateValid() || $bookAuth->checkCreateValid()) {
            $result = $this->mapper->updateBookAuth($bookId, $bookAuth);
        }
        return[
            'bookAuth' => $result
        ];
    }
    
    public function deleteBookAuth($bookId) {
        return [
            $this->mapper->deleteBookAuth($bookId)
        ];
    }
    
    public function isUserAvail ($user) {        
        if($this->mapper->isUserAvail($user)) {
            return ["isAvail" => true];
        } else {
            throw new Error400('User not available');
        }
    }
    
}
