// This is that date displayed at the top of the page 
var today = moment();
$("#todays-date").text(today.format("dddd, MMM Do, YYYY  h:mm A"));




// This shows the last input text
showLastSaved();
$(".save").click(saveEnteredText); 
// Create function that set items in local storage 
function saveEnteredText(event) {
    event.preventDefault();
    var index = $(this).data("index");
    var thisText = $(".textArea" + index).val();
    console.log(thisText);
    localStorage.setItem("textinput" + index, thisText);
}

function showLastSaved (){
    for (i = 0; i < 25; i++) {
        //set the if conditions
        //if there is data in local storage in row
        if (localStorage.getItem("textinput" + i)) {
            //then get the data and display it 
        var getText = localStorage.getItem("textinput" + i);
        $(".textArea" + i).val(getText);
        }
        if (i < moment().hours()) {
            $(".textArea").addClass("past");
        } else if (i == moment().hours()){
            $(".textArea").addClass("present");
        } else if (i > moment().hours()) {
            $(".textArea").addClass("future");
        }
    }
}



