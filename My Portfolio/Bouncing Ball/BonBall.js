var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var circle = function (x, y, radius, fillCircle) {
 ctx.beginPath();
 ctx.arc(x, y, radius, 0, Math.PI * 2, false);
 if (fillCircle) {
 ctx.fill();
 } else {
 ctx.stroke();
 }
};
let = ("The Ball constructor");
var Ball = function () {
 this.x = width / 2;
 this.y = height / 2;
 this.xSpeed = 5;
 this.ySpeed = 0;
};
prompt("Update the ball's position based on its speed");
Ball.prototype.move = function () {
 this.x += this.xSpeed;
 this.y += this.ySpeed;
 if (this.x < 0) {
 this.x = width;
 } else if (this.x > width) {
 this.x = 0;
 } else if (this.y < 0) {
 this.y = height;
 } else if (this.y > height) {
 this.y = 0;
 }
};
Ball.prototype.draw = function () {
 circle(this.x, this.y, 10, true);
};
Ball.prototype.setDirection = function (direction) {
 if (direction === "up") {
 this.xSpeed = 0;
 this.ySpeed = -5;
 } else if (direction === "down") {
 this.xSpeed = 0;
 this.ySpeed = 5;
 } else if (direction === "left") {
 this.xSpeed = -5;
 this.ySpeed = 0;
 } else if (direction === "right") {
 this.xSpeed = 5;
 this.ySpeed = 0;
 } else if (direction === "stop") {
 this.xSpeed = 0;
 this.ySpeed = 0;
 }
};
var ball = new Ball();
var keyActions = {
 32: "stop",
 37: "left",
 38: "up",
 39: "right",
 40: "down"
};

$("body").keydown(function (event) {
 var direction = keyActions[event.keyCode];
 ball.setDirection(direction);
});

setInterval(function () {
 ctx.clearRect(0, 0, width, height);
 ball.draw();
 ball.move();
 ctx.strokeRect(0, 0, width, height);
}, 30);



// var Ball = function () {
//     this.x = 100;
//     this.y = 100;
//     this.xSpeed = -2;
//     this.ySpeed = 3;
//    };
//    var circle = function (x, y, radius, fillCircle) {
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     if (fillCircle) {
//     ctx.fill();
//     } else {
//     ctx.stroke();
//     }
//    };
//    Ball.prototype.draw = function () {
//     circle(this.x, this.y, 3, true);
//    };
//    Ball.prototype.move = function () {
//     this.x += this.xSpeed;
//     this.y += this.ySpeed;
//    };
//    Ball.prototype.checkCollision = function () {
//      if (this.x < 0 || this.x > 200) {
//      this.xSpeed = -this.xSpeed;
//      }
//     if (this.y < 0 || this.y > 200) {
//      this.ySpeed = -this.ySpeed;
//      }
//     };
//     var ball = new Ball();
//  setInterval(function () {
//  ctx.clearRect(0, 0, 200, 200);
//  ball.draw();
//  ball.move();
//  ball.checkCollision();
//  ctx.strokeRect(0, 0, 200, 200)
// }, 30);