<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Publicity;
use Illuminate\Http\Request;

class PublicityController extends Controller
{
    public function getAds(){
        return response()->json([
            'success' => true,
            'data' => Publicity::latest()->paginate(10),
        ]);

    }

    public function store(Request $request){


        $this->validate($request,[
            'link'=>'required',
            'type'=>'required',
            'expiration_date'=>'required',
        ]);

        $images=array();
        for ($i=0;$i<$request->lengthImages;$i++)
        {
            $name = 'image' . $i;
            $file = uniqid() .'.'. $request->file($name)->extension();
            $path = $request->file($name)->storeAs(
                'public/uploads', $file
            );

            $images[] = env('APP_URL').'storage/uploads/' .  $file;

        }

        $publicity = new Publicity();
        $publicity->images=implode(";",$images);
        $publicity->link=$request->link;
        if ($request->type=='Market'){
            $publicity->type = Publicity::type_market;
        }else{
            $publicity->type = Publicity::type_people;
        }
        $publicity->expiration_date = $request->expiration_date;
        $publicity->save();

        return response()->json(['success' => true]);
    }
}
