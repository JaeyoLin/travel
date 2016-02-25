
var canvas = { 'temp': null, 'draw': null };
var mouseDown = false;
var pb_IsInit = false;
var ps_BackColor = "Black";  //  刮刮樂色碼表
var ps_Color = "";  //  花色
var ps_Number = ""; //  點數
var ps_Poker = "Poker_Watcher/";  //  哪一副牌的圖片

var coinImage = new Image();
coinImage.src = "Images/coin.png";

$(document).ready(function () {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = ps_BackColor;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    
    //  預設圖片
    $("#img_Back").attr("src", "../Images/" + ps_Poker + "jocker.png");

    //  載入事件
    LoadEvent();

    LoadImages();   //  載入圖片
});

//------------------------------------------------------------------------------------------------------------------------------
//  載入圖片
//------------------------------------------------------------------------------------------------------------------------------
function LoadImages() {
    $.preload(
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
    $("#div_1").swipe({
        swipeUp: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "spade";
                ps_Number = "1";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "heart";
                ps_Number = "1";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeDown: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "diamond";
                ps_Number = "1";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "club";
                ps_Number = "1";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        threshold: 0
    });
    $("#div_2").swipe({
        swipeUp: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "spade";
                ps_Number = "2";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "heart";
                ps_Number = "2";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeDown: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "diamond";
                ps_Number = "2";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "club";
                ps_Number = "2";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        threshold: 0
    });
    $("#div_3").swipe({
        swipeUp: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "spade";
                ps_Number = "3";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "heart";
                ps_Number = "3";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeDown: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "diamond";
                ps_Number = "3";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "club";
                ps_Number = "3";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        threshold: 0
    });
    $("#div_4").swipe({
        swipeUp: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "spade";
                ps_Number = "4";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "heart";
                ps_Number = "4";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeDown: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "diamond";
                ps_Number = "4";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "club";
                ps_Number = "4";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        threshold: 0
    });
    $("#div_5").swipe({
        swipeUp: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "spade";
                ps_Number = "5";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "heart";
                ps_Number = "5";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeDown: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "diamond";
                ps_Number = "5";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "club";
                ps_Number = "5";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        threshold: 0
    });
    $("#div_6").swipe({
        swipeUp: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "spade";
                ps_Number = "6";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "heart";
                ps_Number = "6";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeDown: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "diamond";
                ps_Number = "6";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "club";
                ps_Number = "6";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        threshold: 0
    });
    $("#div_7").swipe({
        swipeUp: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "spade";
                ps_Number = "7";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "heart";
                ps_Number = "7";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeDown: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "diamond";
                ps_Number = "7";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "club";
                ps_Number = "7";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        threshold: 0
    });
    $("#div_8").swipe({
        swipeUp: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "spade";
                ps_Number = "8";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "heart";
                ps_Number = "8";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeDown: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "diamond";
                ps_Number = "8";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "club";
                ps_Number = "8";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        threshold: 0
    });
    $("#div_9").swipe({
        swipeUp: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "spade";
                ps_Number = "9";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "heart";
                ps_Number = "9";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeDown: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "diamond";
                ps_Number = "9";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "club";
                ps_Number = "9";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        threshold: 0
    });
    $("#div_10").swipe({
        swipeUp: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "spade";
                ps_Number = "10";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "heart";
                ps_Number = "10";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeDown: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "diamond";
                ps_Number = "10";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "club";
                ps_Number = "10";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        threshold: 0
    });
    $("#div_11").swipe({
        swipeUp: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "spade";
                ps_Number = "11";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "heart";
                ps_Number = "11";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeDown: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "diamond";
                ps_Number = "11";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "club";
                ps_Number = "11";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        threshold: 0
    });
    $("#div_12").swipe({
        swipeUp: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "spade";
                ps_Number = "12";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "heart";
                ps_Number = "12";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeDown: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "diamond";
                ps_Number = "12";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "club";
                ps_Number = "12";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        threshold: 0
    });
    $("#div_13").swipe({
        swipeUp: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "spade";
                ps_Number = "13";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "heart";
                ps_Number = "13";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeDown: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "diamond";
                ps_Number = "13";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            if (!pb_IsInit) {
                ps_Color = "club";
                ps_Number = "13";
                pb_IsInit = true;
                setupCanvases();
            }
        },
        threshold: 0
    });
}

