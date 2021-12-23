@component('mail::message')
<p>Bonjour {{$details['name']}},</p>
<p>Votre mot de passe est : {{$details['password']}}</p>
@endcomponent
