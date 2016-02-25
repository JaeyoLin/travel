var ps_MainCard = "heart3";   //  觀眾的牌(預設)
var ps_TempCard = "";    //  暫存
var ps_KeyCard = "";    //  關鍵牌
var ps_Card = "";   //  超過設定秒數 會被指定成觀眾的牌
var ps_Check = "Y"; //  是否要判斷 Timer
var ps_Timer1 = ""; //  Time Function ID
var pi_Timeout1 = 5000; //  3秒
var po_Deck = new Array();  //  表演中的牌
//  撲克牌牌
var po_OriDeck = ['spade1', 'spade2', 'spade3', 'spade4', 'spade5', 'spade6', 'spade7', 'spade8', 'spade9', 'spade10', 'spade11', 'spade12', 'spade13',
                            'heart1', 'heart2', 'heart3', 'heart4', 'heart5', 'heart6', 'heart7', 'heart8', 'heart9', 'heart10', 'heart11', 'heart12', 'heart13',
                            'diamond1', 'diamond2', 'diamond3', 'diamond4', 'diamond5', 'diamond6', 'diamond7', 'diamond8', 'diamond9', 'diamond10', 'diamond11', 'diamond12', 'diamond13',
                            'club1', 'club2', 'club3', 'club4', 'club5', 'club6', 'club7', 'club8', 'club9', 'club10', 'club11', 'club12', 'club13' ];
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
    //  HTML 不寫固定POKER路徑
    $("#img_drag").attr("src", "../Images/" + ps_Poker + "back.png");

    $("#div_color").addClass("show");
    $("#div_color").css('z-index', 100);
    $("#div_number").addClass("hide");
    $("#div_result").addClass("hide");

    LoadEvent();    //  載入事件

    LoadImages();   //  載入圖片
}); 

//------------------------------------------------------------------------------------------------------------------------------
//  載入圖片
//------------------------------------------------------------------------------------------------------------------------------
function LoadImages() {
    $.preload(
        'Images/wo.jpg',
        'Images/wood.jpg',
        'Images/pad.png',
        'Images/deck.png',
        'Images/wt1pg.jpg',
        'Images/LOGO.png',

        './Images/' + ps_Poker + 'back.png',
        './Images/' + ps_Poker + 'spade1.png',
        './Images/' + ps_Poker + 'spade2.png',
        './Images/' + ps_Poker + 'spade3.png',
        './Images/' + ps_Poker + 'spade4.png',
        './Images/' + ps_Poker + 'spade5.png',
        './Images/' + ps_Poker + 'spade6.png',
        './Images/' + ps_Poker + 'spade7.png',
        './Images/' + ps_Poker + 'spade8.png',
        './Images/' + ps_Poker + 'spade9.png',
        './Images/' + ps_Poker + 'spade10.png',
        './Images/' + ps_Poker + 'spade11.png',
        './Images/' + ps_Poker + 'spade12.png',
        './Images/' + ps_Poker + 'spade13.png',

        './Images/' + ps_Poker + 'heart1.png',
        './Images/' + ps_Poker + 'heart2.png',
        './Images/' + ps_Poker + 'heart3.png',
        './Images/' + ps_Poker + 'heart4.png',
        './Images/' + ps_Poker + 'heart5.png',
        './Images/' + ps_Poker + 'heart6.png',
        './Images/' + ps_Poker + 'heart7.png',
        './Images/' + ps_Poker + 'heart8.png',
        './Images/' + ps_Poker + 'heart9.png',
        './Images/' + ps_Poker + 'heart10.png',
        './Images/' + ps_Poker + 'heart11.png',
        './Images/' + ps_Poker + 'heart12.png',
        './Images/' + ps_Poker + 'heart13.png',

        './Images/' + ps_Poker + 'diamond1.png',
        './Images/' + ps_Poker + 'diamond2.png',
        './Images/' + ps_Poker + 'diamond3.png',
        './Images/' + ps_Poker + 'diamond4.png',
        './Images/' + ps_Poker + 'diamond5.png',
        './Images/' + ps_Poker + 'diamond6.png',
        './Images/' + ps_Poker + 'diamond7.png',
        './Images/' + ps_Poker + 'diamond8.png',
        './Images/' + ps_Poker + 'diamond9.png',
        './Images/' + ps_Poker + 'diamond10.png',
        './Images/' + ps_Poker + 'diamond11.png',
        './Images/' + ps_Poker + 'diamond12.png',
        './Images/' + ps_Poker + 'diamond13.png',

        './Images/' + ps_Poker + 'club1.png',
        './Images/' + ps_Poker + 'club2.png',
        './Images/' + ps_Poker + 'club3.png',
        './Images/' + ps_Poker + 'club4.png',
        './Images/' + ps_Poker + 'club5.png',
        './Images/' + ps_Poker + 'club6.png',
        './Images/' + ps_Poker + 'club7.png',
        './Images/' + ps_Poker + 'club8.png',
        './Images/' + ps_Poker + 'club9.png',
        './Images/' + ps_Poker + 'club10.png',
        './Images/' + ps_Poker + 'club11.png',
        './Images/' + ps_Poker + 'club12.png',
        './Images/' + ps_Poker + 'club13.png'
    );
}

