const bingo = new Vue({
    el: "#bingo",
    data: {
        bolas: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
            27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
            51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75
        ],
        bola_sale: ""
    },
    updated() {
        if (this.bola_sale) {
            window.addEventListener('beforeunload', function (event) {
                event.returnValue = '¿Seguro que quiere dejar el juego?'
            })
        }
    },
    methods: {
        buscarBola() {
            if (this.bolas.length != 0) {
                console.log(this.bolas)
                let index = Math.floor(Math.random() * this.bolas.length)
                let number = this.bolas[index]
                let bola = document.querySelector(`.item-${number}`)
                bola.classList.add("number-on")
                bola.classList.remove("number-off")

                if (number >= 1 && number <= 15) {
                    this.bola_sale = `B ${number}`
                } else if (number >= 16 && number <= 30) {
                    this.bola_sale = `I ${number}`
                } else if (number >= 31 && number <= 45) {
                    this.bola_sale = `N ${number}`
                } else if (number >= 46 && number <= 60) {
                    this.bola_sale = `G ${number}`
                } else if (number >= 61 && number <= 75) {
                    this.bola_sale = `O ${number}`
                }

                this.bolas.splice(index, 1)
            } else {
                alert("NO HAY MÁS BOLAS")
            }

        },
        reiniciarJuego() {
            if (confirm("¿Seguro de reiniciar el juego?")) {
                this.bola_sale = ""
                let bola = ""
                this.bolas = []
                for (let i = 1; i <= 75; i++) {
                    this.bolas.push(i)
                    bola = document.querySelector(`.item-${i}`)
                    bola.classList.remove("number-on")
                    bola.classList.add("number-off")
                }
            }
        }
    }
})
