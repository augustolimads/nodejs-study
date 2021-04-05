class Reader {
    read(path) {
        console.log("conteudo de arquivos...")
    }
}

class Writer {
    write(content) {
        console.log("conteudo escrito")
    }
}

class Creator {
    create(name) {
        console.log("arquivo criado")
    }
}

class Destroyer {
    destroy(name) {
        console.log("deletando arquivo")
    }
}

class ArchiveHandler {
    constructor(name){
        this.archive = name
        this.reader = new Reader()
        this.writer = new Writer()
        this.creator = new Creator()
        this.destroyer = new Destroyer()
    }

    
}

const handler = new ArchiveHandler("Augusto")

console.log(handler.archive)

handler.reader.read()
handler.writer.write()
handler.creator.create()
handler.destroyer.destroy()