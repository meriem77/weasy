<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ClubRequest;
use App\Http\Traits\UploadTrait;
use App\Models\Club;

class ClubController extends Controller
{
    use  UploadTrait;

    public function index()
    {
        $clubs = Club::with('league:id,name')
            ->orderBy('name')
            ->where('league_id', request()->get('league_id'))
            ->get();
        return response()->json($clubs);
    }

    public function store(ClubRequest $request): bool
    {
        if ($request->hasFile('logo')) {
            $imageName = $this->image($request->file('logo'), 'clubs', '');
        }
        $club = new Club();
        $club->league_id = $request->league_id;
        $club->name = $request->name;
        $club->slogan = $request->slogan;
        $club->logo = $imageName;
        $club->save();
        return true;
    }

    public function edit($id)
    {
        $club = Club::findOrFail($id);
        return response()->json($club);
    }

    public function update(ClubRequest $request, $id)
    {
        $club = Club::find($id);
        $club->league_id = $request->league_id;
        $club->name = $request->name;
        $club->slogan = $request->slogan;
        if ($request->hasFile('logo')) {
            $imageName = $this->image($request->file('logo'), 'clubs', $league->logo);
            $club->logo = $imageName;
        }
        $club->save();
        return true;
    }
}
