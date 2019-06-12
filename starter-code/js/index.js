
let player = new Player(0, 0)
let treasure = new Treasure()
let img = undefined

function preload() {
  // player.preload()
  // img = loadImage('assets/character-left.png')
}

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('sketch-holder');
  player.setup()
  treasure.setup()

}

// draw the grid
function drawGrid() {
  for (let i = 0; i <= width; i += 50) {
    line(i, 0, i, 500)
    line(0, i, 500, i)
  }
}

function draw() {
  clear()
  drawGrid()
  player.draw()
  treasure.draw()
  treasure.isCollected(player)
}

function keyPressed() {
  player.keyPressed()
}

