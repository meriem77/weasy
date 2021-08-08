<?php

namespace Database\Seeders;

use Carbon\Carbon;
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
        \App\Models\Admin::create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('admin'),
        ]);

        \App\Models\Faf::create([
            'first_name' => 'Madi',
            'last_name' => 'Mouloud',
            'email' => 'Mouloud@faf.com',
            'password' => Hash::make('mouloud'),
        ]);

        \App\Models\Version::create([
            'version' => '0.0.1',
            'created_at' => Carbon::now(),
        ]);
    }
}
