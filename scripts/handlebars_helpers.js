
window.sugarCubeMacros.aiRender = {
    handler: function (a,b,c){
        var appendLocation = document.createElement('div');
        a.appendChild(appendLocation);
        var jsonArg = c[0];
        var templateArg = c[1];
        var options = c[2];
        console.log('aiRender', a, c[0]);
        renderJsonObject(jsonArg, templateArg)
        .then((result)=>{new window.SugarCube.Wikifier(appendLocation,result)});
    }
}

console.log('helpersstart');
// load handlebars templates
var handlebarsTemplatesCache = {};
var objectCache = {};


const globalData = {
    'templatesPath' :  window.resourcesPath + 'templates/',
    'imagesPath' : window.resourcesPath + 'images/',
    'jsonPath' : window.resourcesPath + 'json/',
    // Important: textPath also goes into json so you can keep your .txt files close to the relevant .json file
    'textPath' : window.resourcesPath + 'json/',
    'chatsPath' : window.resourcesPath + 'ron-chats/',
}

window.renderJsonObject = async function(jsonObject, handlebarsTemplatePartialUrl){
    if (handlebarsTemplatePartialUrl == undefined && jsonObject.hasOwnProperty('htmlTemplate')){
        handlebarsTemplatePartialUrl = jsonObject['htmlTemplate']
    }

    console.log('rendering ' + handlebarsTemplatePartialUrl);

    if (!handlebarsTemplatePartialUrl.endsWith('.bars')){
        handlebarsTemplatePartialUrl = handlebarsTemplatePartialUrl + '.bars';
    }

    if (handlebarsTemplatePartialUrl.startsWith('templates/')){
        handlebarsTemplatePartialUrl = handlebarsTemplatePartialUrl.replace('templates/', '');
    }
    
    let compiledTemplate = null;
    if (handlebarsTemplatePartialUrl in handlebarsTemplatesCache){
        compiledTemplate = handlebarsTemplatesCache[handlebarsTemplatePartialUrl];
    } else {
        const templateFile = await $.get(globalData['templatesPath'] + handlebarsTemplatePartialUrl);
        compiledTemplate = Handlebars.compile(templateFile);
        handlebarsTemplatesCache[handlebarsTemplatePartialUrl] = compiledTemplate;
    }

    return compiledTemplate(jsonObject, {data : globalData});
}

window.passagesElement = document.getElementById('passages');

function isIterable(element) {
    return isArray(element) || isObject(element);
}

function isArray(element) {
    return element.constructor == Array;
}

function isObject(element) {
    return element.constructor == Object;
}

async function parseObject(jsonObject){
    let promiseArr = [];

    for(let key in jsonObject){
        if (jsonObject.hasOwnProperty(key)) {
            let val = jsonObject[key];
            if(val === null){
                continue;
            }

            if (isIterable(val)){
                promiseArr.push(parseObject(val));
            } else {
                if (typeof val == 'string' && val.startsWith('json/')){
                    let loadingPromise = window.loadObjectFromJSONPath(val).then(
                            (loadedVal) => {
                                jsonObject[key] = loadedVal;
                            }
                        );
                    promiseArr.push(loadingPromise);
                } else if (typeof val == 'string' 
                    && (val.startsWith('txt:') || val.startsWith('text:'))){
                    let textLoadingPromise = window.loadTxtFromPath(val).then(
                            (loadedText) => {
                                jsonObject[key] = loadedText;
                            }
                        );
                    promiseArr.push(textLoadingPromise);
                }
            }
        }
    }
    await Promise.all(promiseArr);
    return jsonObject;
}

window.loadTxtFromPath = async function(textPartialUrl){
    if (!textPartialUrl.endsWith('.txt') && textPartialUrl.indexOf('.') == -1){
        textPartialUrl = textPartialUrl + '.txt';
    }
    
    textPartialUrl = textPartialUrl.replace('txt:', '');
    textPartialUrl = textPartialUrl.replace('text:', '');
    if (textPartialUrl.startsWith('json/')){
        textPartialUrl = textPartialUrl.replace('json/', '');
    }

    if (textPartialUrl in objectCache) {
        return objectCache[textPartialUrl];
    }

    let txt = null;
    try {
        txt = await $.ajax(globalData['textPath'] + textPartialUrl, {dataType : 'html'});
        objectCache[textPartialUrl] = txt;
        return txt;
    } catch(err) {
        console.error('error fetching ' + globalData['textPath'] + textPartialUrl); 
        console.error(err);   
        return 'ERROR';
    }
}

// Not helping Handlebars per se, but related
window.loadObjectFromJSONPath = async function(jsonPartialUrl){
    if (!jsonPartialUrl.endsWith('.json')){
        jsonPartialUrl = jsonPartialUrl + '.json';
    }

    if (jsonPartialUrl.startsWith('json/')){
        jsonPartialUrl = jsonPartialUrl.substr('json/'.length);
    }

    if (jsonPartialUrl in objectCache) {
        return objectCache[jsonPartialUrl];
    }
    let object = null;
    try {
        object = await $.ajax(globalData['jsonPath'] + jsonPartialUrl, {dataType : 'html'});
        object = RJSON.parse(object);
    } catch(err) {
        console.error('error fetching ' + globalData['jsonPath'] + jsonPartialUrl); 
        return null;
    }

    try{
        let parsedObject = await parseObject(object);
        objectCache[jsonPartialUrl] = parsedObject;
        return parsedObject;
    } catch(err) {
        console.error('error parsing ' + globalData['jsonPath'] + jsonPartialUrl);
        return null;
    }
};

console.log('finishing helpers4');
console.log(window.handlebarsRender);


var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
var isOpera = typeof window.opr !== "undefined";
var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
var isIOSChrome = winNav.userAgent.match("CriOS");
if(
  isChromium !== null &&
  typeof isChromium !== "undefined" &&
  vendorName === "Google Inc." &&
  isOpera === false &&
  isIEedge === false
) {
   // is Google Chrome
    window.ro = new ResizeObserver(entries => {
      window.passagesElement.scrollTop =
        window.passagesElement.scrollHeight;
    });
}


(async function loadJSON(){
    const loading = document.getElementById("loading-button");
    const next = document.getElementById("start-button");

    next.classList.add("hidden-button");

    console.log('aiData loading!')
    window.aiData = await loadObjectFromJSONPath('json/aiData.json')
    window.SugarCube.State.setVar("$aiData", aiData)

    window.supervised3 = await loadObjectFromJSONPath('json/supervised3.json')
    window.SugarCube.State.setVar("$supervised3", supervised3)
    console.log('aiData loaded!')

    window.scriptsLoaded = true;

    loading.classList.add("hidden-button");
    next.classList.remove("hidden-button");
})();