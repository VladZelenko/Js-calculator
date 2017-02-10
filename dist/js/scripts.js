$(document).ready(function () {

    var calc = $('.calculator'),
        screen = calc.find('.calc-screen'),
        clean = calc.find('.clean-btn'),
        backspace = calc.find('.backspace'),
        keys = calc.find('.key'),
        button = calc.find('.calc-btn'),
        equally = calc.find('.equal');

    //цифри на кнопки, тобто бере значення value і добавляє його у вигляді тексту
    keys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

    //виводить в інпут цифри, конкат для того, щоб виводилось більше 1 символу, а не заміщалось на новий
    button.click(function () {
        screen.val( screen.val() + $(this).attr('value') );
    });

    //очистка форми
    clean.click(function () {
        screen.val('');
    });

    //виводить результат, евал виконує свій вміст, в даному випадку для ариф. опер., описувати ариф. оп. немає сенсу, так як в жс вони по дефолту є.
    equally.click(function () {
        screen.val( eval( screen.val() ) );
    });

    //кнопка бекспейс, бере рядок з екрану і методом сабстрінг виводить підстроку у виді масиву, перший інтекс - початок, 2 - кінець, тобто довжина масиву -1
    backspace.click(function () {
        screen.val( screen.val().substring(0, screen.val().length-1) );
    });
});