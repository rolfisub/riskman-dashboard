<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Admin\Traits;

/**
 * Description of Password
 *
 * @author rolf
 */
trait RankingsDefault
{
    public $rankingsDefault = [
        0 => [
            'rank' => 'A',
            'max_line_change_percent' => 50,
            'max_amount_expected' => 100,
            'limit_percent' => 10,
            'limit_amount' => 10
        ],
        1 => [
            'rank' => 'B',
            'max_line_change_percent' => 50,
            'max_amount_expected' => 500,
            'limit_percent' => 10,
            'limit_amount' => 50
        ],
        2 => [
            'rank' => 'C',
            'max_line_change_percent' => 50,
            'max_amount_expected' => 2000,
            'limit_percent' => 10,
            'limit_amount' => 200
        ],
        3 => [
            'rank' => 'D',
            'max_line_change_percent' => 50,
            'max_amount_expected' => 5000,
            'limit_percent' => 10,
            'limit_amount' => 500
        ],
        4 => [
            'rank' => 'E',
            'max_line_change_percent' => 50,
            'max_amount_expected' => 20000,
            'limit_percent' => 10,
            'limit_amount' => 2000
        ],
        5 => [
            'rank' => 'F',
            'max_line_change_percent' => 50,
            'max_amount_expected' => 100000,
            'limit_percent' => 10,
            'limit_amount' => 10000
        ],
        6 => [
            'rank' => 'G',
            'max_line_change_percent' => 50,
            'max_amount_expected' => 500000,
            'limit_percent' => 10,
            'limit_amount' => 50000
        ],
        7 => [
            'rank' => 'H',
            'max_line_change_percent' => 50,
            'max_amount_expected' => 2000000,
            'limit_percent' => 10,
            'limit_amount' => 200000
        ],
        8 => [
            'rank' => 'I',
            'max_line_change_percent' => 50,
            'max_amount_expected' => 10000000,
            'limit_percent' => 10,
            'limit_amount' => 1000000
        ],
        9 => [
            'rank' => 'J',
            'max_line_change_percent' => 50,
            'max_amount_expected' => 50000000,
            'limit_percent' => 10,
            'limit_amount' => 5000000
        ],
        10 => [
            'rank' => 'K',
            'max_line_change_percent' => 50,
            'max_amount_expected' => 100000000,
            'limit_percent' => 10,
            'limit_amount' => 10000000
        ],
        11 => [
            'rank' => 'L',
            'max_line_change_percent' => 50,
            'max_amount_expected' => 500000000,
            'limit_percent' => 10,
            'limit_amount' => 50000000
        ],
        12 => [
            'rank' => 'M',
            'max_line_change_percent' => 50,
            'max_amount_expected' => 1000000000,
            'limit_percent' => 10,
            'limit_amount' => 100000000
        ]
    ];
}
