
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
insertChat("me", "Hey temp!", 100)
insertChat("me", "How are you doing this fine night?", 100)
insertChat("you", "Cold and lonely without you :(", 100)
insertChat("me", "I miss you too", 100)
insertChat("you", "I wish you were here right now :(", 100)
insertChat("me", "Psh no you don't", 100)
insertChat("me", "Unless you like being soaking wet", 100)
insertChat("you", "huh?", 100)
insertChat("me", "Some dumbasses threw buckets of... something on the protesters today", 100)
insertChat("me", "All our signs are ruined and we smell terrible, so it's been a hell of a day :(", 100)
insertChat("you", "omg!! that's awful what", 100)
insertChat("me", "Yeah, they shouted silver-eye and pushed me over, too.", 100)
insertChat("me", "pretty scary, honestly :/", 100)
insertChat("you", "oh no!!!!", 500)
insertChat("you", "Fermatta I told you those Protest4Change events were a bad idea", 100)
insertChat("you", "But I'm sure you don't want a lecture right now. I'm sorry that happened babe <3", 100)
insertChat("me", "thanks. <3 I just want it to get better, y'know?", 100)
insertChat("me", "Feels like everything is shitty right now. Those guys are just a drop in the bucket", 100)
insertChat("me", "Get it", 400)
insertChat("me", "Drop in the bucket", 400)
insertChat("you", "Ugh your dad jokes some how make this less terrible.", 300)
insertChat("you", "Who knows, maybe I'll be able to do some good with Sesh@", 100)
insertChat("you", "Oh! I almost forgot to mention - happy news for once!", 100)
insertChat("you", "Guess who is in charge of a new project", 100)
insertChat("me", "No way!!! Congrats", 100)
insertChat("you", "Its nothing super big, just some marketing stuff", 100)
insertChat("you", "We're training Sesh@ for some food company", 100)
insertChat("you", "It's actually a pretty decent contract!", 100)
insertChat("you", "I mean it's nothing too crazy, I'm not working on the big stuff but it's still exciting", 100)
insertChat("me", "Look at you, big girl on the block", 100)
insertChat("me", "I'm proud of you babe :)", 100)
insertChat("you", "I hope we can get Sesh@ to work for the contract", 100)
insertChat("you", "Fingers crossed, if this works out maybe they might bring me on full time, working on real projects", 100)

//-- NOTE: No use time on insertChat.
