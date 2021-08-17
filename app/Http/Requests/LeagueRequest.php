<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LeagueRequest extends FormRequest
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
        $id = $this->league ? $this->league['id'] : null;
        return [
            'name' => 'required|min:3|max:191|unique:leagues,name,' . $id,
            'logo' => $id ? 'nullable|image' : 'required|image',
        ];
    }
}
