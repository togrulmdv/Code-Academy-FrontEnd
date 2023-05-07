class Car {
    constructor(brand, mark, currentFuel) {
        this.brand = brand;
        this.mark = mark;
        this.currentFuel = currentFuel;
    }

    addFuel(litre) {
        console.log(`${this.brand} ${this.mark} is adding fuel.`)
        this.currentFuel += litre;
    }

    drive(litre) {
        console.log(`${this.brand} ${this.mark} is on the move.`)
        this.currentFuel -= litre;
    }

    stop() {
        console.log(`${this.brand} ${this.mark} has stopped moving.`)
    }
}

function CarFunction(brand, mark, currentFuel) {
    this.brand = brand;
    this.mark = mark;
    this.currentFuel = currentFuel;
}

CarFunction.prototype.addFuel = function (litre) {
    console.log(`${this.brand} ${this.mark} is adding fuel.`)
    this.currentFuel += litre;
}

CarFunction.prototype.drive = function (litre) {
    console.log(`${this.brand} ${this.mark} is on the move.`)
    this.currentFuel -= litre;
}

CarFunction.prototype.stop = function () {
    console.log(`${this.brand} ${this.mark} has stopped moving.`)
}




class Song {
    constructor(songName, artistName, songLength) {
        this.songName = songName;
        this.artistName = artistName;
        this.songLength = songLength;
    }

    play() {
        console.log(`${this.songName} by ${this.artistName} is playing now.`)
    }

    stop() {
        console.log(`${this.songName} by ${this.artistName} has stopped playing.`)
    }

    static longestSong(songs) {
        const sortedByLength = songs.sort((a, b) => {
            return a.songLength - b.songLength
        })

        return sortedByLength[songs.length - 1].songName
    }
}


const Camry = new Car('Toyota', 'Camry', 20);
const Prius = new Car('Toyota', 'Prius', 10);
console.log(Camry);
console.log(Prius);

Camry.addFuel(5);
console.log(Camry.currentFuel);

Prius.addFuel(4);
console.log(Prius.currentFuel);

Camry.drive(10);
console.log(Camry.currentFuel);

Prius.drive(7);
console.log(Prius.currentFuel);

Camry.stop();

Prius.stop();




const Fusion = new CarFunction('Ford', 'Fusion', 20);
const Focus = new CarFunction('Ford', 'Focus', 10);
console.log(Fusion);
console.log(Focus);

Fusion.addFuel(5);
console.log(Fusion.currentFuel);

Focus.addFuel(4);
console.log(Focus.currentFuel);

Fusion.drive(10);
console.log(Fusion.currentFuel);

Focus.drive(7);
console.log(Focus.currentFuel);

Fusion.stop();

Focus.stop();




const GangnamStyle = new Song('Gangnam Style', 'PSY', 3);
const Mahni = new Song('Mahni', 'Mans', 2);
console.log(GangnamStyle);
console.log(Mahni);

GangnamStyle.play();
Mahni.play();

GangnamStyle.stop();
Mahni.stop();

console.log(Song.longestSong([GangnamStyle, Mahni]));