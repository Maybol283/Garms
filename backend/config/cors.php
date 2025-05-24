<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['/api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],

    'allowed_origins' => [
        'http://localhost:5173',     // Local Vite dev server
        'http://localhost:8000',     // Local Laravel server
        'http://127.0.0.1:8000',     // Local IP address
        'http://127.0.0.1:5173',     // Local IP address for Vite
        'http://localhost:3000',     // Alternative local port
        'http://127.0.0.1:3000',     // Alternative local IP
        env('FRONTEND_URL', ''),     // Production frontend URL
    ],

    'allowed_origins_patterns' => [
        // Allow any localhost port for development
        '/^http:\/\/localhost:\d+$/',
        '/^http:\/\/127\.0\.0\.1:\d+$/',
    ],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,

];
