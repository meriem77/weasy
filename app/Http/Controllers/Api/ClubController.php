<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ClubRequest;
use App\Models\Club;
use Illuminate\Http\Request;


class ClubController extends Controller
{

    public function index()
    {
        $club_id = request()->get('club_id');
        $clubs = Club::with('league:id,name')
            ->orderBy('name')->where('league_id', request()->get('league_id'));
        if ($club_id) {
            $clubs->where('id', $club_id);
        }
        return response()->json($clubs->get());
    }

    public function store(ClubRequest $request)
    {
        Club::create($request->validated());
        return true;
    }

    public function edit(Club $club)
    {
        return response()->json($club);
    }

    public function update(ClubRequest $request, Club $club)
    {
        $club->update($request->validated());
        return true;
    }

    public function search(Request $request)
    {
        $clubs = Club::orderBy('name')
            ->where('name', 'like', '%' . $request->name . '%')
            ->get();
        return response()->json($clubs);
    }
}
