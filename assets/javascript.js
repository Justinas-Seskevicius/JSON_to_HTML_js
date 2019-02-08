
let namesArr = ["Bob", "John", "Bobby", "Monica", "Will", "John", "Tom", "May", "Aloy", "Sam",
                "Todd", "Judy", "Harry", "Kent", "Ellie", "Jack", "Tom", "Fred", "Frank", "John"];

let idArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
             "16", "17", "18", "19", "20"];

let users = [{   
                id: 1,
                name: "Jonas",
                lastName: "Jonaitis",
                cash: 2.00
            }, {
                id: 2,
                name: "Petras",
                lastName: "Petraitis",
                cash: 20.00
            }, {   
                id: 3,
                name: "Monika",
                lastName: "Monikaite",
                cash: 30.00
            }, {
                id: 4,
                name: "Petras",
                lastName: "Petraitis",
                cash: 200.00
            }, {   
                id: 5,
                name: "Klevas",
                lastName: "Medinukas",
                cash: 215.00
            }, {
                id: 6,
                name: "Sandra",
                lastName: "Sandraite",
                cash: 29.60
            }, {   
                id: 7,
                name: "Laura",
                lastName: "Lauraite",
                cash: 9872.06
            }, {
                id: 8,
                name: "Tomas",
                lastName: "Tomchikas",
                cash: 2.00
            }, {   
                id: 9,
                name: "Herbertas",
                lastName: "Uzsienietis",
                cash: 20648.00
            }, {
                id: 10,
                name: "Laura",
                lastName: "Petraite",
                cash: 20.00
            }, {   
                id: 11,
                name: "Dziugas",
                lastName: "Suraitis",
                cash: 2.00
            }, {
                id: 12,
                name: "Kasandra",
                lastName: "Egzotika",
                cash: 23.00
            }, {   
                id: 13,
                name: "Sklepas",
                lastName: "Palepe",
                cash: 215.00
            }, {
                id: 14,
                name: "Kojine",
                lastName: "Zekiavicius",
                cash: 18.69
            }, {   
                id: 15,
                name: "Tavo",
                lastName: "Tevas",
                cash: 200000.69
            }, {
                id: 16,
                name: "Petras",
                lastName: "Petraitis",
                cash: 20.00
            }, {   
                id: 17,
                name: "Monika",
                lastName: "Zavioji",
                cash: 25060.69
            }, {
                id: 18,
                name: "Petras",
                lastName: "Petraitis",
                cash: 290.00
            }, {   
                id: 19,
                name: "Unikalus",
                lastName: "Vartotojas",
                cash: 696969.69
            }, {
                id: 20,
                name: "Gerulis",
                lastName: "Gerietis",
                cash: 290.00
            }
];

function Next(){
    let table = document.getElementById("myTable").firstElementChild;
    let trList = document.getElementsByTagName("tr");
    for(let i = 1; i < 11; i++) {
        trList[i].firstElementChild.innerText = users[i + 9].name;
        trList[i].children[1].innerHTML = users[i + 9].lastName;
        trList[i].setAttribute("data-id", users[i + 9].id);
    }
}

function Previous(){
    let table = document.getElementById("myTable").firstElementChild;
    let trList = document.getElementsByTagName("tr");
    for(let i = 1; i < 11; i++) {
        trList[i].firstElementChild.innerText = users[i -1].name;
        trList[i].children[1].innerHTML = users[i - 1].lastName;
        trList[i].setAttribute("data-id", users[i - 1].id);
    }
}

function ShowMoreDetails(rowID) {
    var found = users.find(function(user){
        return user.id == rowID;
    });
    var modal = document.getElementById("exampleModal");
    modal.className = "modal fade show";
    modal.style = "display: block";
    document.getElementById("userID").innerText = found.id;
    document.getElementById("userName").innerText = found.name;
    document.getElementById("userLastName").innerText = found.lastName;
    document.getElementById("userCash").innerText = found.cash;
}

function CloseModal() {
    var modal = document.getElementById("exampleModal");
    modal.className = "modal fade";
    modal.style = "display: none";
}

function CountLettersNumbers(string){
    let letters = 0;
    let numbers = 0;
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(string.charAt(i))) {
            numbers++;
        } else if ((string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) || 
                    (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122)) {
            letters++;
        }
    }
    console.log("String: " + string + " has " + letters + " letters and " + numbers + " numbers");
}

