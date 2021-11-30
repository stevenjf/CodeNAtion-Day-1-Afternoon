const musicArr = [];

class Music {
    constructor(band, song, genre) {
        this.band = band;
        this.song = song;
        this.genre = genre;
    }

    add() {
        musicArr.push(this)
    }
}

module.exports = {Music, musicArr};