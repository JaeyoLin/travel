﻿var canvas = { 'temp': null, 'draw': null };
var mouseDown = false;

$(document).ready(function () {
    //  刮刮樂初始化
    setupCanvases();    
});

// 畫線
function scratch(canv, x, y, fresh) {

    var ctx = canv.getContext('2d');
    // 畫筆大小, 形狀...
    ctx.lineWidth = 30;
    ctx.lineCap = ctx.lineJoin = 'round';

    if (fresh) {
        ctx.beginPath();
        // 為了模擬滑動，所以在 x 加上 0.01，不然點一下不會產生反應
        ctx.moveTo(x + 0.01, y);
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

// canvas 合成	
function recompositeCanvases() {

    var main = document.getElementById('myCanvas');
    var tempctx = canvas.temp.getContext('2d');
    var mainctx = main.getContext('2d');

    // clear the temp
    canvas.temp.width = canvas.temp.width;

    // 把 canvas.draw 覆蓋到 drawImage 上
    tempctx.drawImage(canvas.draw, 0, 0);

    var img = document.getElementById('img_Back');
    
    // 以 source-atop 的方式把 backimage 畫到 tempctx 上
    tempctx.globalCompositeOperation = 'source-atop';
    tempctx.drawImage(img, 0, 0, window.innerWidth, window.innerHeight);
    
    // mainctx => 灰色前景 (還沒有刮掉的地方)
    mainctx.fillStyle = "#888";
    mainctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    // 最後把 canvas.temp 覆蓋到 mainctx 上
    mainctx.drawImage(canvas.temp, 0, 0);
}

function setupCanvases() {
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