<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LeagueRequest;
use App\Models\League;


class LeagueController extends Controller
{

    public function index()
    {
        $leagues = League::orderBy('id')->get();
        return response()->json($leagues);
    }

    public function store(LeagueRequest $request)
    {
        League::create($request->validated());
        return true;
    }

    public function edit(League $league)
    {
        return response()->json($league);
    }

    public function update(LeagueRequest $request, League $league)
    {
        $league->update($request->validated());
        return true;
    }
}
