<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FafRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name'=>'required|min:3|max:191',
            'last_name'=>'required|min:3|max:191',
            'email'=>'required|email|min:3|max:191',
            'password'=>'required|min:5|max:50',
        ];
    }
}