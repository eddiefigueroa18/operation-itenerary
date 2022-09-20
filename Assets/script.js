// This is that date displayed at the top of the page 
var today = moment();
$("#todays-date").text(today.format("dddd, MMM Do, YYYY  h:mm:ss A"));

//Place all the definitions here:
// var textContent = document.getElementsById("row")

showLastSaved();
$(".save").click(saveEnteredText); 
//first make a function to save whatever is in the textbox into local storage
function saveEnteredText(event) {
    event.preventDefault();
    index = $(this).data("index");
    var thisText = $(".textArea" + index).val();
    console.log(thisText);
    localStorage.setItem("textinput" + index, thisText);
}

//Now we create a for loop for every time slot
//We then display entered text that was saved onto local storage

function showLastSaved (){
    for (i = 0; i < 25; i++) {
        //set the if conditions
        //if there is data in local storage in row
        if (localStorage.getItem("textinput" + i)) {
            //then get the data and display it 
        var getText = localStorage.getItem("textinput" + i);
        $(".textArea" + i).val(getText);
        }
    }
}

//Display what was saved when you click the checkmark and save what you just put into the textbox


//Depending on the time set the color of the hours to be past, present or future 