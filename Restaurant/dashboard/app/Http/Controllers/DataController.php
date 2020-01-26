<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataController extends Controller
{
    public function data(){
        $data = ['name' => 'Md. Shariful Islam', 'age' => '25', 'designation' => 'web developer', 'company' => 'Innovation IT'];

        return $data;
    }
}
