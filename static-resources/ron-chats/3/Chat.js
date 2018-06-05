
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
insertChat("you", "Hey temp!", 2700)
insertChat("you", "How are you doing this fine night?", 2700)
insertChat("me", "Cold and lonely without you :(", 2700)
insertChat("you", "I miss you too", 2700)
insertChat("me", "I wish you were here right now :(", 2700)
insertChat("you", "Psh no you don't", 2700)
insertChat("you", "Unless you like being soaking wet", 2700)
insertChat("me", "huh?", 2700)
insertChat("you", "Some dumbasses threw buckets of... something on the protesters today", 2700)
insertChat("you", "All our signs are ruined and we smell terrible, so it's been a hell of a day :(", 2700)
insertChat("me", "omg!! that's awful what", 2700)
insertChat("you", "Yeah, they shouted something about my eyes and pushed me over, too.", 2700)
insertChat("you", "pretty scary, honestly :/", 2700)
insertChat("me", "oh no!!!!", 2700)
insertChat("me", "Fermatta I told you those Protest4Change events might end up getting you in trouble", 2700)
insertChat("me", "But I'm sure you don't want a lecture right now. I'm sorry that happened babe <3", 2700)
insertChat("you", "thanks. <3 I just want it to get better, y'know?", 2700)
insertChat("you", "Feels like everything is shitty right now. Those guys are just a drop in the bucket", 2700)
insertChat("me", "Yeah, I know. Me too.", 2700)
insertChat("me", "Who knows, maybe I'll be able to do some good with Sesh@", 2700)
insertChat("me", "Oh! I almost forgot to mention - happy news for once!", 2700)
insertChat("me", "Guess who is in charge of a new project", 2700)
insertChat("you", "No way!!! Congrats", 2700)
insertChat("me", "Its nothing super big, just some marketing stuff", 2700)
insertChat("me", "We're training Sesh@ for some food company", 2700)
insertChat("me", "It's actually a pretty decent contract!", 2700)
insertChat("me", "I mean it's nothing too crazy, I'm not working on the big stuff but it's still exciting", 2700)
insertChat("you", "Look at you, big girl on the block", 2700)
insertChat("you", "I'm proud of you babe :)", 2700)
insertChat("me", "I hope we can get Sesh@ to work for the contract", 2700)
insertChat("me", "Fingers crossed, if this works out maybe they might bring me on full time, working on real projects", 2700)

//-- NOTE: No use time on insertChat.
