
var me = {};
me.avatar = "40.png";

var you = {};
you.avatar = "46.png";

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

//-- No use time. It is a javaScript effect.
function insertChat(who, text, time){
    if (time === undefined){
        time = 0;
    }
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
        }, time);

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
insertChat("me","Hey, I just heard back from Angel Inc!", 0);
insertChat("you","What's up?",3000);
insertChat("me","We got some funding, not as much as we asked but enough to get Sesh@ to a point where we can work on it full time.", 6000);
insertChat("you","That's awesome, how much did they give us?", 9000);
insertChat("me","250k",12000);
insertChat("you","Thats enough to get everyone standing desks!", 15000);
insertChat("me","You're so chip city its actually gross", 18000);
insertChat("you","I'm kidding, jeez", 21000);
insertChat("me","Anyway, we could maybe expand our team. Really flesh out Sesh@, we have already have some good stuff going, I think this can be big.", 24000);
insertChat("you","I'm cautiously opimistic", 27000);
insertChat("you","I mean the money is great and all, but you really think it's enough to go full time on Sesh@", 30000);
insertChat("you","Even in chip valley, you know those valuations don't last forever", 33000);
insertChat("me","Some of the guys at Angel Inc. are connected with marketing firms, they seemed a bit interested in our tech", 36000);
insertChat("me","I know it's not exactly what we were planning on doing but I think it's the right move", 39000);
insertChat("me","I mean 250 isn't exaclty something to scoff at but it's not exactly ThisIs money", 42000);
insertChat("you","Yeah, thats the way it goes in chip city", 45000);
insertChat("you","I suppose we should be grateful, I mean our tech isn't exactly top of the line", 48000);
insertChat("me","It's better than what most companies are putting out", 51000);
insertChat("you","That's true haha", 54000);
insertChat("me","And if we can get some contracts we'll have enough money to develop Sesh@ into something big", 57000);
insertChat("me","I mean how many companies have WORKING adaptable AI at this point? Sesh@ isn't perfect but it is promising", 60000);
insertChat("you","I know, it just seems so crazy. 10 months ago this was just a side project and now we've already got our first investors", 63000);
insertChat("me","Worst case scenario we sell out to Noogle take our checks and start a microbrewery in San Flamingo", 66000);
insertChat("you","God just three years in Chip City and you already have gone full yuppie", 69000);
insertChat("me","¯|_(ツ);_/¯", 72000);
insertChat("me","Speaking of yuppie microbreweries wanna hit up Facsimilie to celebrate?", 75000);
insertChat("you","You know it ;);", 80000 );


//-- NOTE: No use time on insertChat.
