@component('mail::message')
<p>Bonjour {{$details['Full_Name']}} </p>
<p>Votre mot de passe est : {{$details['password']}}</p>
@endcomponent
