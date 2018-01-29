let numbersArray = [...process.argv];
numbersArray.splice(0,2);

let sleepSort = (array) => {
    array.forEach((element) => {
        let parsedElement = Number(element);
        let timeout = parsedElement*1000;
        setTimeout(() => console.log(parsedElement), timeout);
    });
};

sleepSort(numbersArray);