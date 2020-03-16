let personData = [];
let jsDOM = {
    data: {
        fname: document.getElementById('fNameInput'),
        lname: document.getElementById('lNameInput'),
        email: document.getElementById('emailInput'),
        message: document.getElementById('messageInput')
    },
    btn: {
        addBtn: document.getElementById('addPerson'),
        showData: document.getElementById('showData')
    },
    personData: document.getElementById('personData')
};
let jsFunc = {
    showData: () => {
        let parentDiv = jsDOM.personData;
        parentDiv.innerHTML = '';
        let node = document.createElement("div");
        let nodeHeader = document.createElement("h3");
        let nodeHeaderText = document.createTextNode("Person Data");
        nodeHeader.appendChild(nodeHeaderText);
        let fullname, email, message;
        personData.forEach(x => {
            fullname = `${x.firstname} ${x.lastname}`, email = x.email, message = x.message;
            let personData = document.createElement('p');
            let personDataText = document.createTextNode(`Full Name: ${fullname} Email: ${email} Message: ${message}`);
            personData.appendChild(personDataText);
            node.appendChild(personData);
        });
        parentDiv.appendChild(node);
    },
    clearFields: () => {
        jsDOM.data.fname.value = "";
        jsDOM.data.lname.value = "";
        jsDOM.data.email.value = "";
        jsDOM.data.message.value = "";
    },
    addData: () => {
        if (jsDOM.data.fname.value == '' || jsDOM.data.lname.value == '' || jsDOM.data.email.value == '' || jsDOM.data.message.value == '') {
            jsFunc.alertInput();
            jsFunc.checkFields();
        }
        else {
            personData.push({ firstname: jsDOM.data.fname.value, lastname: jsDOM.data.lname.value, email: jsDOM.data.email.value, message: jsDOM.data.message.value });
            jsFunc.clearFields();
            jsFunc.finalizeFields();
        }
    },
    checkFields: () => {
        Object.values(jsDOM.data).forEach(data => {
            if (data.value == "") {
                data.style.borderColor = "red";
            }
            else {
                data.style.borderColor = "green";
            }
        });
    },
    finalizeFields: () => {
        Object.values(jsDOM.data).forEach(data => {
            data.style.borderColor = "transparent";
        });
    },
    alertInput: () => {
        let arrayDatas = [];
        Object.values(jsDOM.data).forEach(x => {
            if (x.value == "") {
                arrayDatas.push(`Fill up ${x.title}`);
            }
        });
        alert(arrayDatas.join(', \n'));
    },
};
jsDOM.btn.addBtn.addEventListener('click', jsFunc.addData);
jsDOM.btn.showData.addEventListener('click', jsFunc.showData);
