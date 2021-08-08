<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClubRequest extends FormRequest
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
            'league_id' => 'required|exists:leagues,id',
            'name' => 'required|min:3|max:191|unique:clubs,name,' . $this->club,
            'slogan' => 'required|min:2|max:191|unique:clubs,slogan,' . $this->club,
            'logo' => $this->club ? 'nullable|image' : 'required|image',
        ];
    }
}
