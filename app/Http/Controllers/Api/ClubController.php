<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ClubRequest;
use App\Http\Traits\UploadTrait;
use App\Models\Club;
use Illuminate\Http\Request;

class ClubController extends Controller
{
    use  UploadTrait;

    public function index(Request $request)
    {
        $clubs = Club::with('league:id,name')
            ->orderBy('name')
            ->where('league_id', $request->league_id)
            ->get();
        return response()->json($clubs);
    }

    public function store(ClubRequest $request): bool
    {
        if ($request->hasFile('logo')) {
            $imageName = $this->image($request->file('logo'));
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

    public function update($request, $id)
    {
        if ($request->hasFile('logo')) {
            $imageName = $this->image($request->file('logo'));
        }
        $club = Club::find($id);
        $club->league_id = $request->league_id;
        $club->name = $request->name;
        $club->slogan = $request->slogan;
        $club->logo = $request->hasFile('logo') ? $imageName : $club->logo;
        $club->save();
        return true;
    }
}
