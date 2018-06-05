
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
insertChat("you", "Hey! How was your day?", 0)
insertChat("me", "Great! First day and nothing exploded. :) How are you?", 2700)
insertChat("you", "miss you ):", 2700)
insertChat("me", "miss you too Fstop", 2700)
insertChat("you", "Does Sesh@ talk to you?", 2700)
insertChat("me", "Yeah, she beep-boops sweet nothings in my ear", 2700)
insertChat("you", "It's been like what 3 weeks and you already have a mistress :)", 2700)
insertChat("me", "Her GUI is verrrrry symmetrical", 2700)
insertChat("you", "Why are you going for the silicone when the real thing's right here :)", 2700)
insertChat("me", "Cuz 'right here' is actually a 6 hour plane flight away", 2700)
insertChat("you", "D: only 2 hours on the NTrain", 2700)
insertChat("me", "I can't afford a plane ticket, let alone that fancy travel", 2700)
insertChat("me", "Jokes aside, Sesh@'s getting really smart", 2700)
insertChat("you", "What do you mean", 2700)
insertChat("me", "She's going to start learning by herself.", 2700)
insertChat("me", "Like I'll give her documents and files and she's gonna process them on her own.", 2700)
insertChat("you", "What kind of stuff are you gonna give her?", 2700)
insertChat("me", "News, company memos, that kind of stuff.", 2700)
insertChat("you", "I really wish I was there to see it ):", 2700)
insertChat("me", "wish you were here too, Fstop ):", 2700)
insertChat("you", "Keep up the hard work", 2700)
insertChat("you", "I gotta head out, talk to you soon temp <3", 2700)
insertChat("me", "Miss you <3", 2700)


//-- NOTE: No use time on insertChat.
