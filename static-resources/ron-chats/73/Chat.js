
var me = {};
me.avatar = "Tempo_GF.png";

var you = {};
you.avatar = "Tempo.png";

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

var timePassed = 0;

//-- No use time. It is a javaScript effect.
function insertChat(who, text, time){
    if (time === undefined){
        time = 0;
    }
    timePassed += Math.sqrt(text.length) * 400 + time;
    var control = "";
    var date = formatAMPM(new Date());

    if (who == "me"){
        control = '<li style="width:100%">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
                            '<div class="text text-l">' +
                                '<p>'+ text +'</p>' +
                                '<p><small>'+"Fermatta"+'</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';
    }else{
        control = '<li style="width:100%;">' +
                        '<div class="msj-rta macro">' +
                            '<div class="text text-r">' +
                                '<p>'+text+'</p>' +
                                '<p><small>'+"Tempo"+'</small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +
                  '</li>';
    }
    setTimeout(
        function(){
            $("ul").append(control).scrollTop($("ul").prop('scrollHeight'));
        }, timePassed);

}

function resetChat(){
    $("ul").empty();
}

$(".mytext").on("keydown", function(e){
    if (e.which == 13){
        var text = $(this).val();
        if (text !== ""){
            insertChat("you", text);
            $(this).val('');
        }
    }
});

$('body > div > div > div:nth-child(2) > span').click(function(){
    $(".mytext").trigger({type: 'keydown', which: 13, keyCode: 13});
})

//-- Clear Chat
resetChat();

//-- Print Messages
insertChat("me", "Hey love, how are you?", 0)
insertChat("you", "I'm doing okay", 100)
insertChat("you", "Rough day with Sesh@", 100)
insertChat("you", "So that government contract, apparently it was to identify potential terrorists", 100)
insertChat("me", "woah", 100)
insertChat("you", "Sesh@ didn't do very well though", 100)
insertChat("you", "Apparently she didn't find anything", 100)
insertChat("you", "So we probably won't get anymore contracts from the government", 100)
insertChat("me", "Aw, that sucks.", 100)
insertChat("me", "I'm sure it wasn't your fault.", 100)
insertChat("you", "Honestly, things will be a lot less stressful here now", 100)
insertChat("you", "Maybe I can come visit", 100)
insertChat("you", "I miss home anyways", 100)
insertChat("me", "That would be great!!", 100)
insertChat("me", "Home misses you too.", 100)
insertChat("me", "Glad the craziness is over. Hopefully you can be a little less stressed from now on.", 100)
insertChat("you", "I hope so <3", 100)
insertChat("you", "I love you, Fstop", 100)
insertChat("me", "Love you too, Temp.", 100)
insertChat("me", "Hey", 100)
insertChat("me", "I'm proud of you.", 100)
insertChat("me", "You did the best you could.", 100)


//-- NOTE: No use time on insertChat.
