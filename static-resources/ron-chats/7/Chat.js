
var me = {};
me.avatar = "Tempo.png";

var you = {};
you.avatar = "Tempo_Gf.png";

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
    timePassed += time;
    var control = "";
    var date = formatAMPM(new Date());

    if (who == "me"){
        control = '<li style="width:100%">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
                            '<div class="text text-l">' +
                                '<p>'+ text +'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';
    }else{
        control = '<li style="width:100%;">' +
                        '<div class="msj-rta macro">' +
                            '<div class="text text-r">' +
                                '<p>'+text+'</p>' +
                                '<p><small>'+date+'</small></p>' +
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
            insertChat("me", text);
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
insertChat("me", "Fstop", 0)
insertChat("you", "Hey", 2700)
insertChat("me", "How's it going", 2700)
insertChat("me", "I'm not doing so well", 2700)
insertChat("me", "I miss you", 2700)
insertChat("me", "How are you?", 2700)
insertChat("you", "I'm getting by, this week has been rough.", 2700)
insertChat("you", "I really wish you were here with me right now", 2700)
insertChat("you", "The whole neighborhood feels like someone sucked all the life out of it" , 2700)
insertChat("me", "I wish we were together too", 2700)
insertChat("you", "How are things at work?" , 2700)
insertChat("me", "Complicated", 2700)
insertChat("me", "To say the least", 2700)
insertChat("you", "What do you mean?", 2700)
insertChat("me", "The Regime was really impressed with how Sesh@ handled the case", 2700)
insertChat("me", "And they are giving us a new contract", 2700)
insertChat("you", "That doesn't sound too complicated. Isn't that a good thing?", 2700)
insertChat("me", "I guess", 2700)
insertChat("me", "Just I have this really intense feeling in my gut that something isn't right", 2700)
insertChat("me", "I don't know too much about what's happening", 2700)
insertChat("me", "But the data sets we are parsing through are insane", 2700)
insertChat("me", "ThisIs profiles, personal chat logs, facial scans", 2700)
insertChat("you", "What do you think they want you guys to do?", 2700)
insertChat("me", "I really don't know, they keep referencing something called 'The Sorting'", 2700)
insertChat("me", "And I peeked into the data sets and they are a lot of people from DC", 2700)
insertChat("you", "From here?", 2700)
insertChat("you", "I thought they caught the guy why are they investigating here again?", 2700)
insertChat("me", "I don't know ", 2700)
insertChat("me", "F, am I freaking out?", 2700)
insertChat("you", "I don't know. I don't think I really understand what's happening", 2700)
insertChat("me", "Me neither", 2700)
insertChat("me", "I'm probably just freaking out because of the attack", 2700)
insertChat("me", "Its probably going to be ok", 2700)
insertChat("me", "The airports should be opening up soon", 2700)
insertChat("me", "I want you to come as soon as you can", 2700)
insertChat("me", "I think something bad might be happening in DC", 2700)
insertChat("you", "I'll buy the first ticket out.", 2700)
insertChat("me", "I have to go, they're calling an emergency meeting", 2700)
insertChat("me", "I love you babe", 2700)


//-- NOTE: No use time on insertChat.
