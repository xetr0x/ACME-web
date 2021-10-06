console.log('hey hey from client');

let dataURL = 'cars.json';
let res = new XMLHttpRequest();
res.open('GET', dataURL); //preppa för att gå och  hämta data
res.responseType='json'; //preppa för att ta emot json
res.send(); //go featch!

console.log('data received');

//preppa vad som ska hända, när hämtningen är klar
//dvs när all data har hämtats, då triggas onload eventet
//och här skriver vi vad som ska ske då
res.onload = () => {
    const data = res.response;
    console.log(data);

    const cars = data['cars'];

    const myList = document.createElement('ul');
    
    for (let i = 0; i < cars.length; i++) {
        console.log(i);
        const listItem = document.createElement('li');
        listItem.textContent = cars[i].Make + " " + cars[i].Model + " " + cars[i].Year;
        myList.appendChild(listItem);
    };

    //lägg till listan i HTML DOM, ex en DIV
    document.getElementById('mycars').appendChild(myList);
};