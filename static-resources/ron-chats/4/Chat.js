
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
    timePassed += Math.sqrt(text.length)*400;
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
insertChat("me", "Hey how are you holding up? Still safe?", 0)
insertChat("you", "Everyone here is pretty rattled.", 2700)
insertChat("me", "Please, please keep texting me.", 2700)
insertChat("you", "I'll keep texting you every night.", 2700)
insertChat("you", "I'm still so sad I can't see you.", 2700)
insertChat("me", "Me too.", 2700)
insertChat("me", "The news said the lockdown is temporary, the airports will open soon I hope.", 2700)
insertChat("you", "That's good. How are you?", 2700)
insertChat("me", "I'm not doing the best, no one is.", 2700)
insertChat("me", "But on the bright side, we just got a contract for a big job. I feel like I can make a difference with this one.", 2700)
insertChat("you", "Wow, what is it?", 2700)
insertChat("me", "Well, actually, the Regime wants to use Sesh@ to figure out who did the attack.", 2700)
insertChat("you", "WTF", 2700)
insertChat("me", "Yeah. I almost can't believe it.", 2700)
insertChat("you", "Why'd they pick Sesh@?? That's crazy", 2700)
insertChat("me", "I'm sure the FIB is scrambling to figure it out too, so it's not just us working on it", 2700)
insertChat("me", "But Sesh@ is the most advanced AI in the country", 2700)
insertChat("me", "If there's any AI who can do it, it's her", 2700)
insertChat("you", "And she has you to guide her :)", 2700)
insertChat("me", "Yeah...that's the thing. I'm supervising her during this", 2700)
insertChat("me", "And this is like the most important thing right now", 2700)
insertChat("me", "What if I fuck up?", 2700)
insertChat("you", "Stop", 2700)
insertChat("you", "Temp you're so smart and beautiful", 2700)
insertChat("you", "If I had to trust anyone in the world with this, it'd be you", 2700)
insertChat("me", "I'm scared, I miss you", 2700)
insertChat("you", "I miss you too", 2700)
insertChat("you", "Shit it's amazing that you're doing that", 2700)
insertChat("you", "You're practically taking over quality", 2700)
insertChat("you", "*qualia", 2700)
insertChat("me", "Sesh@'s doing the heavy lifting, I'm just feeding her the information.", 2700)
insertChat("me", "Huh", 2700)
insertChat("me", "I guess it would be pretty hard to fuck that up.", 2700)
insertChat("you", "Now you're thinking positively!", 2700)
insertChat("me", "I guess", 2700)
insertChat("me", "That's something I really love about you, Fstop, that you're always looking for the positive", 2700)
insertChat("me", "And it makes me look for the silver lining too", 2700)
insertChat("you", "We're here for each other", 2700)
insertChat("me", "I love you.", 2700)
insertChat("you", "I love you too", 2700)
insertChat("you", "you and Sesh@ are gonna find the sicko that did it", 2700)
insertChat("me", "I hope so", 2700)

//-- NOTE: No use time on insertChat.
