
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
insertChat("me", "Hey! How was your day?", 100)
insertChat("you", "Great! First day and nothing exploded. :)", 100)
insertChat("me", "miss you ):", 100)
insertChat("you", "miss you too Fstop", 100)
insertChat("me", "Does Sesh@ talk to you?", 100)
insertChat("you", "Yeah, she beep-boops sweet nothings in my ear", 100)
insertChat("me", "You already have a mistress?", 100)
insertChat("you", "Her GUI is verrrrry symmetrical", 100)
insertChat("me", "Why are you going for the silicone when the real thing's right here :)", 100)
insertChat("you", "Cuz ''right here'' is actually a 6 hour plane flight away", 100)
insertChat("me", "D: only 2 hours on the NTrain", 100)
insertChat("you", "I can't afford a plane ticket, let alone that fancy travel", 100)
insertChat("you", "But that's okay, I trust you to keep DC warm for me while I'm interning for Qualia :)", 100)
insertChat("me", "but campus is so booooring without you!!", 100)
insertChat("me", "who's going to bring me papayegg ramen when I get hungry at 3am", 100)
insertChat("me", "or go to the Protests4Change events with me???", 100)
insertChat("you", "I'm sure you'll survive :P", 100)
insertChat("me", "You have it easy, you have Sesh@ to keep you company", 100)
insertChat("you", "ha ha very funny", 100)
insertChat("you", "Jokes aside, Sesh@'s getting really smart", 100)
insertChat("me", "What do you mean", 100)
insertChat("you", "She's going to start learning by herself.", 100)
insertChat("you", "Like I'll give her documents and files and she's gonna process them on her own.", 100)
insertChat("me", "What kind of stuff are you gonna give her?", 100)
insertChat("you", "News, company memos, that kind of stuff.", 100)
insertChat("me", "Your baby is learning to read", 100)
insertChat("me", "I really wish I was there to see it ):", 100)
insertChat("you", "wish you were here too, Fstop ):", 100)
insertChat("me", "Keep up the hard work babe", 100)

//-- NOTE: No use time on insertChat.