//------------------------------------------------------------------------------------------------------------------------------
//  載入事件
//------------------------------------------------------------------------------------------------------------------------------
function LoadEvent() {
    $("#div_Spade").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            ChangeColor('spade');
        },
        threshold: 0
    });
    $("#div_Heart").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            ChangeColor('heart');
        },
        threshold: 0
    });
    $("#div_Diamond").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            ChangeColor('diamond');
        },
        threshold: 0
    });
    $("#div_Club").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            ChangeColor('club');
        },
        threshold: 0
    });

    $("#div_1").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('1');
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('13');
        },
        threshold: 0
    });
    $("#div_2").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('2');
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('13');
        },
        threshold: 0
    });
    $("#div_3").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('3');
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('13');
        },
        threshold: 0
    });
    $("#div_4").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('4');
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('13');
        },
        threshold: 0
    });
    $("#div_5").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('5');
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('13');
        },
        threshold: 0
    });
    $("#div_6").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('6');
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('13');
        },
        threshold: 0
    });
    $("#div_7").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('7');
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('13');
        },
        threshold: 0
    });
    $("#div_8").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('8');
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('13');
        },
        threshold: 0
    });
    $("#div_9").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('9');
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('13');
        },
        threshold: 0
    });
    $("#div_10").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('10');
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('13');
        },
        threshold: 0
    });
    $("#div_11").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('11');
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('13');
        },
        threshold: 0
    });
    $("#div_12").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('12');
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('13');
        },
        threshold: 0
    });
    $("#div_13").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('13');
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            ChangeNumber('13');
        },
        threshold: 0
    });

    //  上面牌組拖曳事件
    $("#img_drag").draggable({
        zIndex: 50,
        helper: 'clone',
        start: function (event, ui) { $("#div_draggable").droppable({ disabled: true }); },
        stop: function (event, ui) { $("#div_draggable").droppable({ disabled: false }); }
    });

    //  下面牌組拖曳事件
    $("#img_drop").draggable({
        zIndex: 51,
        helper: 'clone',
        start: ShowPreCard, //  下面的牌拖曳時，預覽上一張牌
        stop: RestorePreCard
    });

    //  下面牌組被拖曳事件
    $("#img_table").droppable({
        drop: ChangeCard
    });
}

//------------------------------------------------------------------------------------------------------------------------------
//  下面的牌拖曳時，預覽上一張牌
//------------------------------------------------------------------------------------------------------------------------------
function ShowPreCard() {
    var li_Index = parseInt($("#span_number").html(), 10);

    if (li_Index != NaN) {
        if (li_Index - 2 < 0) {
            $("#img_drop").attr("src", "");
        }
        else {
            $("#img_drop").attr("src", "../Images/" + ps_Poker + po_Deck[li_Index - 2] + ".png");
        }
    }

    $("#img_table").droppable({ disabled: true });
}

