<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\SendPasswordMailToAdmin;

use App\Mail\SendPasswordToCompany;
use App\Models\Company;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class CompanyController extends Controller
{
    public function getCompanies(){
        return response()->json([
            'success' => true,
            'data' => Company::where('validated',0)->latest()->paginate(10),
        ]);
    }


    public function confirmCompany($id){


        $company=Company::where('id',$id)->first();
        $password = Str::random(12);
        $details = [
            'Full_Name' => $company->name,
            'password' => $password,
        ];
        Mail::to($company->email)->send(new SendPasswordToCompany($details));

        Company::where('id',$id)->update([
            'validated' => 1,
            'password' => Hash::make($password),
        ]);


        return response()->json(['success' => true]);

    }

    public function deleteCompany($id){

        $company=Company::where('id',$id)->first();
        $details = [
            'Full_Name' => $company->name,
        ];
        Mail::to($company->email)->send(new SendPasswordMailToAdmin($details));

        Company::where('id',$id)->delete();

        return response()->json(['success' => true]);

    }
}
