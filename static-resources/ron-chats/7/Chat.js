
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
insertChat("you", "Fstop", 0)
insertChat("me", "Hey", 100)
insertChat("you", "How's it going", 100)
insertChat("you", "I'm not doing so well", 100)
insertChat("you", "I miss you", 100)
insertChat("you", "How are you?", 100)
insertChat("me", "I'm getting by, this week has been rough.", 100)
insertChat("me", "I really wish you were here with me right now", 100)
insertChat("me", "The whole neighborhood feels like someone sucked all the life out of it" , 2700)
insertChat("you", "I wish we were together too", 100)
insertChat("me", "How are things at work?" , 2700)
insertChat("you", "Complicated", 100)
insertChat("you", "To say the least", 100)
insertChat("me", "What do you mean?", 100)
insertChat("you", "The Regime was really impressed with how Sesh@ handled the case", 100)
insertChat("you", "And they are giving us a new contract", 100)
insertChat("me", "That doesn't sound too complicated. Isn't that a good thing?", 100)
insertChat("you", "I guess", 100)
insertChat("you", "Just I have this really intense feeling in my gut that something isn't right", 100)
insertChat("you", "I don't know too much about what's happening", 100)
insertChat("you", "But the data sets we are parsing through are insane", 100)
insertChat("you", "ThisIs profiles, personal chat logs, facial scans", 100)
insertChat("me", "What do you think they want you guys to do?", 100)
insertChat("you", "I really don't know, they keep referencing something called 'The Sorting'", 100)
insertChat("you", "And I peeked into the data sets and they are a lot of people from DC", 100)
insertChat("me", "From here?", 300)
insertChat("me", "I thought they caught the guy why are they investigating here again?", 100)
insertChat("you", "I don't know ", 100)
insertChat("you", "F, am I freaking out?", 100)
insertChat("you", "The airports should be opening up soon", 900)
insertChat("you", "I want you to come as soon as you can", 100)
insertChat("you", "I think something bad might be happening in DC", 100)
insertChat("me", "I'll buy the first ticket out.", 100)


//-- NOTE: No use time on insertChat.
