//
//Nathan Larsen A01532780
//JavaScript User Interaction
//
document.title = "Recursive Sequences";

function fibSequence(n) {
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "seq");

    if (n < 2) {
        if (n === 0) {
            value = 0;
        }
        else if (n === 1) {
            value = 1;
        }
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p)
    }
    else {
        var left = fibSequence(n - 1);
        var clas = left.html.getAttribute("class");
        left.html.setAttribute("class", clas + " seq-left");

        var right = fibSequence(n - 2);
        clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " seq-right");

        value = left.value + right.value;
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p);

        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div };
}
function pellSequence(n) {
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "seq");

    if(n < 2){
        if (n === 0) {
            value = 0;
        }
        else if (n === 1) {
            value = 1;
        }
        var p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        div.appendChild(p)
    }
    else{
        var left = pellSequence(n - 1);
        var clas = left.html.getAttribute("class");
        left.html.setAttribute("class", clas + " seq-left");

        var right = pellSequence(n - 2);
        clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " seq-right");

        value = (2 * left.value) + right.value;
        var p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        div.appendChild(p);

        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div };
}
function tribSequence(n) {
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "seq");

    if(n < 3) {
        if (n === 2) {
            value = 1;
        }
        else if (n === 1) {
            value = 0;
        }
        else if (n === 0) {
            value = 0;
        }
        var p = document.createElement('p');
        p.textContent = 'Trib(' + n + ') = ' + value;
        div.appendChild(p)
    }
    else {
        var left = tribSequence(n - 1);
        var clas = left.html.getAttribute("class");
        left.html.setAttribute("class", clas + " seq-left");

        var mid = tribSequence(n - 2);
        clas = mid.html.getAttribute("class");
        mid.html.setAttribute("class", clas + " seq-mid");

        var right = tribSequence(n - 3);
        clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " seq-right");

        value = left.value + mid.value + right.value;
        var p = document.createElement('p');
        p.textContent = 'Trib(' + n + ') = ' + value;
        div.appendChild(p);

        div.appendChild(left.html);
        div.appendChild(mid.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div };
}
var fib = function (n, node) {
    var tree = fibSequence(n)
    node.appendChild(tree.html);
    node.setAttribute("id", "seq");
}
var pell = function (n, node){
    var tree = pellSequence(n)
    node.appendChild(tree.html);
    node.setAttribute("id", "seq");
}
var trib = function (n, node){
    var tree = tribSequence(n)
    node.appendChild(tree.html);
    node.setAttribute("id", "seq");
}
var style = document.createElement('style');
style.textContent =
    "#seq {" +
    "	display: inline-block;" +
    "	width: 20000px;" +
    "}" +
    "" +
    ".seq {" +
    "	background-color: rgba(255,255,0,0.1);" +
    "	font-size: 90%;"+
    "}" +
    "" +
    ".seq-left {" +
    "	float: left;" +
    "	display: inline-block;" +
    "	margin-right: 4px;" +
    "}" +
    "" +
    ".seq-right {" +
    "	float: right;" +
    "	display: inline-block;" +
    "	margin-left: 4px;" +
    "}" +
    "" +
    ".seq-mid {" +
    "	display: inline-block;" +
    "	margin: auto;" +
    "}" +
    "" +
    ".shadow {" +
    "	text-shadow: 1px 1px 2px black;" +
    "	color:       white;" +
    "}" +
    ".box {" +
    "	font-family: 'helvetica neue', helvetica, sans-serif;" +
    "	letter-spacing: 1px;" +
    "	text-transform: capitalize;" +
    "	text-align: center;" +
    "	padding: 3px 10px;" +
    "	margin: 10px;" +
    "	cursor: pointer;" +
    "	border-radius: 10px;" +
    "	border-width: 2px;" +
    "	border-style: solid;" +
    "}" +
    "" +
    ".link {" +
    "	border-color: rgb(0,255,0);" +
    "	background:   rgb(60,180,60);" +
    "	box-shadow: 1px 1px 2px rgba(0,200,0,0.4);" +
    "}" +
    "" +
    ".red {" +
    "	border-color: rgb(255,0,0);" +
    "	background:   rgb(180,60,60);" +
    "	box-shadow: 1px 1px 2px rgba(200,0,0,0.4);" +
    "}" +
    "" +
    ".blue {" +
    "	border-color: rgb(0,0,255);" +
    "	background:   rgb(60,60,180);" +
    "	box-shadow: 1px 1px 2px rgba(0,0,200,0.4);" +
    "}" +
    "" +
    ".green {" +
    "	border-color: rgb(0,255,0);" +
    "	background:   rgb(60,180,60);" +
    "	box-shadow: 1px 1px 2px rgba(0,200,0,0.4);" +
    "}";

document.querySelector('body').appendChild(style);

var link = function(){
    var fib = "Fibonacci";
    var fibLink = fib.link("https://oeis.org/A000045");

    var pell = "Pell";
    var pellLink = pell.link("https://oeis.org/A000129");

    var trib = "Tribonacci";
    var tribLink = trib.link("https://oeis.org/A000073");

    document.write("For more information on these sequences: " + fibLink + ", " + pellLink + ", " + tribLink);
}

var divMakerMaker = function(color, id) {
    return function() {
        var div = document.createElement('div');
        div.setAttribute('class', color + ' shadow box');
        div.setAttribute('id', id);
        document.body.appendChild(div);
    }
}


var redDiv = divMakerMaker('red', 'fib');
var greenDiv = divMakerMaker('green', 'pell');
var blueDiv = divMakerMaker('blue', 'trib');

redDiv();
greenDiv();
blueDiv();

fib(11, document.querySelector('.red'));
pell(11, document.querySelector('.green'));
trib(20, document.querySelector('.blue'));

link();
