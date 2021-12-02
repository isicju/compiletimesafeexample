var REQUEST_COMPLETED = 4;
var OK = 200;
function getUsers() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === REQUEST_COMPLETED) {
            if (xmlHttp.status === OK) {
                var user = JSON.parse(xmlHttp.responseText);
                alert("Received new user with name: " + user.name + " and date created at: " + user.dateCreated);
            }
            else {
                var exception = JSON.parse(xmlHttp.responseText);
                alert("Received error with message: " + exception.errorMessage);
            }
        }
    };
    xmlHttp.open("GET", document.getElementById("inputId").value, true);
    xmlHttp.send(null);
}
//# sourceMappingURL=application.js.map