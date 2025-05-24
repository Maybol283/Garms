<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <title>Garms</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    @php
    $manifestPath = public_path('assets/.vite/manifest.json');
    $manifest = file_exists($manifestPath) ? json_decode(file_get_contents($manifestPath), true) : [];

    // Debug output
    echo "<!-- Manifest path: " . $manifestPath . " -->\n";
    echo "<!-- Manifest exists: " . (file_exists($manifestPath) ? 'yes' : 'no') . " -->\n";
    echo "<!-- Manifest contents: " . json_encode($manifest) . " -->\n";

    // Get the latest JS and CSS files
    $jsFile = '';
    $cssFile = '';

    $files = scandir(public_path('assets'));
    foreach ($files as $file) {
    if (str_starts_with($file, 'index') && str_ends_with($file, '.js')) {
    $jsFile = $file;
    }
    if (str_starts_with($file, 'index') && str_ends_with($file, '.css')) {
    $cssFile = $file;
    }
    }

    echo "<!-- JS File: " . $jsFile . " -->\n";
    echo "<!-- CSS File: " . $cssFile . " -->\n";
    @endphp

    @if($cssFile)
    <link rel="stylesheet" href="{{ asset('assets/' . $cssFile) }}">
    @endif
</head>

<body>
    <div id="root"></div>
    @if($jsFile)
    <script type="module" defer src="{{ asset('assets/' . $jsFile) }}"></script>
    @endif
</body>

</html>