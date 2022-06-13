const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d'); // c = content

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './img/Pellet Town.png'

const playerImage = new Image()
playerImage.src = './img/playerDown.png'

image.onload = () => {
    c.drawImage(image, -740, -595)
    c.drawImage(playerImage,
    // cropping (x, y) and width and height of cropped img
    0, 
    0,
    playerImage.width /4,
    playerImage.height,
    // actual cordinatres and size 
    canvas.width / 2 - (playerImage.width / 4) /2,
    canvas.height / 2 - playerImage.height /2,
    playerImage.width / 4,
    playerImage.height
    )
}