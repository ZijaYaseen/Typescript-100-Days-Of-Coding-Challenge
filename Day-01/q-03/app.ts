/*Q3 - Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
and titlecase.*/

let fullName : string = "zIjA mUhaMMad yAseeN";

// LoweCase:
console.log(fullName.toLowerCase());

// UpperCase:
console.log(fullName.toUpperCase());

// TitleCase:
function titleCase(name:string){
    let splitNames = name.split(" ");
    let finalString = "";

    for (let i = 0; i < splitNames.length; i++) {
        const splitName = splitNames[i];

        let toUpperCase = splitName.charAt(0).toUpperCase();
        let toLowerCase = splitName.slice(1).toLowerCase();
        finalString += `${toUpperCase}${toLowerCase} `
    }

    return finalString
}

let toTitleCase = titleCase(fullName);
console.log(toTitleCase);


