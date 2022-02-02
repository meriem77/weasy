<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Point;
use Illuminate\Http\Request;

class PointController extends Controller
{
    public function destributePoint(){

        $ditributePartners=Point::with('user')->where('value','=',0)->get();
        foreach ($ditributePartners as $ditributePartner){
            Point::where('id',$ditributePartner->id)->update([
                'value' => 20000,
            ]);
        }
        return response()->json(['success' => true]);
    }
}
