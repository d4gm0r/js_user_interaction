//
//Nathan Larsen A01532780
//JavaScript Recursive Sequences
//

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
    var fibTree = node.querySelector('div.fib');
    if(fibTree)
    {
        node.removeChild(fibTree);
    }
    var tree = fibSequence(n);
    node.appendChild(tree.html);
    node.setAttribute("id", "seq");
}
var pell = function (n, node){
    var pellTree = node.querySelector('div.pell');
    if(pellTree)
    {
        node.removeChild(pellTree);
    }
    var tree = pellSequence(n)
    node.appendChild(tree.html);
    node.setAttribute("id", "seq");
}
var trib = function (n, node){
    var tribTree = node.querySelector('div.trib');
    if(tribTree)
    {
        node.removeChild(tribTree);
    }
    var tree = tribSequence(n)
    node.appendChild(tree.html);
    node.setAttribute("id", "seq");
}
var fibButton = function(me){
    var form = me.parentNode;
    var slider = form.querySelector('input');
    var value = slider.value;
    fib(parseInt(value, form.parentNode));
}
var fibSlider = function(me){
    var form = me.parentNode;
    var button = form.querySelector('button');
    button.textContent = 'Fib(' + me.value + ')';
}
var pellButton = function(me){
    var form = me.parentNode;
    var slider = form.querySelector('input');
    var value = slider.value;
    pell(parseInt(value, form.parentNode));
}
var pellSlider = function(me){
    var form = me.parentNode;
    var button = form.querySelector('button');
    button.textContent = 'Pell(' + me.value + ')';
}
var tribButton = function(me){
    var form = me.parentNode;
    var slider = form.querySelector('input');
    var value = slider.value;
    trib(parseInt(value, form.parentNode));
}
var tribSlider = function(me){
    var form = me.parentNode;
    var button = form.querySelector('button');
    button.textContent = 'Trib(' + me.value + ')';
}
document.querySelector('body').appendChild(style);

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


