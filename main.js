function preload()
{
    img = loadImage("glass.png")
}

function setup()
{
    canvas = createCanvas(300,170)
    canvas.center()
}

function draw()
{
    image(img, 0,0,300,170)
}

function take_snapshot()
{
    save("My sunglass Image.jpg")
}