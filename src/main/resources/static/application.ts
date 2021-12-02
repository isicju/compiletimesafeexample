const REQUEST_COMPLETED = 4;
const OK = 200;

interface User {
    name: string;
    dateCreated: Date;
}

 interface UserException {
    errorMessage: string;
}

function getUsers() {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === REQUEST_COMPLETED) {
            if (xmlHttp.status === OK) {
                let user: User = JSON.parse(xmlHttp.responseText) as User;
                alert("Received new user with name: " + user.name + " and date created at: " + user.dateCreated)
            } else {
                let exception: UserException = JSON.parse(xmlHttp.responseText) as UserException;
                alert("Received error with message: " + exception.errorMessage)
            }
        }
    };
    xmlHttp.open("GET", (<HTMLInputElement>document.getElementById("inputId")).value, true);
    xmlHttp.send(null);
}