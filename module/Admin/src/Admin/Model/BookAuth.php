<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Model;

use Admin\Mapper\BookAuthMapper;
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
    
}
