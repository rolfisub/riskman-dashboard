<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Mapper;

use Admin\Mapper\AbstractMapper;

use Zend\Db\Sql\Where;
use Zend\Db\Sql\Expression as SqlExpression;

/**
 * Description of StatsMapper
 *
 * @author rolf
 */
class StatsMapper extends AbstractMapper
{
    
    public function testMeMapper()
    {
        return [];
    }
    
    public function getApiGeneralStats()
    {
        
        return [
            'api_requests' => $this->getApiRequestsCount(),
            'api_errors' => $this->getApiErrorsCount(),
            'server_exceptions' => $this->getApiServerErrorsCount(),
            'bets' => $this->getApiBetsCount(),
            'suggestions' => 0,
            'admins' => 1,
            'users' => 1,
            'books' => 2
        ];
    }
    
    /**
     * gets the amount of successful requests
     * @return int
     */
    private function getApiRequestsCount()
    {
        $s = $this->sql->select('apilog');
        $s->columns([
            'apilogCount' => new SqlExpression('COUNT(*)')
        ]);
        $w = new Where();
        $w->equalTo('http_code', 200);
        $s->where($w);
        $result = $this->queryObject($s);
        $arr = $result->toArray();
        return $arr[0]['apilogCount'];
    }
    
    /**
     * gets the amount of api error requests
     * @return int
     */
    private function getApiErrorsCount()
    {
        $s = $this->sql->select('apilog');
        $s->columns([
            'apilogCount' => new SqlExpression('COUNT(*)')
        ]);
        $w = new Where();
        $w->greaterThanOrEqualTo('http_code', 400)
            ->AND
            ->lessThan('http_code', 500);
        $s->where($w);
        $result = $this->queryObject($s);
        $arr = $result->toArray();
        return $arr[0]['apilogCount'];
    }
    
    /**
     * gets the amount of server error requests
     * @return int
     */
    private function getApiServerErrorsCount()
    {
        $s = $this->sql->select('apilog');
        $s->columns([
            'apilogCount' => new SqlExpression('COUNT(*)')
        ]);
        $w = new Where();
        $w->equalTo('http_code', 500);
        $s->where($w);
        $result = $this->queryObject($s);
        $arr = $result->toArray();
        return $arr[0]['apilogCount'];
    }
    
    /**
     * gets the amount of bets (single + multiple)
     * @return int
     */
    private function getApiBetsCount()
    {
        $singlesCount = $this->getBetsCount('single');
        $multipleCount = $this->getBetsCount('multiple');
        $total = $singlesCount + $multipleCount;
        return $total;
    }
    
    /**
     * gets the bet count for the specified table
     * @param string $table
     * @return int
     */
    private function getBetsCount($table)
    {
        $s = $this->sql->select($table);
        $s->columns([
            'count' => new SqlExpression('COUNT(*)')
        ]);
        $result = $this->queryObject($s);
        $arr = $result->toArray();
        return $arr[0]['count'];
    }
}
