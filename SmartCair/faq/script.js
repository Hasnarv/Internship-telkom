// function search() {
//     let textToSearch = document.getElementById("text-to-search").value;
//     let paragraph = document.getElementById("paragraph");
//     textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

//     if (textToSearch !== "") {
//         let pattern = new RegExp(`${textToSearch}`, "gi");

//         paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`);
//     }
//     else{
        
//     }
// }

var output = document.getElementById("paragraph");
var str = output.innerHTML;

var input = document.getElementById("search");
input.addEventListener('keyup', searchAndBoldText, false);

function searchAndBoldText(e) {
    // get input search from user
    var search = input.value;

    // condition if the search field is filled or not
    if (search !== "") {
        if (search !== "()" && search !== "[]" && search !== "$" && search !== "^") {
            // init regex
            var regex = new RegExp(`(?<!</?[^>]|&[^;])(${search})`, 'g',);
            // show marker
            var result = str.replace(regex, '<b>' + search + '</b>');
            // overwrite
            output.innerHTML = result;
        }
    } else {
        var result = str.replace(regex, search);
        output.innerHTML = result;
    }
}