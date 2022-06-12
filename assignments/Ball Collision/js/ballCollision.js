class Ball {
  constructor(posX, posY, sx, sy, radius, color) {
    this.posX = posX;
    this.posY = posY;
    this.sx = sx;
    this.sy = sy;
    this.radius = radius;
    this.color = color;
  }

  // Method to create the ball element with provided properties
  create() {
    this.element = document.createElement("div");

    this.element.style.height = toPx(this.radius * 2);
    this.element.style.width = toPx(this.radius * 2);
    this.element.style.borderRadius = "50%";
    this.element.style.top = toPx(this.posY);
    this.element.style.left = toPx(this.posX);
    this.element.style.background = this.color;
    this.element.style.position = "absolute";

    container.appendChild(this.element);
  }

  // Identifying the collision among two balls
  checkBallCollision() {
    for (let i = 0; i < ballArray.length; i++) {
      if (ballArray[i] === this) continue;
      if (
        getDistance(
          this.posX + this.radius,
          this.posY + this.radius,
          ballArray[i].posX + ballArray[i].radius,
          ballArray[i].posY + ballArray[i].radius
        ) -
          (this.radius + ballArray[i].radius) <=
        0
      ) {
        // Calculating the origin coordinates of two balls
        let ballOriginX = this.posX + this.radius;
        let ballOriginY = this.posY + this.radius;
        let anotherBallOriginX = ballArray[i].posX + ballArray[i].radius;
        let anotherBallOriginY = ballArray[i].posY + ballArray[i].radius;

        // Calculating the collision vector
        let vectorCollision = {
          x: anotherBallOriginX - ballOriginX,
          y: anotherBallOriginY - ballOriginY,
        };

        // Calculating the distance between the balls
        let distance = getDistance(
          ballOriginX,
          ballOriginY,
          anotherBallOriginX,
          anotherBallOriginY
        );

        // Computing the normalized collision vector
        let vCollisionNormal = {
          x: vectorCollision.x / distance,
          y: vectorCollision.y / distance,
        };

        // Calculating the relative vector velocity
        let vRelativeVelocity = {
          x: this.sx - ballArray[i].sx,
          y: this.sy - ballArray[i].sy,
        };

        // Calculating the ball's speed
        let speed =
          vRelativeVelocity.x * vCollisionNormal.x +
          vRelativeVelocity.y * vCollisionNormal.y;

        if (speed <= 0) {
          break;
        } else {
          this.sx -= speed * vCollisionNormal.x;
          this.sy -= speed * vCollisionNormal.y;
          ballArray[i].sx += speed * vCollisionNormal.x;
          ballArray[i].sy += speed * vCollisionNormal.y;
        }
      }
    }
  }

  // Method to check the collision of the ball with the walls
  checkWallCollision() {
    // Reversing the direction if the position of ball tries to exceed the container's height
    if (
      this.posY >= container.clientHeight - this.radius * 2 ||
      this.posY <= 0
    ) {
      this.sy = -this.sy;
    }
    // Reversing the direction if the position of ball tries to exceed the container's width
    if (
      this.posX >= container.clientWidth - this.radius * 2 ||
      this.posX <= 0
    ) {
      this.sx = -this.sx;
    }
  }

  // Method to move the ball
  move() {
    this.posX += this.sx;
    this.posY += this.sy;
    this.element.style.top = toPx(this.posY);
    this.element.style.left = toPx(this.posX);
  }
}
