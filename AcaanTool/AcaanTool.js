var ps_Color = "";
var ps_Number = "";
var ps_Index = "";
var ps_Poker = "Poker_Watcher2/";  //  哪一副牌的圖片

$(document).ready(function () {
    $("#div_Input").show();
    $("#div_Result").hide();

    //  載入圖檔
    $.preload(
        './Images/spade.png',
        './Images/spade_click.png',
        './Images/heart.png',
        './Images/heart_click.png',
        './Images/diamond.png',
        './Images/diamond_click.png',
        './Images/club.png',
        './Images/club_click.png',

        './Images/number1.png',
        './Images/number1_click.png',
        './Images/number2.png',
        './Images/number2_click.png',
        './Images/number3.png',
        './Images/number3_click.png',
        './Images/number4.png',
        './Images/number4_click.png',
        './Images/number5.png',
        './Images/number5_click.png',
        './Images/number6.png',
        './Images/number6_click.png',
        './Images/number7.png',
        './Images/number7_click.png',
        './Images/number8.png',
        './Images/number8_click.png',
        './Images/number9.png',
        './Images/number9_click.png',
        './Images/number10.png',
        './Images/number10_click.png',
        './Images/number11.png',
        './Images/number11_click.png',
        './Images/number12.png',
        './Images/number12_click.png',
        './Images/number13.png',
        './Images/number13_click.png'
        );
});

function Check() {
    if (ps_Color == "") {
        ShowErrorMessage("請選擇花色！");
        return;
    }
    
    if (ps_Number == "") {
        ShowErrorMessage("請選擇點數！");
        return;
    }

    ps_Index = $("#txt_Number").val();
    if (ps_Index == "0" || ps_Index > 52) {
        ShowErrorMessage("請輸入1-52的數字！");
        return;
    }
    
    $("#div_Input").hide();
    $("#btn_Check").hide();
    $("#div_Result").show();

    //  計算觀眾的排在第幾張
    var li_x = 0;
    var li_y = 0;
    li_x = PokerDeck_Up[ps_Color + ps_Number].index;
    li_y = ps_Index;

    var li_z = 0;

    if (li_x - li_y >= 0) 
    {
        //	+1是將牌放到牌頂，如果沒加是放到牌底
        li_z = li_x - li_y + 1;
    }
	else if (li_x - li_y < 0)
	{
	    li_z = 52 - (li_y - li_x) + 1;
	}

	var ls_Card = "";
	//  取得哪一張牌
	$.each(PokerDeck_Up, function (idx, obj) {
	    if (li_z == obj.index) {
	        ls_Card = obj.name;
	        return false;
	    }
	});

	$("#img_Card").attr("src", "../Images/" + ps_Poker + ps_Color + ps_Number + ".png");
	$("#span_Number").html(ps_Index);

	$("#img1").attr("src", "../Images/" + ps_Poker + "back.png");
	$("#img2").attr("src", "../Images/" + ps_Poker + "back.png");
	$("#img3").attr("src", "../Images/" + ps_Poker + "spade2.png");
	$("#img4").attr("src", "../Images/" + ps_Poker + "heart8.png");
	$("#img5").attr("src", "../Images/" + ps_Poker + "diamond13.png");
	$("#img6").attr("src", "../Images/" + ps_Poker + "club10.png");
	$("#img7").attr("src", "../Images/" + ps_Poker + "spade7.png");
	$("#img8").attr("src", "../Images/" + ps_Poker + "heart3.png");

	//  第一張是黑桃10，如果是黑桃10不顯示圖檔，為巴格拉斯
	if (ls_Card != "spade10") {
	    $("#img_KeyCard").attr("src", "../Images/" + ps_Poker + ls_Card + ".png");
	}
}

function ClickColor(as_Type) {
    ps_Color = as_Type;

    $("#img_spade").attr("src", "Images/spade.png");
    $("#img_heart").attr("src", "Images/heart.png");
    $("#img_diamond").attr("src", "Images/diamond.png");
    $("#img_club").attr("src", "Images/club.png");

    $("#img_" + as_Type).attr("src", "Images/" + as_Type + "_click.png");
}

function ClickNumber(as_Number) {
    ps_Number = as_Number;
    for (i = 1 ; i < 14 ; i++)
    {
        $("#img_Number" + i).attr("src", "Images/number_" + i + ".png");
    }
    $("#img_Number" + as_Number).attr("src", "Images/number_" + as_Number + "_click.png");
}

function ClickIndex(as_Index) {
    var ls_Index = $("#txt_Number").val();
    if (ls_Index == "0") {
        ls_Index = "";
    }

    if (as_Index == "c") {
        ls_Index = "0";
    }
    else {
        ls_Index = ls_Index + as_Index;
    }

    $("#txt_Number").val(ls_Index);
}

function ShowErrorMessage(as_Message) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h3>" + as_Message + "</h3></div>")
	.css({ display: "block",
	    opacity: 0.90,
	    position: "fixed",
	    padding: "7px",
	    "text-align": "center",
	    width: "270px",
	    left: ($(window).width() - 284) / 2,
	    top: $(window).height() / 2,
	    'z-index': '10000'
	})
	.appendTo($.mobile.pageContainer).delay(1500)
	.fadeOut(400, function () {
	    $(this).remove();
	});
}