//------------------------------------------------------------------------------------------------------------------------------
//  下面的牌拖曳時，結束後要將牌還原
//------------------------------------------------------------------------------------------------------------------------------
function RestorePreCard() {
    var li_Index = parseInt($("#span_number").html(), 10);

    if (li_Index != NaN) {
        if (li_Index - 1 < 0) {
            $("#img_drop").attr("src", "");
        }
        else {
            $("#img_drop").attr("src", "../Images/" + ps_Poker + po_Deck[li_Index - 1] + ".png");
        }
    }
    $("#img_table").droppable({ disabled: false }); 
}

//------------------------------------------------------------------------------------------------------------------------------
//  下面的牌疊，換成上一張牌
//------------------------------------------------------------------------------------------------------------------------------
function ChangePreCard() {
    var li_Index = parseInt($("#span_number").html(), 10);

    if (li_Index != NaN) {
        if (li_Index - 2 < 0) {
            $("#span_number").html("0");
            $("#img_drop").attr("src", "");
        }
        else {
            $("#span_number").html(li_Index - 1);
            $("#img_drop").attr("src", "../Images/" + ps_Poker + po_Deck[li_Index - 1] + ".png");
        }
    }
}

//------------------------------------------------------------------------------------------------------------------------------
//  
//------------------------------------------------------------------------------------------------------------------------------
function ChangeCard(event, ui) {
    $("#div_First").attr("onclick", "");
    var ls_Card = ps_Card;

    var li_Deck = po_Deck.length;    //  目前牌組的張數
    var li_Index = 0;
    var li_TempIndex = 0;   //  Parse Int 用
    if ($("#span_number").html() != "") {
        li_TempIndex = parseInt($("#span_number").html(), 10);

        if (li_TempIndex != NaN) {
            li_Index = li_TempIndex;
        }
    }

    if (li_Deck <= li_Index) {

        //  觀眾選的下一張牌
        if (ps_TempCard != "") {
            ls_Card = ps_TempCard
        }

        if (ls_Card == "") {
            ls_Card = GetRandomCard();

            if (po_OriDeck.length != 1) {
                while (ls_Card == ps_MainCard) {
                    ls_Card = GetRandomCard();
                }
            }
            AddCard(ls_Card);
        }
        else if (ps_TempCard == "") {
            AddCard(ls_Card);
            ps_Card = "";

            ps_TempCard = ps_KeyCard;
        }
        else {
            AddCard(ls_Card);
            ps_TempCard = "";
        }

        $("#img_drop").attr("src", "../Images/" + ps_Poker + ls_Card + ".png");
        if ($("#span_number").html() == "0") {
            $("#span_number").html('1');
        }
        else {
            li_Index = li_Index + 1;
            $("#span_number").html(li_Index);
        }
        if (ps_Check == "Y") StartTimer();
    }
    else {
        clearInterval(ps_Timer1);
        li_Index = li_Index + 1;
        $("#span_number").html(li_Index);
        $("#img_drop").attr("src", "../Images/" + ps_Poker + po_Deck[li_Index - 1] + ".png");
    }

    if (li_Index >= 52) {
        $("#img_drag").attr("src", "");
        $("#img_deck").attr("src", "");
        $("#draggable").draggable({ disabled: true });
    }

    //  表演中牌組如果大於0
    //  開啟 img_drop 的 drag 事件
    //  開啟 img_drag 的 drop 事件
    if (po_Deck.length > 0) {
        $("#div_draggable").droppable({
            drop: function (event, ui) {
                clearInterval(ps_Timer1);
                //  換上一張，換上一個數字
                ChangePreCard();
                if (li_Index < 53) {
                    $("#img_drag").attr("src", "../Images/" + ps_Poker + "back.png");
                    $("#img_deck").attr("src", "Images/deck.png");
                    $("#draggable").draggable({ disabled: false });
                }
            }
        });
    }
}

