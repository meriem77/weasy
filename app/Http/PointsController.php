<?php

namespace App\Http\Controllers;

use App\Models\Point;
use App\Models\PointHistory;

class PointsController extends Controller
{

    function get(){
        return Point::first()->value;
    }

    function edit($newvalue){
        try {
            $point = Point::first();
            
            PointHistory::create([
                'oldvalue' => $point->value,
                'newvalue' => $newvalue
            ]);
            
            $point->update(['value' => $newvalue]);
        } catch (\Exception $e) {
            return 0;
        }
        return 1;
    }
    
}
