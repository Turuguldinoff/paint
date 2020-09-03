const canvas = document.getElementById('game')
const ctx = canvas.getContext("2d")

const colorWhile = document.querySelector('.while')
const colorBlack = document.querySelector('.black')
const colorRed = document.querySelector('.red')
const colorBlue = document.querySelector('.blue')
const colorGreen = document.querySelector('.green')


//let a = ['#fff', 'black', 'red', 'blue', 'green']

let b = 16

function bg() {
    for (let i = 0; i < 1216 / b; i++) {
        for (let j = 0; j < 608 / b; j++) {
            let c = (Math.floor(Math.random() * (16777215 - 0)) + 0).toString(16)
            ctx.fillStyle = `#${c}` //a[Math.floor(Math.random() * (5 - 0)) + 0]
            ctx.fillRect(i * b, j * b, b, b)
        }

    }
}


let paintLayn = setInterval(bg, 0)