//------------------------------------------------------------------------------------------------------------------------------
// 畫線
//------------------------------------------------------------------------------------------------------------------------------
function scratch(canv, x, y, fresh) {

    var ctx = canv.getContext('2d');
    // 畫筆大小, 形狀...
    ctx.lineWidth = 50;
    ctx.lineCap = ctx.lineJoin = 'round';
    

    if (fresh) {
        ctx.beginPath();
        // 為了模擬滑動，所以在 x 加上 0.01，不然點一下不會產生反應
        ctx.moveTo(x + 0.01, y);
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

//------------------------------------------------------------------------------------------------------------------------------
// canvas 合成	
//------------------------------------------------------------------------------------------------------------------------------
function recompositeCanvases() {

    var main = document.getElementById('myCanvas');
    var tempctx = canvas.temp.getContext('2d');
    var mainctx = main.getContext('2d');

    // clear the temp
    canvas.temp.width = canvas.temp.width;

    // 把 canvas.draw 覆蓋到 drawImage 上
    tempctx.drawImage(canvas.draw, 0, 0);

    $("#img_Back").attr("src", "../Images/" + ps_Poker + ps_Color + ps_Number + ".png");
    var img = document.getElementById('img_Back');
    
    // 以 source-atop 的方式把 backimage 畫到 tempctx 上
    tempctx.globalCompositeOperation = 'source-atop';
    tempctx.drawImage(img, 0, 0, window.innerWidth, window.innerHeight);
    
    // mainctx => 灰色前景 (還沒有刮掉的地方)
    mainctx.fillStyle = ps_BackColor;
    mainctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    // 最後把 canvas.temp 覆蓋到 mainctx 上
    mainctx.drawImage(canvas.temp, 0, 0);
}

//------------------------------------------------------------------------------------------------------------------------------
//
//------------------------------------------------------------------------------------------------------------------------------
function setupCanvases() {
    $("#div_Input").css('z-index', 0);
    $("#div_scratch").css('z-index', 1);
    
    var c = document.getElementById('myCanvas');
    
    // 取得圖片長寬
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    canvas.temp = document.createElement('canvas');
    canvas.draw = document.createElement('canvas');

    canvas.temp.width = canvas.draw.width = c.width;
    canvas.temp.height = canvas.draw.height = c.height;

    recompositeCanvases();

    function mousedown_handler(e) {
        var local = getLocalCoords(c, e);
        mouseDown = true;

        scratch(canvas.draw, local.x, local.y, true);
        recompositeCanvases();

        if (e.cancelable) { e.preventDefault(); }
        return false;
    };

    function mousemove_handler(e) {
        if (!mouseDown) { return true; }

        var local = getLocalCoords(c, e);

        scratch(canvas.draw, local.x, local.y, false);
        
        recompositeCanvases();

        if (e.cancelable) { e.preventDefault(); }
        return false;
    };

    function mouseup_handler(e) {
        //            if (mouseDown) {
        //                mouseDown = false;
        //                if (e.cancelable) { e.preventDefault(); }
        //                return false;
        //            }

        return true;
    };

    // mouse handlers
    //c.addEventListener('mousedown', mousedown_handler, false);
    c.addEventListener('mouseover', mousedown_handler, false);
    c.addEventListener('touchstart', mousedown_handler, false);

    window.addEventListener('mousemove', mousemove_handler, false);
    window.addEventListener('touchmove', mousemove_handler, false);

    window.addEventListener('mouseup', mouseup_handler, false);
    window.addEventListener('touchend', mouseup_handler, false);

    // 取得座標
    function getLocalCoords(elem, ev) {
        var ox = 0, oy = 0;
        var first;
        var pageX, pageY;

        while (elem != null) {
            ox += elem.offsetLeft;
            oy += elem.offsetTop;
            elem = elem.offsetParent;
        }

        if (ev.hasOwnProperty('changedTouches')) {
            first = ev.changedTouches[0];
            pageX = first.pageX;
            pageY = first.pageY;
        } else {
            pageX = ev.pageX;
            pageY = ev.pageY;
        }

        return { 'x': pageX - ox, 'y': pageY - oy };
    }
}