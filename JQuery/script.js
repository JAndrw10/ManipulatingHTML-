let $button = $("<button>Click Me!</button>");
$button.appendTo("body");
$button.click(function () {
    alert("Nice! it worked.")
});

let $div = $("#div");
$div.hover(function() {
    div.style.backgroundColor = "red";
}, function() {
    div.style.backgroundColor = "black";
});

let $p = $("#p");
$p.click( function() {
    let $allchar = "0123456789ABCDEF";
    let $randcol = "";
    for (let i = 0; i < 6; i++) {
        $randcol += $allchar[Math.floor(Math.random() * 16)];
    }
    $($p).css("color", "#" + $randcol);
});

let btnName = $("#btnName");
btnName.click(function(){
    console.log('it works');


});


//#6 create  an array of friends
let $friendsArray = ["Daniel", "Demetrius", "Phu", "Landon", "Garrett", "Camille", "Morgan", " Barcley", "Blakely", "Gabe"];
$($button).click(function(){
    for(let i =0; 1 < $friendsArray.length; i++){
        let $ul = $("<ul" + ($friendsArray[i]));
        
    }
})
