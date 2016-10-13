require('./cover');

var lang = "en";
var userLang = navigator.language || navigator.userLanguage;
var userLangCode = userLang.split('-')[0];
var userCountryCode = userLang.split('-')[1];
var locale = $('.ui-locale');
var supportLangs = [];
$(".ui-locale option").each(function() {
    supportLangs.push($(this).val());
});
if (Cookies.get('locale')) {
    lang = Cookies.get('locale');
} else if (supportLangs.indexOf(userLang) !== -1) {
    lang = supportLangs[supportLangs.indexOf(userLang)];
} else if (supportLangs.indexOf(userLangCode) !== -1) {
    lang = supportLangs[supportLangs.indexOf(userLangCode)];
}

locale.val(lang);
locale.change(function() {
    Cookies.set('locale', $(this).val(), {
        expires: 365
    });
    window.location.reload();
});
