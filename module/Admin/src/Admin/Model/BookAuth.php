<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Model;

use Admin\Mapper\BookAuthMapper;
use Admin\Error\Error400;

use Admin\Entity\BookAuth as BookAuthEntity;
/**
 * Description of AuthBook
 *
 * @author rolf
 */
class BookAuth 
{
    public $mapper;
    
    public function __construct(BookAuthMapper $mapper) {
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
        $bookAuth = new BookAuthEntity($data);
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
