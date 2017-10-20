<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Model;

use Admin\Mapper\BookRankingMapper;
use Admin\Error\Error400;
use Admin\Traits\RankingsDefault;

use Admin\Entity\BookRanking as BookRankingEntity;
/**
 * Description of AuthBook
 *
 * @author rolf
 */
class BookRanking
{
    use RankingsDefault;
    
    public $mapper;
    
    public function __construct(BookRankingMapper $mapper) {
        $this->mapper = $mapper;
    }
    
    
    /**
     * get oauth2 info by book id
     */
    public function getBookRankingByBookId($bookId)
    {
        $rankings = $this->mapper->getBookRankingByBookId($bookId);
        if($rankings) {
            return [
                'bookRanking' => $rankings
            ];
        }
        return [
            'bookRanking' => [
                'rankings' => $this->rankingsDefault
            ]
        ];
    }
    
    public function updateBookRanking($bookId, $data) 
    {
        $exists = $this->mapper->getBookRankingByBookId($bookId);
        $bookRanking = new BookRankingEntity($data);
        $result = [];
        if($exists) {
            if($bookRanking->checkUpdateValid()) {
                $result = $this->mapper->updateBookRanking($bookId, $bookRanking);
            }
        } else {
            if($bookRanking->checkCreateValid()) {
                $result = $this->mapper->insertBookRanking($bookId, $bookRanking);
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
