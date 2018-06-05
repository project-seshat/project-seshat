
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
insertChat("me", "Holy shit", 2700)
insertChat("me", "I'm worried about Sesh@, Fstop", 2700)
insertChat("you", "Oh?", 2700)
insertChat("me", "So that government contract", 2700)
insertChat("me", "Turns out it was to identify potential terrorists", 2700)
insertChat("you", "woah", 2700)
insertChat("me", "yeah", 2700)
insertChat("me", "Sesh@ helped them actually uncover a plot, which is cool I guess", 2700)
insertChat("me", "There was a whole operation running out of Warehouse 39", 2700)
insertChat("me", "Sesh@ identified them somehow and blew the whole thing open", 2700)
insertChat("me", "But she also marked a bunch of innocent people as dangerous", 2700)
insertChat("me", "The way the law is written, Sesh@'s word counts in place of a warrant", 2700)
insertChat("me", "I feel really bad, F", 2700)
insertChat("you", "Holy shit", 2700)
insertChat("me", "right?", 2700)
insertChat("you", "That's really scary!", 2700)
insertChat("you", "But you trained Sesh@ to be fair, right?", 2700)
insertChat("you", "I'm sure this isn't your fault.", 2700)
insertChat("me", "I mean... I tried", 2700)
insertChat("me", "But the government creates and provides the datasets", 2700)
insertChat("me", "Sesh@ emulates the data she's given", 2700)
insertChat("you", "Fuck. And the government isn't super happy with people who look like us right now.", 2700)
insertChat("me", "Exactly", 2700)
insertChat("you", "shit.", 2700)
insertChat("you", "I don't trust the government to decide what domestic terrorism looks like.", 2700)
insertChat("you", "If silvs do something, it's domestic terrorism, but if darks do it, its an 'isolated incident.'", 2700)
insertChat("you", "Like those guys who blew up the revmart.", 2700)
insertChat("you", "Grajie Litne? Definitely a dark.", 2700)
insertChat("you", "He got off basically scott free! After destroying a whole building!", 2700)
insertChat("me", "That bias makes me super nervous", 2700)
insertChat("me", "I don't want Sesh@ to learn it, y'know?", 2700)
insertChat("me", "Especially if her word counts as a warrant", 2700)
insertChat("you", "Yeah", 2700)
insertChat("you", "What're you thinking, Temp?", 3700)
insertChat("me", "I think", 2700)
insertChat("me", "I'm gonna try to shut Sesh@ down", 2700)
insertChat("me", "Make her bug out, or something", 2700)
insertChat("me", "Before she accidentally gets more innocent people in real trouble", 2700)
insertChat("you", "I think that's the right thing to do.", 2700)
insertChat("you", "Can you pull it off?", 2700)
insertChat("me", "I don't know", 2700)
insertChat("me", "But I think I have to try", 2700)
insertChat("you", "You're really brave, Temp.", 2700)
insertChat("me", "Thanks", 2700)
insertChat("me", "I'm pretty scared", 2700)
insertChat("me", "Love you", 2700)
insertChat("you", "Love you too.", 2700)

//-- NOTE: No use time on insertChat.
