function validateForm() {
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comments").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    if (name === "" || comment === "") {
        alert("All fields are compulsory!");
        if (name === "") {
            document.getElementById("name").focus();
        } else {
            document.getElementById("comment").focus();
        }
        return false;
    } else if (!male && !female) {
        alert("All fields are compulsory!");
        return false;
    }
}
