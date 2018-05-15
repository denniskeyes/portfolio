// // Check off specific todos by clicking
// Translation: When an li that is ONLY inside a ul is clicked, run this code
// $("ul").on("click", "li", function(){
//     $(this).toggleClass("checkoff");
// });

////////// VANILLA JS EQUIVALENT \\\\\\\\\\
var checkoff = document.querySelector("ul");
checkoff.addEventListener("click", function(event){
    event.target.classList.toggle("checkoff");  // Event delegation (event.target) used for binding the "click" event of the ul to each of its child li's
});



// Click on trash icon to delete todo
// Translation: When a span that is ONLY inside a ul is clicked, run this code
// Functionality: When X (span) is clicked, the li will fadeout, and then is removed
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation(); // Will stop parent events from occurring (i.e. line-through)
});

// // Enter text into the input field to generate a new li in the list
// $("input[type='text']").keypress(function(event){
//     if (event.which === 13) { // 13 is code for enter button
        
//         // Grab new todo text from input
//         textInput = $(this).val();
        
//         // Clear out input after submission
//         $(this).val("");
//         // Create a new li and add to ul
//         $("ul").append("<li><span><i class=\"fas fa-trash\"></i></span> " + textInput + "</li>");
//     } 
// });

////////// VANILLA JS EQUIVALENT \\\\\\\\\\
var newItem = document.querySelector("input[type='text']");
var ul = document.querySelector("ul");
newItem.addEventListener("keypress", function(event){
    if (event.which === 13) {
        // Need to get input text upon pressing enter, then create new li, adjust its html to include span, and then append it to the ul 
        var textInput = event.target.value;
        var newLi = document.createElement("li");
        newLi.innerHTML = "<span><i class=\"fas fa-trash\"></i></span> " + textInput;
        ul.appendChild(newLi);
        event.target.value = "";
    } 
});



// Toggle visibility of input field with the plus-sign icon
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});