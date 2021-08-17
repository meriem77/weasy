<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://kaiztech.co/images/small-logo.png" rel="icon">
    <link href="https://kaiztech.co/images/small-logo.png" rel="icon">
    <link href="https://kaiztech.co/images/small-logo.png" rel="apple-touch-icon">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Rubik:wght@500&display=swap"
          rel="stylesheet">
    <link href="{{asset('dist/css/app.css')}}?<?php echo time();?>" rel="stylesheet">
    <title>{{env('app_name')}}</title>
</head>
<body>
<div id="app"></div>
<script src="{{asset('dist/js/app.js')}}?<?php echo time();?>"></script>
</body>
</html>
<style>
    .v-application {
        font-family: 'Rubik', sans-serif;
    }

    .theme--light.v-application {
        background: #f2f5f8;
        color: rgba(0, 0, 0, .87);
    }

    .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
        color: rgba(0, 0, 0, 0.62);
    }

    .theme--light.v-data-table {
        color: rgba(0, 0, 0, 0.74);
    }

    .theme--light.v-application .text--primary {
        color: rgba(0, 0, 0, 0.74) !important;
    }

    .v-card.v-sheet.theme--light, .white.v-sheet.theme--light.v-toolbar, .v-sheet.theme--light.v-toolbar.v-app-bar.v-app-bar--fixed.white {
        box-shadow: 0 3px 10px -2px rgba(85, 85, 85, .08), 0 2px 20px 0 rgba(85, 85, 85, .06), 0 1px 30px 0 rgba(85, 85, 85, .03);
    }

    .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
        box-shadow: 0 3px 10px -2px rgba(85, 85, 85, .08), 0 2px 20px 0 rgba(85, 85, 85, .06), 0 1px 30px 0 rgba(85, 85, 85, .03);
    }
</style>
