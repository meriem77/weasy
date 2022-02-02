<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//         \App\Models\Admin::create([
//             'role' => 'admin',
//             'fonction' => 'Admin',
//             'name' => 'Admin',
//             'email' => 'admin@admin.com',
//             'password' => Hash::make('admin'),
//         ]);


//         \App\Models\WazaPoint::create([
//             'value' => 1000000,
//
//         ]);
//
        \App\Models\User::create([
            'fullName' => 'admin',
            'subName' => 'admin',
            'email' => 'admin@admin.com',
            'phone' => '09948474',
            'type' => 4,
            'password' => Hash::make('admin'),
        ]);
    }
}
