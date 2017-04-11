<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Model;

use Admin\Mapper\StatsMapper;
/**
 * Description of Stats
 *
 * @author rolf
 */
class Stats 
{
    protected $stats;
    
    public function __construct(StatsMapper $stats) 
    {
        $this->stats = $stats;
    }
    
    public function testMe()
    {
       return $this->stats->testMeMapper();   
    }
    
    public function getAllStats()
    {
        $generalApiStats = $this->getApiGeneralStats();
        $bookApiStats = $this->getBookApiStats();
        $last24Stats = $this->get24HrsGraphData();
        $monthlyStats = $this->getMonthlyGraphData();
        $usersStats = $this->getUsersStats();
        $result = array_merge($generalApiStats, $bookApiStats, $last24Stats, $monthlyStats, $usersStats);
        return $result;
    }
    
    public function getApiGeneralStats()
    {
        return [
            'general_api_stats' => $this->stats->getApiGeneralStats()
        ];
    }
    
    public function getBookApiStats()
    {
        return[
            'book_api_stats' => []
        ];
    }
    
    public function get24HrsGraphData()
    {
        return[
            'last24_activity' => []
        ];
    }
    
    public function getMonthlyGraphData()
    {
        return[
            'monthly_activity' => []
        ];
    }
    
    public function getUsersStats()
    {
        return[
            'users_stats' => []
        ];
    }
    
}
