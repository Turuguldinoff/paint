const canvas = document.getElementById('game')
const ctx = canvas.getContext("2d")

const colorWhile = document.querySelector('.while')
const colorBlack = document.querySelector('.black')
const colorRed = document.querySelector('.red')
const colorBlue = document.querySelector('.blue')
const colorGreen = document.querySelector('.green')

let color = '#fff'


colorWhile.addEventListener('click', function() {
    color = '#fff'
})

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
ctx.fillStyle = 'black'
ctx.fillRect(0, 0, 1216, 608)

function paint() {
    document.addEventListener('mousedown', stac)

    function stac() {
        document.addEventListener('click', click)
        document.addEventListener('mousemove', click)
    }

    function click(event) {
        ctx.fillStyle = color
        ctx.fillRect(event.layerX - 6, event.layerY - 1, 12, 2)
        ctx.fillRect(event.layerX - 5, event.layerY - 3, 10, 6)
        ctx.fillRect(event.layerX - 4, event.layerY - 4, 8, 8)
        ctx.fillRect(event.layerX - 3, event.layerY - 5, 6, 10)
        ctx.fillRect(event.layerX - 1, event.layerY - 6, 2, 12)
    }

    document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', click)
    })
}

let paintLayn = setInterval(paint, 0.5)