<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\RoleRequest;
use App\Models\Role;

class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::all();
        return response()->json($roles);
    }

    public function edit(Role $role)
    {
        return response()->json($role);
    }

    public function store(RoleRequest $request)
    {
        Role::create($request->validated());
        return true;
    }

    public function update(RoleRequest $request, Role $role)
    {
        $role->update($request->validated());
        return true;
    }

    public function destroy(Role $role)
    {
        $role->delete();
        return true;
    }
}
