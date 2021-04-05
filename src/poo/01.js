class Movie {
    constructor(title, year, genre){

        this.title = title
        this.year = year
        this.genre = genre
        this.director = ""
        this.actors = []
        this.duration = 0

        console.log({
            title: this.title,
            year: this.year,
            genre: this.genre,
            director: this.director,
            actors: this.actors,
            duration: this.duration
        })
    }

    play(){
        console.log("reproduzindo...")
    }

    pause(){
        console.log("pausando ||")
    }

    foward(){
        console.log("avançando >>")
    }

    close(){
        console.log("fechar X")
    }
}

const godzilla = new Movie("Godzilla", 2014, "action")

console.log(godzilla.genre)