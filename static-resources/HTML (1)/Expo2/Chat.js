
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
insertChat("me", "Hey, babe", 0)
insertChat("you", "Hey:)", 2700)
insertChat("you", "I miss you", 2700)
insertChat("me", "I know :(", 2700)
insertChat("me", "I miss you too", 2700)
insertChat("me", "You are destroying my sleep schedule", 2700)
insertChat("you", "Haha don't act like this is a one way street", 2700)
insertChat("you", "You have me staying up til 3", 2700)
insertChat("you", "Timezones suck, we should abolish them" , 2700)
insertChat("me", "I'm sure that would work out just fine haha", 2700)
insertChat("you", "How are things at work?" , 2700)
insertChat("me", "They're going really well", 2700)
insertChat("me", "Thats actually why I hit you up", 2700)
insertChat("me", "Guess who is in charge of a new project :, 2700)", 2700)
insertChat("you", "No way!!! Congrats", 2700)
insertChat("me", "Its nothing super big, just some marketing stuff", 2700)
insertChat("me", "We're just training Sesh@ for food advertising", 2700)
insertChat("me", "It's actually a pretty decent contract!", 2700)
insertChat("me", "I mean it's nothing too crazy, I'm not working on the big stuff but it's still exciting", 2700)
insertChat("you", "I'm proud of you babe :)", 2700)
insertChat("you", "Do you think this means Qualia is thinking of offering you a job?", 2700)
insertChat("me", "I don't know, I don't want to get my hopes up too high but they also don't really put interns in charge of projects", 2700)
insertChat("you", "Look at you, big girl on the block", 2700)
insertChat("me", "I hope we can get Sesh@ to work for the contract", 2700)
insertChat("me", "Fingers crossed, if this works out maybe they might bring me on full time, working on real projects", 2700)
insertChat("you", "I'm so happy for you babe :)", 2700)
insertChat("you", "I'm sorry, but I'm really tired though", 2700)
insertChat("you", "I think I'm heading to bed, I'll call you in the morning. Goodnight <3", 2700)
insertChat("me", "Don't apologize babe, I appreciate you staying up for me", 2700)
insertChat("me", "Goodnight! I love you <3", 2700)
insertChat("you", "Love you too", 2700)


//-- NOTE: No use time on insertChat.
