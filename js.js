/*//var DOMStrings = {
//    inputTime: '#set-time',
//    output: '#time',
//    inputBtn: '#do-it'
//};

//var getInput = function () {
//    return {
//        setTime: document.querySelector(DOMStrings.inputTime).value
//    }
//}

//var eventListener = function () {
//    document.querySelector(DOMStrings.inputBtn).addEventListener('click', passTime);
//}



//var passTime = function () {
//    var grabTime = document.querySelector(DOMStrings.inputTime).value;
//    return grabTime;
//
//    console.log(grabTime);
//};

function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * .5,
        display = document.querySelector(DOMStrings.output);
    startTimer(fiveMinutes, display);
};

eventListener();*/

//  // // ///////
///  //  // //  //

// Timer controller

var Timer = (function () {

})();

// UI controller

var UIController = (function () {

    var DOMStrings = {
        inputTime: '#set-time',
        output: '#time',
        inputBtn: '#do-it',
        title: '.title'
    };

    return { // zwracam obiekt - umozliwia dostep z innej sekcji 
        getDOMStrings: function () {
            return DOMStrings;
        },
        getInput: function () {
            return {
                inputTime: document.querySelector(DOMStrings.inputTime).value
            }
        }
    }
})();

// Global APP controller

var controller = (function (UICtrl, Timer) {

    var setupEventListeners = function () {

        var DOM = UICtrl.getDOMStrings(); // skrót do DOMStrings

        
        var test = function() {
            console.log('elo!');
        };
        
        var passTime = function () { // coś jak crtlAddItem
            var input;
            
            input = UICtrl.getInput(); // pobierze wartość z input
            
            if (input.inputTime !== '') {
                document.querySelector(DOM.title).textContent = input.inputTime;
            }
        };
        
        document.querySelector(DOM.inputBtn).addEventListener('click', passTime);

    };
    
    return {
        init: function() {
            setupEventListeners();
        }
    }
    
})(UIController, Timer);

controller.init();
