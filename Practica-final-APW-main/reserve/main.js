
class Hotel {
    constructor(dateEntry, dateExit, rooms, price){
        this.dateEntry = dateEntry;
        this.dateExit = dateExit;
        this.rooms = rooms;
        this.price = price;
    }
    
    static makeReserve(e){
        let dateEntry = new Date(document.getElementById('date-entry').value),
        dateExit = new Date(document.getElementById('date-exit').value),
        rooms = document.getElementById('input-select').value,
        today = new Date()
    
        if(dateEntry == 'Invalid Date' || dateExit == 'Invalid Date' && today > dateEntry || today > dateExit){
            alert('Introduce una fecha válida');
        }else {
            let hotelPrice = parseInt(e.target.
                parentNode.parentNode.parentNode.
                children[1].children[0].children[1].children[0].
                innerText, 10);

            console.log(new Hotel(dateEntry, dateExit, rooms, hotelPrice))

            return new Hotel(dateEntry, dateExit, rooms, hotelPrice)
        }
    }
}

var buttons = document.getElementsByTagName('button');

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', Hotel.makeReserve)
}
