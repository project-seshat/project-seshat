
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
insertChat("you", "You are destroying my sleep schedule, babe", 100)
insertChat("me", "Haha don't act like this is a one way street", 100)
insertChat("me", "You have me staying up til 3", 100)
insertChat("me", "Timezones suck, we should abolish them" , 100)
insertChat("you", "I'm sure that would work out just fine haha", 100)
insertChat("me", "How are things at work?" , 100)
insertChat("you", "They're going really well", 100)
insertChat("you", "We are starting a new project tomorrow. It's going to be the first time I get to work hands on with Sesh@", 100)
insertChat("me", "No longer the coffee girl huh?" , 100)
insertChat("you", "Ummm I've been doing linguistic analysis for three months", 100)
insertChat("me", "Okay, okay fine I get it u work at Qualia you're soo smart" , 100)
insertChat("me", "Jk jk I still love you" , 100)
insertChat("you", "Love you too <3", 100)
insertChat("you", "I'm a bit nervous though. It's clustered orientation recognition, shouldn't be too bad but I haven't run non-structured tests before", 100)
insertChat("me", "So, in other words, you're going to put the thingies inside the computer and its going to do the stuff and you're going to get a lot of money" , 100)
insertChat("you", "You're lucky I find you cute", 100)
insertChat("me", "You're lucky that I put up with all your jargon" , 100)
insertChat("you", "Any way I'm super stoked :)", 100)
insertChat("me", "Hi super stoked, I'm Fermatta" , 100)
insertChat("you", "Gahh", 100)
insertChat("you", "I miss your dad jokes", 100)
insertChat("me", "I miss you", 100)
insertChat("me", "I'm sorry I can't stay up too late, I'm sleepy. I think I'm going to head to bed soon. Love ya temp" , 100)
insertChat("you", "Love ya too babe <3", 100)


//-- NOTE: No use time on insertChat.
