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
    $("#header_signin").show();
    $("#header_signout").hide();
    $("#div_BeforeLogin").removeClass("hide").addClass("show");
    $("#div_BeforeLogin").css('z-index', 100);
    $("#div_AfterLoing").removeClass("show").addClass("hide");
    $("#div_AfterLoing").css('z-index', 0);
})

//------------------------------------------------------------------------------------------------------------------------------
//  登入驗證
//------------------------------------------------------------------------------------------------------------------------------
function Login() {
    var ls_Account = $("#txt_Account").val();
    var ls_Password = $("#txt_Password").val();

    if (LoginCheck(ls_Account, ls_Password)) {
        $("#popupLogin").popup("close")
        $("#header_signin").hide();
        $("#header_signout").show();
        $("#div_BeforeLogin").removeClass("show").addClass("hide");
        $("#div_BeforeLogin").css('z-index', 0);
        $("#div_AfterLoing").removeClass("hide").addClass("show");
        $("#div_AfterLoing").css('z-index', 100);
    }
}

//------------------------------------------------------------------------------------------------------------------------------
//  登入驗證帳號密碼
//------------------------------------------------------------------------------------------------------------------------------
function LoginCheck(as_Account,as_Password) {
    var lb_Result = false;

    if (as_Account == "admin" && as_Password == "9999") {
        lb_Result = true;
    }

    return lb_Result;
}

//------------------------------------------------------------------------------------------------------------------------------
//  登出
//------------------------------------------------------------------------------------------------------------------------------
function LogOut() {
    $("#txt_Account").val('');
    $("#txt_Password").val('');

    $("#header_signin").show();
    $("#header_signout").hide();
    $("#div_BeforeLogin").removeClass("hide").addClass("show");
    $("#div_BeforeLogin").css('z-index', 100);
    $("#div_AfterLoing").removeClass("show").addClass("hide");
    $("#div_AfterLoing").css('z-index', 0);
}

//------------------------------------------------------------------------------------------------------------------------------
//  轉址到表演頁
//------------------------------------------------------------------------------------------------------------------------------
function Redirect(as_URL) {
//    $.mobile.changePage(as_URL, {
//        transition: "pop",
//        reverse: false, //  反轉過場特效
//        changeHash: false,  //  URL 是否更新
//        reloadPage: true
//    });

    document.location = as_URL;
}