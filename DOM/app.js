// Make a button appear on the page when it's first loaded. The button cannot already be in your html. When the button is clicked, you should display an Alert box with any (nice) message.
addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Click Me!");
    document.body.appendChild(button);
    button.appendChild(buttonText);

    button.addEventListener("click", function () {
        alert('this is a message');
    });

});


//#3  Create a div in HTML. Without using CSS :hover, make the div change to a different background color when your mouse hovers over it. The div should return to its original color when the mouse exits the div.
let div = document.getElementById("div-color");

div.addEventListener("mouseenter", function () {
    div.style.backgroundColor = "red";
});


div.addEventListener("mouseleave", function () {
    div.style.backgroundColor = "white";
})


let p = document.getElementsByTagName('p');
p.addEventListener("click", function () {
    p.style.color = "red";


});


addEventListener("DOMContentLoaded", function () {
let button5 = document.createElement("button5");
let btnTxt = document.createTextNode("Joseph");
document.body.appendChild(button5);
button5.appendChild(btnTxt);


button5.addEventListener("click", function () {
    alert('btnTxt');
});


});

//#6 create a button ul in html, in JS reate an array  and when array is clicked  print out ordered list
let friendsArray = ["Daniel", "Demetrius", "Phu","Landon", "Garret", "Camille", "Morgan", "Barcley", "Blakely", "Nora"];
let button = document.getElementById.getElementById("buttom");
let ul = getElementById("ul");
button.addEventListener("click", function(){
    if...
}); 







