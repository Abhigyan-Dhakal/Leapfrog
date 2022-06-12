// Generating balls and the properties of the ball
for (let i = 0; i < noOfBalls; i++) {
  const radius = getRandomInt(ballRadiusRange.min, ballRadiusRange.max);
  let x = Math.random() * (container.clientWidth - radius * 2);
  let y = Math.random() * (container.clientHeight - radius * 2);
  const sx = (Math.random() - 0.5) * 3;
  const sy = (Math.random() - 0.5) * 3;
  const color = getRandomColor();
  let originX = x + radius;
  let originY = y + radius;
  if (i != 0) {
    for (let j = 0; j < ballArray.length; j++) {
      let ballDistance = getDistance(
        originX,
        originY,
        ballArray[j].posX + ballArray[j].radius,
        ballArray[j].posY + ballArray[j].radius
      );

      // Checking if two balls have overlapped over each other
      if (ballDistance - (radius + ballArray[j].radius) < 0) {
        // Recalculating the random position for the ball to regenerate if overlapped
        x = Math.random() * (container.clientWidth - radius * 2);
        y = Math.random() * (container.clientHeight - radius * 2);
        originX = x + radius;
        originY = y + radius;
        j = -1;
      }
    }
  }

  // Creating the ball object
  const ball = new Ball(x, y, sx, sy, radius, color);
  ball.create();
  ballArray.push(ball);
}

// Iterating every single ball in the array and executing specific methods
ballArray.forEach((ball) => {
  const play = () => {
    ball.checkBallCollision();
    ball.checkWallCollision();
    ball.move();
    window.requestAnimationFrame(() => {
      play();
    });
  };

  play();
});
