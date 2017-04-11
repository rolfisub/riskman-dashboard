<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Mapper;

use Zend\Db\Adapter\Adapter;
use Zend\Db\Sql\Sql;
use Zend\Db\ResultSet\ResultSet;

/**
 * Description of AbstractMapper
 *
 * @author rolf
 */
class AbstractMapper 
{
    protected $sql;
    protected $adapter;
    public function __construct(Adapter $adapter) 
    {
        $this->adapter = $adapter;
        $this->sql = new Sql($this->adapter);
    }
    protected function execObject($o)
    {
        $stmt = $this->sql->prepareStatementForSqlObject($o);
        $r = $stmt->execute();
        return $r;
    }
    
    protected function queryObject($query) 
    {
        $stmt = $this->sql->prepareStatementForSqlObject($query);
        $results = $stmt->execute();
        $result_set = new ResultSet();
        $result_set->initialize($results);
        return $result_set;
    }

}
