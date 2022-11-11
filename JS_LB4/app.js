let text;

function dialog() {
    let rolesArray = getRolesArray();
    let textArray = getTextArray();
    for(let i = 0; i< textArray.length; i++){
        console.log(textArray[i]);
    }
    for (let i = 0; i < rolesArray.length; i++) {
        let name = rolesArray[i];
        console.log(name + ":");

        let matches = text.matchAll(name + ': (.+)');
        for (let match of matches) {
            let counter = textArray.indexOf(match[1].toString());
            counter++;
            console.log(counter + ") " + match[1]);
        }


    }
}


function getRolesArray() {
    let match = text.match(/\[.+\]/);
    let roles = match[0];
    roles = roles.replaceAll("[", "");
    roles = roles.replaceAll("]", "");
    roles = roles.replaceAll("\"", "");
    roles = roles.replaceAll(" ", "");
    let rolesArray = roles.split(",");
    return rolesArray;
}

function getTextArray() {
    let textArray = [];
    let matches = text.matchAll(/.+: (.+)/g);
    for (let match of matches) {
        textArray.push(match[1]);
    }
    return textArray;
}


function readFile(input) {
    let file = input.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () {
        text = reader.result;
    };

    reader.onerror = function () {
        console.log(reader.error);
    };

}