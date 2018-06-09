
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
insertChat("you", "Holy shit", 0)
insertChat("me", "Temp??", 100)
insertChat("me", "Is everything okay?", 100)
insertChat("you", "Yeah, I'm fine", 100)
insertChat("you", "So that government contract", 100)
insertChat("you", "Well, Sesh@ did really well with it", 100)
insertChat("you", "Apparently she helped them uncover a bona fide terrorist plot", 100)
insertChat("you", "There was a whole operation running out of Warehouse 39", 100)
insertChat("you", "Sesh@ identified them somehow and blew the whole thing open", 100)
insertChat("me", "That's great!", 100)
insertChat("me", "Isn't it?", 3700)
insertChat("you", "Yeah, I guess", 100)
insertChat("you", "Idk", 100)
insertChat("you", "The way the law is written, Sesh@'s word counts in place of a warrant", 100)
insertChat("me", "woah", 100)
insertChat("you", "right?", 100)
insertChat("me", "That's... kinda scary.", 100)
insertChat("me", "But you trained Sesh@ to be fair, right?", 100)
insertChat("you", "I mean... I tried", 100)
insertChat("you", "But the government creates and provides the datasets", 100)
insertChat("you", "And Sesh@ is only as good as the data she is given", 100)
insertChat("me", "Fuck. And the government isn't super happy with people who look like us right now.", 100)
insertChat("you", "Exactly", 100)
insertChat("me", "shit.", 100)
insertChat("me", "I don't trust the government to decide what domestic terrorism looks like.", 100)
insertChat("me", "If silvs do something, it's domestic terrorism, but if darks do it, its an 'isolated incident.'", 100)
insertChat("me", "Like those guys who blew up the revmart.", 100)
insertChat("me", "Grajie Litne? Definitely a dark.", 100)
insertChat("me", "He got off basically scot free! After destroying a whole building!", 100)
insertChat("you", "That bias makes me super nervous", 100)
insertChat("you", "I don't want Sesh@ to learn it, y'know?", 100)
insertChat("you", "Especially if her word counts as a warrant", 100)
insertChat("me", "Yeah", 100)
insertChat("me", "What're you thinking, Temp?", 3700)
insertChat("you", "I think", 100)
insertChat("you", "I'm gonna try to shut Sesh@ down", 100)
insertChat("you", "Make her bug out, or something", 100)
insertChat("you", "Before she accidentally gets someone innocent in real trouble", 100)
insertChat("me", "Damn. All your work.", 100)
insertChat("me", "Can you do that?", 100)
insertChat("you", "I don't know", 100)
insertChat("you", "But I think I have to try", 100)
insertChat("me", "You're really brave, Temp.", 100)
insertChat("you", "Thanks", 100)
insertChat("you", "I'm pretty scared", 100)

//-- NOTE: No use time on insertChat.
