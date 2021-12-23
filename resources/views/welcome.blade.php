<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://dashboard.waza.fun/waza-small.png" rel="icon">
    <link href="https://dashboard.waza.fun/waza-small.png" rel="icon">
    <link href="https://dashboard.waza.fun/waza-small.png" rel="apple-touch-icon">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Rubik:wght@600&display=swap"
          rel="stylesheet">
{{--    <link href="{{asset('dist/js/app.css')}}" rel="stylesheet">--}}
    <link href="{{asset('dist/icon/icon.css')}}" rel="stylesheet">
    <title>{{env('APP_NAME')}}</title>
</head>
<body>
<div id="app"></div>
<link href="{{asset('dist/add-style.min.css')}}" rel="stylesheet">
<script src="{{asset('dist/js/app.js')}}?<?php echo time();?>"></script>
</body>
</html>
