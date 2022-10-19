const numberPrompt = () => {
    const number = parseInt(prompt('Give a number', 0));
    if(typeof number === 'number') {
        return number;
    } else {
        alert('Not a Number!');
    };
};

const characterPrompt = () => {
    const character = prompt('Give a character', 'a');
    if(typeof character === 'string') {
        return character;
    } else {
        alert('Not a Character!');
    };
};

const reverseSortConfirm = () => {
    return confirm('Sort Reversed?');
}

const taskFunction = (array = []) => {
    // prompts
    const numberOne = numberPrompt();
    const numberTwo = numberPrompt();
    const numberThree = numberPrompt();
    const character = characterPrompt();

    // push into array
    array.push(numberOne);
    array.push(numberTwo);
    array.push(numberThree);
    array.push(character);

    return alert(array.sort());

    
}

taskFunction();