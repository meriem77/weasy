<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('fullName')->nullable();
            $table->string('subName')->nullable();
            $table->date('dob')->nullable();
            $table->string('picture')->nullable();
            $table->tinyInteger('gender')->nullable();
            $table->string('profession')->nullable();
            $table->bigInteger('wilaya_id')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->tinyInteger('is_freelancer')->nullable();
            $table->tinyInteger('is_verified')->nullable();
            $table->tinyInteger('receive_ads')->nullable();
            $table->string('token')->nullable();
            $table->tinyInteger('hide_phone')->nullable();
            $table->string('code_verification')->nullable();
            $table->tinyInteger('is_kaiztech_team')->nullable();
            $table->string('company')->nullable();
            $table->string('website')->nullable();
            $table->string('device_token')->nullable();
            $table->dateTime('onligne_at')->nullable();
            $table->tinyInteger('type')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
