let text;

function dialog() {
    let match = text.match(/\[.+\]/);
    let roles = match[0];
    roles = roles.replaceAll("[", "");
    roles = roles.replaceAll("]", "");
    roles = roles.replaceAll("\"", "");
    roles = roles.replaceAll(" ", "");
    let rolesArray = roles.split(",");

    for (let i = 0; i < rolesArray.length; i++) {
        let name = rolesArray[i];
        console.log(name + ":");

        let matches = text.matchAll(name + ':(.+)');
        let counter = 1;
        for (match of matches) {
            console.log(counter + ") " + match[1]);
            counter++;
        }


    }
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