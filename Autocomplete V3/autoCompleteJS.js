var count;
function output(e) {

    if (e.keyCode == 38) {
        var position = document.getElementsByClassName("selected")[0].id;
        document.getElementById(position).className = "list-items";
        position -= 1;
        if (position <= 0)
            position = 0;
        document.getElementById(position).className = "list-items selected";
        document.getElementById(position).scrollIntoView(false);

    }
    else if (e.keyCode == 40) {

        var position = document.getElementsByClassName("selected")[0].id;
        document.getElementById(position).className = "list-items";
        position++;
        if (position >= count)
            position = count;
        document.getElementById(position).className = "list-items selected";
        document.getElementById(position).scrollIntoView(false);
    }
    else if (e.keyCode == 13) {
        var val = document.getElementsByClassName("selected")[0].innerHTML;
        document.getElementById("item").value = val;
        document.getElementById("parentList").style.display = "none";
    }
    else {

        var names = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];
        var input = document.getElementById("item").value;
        document.getElementById("close").style.display = "inline";
        if (input != "") {
            var arr = [];
            document.getElementById("parentList").innerHTML = "";
            input = input.toLowerCase();
            for (var i = 0; i < names.length; i++) {
                if (names[i].toLowerCase().includes(input)) {
                    arr.push(names[i]);
                }
            }
            arr.sort();
            count = arr.length - 1;
            console.log(arr.length);
            var parentList = document.getElementById("parentList");
            if (arr.length > 0) {
                for (var i = 0; i < arr.length; i++) {
                    var list = document.createElement("li");
                    if (i == 0)
                        list.setAttribute("class", "list-items selected");
                    else
                        list.setAttribute("class", "list-items");
                    list.setAttribute("id", i);
                    list.setAttribute("onclick", "selectInput(this)");
                    list.innerHTML = arr[i];
                    parentList.appendChild(list);
                }
            }
            else {
                var list = document.createElement("li");
                list.setAttribute("value", "NOT FOUND");
                list.innerHTML = "No Element Found";
                parentList.appendChild(list);
            }
            document.getElementById("parentList").style.display = "block";
        }
        else {
            document.getElementById("parentList").style.display = "none";
        }
    }
}

function selectInput(data) {

    document.getElementById("item").value = data.innerHTML;
    document.getElementById("parentList").style.display = "none";
}

function clearTab() {

    document.getElementById("item").value = "";
    document.getElementById("parentList").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function focusRemove() {

    if (event.target.type != "text") {
        document.getElementById("parentList").style.display = "none";
    }
    else {
        document.getElementById("parentList").style.display = "block";
    }
}