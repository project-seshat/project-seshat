window.sugarCubeImportScripts( 
    [
        "https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.min.js",
        window.scriptsPath + "relaxed-json.min.js",
        window.scriptsPath + "handlebars_helpers.js",
        window.scriptsPath + "stopwatch.js",
        window.scriptsPath + "audio.js"
    ]
);

$('head').append('<link rel="stylesheet" type="text/css" href="'+window.resourcesPath+'css/default.css">');
