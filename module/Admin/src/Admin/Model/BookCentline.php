<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Model;

use Admin\Mapper\BookCentlineMapper;
use Admin\Error\Error400;
use Admin\Traits\CentlinePresets;

use Admin\Entity\BookCentline as BookCentlineEntity;
/**
 * Description of AuthBook
 *
 * @author rolf
 */
class BookCentline
{
    use CentlinePresets;
    
    public $mapper;
    
    public function __construct(BookCentlineMapper $mapper) {
        $this->mapper = $mapper;
    }
    
    
    /**
     * get centline info by book id
     */
    public function getBookCentlineByBookId($bookId)
    {
        $centline = $this->mapper->getBookCentlineByBookId($bookId);
        if($centline['centline']) {
            return [
                'bookCentline' => [
                    'centline' => json_decode($centline['centline'])
                ]
            ];
        }
        return [
            'bookCentline' => [
                'centline' => []
            ]
        ];
    }
    
    public function updateBookCentline($bookId, $data) 
    {
        $exists = $this->mapper->getBookCentlineByBookId($bookId);
        $bookCentline = new BookCentlineEntity($data);
        $result = [];
        if($exists) {
            if($bookCentline->checkUpdateValid()) {
                $result = $this->mapper->updateBookCentline($bookId, $bookCentline);
            }
        } else {
            if($bookCentline->checkCreateValid()) {
                $result = $this->mapper->insertBookCentline($bookId, $bookCentline);
            }
        }
        return[
            'bookCentline' => $result
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
