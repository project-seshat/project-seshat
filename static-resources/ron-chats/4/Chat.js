
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
insertChat("you", "Hey how are you holding up? Still safe?", 0)
insertChat("me", "Everyone here is pretty rattled.", 100)
insertChat("you", "Please, please keep texting me.", 100)
insertChat("me", "I'll keep texting you every night.", 100)
insertChat("me", "I'm still so sad I can't see you.", 100)
insertChat("you", "Me too.", 100)
insertChat("you", "The news said the lockdown is temporary, the airports will open soon I hope.", 100)
insertChat("me", "That's good. How are you?", 100)
insertChat("you", "I'm not doing the best, no one is.", 100)
insertChat("you", "But on the bright side, we just got a contract for a big job. I feel like I can make a difference with this one.", 100)
insertChat("me", "Wow, what is it?", 100)
insertChat("you", "Well, actually, the Regime wants to use Sesh@ to figure out who did the attack.", 100)
insertChat("me", "WTF", 100)
insertChat("you", "Yeah. I almost can't believe it.", 100)
insertChat("me", "Why'd they pick Sesh@?? That's crazy", 100)
insertChat("you", "I'm sure the FIB is scrambling to figure it out too, so it's not just us working on it", 100)
insertChat("you", "But Sesh@ is the most advanced AI in the country", 100)
insertChat("you", "If there's any AI who can do it, it's her", 100)
insertChat("me", "And she has you to guide her :)", 100)
insertChat("you", "Yeah...that's the thing. I'm supervising her during this", 100)
insertChat("you", "And this is like the most important thing right now", 100)
insertChat("you", "What if I fuck up?", 100)
insertChat("me", "Stop", 100)
insertChat("me", "Temp you're so smart and beautiful", 100)
insertChat("me", "If I had to trust anyone in the world with this, it'd be you", 100)
insertChat("you", "I'm scared, I miss you", 100)
insertChat("me", "I miss you too", 100)
insertChat("me", "Shit it's amazing that you're doing that", 100)
insertChat("me", "You're practically taking over quality", 100)
insertChat("me", "*qualia", 100)
insertChat("you", "Sesh@'s doing the heavy lifting, I'm just feeding her the information.", 100)
insertChat("you", "Huh", 100)
insertChat("you", "I guess it would be pretty hard to fuck that up.", 100)
insertChat("me", "Now you're thinking positively!", 100)
insertChat("you", "I guess", 100)
insertChat("you", "That's something I really love about you, Fstop, that you're always looking for the positive", 100)
insertChat("you", "And it makes me look for the silver lining too", 100)
insertChat("me", "We're here for each other", 100)
insertChat("you", "I love you.", 100)
insertChat("me", "I love you too", 100)
insertChat("me", "you and Sesh@ are gonna find the sicko that did it", 100)
insertChat("you", "I hope so", 100)

//-- NOTE: No use time on insertChat.
