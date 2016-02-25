var ps_Poker = "Poker_Watcher2/";  //  哪一副牌的圖片


//防滑鼠右鍵
document.oncontextmenu = function () {
    return false;
}

//防ctrl+c
document.onkeydown = function () {
    if (event.keyCode == 67) {
        return false;
    }
}

$(document).ready(function () {
    var V = function (obj) { return document.getElementById(obj); }
    V("back").onclick = function () {
        var self = this;
        self.className = "fliped";
        V("front").className = "flip";

        setTimeout(function () {
            V("front").className = "fliped";
            self.className = "flip";
        }, 1000);
    }

    //  HTML 不寫固定POKER路徑
//    $("#img_card1").attr("src", "../Images/" + ps_Poker + "back.png");
//    $("#img_card2").attr("src", "../Images/" + ps_Poker + "back.png");
//    $("#img_card3").attr("src", "../Images/" + ps_Poker + "back.png");
//    $("#img_card4").attr("src", "../Images/" + ps_Poker + "back.png");
//    $("#img_card5").attr("src", "../Images/" + ps_Poker + "back.png");

    //LoadEvent();    //  載入事件

    //LoadImages();   //  載入圖片
});

function LoadEvent() {
    
    $("#img_card1").draggable({
        //zIndex: 50,
        //helper: 'clone'
        //start: function (event, ui) { $("#div_draggable").droppable({ disabled: true }); },
        //stop: function (event, ui) { $("#div_draggable").droppable({ disabled: false }); }
    });

    $("#img_card2").draggable({
        //zIndex: 50,
        //helper: 'clone'
    });

    $("#img_card3").draggable({
        //zIndex: 50,
        //helper: 'clone'
    });

    $("#img_card4").draggable({
        //zIndex: 50,
        //helper: 'clone'
    });

    $("#img_card5").draggable({
        //zIndex: 50,
        //helper: 'clone'
    });
}

function TurnOver() {
    //alert(as_Card);
    $("#back").addClass("fliped");
    $("#front").addClass("flip");

    setTimeout(function () {
        $("#front").removeClass("flip").addClass("fliped");
        $("#back").removeClass("fliped").addClass("flip");
        
    }, 1000);
}