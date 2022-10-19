function textValidation(text, validCharacters) {
    let acceptable;
    text.toLowerCase();

    for(let letter of text) {
        acceptable = false;
        for(let c of validCharacters) {
            if(letter === c) {
                acceptable = true;
            };
        };
    };

    return acceptable;
};


function registerInfo() {
    let acceptableFirstName = false; 
    let acceptableLastName = false; 
    let acceptableEmail = false; 

    let firstName;
    let lastName;
    let email;

    while(acceptableFirstName === false) {
        firstName = prompt('What is your first name?');

        if(textValidation(firstName, 'abcdefghijklmnopqrstuvwxyzåäö -') === false) {
            alert('Invalid First Name!');
        } else {
            acceptableFirstName = true;
        };
    };

    while(acceptableLastName === false) {
        lastName = prompt('What is your last name?');

        if(textValidation(lastName, 'abcdefghijklmnopqrstuvwxyzåäö -') === false) {
            alert('Invalid Last Name!');
        } else {
            acceptableLastName = true;
        };
    };

    while(acceptableEmail === false) {
        email = prompt('What is your email?');

        if(textValidation(email, 'abcdefghijklmnopqrstuvwxyzåäö -_.@') === false && email.includes('@') === false) {
            alert('Invalid Email!');
        } else {
            acceptableEmail = true;
        };
    };

    alert(`
        Name: ${firstName} ${lastName}
        Email: ${email}
    `);
};

registerInfo();
