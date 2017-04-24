<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Entity;

use Admin\Error\Error400;

/**
 * Description of AbstractEntity
 *
 * @author rolf
 */
abstract class AbstractEntity 
{
    public $data = [];
    public $create_req_fields = [];
    public $create_opt_fields = [];
    public $update_req_fields = [];
    public $update_opt_fields = [];
    
    
    /**
     * create a new entity
     * @param array $data
     */
    public function __construct(array $data) {
       $this->data = $data;
    }
    
    /**
     * set create required fields
     * @return self
     */
    public function setCreateReqFields (array $fields) 
    {
        $this->create_req_fields = $fields;
        return $this;
    }
    /**
     * set create optional fields
     * @return self
     */
    public function setCreateOptFields (array $fields)
    {
        $this->create_opt_fields = $fields;
        return $this;
    }
    
    /**
     * set create required fields
     * @return self
     */
    public function setUpdateReqFields (array $fields) 
    {
        $this->create_req_fields = $fields;
        return $this;
    }
    /**
     * set create optional fields
     * @return self
     */
    public function setUpdateOptFields (array $fields)
    {
        $this->create_opt_fields = $fields;
        return $this;
    }
    
    /**
     * checks if data structure is valid
     * @return boolean true if valid, false otherwise
     */
    public function isUpdateStructValid()
    {
        return ($this->checkUpdateRequiredFields() && $this->checkUpdateAlienFields());
    }
    
    /**
     * checks if data structure is valid
     * @return boolean true if valid, false otherwise
     */
    public function isCreateStructValid()
    {
        return ($this->checkCreateRequiredFields() && $this->checkCreateAlienFields());
    }
    
    /**
     * Checks if any field is missing from the required list
     * @return boolean
     * @throws Error400
     */
    private function checkUpdateRequiredFields()
    {
        foreach($this->update_req_fields as $key => $value) 
        {
            if(!isset($this->data[$value])) {
                $e = new Error400('required field: ? is missing from request', $value);
                //var_dump($e);die();
                throw $e;
            }
        }
        return true;
    }
    
    /**
     * Checks if any field is missing from the required list
     * @return boolean
     * @throws Error400
     */
    private function checkCreateRequiredFields()
    {
        foreach($this->create_req_fields as $key => $value) 
        {
            if(!isset($this->data[$value])) {
                $e = new Error400('required field: ? is missing from request', $value);
                //var_dump($e);die();
                throw $e;
            }
        }
        return true;
    }
    
    /**
     * Checks if there are any alien fields that are not either optional or required
     * @return boolean
     * @throws Error400
     */
    private function checkUpdateAlienFields() 
    {
        foreach($this->data as $key => $value) 
        {
            if(!$this->isUpdateFieldOptField($key) && !$this->isUpdateFieldReqField($key)) {
                throw new Error400('field: ? is not part of this API', $key);
            }
        }
        return true;
    }
    
    /**
     * Checks if there are any alien fields that are not either optional or required
     * @return boolean
     * @throws Error400
     */
    private function checkCreateAlienFields() 
    {
        foreach($this->data as $key => $value) 
        {
            if(!$this->isCreateFieldOptField($key) && !$this->isCreateFieldReqField($key)) {
                throw new Error400('field: ? is not part of this API', $key);
            }
        }
        return true;
    }
    
    /**
     * checks if field is part of create optional fields
     * @param string $needle
     * @return boolean
     */
    private function isCreateFieldOptField($needle)
    {
        return in_array($needle, $this->create_opt_fields);
    }
    /**
     * checks if field is part fo create required fields
     * @param string $needle
     * @return boolean
     */
    private function isCreateFieldReqField($needle)
    {
        return in_array($needle, $this->create_req_fields);
    }
    
    /**
     * checks if field is part of update optional fields
     * @param string $needle
     * @return boolean
     */
    private function isUpdateFieldOptField($needle)
    {
        return in_array($needle, $this->update_opt_fields);
    }
    /**
     * checks if field is part fo update required fields
     * @param string $needle
     * @return boolean
     */
    private function isUpdateFieldReqField($needle)
    {
        return in_array($needle, $this->update_req_fields);
    }
    
    
    
    
    
    
    
}
