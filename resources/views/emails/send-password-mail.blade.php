@component('mail::message')
<p>Bonjour {{$details['first_name']}} {{$details['last_name']}},</p>
<p>Votre mot de passe est : {{$details['password']}}</p>
@endcomponent