//------------------------------------------------------------------------------------------------------------------------------
//  設定觀眾的花色，並開啟選擇點數 div
//------------------------------------------------------------------------------------------------------------------------------
function ChangeColor(as_Color) {
    ps_MainCard = as_Color;

    $("#div_color").removeClass("show").addClass("hide");
    $("#div_number").removeClass("hide").addClass("show");
    $("#div_number").css('z-index', 101);
}

//------------------------------------------------------------------------------------------------------------------------------
//  設定觀眾的點數，並開啟表演 div
//------------------------------------------------------------------------------------------------------------------------------
function ChangeNumber(as_Number) {
    ps_MainCard = ps_MainCard + as_Number;

    $("#div_number").removeClass("show").addClass("hide");
    $("#div_result").removeClass("hide").addClass("show");
    $("#div_result").css('z-index', 102);
}

//------------------------------------------------------------------------------------------------------------------------------
//  隨機產生一張不重複的牌
//------------------------------------------------------------------------------------------------------------------------------
function GetRandomCard() {
    var li_Random = 0;  //  隨機產生的數字
    if (po_OriDeck.length > 0) {
        li_Random = Math.floor(Math.random() * po_OriDeck.length);
    }
    return po_OriDeck[li_Random];
}

//------------------------------------------------------------------------------------------------------------------------------
//  將觀眾的牌放到po_Deck，移除po_OriDeck
//------------------------------------------------------------------------------------------------------------------------------
function AddCard(as_Card) {
    po_Deck.push(as_Card);
    po_OriDeck.deleteOf(as_Card);
}

//------------------------------------------------------------------------------------------------------------------------------
//  開始計時
//------------------------------------------------------------------------------------------------------------------------------
function StartTimer() {
    $("#hid_StartTime").val(new Date()); //  網頁載入時間
    clearInterval(ps_Timer1);

    ps_Timer1 = setInterval("CheckTimer();", 1000);
}

//------------------------------------------------------------------------------------------------------------------------------
//  檢查時間有無超過預定時間
//------------------------------------------------------------------------------------------------------------------------------
function CheckTimer() {
    var endtime = new Date();   //  目前時間

    //  判斷有無載入開始時間
    if ((Date.parse(endtime).valueOf() - Date.parse($("#hid_StartTime").val()).valueOf()) > pi_Timeout1) {
        clearInterval(ps_Timer1);
        ps_Card = ps_MainCard;
        ps_Check = "N";

        //  計算觀眾的排在第幾張
        var li_x = 0;
        var li_y = 0;

        li_x = PokerDeck_Up[ps_Card].index;
        
        var li_TempY = 0;   //  Parse Int 用
        li_TempY = parseInt($("#span_number").html(), 10);

        if (li_TempY != NaN) {
            li_y = li_TempY + 1;    //  目前張數的下一張
        }

        var li_z = 0;

        if (li_x - li_y >= 0) {
            //	+1是將牌放到牌頂，如果沒加是放到牌底
            li_z = li_x - li_y + 1;
        }
        else if (li_x - li_y < 0) {
            li_z = 52 - (li_y - li_x) + 1;
        }

        //  取得哪一張牌
        $.each(PokerDeck_Up, function (idx, obj) {
            if (li_z == obj.index) {
                ps_KeyCard = obj.name;
                return false;
            }
        });
    }
}

//------------------------------------------------------------------------------------------------------------------------------
//  設定第一張牌就是觀眾的牌
//------------------------------------------------------------------------------------------------------------------------------
function FirstCard() {
    clearInterval(ps_Timer1);
    ps_Card = ps_MainCard;
    ps_Check = "N";
    $("#div_First").attr("onclick", "");
}

//------------------------------------------------------------------------------------------------------------------------------
//  刪除陣列中某個值 
//------------------------------------------------------------------------------------------------------------------------------
Array.prototype.deleteOf = function(a) {  
	    for(var i=this.length; i-- && this[i] !== a;);  
	    if (i >= 0) this.splice(i,1);
	}; 


