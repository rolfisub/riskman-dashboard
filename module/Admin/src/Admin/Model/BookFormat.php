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
    public function getBookFormatByBookId($bookId)
    {
        return [
            'bookFormat' => $this->mapper->getBookFormatByBookId($bookId)
        ];
    }
    
    public function updateBookFormat($bookId, $data) 
    {
        $bookFormat = new BookFormatEntity($data);
        $result = [];
        if($bookFormat->checkUpdateValid()) {
            $result = $this->mapper->updateBookFormat($bookId, $bookFormat);
        }
        return[
            'bookFormat' => $result
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
