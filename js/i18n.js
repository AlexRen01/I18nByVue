

//语言
var language;
//国际化控件
var i18n;

//ECharts图形控件
var Charts = [];

//Plots图形控件
var Plots = [];


var vm;

//参数
var parameter = {
    language: "language",  //语言记录Cookie
    VueId: "#vue_app" //Vue绑定
}



$(function () {
    //获取本地语言包
    //异步获取会没有response，需要暂时关闭异步
    $.ajaxSettings.async = false;
    var dictions = {
        en: $.getJSON('js/languages/string_en.json').responseJSON,
        zh: $.getJSON('js/languages/string_zh.json').responseJSON
    }
    $.ajaxSettings.async = true;
    //如果当前Cookie中没有语言记录，默认为中文
    if ($.cookie(parameter.language) == null) {
        $.cookie(parameter.language, 'zh', { expires: 7, path: '/' });
        language = "zh";
    }
    else {
        language = $.cookie(parameter.language);
    }
    i18n = new VueI18n({
        locale: language, // 设置语言
        messages: dictions, // 设置字典
    })

    vm = new Vue({
        i18n: i18n,
        data() {
            return {
                ReloadFlag: true
            }
        }
    }).$mount(parameter.VueId);
})

//语言编辑
function switchLang() {
    i18n.locale = (i18n.locale == "en" ? "zh" : "en");
    $.cookie(parameter.language, i18n.locale, { expires: 7, path: '/' });

    location.reload();
    return;
}

//语言编辑
function choiseLang(lang) {
    i18n.locale = lang;
    moment.locale(lang);
    $.cookie(parameter.language, i18n.locale, { expires: 7, path: '/' });
    vm.rerender();
}

