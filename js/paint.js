const canvas = document.getElementById('game')
const ctx = canvas.getContext("2d")

const colorWhile = document.querySelector('.while')
const colorBlack = document.querySelector('.black')
const colorRed = document.querySelector('.red')
const colorBlue = document.querySelector('.blue')
const colorGreen = document.querySelector('.green')

color = '#fff'

colorBlack.addEventListener('click', function() {
    color = 'black'
})

colorRed.addEventListener('click', function() {
    color = 'red'
})

colorBlue.addEventListener('click', function() {
    color = 'blue'
})

colorGreen.addEventListener('click', function() {
    color = 'green'
})

let b = 16

function bg() {
    for (let i = 0; i < 1216 / b; i++) {
        for (let j = 0; j < 608 / b; j++) {
            let c = (Math.floor(Math.random() * (16777215 - 0)) + 0).toString(16)
            ctx.fillStyle = `#${c}`
            ctx.fillRect(i * b, j * b, b, b)
        }
    }
}

function paint() {
    document.addEventListener('mousedown', stac)

    function stac() {
        document.addEventListener('click', click)
        document.addEventListener('mousemove', click)
    }

    function click(event) {
        ctx.fillStyle = color

        let a = 6
        ctx.fillRect(event.layerX - a, event.layerY - 1, 2 * a, 2)
        for (let i = 1; i < a - 2; i++) {
            ctx.fillRect(event.layerX - (a - i), event.layerY - i - 2, 2 * (a - i), 2 * i + 4)
        }

    }
}

bg()
let paintLayn = setInterval(paint, 0)