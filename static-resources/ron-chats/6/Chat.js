
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
insertChat("you", "Hey babe, how are you?", 0)
insertChat("you", "How did the case go?", 2700)
insertChat("me", "Well Sesh@ found the person who did it", 2700)
insertChat("me", "Or well she found a person", 2700)
insertChat("me", "I don't know, I thought I would feel a lot more accomplished", 2700)
insertChat("you", "Babe, don't be so down on yourself, you did a lot of hard work and now we're all a lot safer without that wacko running around", 2700)
insertChat("you", "I'm proud of you, and I know everyone back here really appreciates you helping lock away that sicko", 2700)
insertChat("me", "It's not that", 2700)
insertChat("me", "It's just", 2700)
insertChat("me", "Idk", 2700)
insertChat("you", "What do you mean?", 2700)
insertChat("me", "I didn't expect it all to happen so quickly", 2700)
insertChat("me", "Like the day after, they just arrested him", 2700)
insertChat("me", "I've been refreshing the news every couple minutes for more info but it's just radio silence", 2700)
insertChat("me", "I don't know what happened to the guy", 2700)
insertChat("me", "Did they throw him in jail? Execute him?", 2700)
insertChat("you", "You did the right thing, it's hard but I really am proud of you", 2700)
insertChat("me", "Thanks", 2700)
insertChat("me", "I trust Sesh@. I've been training her and I've seen how much progress she's made", 2700)
insertChat("me", "And I guess I trust her more than the FIB team. At least she's objective", 2700)
insertChat("me", "But I feel like I don't know if we made the right decision", 2700)
insertChat("you", "I don't think anyone ever knows", 2700)
insertChat("you", "Like you do a million things every day", 2700)
insertChat("you", "And you never really know if things are going to go good or bad", 2700)
insertChat("you", "But you just do what is best with what you have right?", 2700)
insertChat("me", "Yeah but those things just impact me, this is someone else's life", 2700)
insertChat("you", "Fair", 2700)
insertChat("you", "I can't tell you if its right or wrong", 2700)
insertChat("you", "But if I had to trust anyone in the world with this I would always choose you", 2700)
insertChat("you", "I miss you", 2700)
insertChat("me", "I miss you too", 2700)
insertChat("you", "I know shit has been rough", 2700)
insertChat("you", "The attack, and not being able to be together", 2700)
insertChat("you", "But I'm proud of you. You are making the world a safer place and I really love you for that", 2700)
insertChat("me", "I love you", 2700)
insertChat("me", "You know I've been worrying about you a lot", 2700)
insertChat("me", "Especially after the attack", 2700)
insertChat("me", "I was thinking maybe after everything dies down back home, you could maybe come over here?", 2700)
insertChat("you", "Like to visit or...", 2700)
insertChat("me", "I was thinking maybe for a while?", 2700)
insertChat("me", "We could move in together", 2700)
insertChat("me", "Maybe?", 2700)
insertChat("you", "Yes", 2700)
insertChat("me", "Yes?", 2700)
insertChat("you", "Yes I have been thinking about it for a while actually", 2700)
insertChat("you", "And it would be really nice", 2700)
insertChat("you", "To get away, and to start a new life away from everything else", 2700)
insertChat("me", "You make my heart flutter so much", 2700)
insertChat("me", "We can figure things out once things die down a bit I know everything must be so stressful back home", 2700)


//-- NOTE: No use time on insertChat.
