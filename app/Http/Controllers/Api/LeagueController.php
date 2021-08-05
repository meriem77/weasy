<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LeagueRequest;
use App\Http\Traits\UploadTrait;
use App\Models\League;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class LeagueController extends Controller
{
    use  UploadTrait;

    public function index()
    {
        $leagues = League::latest()->get();
        return response()->json($leagues);
    }

    public function store(LeagueRequest $request)
    {
        if ($request->hasFile('logo')) {
            $imageName = $this->image($request->file('logo'));
        }
        $league = new League();
        $league->name = $request->name;
        $league->logo = $imageName;
        $league->save();
        return true;
    }

    public function edit($id)
    {
        $league = League::findOrFail($id);
        return response()->json($league);
    }

    public function update(LeagueRequest $request, $id)
    {
        if ($request->hasFile('logo')) {
            $imageName = $this->image($request->file('logo'));
        }
        $league = League::find($id);
        $league->name = $request->name;
        $league->logo = $request->hasFile('logo') ? $imageName : $league->logo;
        $league->save();
        return true;
    }
}
