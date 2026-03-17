window.onload = function () {

    function multiply(a, b) {
        return a * b;
    }

    var grade = 'A';
    switch (grade) {
        case 'A':
            console.log('Excellent');
            break;
        case 'B':
            console.log('Good');
            break;
        case 'C':
            console.log('Fair');
            break;
        case 'D':
            console.log('Poor');
            break;
        case 'F':
            console.log('Failing');
            break;
        default:
            console.log('Invalid grade');
    }

    let result = multiply(5, 3);
    console.log(result);

    var person2 = new Object();
    person2.name = "Alice";
    person2.age = 32;
    person2.isMarried = true;
    person2.address = {};
    person2.address.street = "123 Main St";
    person2['address']['flatNO'] = 33;

    console.log(person2);

    let arr = ["A", "B", "C"];
    console.log(arr.length - 1);

    let x = document.getElementById("demo");
    x.innerHTML = "Hello JavaScript!";

    let y = document.getElementsByClassName("demo");
    y[0].innerHTML = "Hello JavaScript!";

    let z = document.getElementsByTagName("p");
    z[0].innerHTML = "Hello JavaScript!";

    document.querySelector("#demo");
    document.querySelectorAll(".demo");
};


// existing function
function changeAttr() {
    let x = document.getElementById("demo");

    console.log("Old class:", x.getAttribute("class"));
    x.setAttribute("class", "newClass");
    x.innerHTML = "Attribute Changed!";
}


// ================= ADDED MOUSE EVENTS =================

function onClick() {
    let x = document.getElementById("demo");
    x.innerHTML = "Button Clicked!";
}

function onMouseOver() {
    let x = document.getElementById("demo");
    x.innerHTML = "Mouse Over Detected!";
}


// ================= FORM EVENTS =================

function onFocus() {
    let x = document.getElementById("nameField");
    x.style.backgroundColor = "lightyellow";
    console.log("Input focused");
}

function onBlur() {
    let x = document.getElementById("nameField");
    x.style.backgroundColor = "white";
    console.log("Input lost focus");
}

function onChange() {
    let x = document.getElementById("nameField");
    console.log("Changed value:", x.value);
}

function handleSubmit(event) {
    event.preventDefault();
    alert("Form submitted!");
} // ✅ CLOSED HERE


// ================= EXTRA EVENTS =================

function show(msg) {
    document.getElementById("output").innerHTML = msg;
}

// Mouse Events
function clickEvent() { show("Button Clicked"); }
function mouseOverEvent() { show("Mouse Over"); }
function mouseOutEvent() { show("Mouse Out"); }
function mouseDownEvent() { show("Mouse Down"); }
function mouseUpEvent() { show("Mouse Up"); }
function mouseMoveEvent() { show("Mouse Moving"); }

// Keyboard Events
function keyDownEvent(e) { show("Key Down: " + e.key); }
function keyUpEvent(e) { show("Key Up: " + e.key); }

// Focus / Blur
function focusEvent() { show("Input Focused"); }
function blurEvent() { show("Input Lost Focus"); }

// Change Event
function changeEvent() { show("Value Changed"); }

// Submit Event
function submitEvent(e) {
    e.preventDefault();
    show("Form Submitted");
}

// Page Load
function pageLoaded() {
    show("Page Loaded");
}