var htmlTemplate = {
    "tagName": "div",
    "attributes": ["class","container"],
    "innerText": "",
    "children": [{
        "tagName": "table",
        "attributes": ["id", "myTable"],
        "innerText": "",
        "children": [{
            "tagName": "tr",
            "attributes": "",
            "innerText": "",
            "children": [{
                "tagName": "th",
                "attributes": "",
                "innerText": "Name",
                "children": ""
            },{
                "tagName": "th",
                "attributes": "",
                "innerText": "Last Name",
                "children": ""
            }]
        },{
            "tagName": "tr",
            "attributes": ["onclick", "ShowMoreDetails(this.getAttribute('data-id'))"],
            "innerText": "",
            "children": [{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            },{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            }]
        },{
            "tagName": "tr",
            "attributes": ["onclick", "ShowMoreDetails(this.getAttribute('data-id'))"],
            "innerText": "",
            "children": [{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            },{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            }]
        },{
            "tagName": "tr",
            "attributes": ["onclick", "ShowMoreDetails(this.getAttribute('data-id'))"],
            "innerText": "",
            "children": [{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            },{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            }]
        },{
            "tagName": "tr",
            "attributes": ["onclick", "ShowMoreDetails(this.getAttribute('data-id'))"],
            "innerText": "",
            "children": [{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            },{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            }]
        },{
            "tagName": "tr",
            "attributes": ["onclick", "ShowMoreDetails(this.getAttribute('data-id'))"],
            "innerText": "",
            "children": [{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            },{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            }]
        },{
            "tagName": "tr",
            "attributes": ["onclick", "ShowMoreDetails(this.getAttribute('data-id'))"],
            "innerText": "",
            "children": [{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            },{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            }]
        },{
            "tagName": "tr",
            "attributes": ["onclick", "ShowMoreDetails(this.getAttribute('data-id'))"],
            "innerText": "",
            "children": [{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            },{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            }]
        },{
            "tagName": "tr",
            "attributes": ["onclick", "ShowMoreDetails(this.getAttribute('data-id'))"],
            "innerText": "",
            "children": [{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            },{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            }]
        },{
            "tagName": "tr",
            "attributes": ["onclick", "ShowMoreDetails(this.getAttribute('data-id'))"],
            "innerText": "",
            "children": [{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            },{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            }]
        },{
            "tagName": "tr",
            "attributes": ["onclick", "ShowMoreDetails(this.getAttribute('data-id'))"],
            "innerText": "",
            "children": [{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            },{
                "tagName": "td",
                "attributes": "",
                "innerText": "",
                "children": ""
            }]
        }]
    },{
        "tagName": "button",
        "attributes": [["class", "btn btn-primary"], ["onclick", "Previous()"]],
        "innerText": "Previous",
        "children": ""
    },{
        "tagName": "button",
        "attributes": [["class", "btn btn-primary"], ["onclick", "Next()"]],
        "innerText": "Next",
        "children": ""
    }]
};


function ParseJSON(template){
    let primaryContainer = document.createElement(template.tagName);
    // Check if current <tag> has any attributes to set
    if (template.attributes != "") {
        // Check if there is a nested array -> multiple attributes
        if (Array.isArray(template.attributes[0])){
            for (let i = 0; i < template.attributes.length; i++){
                primaryContainer.setAttribute(template.attributes[i][0], template.attributes[i][1]);
            }
        } else {
            primaryContainer.setAttribute(template.attributes[0], template.attributes[1]);
        }
    }
    // Check if there is any text to set to current <tag>
    if (template.innerText != ""){
        primaryContainer.innerText = template.innerText;
    }
    // Checking if current <tag> has any children
    if (template.children != "") {
        // Check if it's an array -> multiple children
        if(Array.isArray(template.children)){
            for (let i = 0; i < template.children.length; i++){
                let child = ParseJSON(template.children[i]);
                primaryContainer.appendChild(child);
            }
        } else {
            let child = ParseJSON(template.children);
            primaryContainer.appendChild(child);
        }
    }
    return primaryContainer;
}


function makeItHappen(){
    document.body.insertBefore(ParseJSON(htmlTemplate), document.getElementById("exampleModal"));
    Previous();
}