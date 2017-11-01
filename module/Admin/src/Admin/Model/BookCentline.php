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
     * get oauth2 info by book id
     */
    public function getBookCentlineByBookId($bookId)
    {
        $rankings = $this->mapper->getBookCentlineByBookId($bookId);
        if($rankings) {
            return [
                'bookRanking' => [
                    'rankings' => json_decode($rankings['rankings'])
                ]
            ];
        } else {
            //insert default
            $bookRanking = new BookCentlineEntity($this->rankingsDefault);
            $this->mapper->insertBookCentline($bookId, $bookRanking);
        }
        return [
            'bookRanking' => [
                'rankings' => $this->rankingsDefault['rankings']
            ]
        ];
    }
    
    public function updateBookCentline($bookId, $data) 
    {
        $exists = $this->mapper->getBookCentlineByBookId($bookId);
        $bookRanking = new BookCentlineEntity($data);
        $result = [];
        if($exists) {
            if($bookRanking->checkUpdateValid()) {
                $result = $this->mapper->updateBookCentline($bookId, $bookRanking);
            }
        } else {
            if($bookRanking->checkCreateValid()) {
                $result = $this->mapper->insertBookCentline($bookId, $bookRanking);
            }
        }
        return[
            'bookRanking' => $result
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
