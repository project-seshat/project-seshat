
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
insertChat("me", "Hey babe, how did the case go?", 100)
insertChat("you", "Well Sesh@ found the person who did it", 100)
insertChat("you", "Or well she found a person", 100)
insertChat("you", "I don't know, I thought I would feel a lot more accomplished", 100)
insertChat("me", "Babe, don't be so down on yourself, you did a lot of hard work and now we're all a lot safer without that wacko running around", 100)
insertChat("me", "I'm proud of you, and I know everyone back here really appreciates you helping lock away that sicko", 600)
insertChat("you", "It's not that", 1000)
insertChat("you", "It's just", 100)
insertChat("you", "Idk", 100)
insertChat("me", "What do you mean?", 100)
insertChat("you", "I didn't expect it all to happen so quickly", 100)
insertChat("you", "Like the day after, they just arrested him", 100)
insertChat("you", "I've been refreshing the news every couple minutes for more info but it's just radio silence", 100)
insertChat("you", "I don't know what happened to the guy", 100)
insertChat("you", "Did they throw him in jail? Execute him?", 100)
insertChat("me", "You did the right thing, it's hard but I really am proud of you", 100)
insertChat("you", "Thanks", 600)
insertChat("you", "I trust Sesh@. I've been training her and I've seen how much progress she's made", 100)
insertChat("you", "And I guess I trust her more than the FIB team. At least she's objective", 100)
insertChat("you", "But I feel like I don't know if we made the right decision", 100)
insertChat("me", "I don't think anyone ever knows", 100)
insertChat("me", "Like you do a million things every day", 100)
insertChat("me", "And you never really know if things are going to turn out good or bad", 100)
insertChat("me", "But you just do what is best with what you have right?", 100)
insertChat("you", "Yeah but those things just impact me, this is someone else's life", 100)
insertChat("me", "Fair", 1200)
insertChat("me", "I can't tell you if its right or wrong", 100)
insertChat("me", "But if I had to trust anyone in the world with this I would always choose you", 100)
insertChat("me", "I miss you", 1000)
insertChat("you", "I miss you too", 100)
insertChat("me", "I know shit has been rough", 100)
insertChat("me", "The attack, and not being able to be together", 100)
insertChat("me", "But I'm proud of you. You are making the world a safer place and I really love you for that", 100)
insertChat("you", "I love you", 2900)
insertChat("you", "You know I've been worrying about you a lot", 100)
insertChat("you", "Especially after the attack", 100)
insertChat("you", "I was thinking maybe after everything dies down back home, you could maybe come over here?", 100)
insertChat("me", "Like to visit or...", 1000)
insertChat("you", "I was thinking maybe for a while?", 100)
insertChat("you", "We could move in together", 100)
insertChat("you", "Maybe?", 5000)
insertChat("me", "Yes", 2000)
insertChat("you", "Yes?", 300)
insertChat("me", "Yes I have been thinking about it for a while actually", 100)
insertChat("me", "And it would be really nice", 100)
insertChat("me", "To get away, and to start a new life away from everything else", 100)
insertChat("you", "You make my heart flutter so much", 100)


//-- NOTE: No use time on insertChat.
