$(document).ready(function () {

    var calc = $('.calculator'),
        screen = calc.find('.calc-screen'),
        clean = calc.find('.clean-btn'),
        backspace = calc.find('.backspace'),
        keys = calc.find('.key'),
        button = calc.find('.calc-btn'),
        equally = calc.find('.equal');

    //цифри на кнопки
    keys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

    //виводить в інпут цифри, конкат
    button.click(function () {
        screen.val( screen.val() + $(this).attr('value') );
    });

    //очистка форми
    clean.click(function () {
        screen.val('');
    });

    //виводить результат
    equally.click(function () {
        screen.val( eval( screen.val() ) );
    });

    //кнопка бекспейс
    backspace.click(function () {
        screen.val( screen.val().substring(0, screen.val().length-1) );
    });
});