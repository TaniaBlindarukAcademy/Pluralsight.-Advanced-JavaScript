(function () {

    function C() {
        console.log("OOPS!");
    }

    function E(f) {
        console.log("E");
        f();
        var f = F;
    }

    var A = function () {
        console.log("A");
        B();
    };

    var C;

    function G() {
        console.log("G");
        H();

        function H() {
            console.log("H");
            I();
        };
    }

    var D = d;

    function d() {
        console.log("D");
        E(F);
    }

    function I() {
        console.log("I");
        J();
        J();
    }

    B = function () {
        console.log("B");
        C();
    };

    var F = function () {
        console.log("F");
        G();
    };

    var rest = "KLMNOPQRSTUVWXYZ".split("");
    var obj = {};
    for (var i = 0; i < rest.length; i++) {

        (function (i) {

            // define the current function
            obj[rest[i]] = function () {
                console.log(rest[i]);
                if (i < (rest.length - 1)) {
                    obj[rest[i + 1]]();
                    // TODO: call the next function
                }
            };
        })(i);
    }

    var J = function () {
        J = function () {
            console.log("J");
            obj.K();
        };
    };

    C = function () {
        console.log("C");
        D();
    };

    return A;
})()();
