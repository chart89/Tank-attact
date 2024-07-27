import elements from "./elements.js";
import Tank from "./tank.js";
import Bullets from "./bullets.js";

const { playerElement, boardElement, stopButton } = elements;

let moveTank = 1;

const randomDirection = () => {
  return (moveTank = Math.floor(Math.random() * 4 + 1));
};

const tank = new Tank({
  playerElement: playerElement,
  boardElement: boardElement,
  randomDirection: randomDirection,
});

const bulletClass = new Bullets({
  playerElement: playerElement,
  boardElement: boardElement,
});

/*
function handleKeyboard(e) {
  e.code;
  switch (e.code) {
    case "ArrowLeft":
      movePlayerX(-1, -90);
      break;
    case "ArrowRight":
      movePlayerX(1, 90);
      break;
    case "ArrowUp":
      movePlayerY(-1, 0);
      break;
    case "ArrowDown":
      movePlayerY(1, 180);
      break;
    case "Space":
      bulletClass.creatBullet(moveTank);
  }
}
*/

const moveBullets = () => {
  for (let i = 0; i < bulletClass.getBulletsArray().length; i++) {
    const bullet = bulletClass.getBulletsArray()[i];
    if (bullet.number === 3) {
      // move bullet
      bullet.bullet.style.top = `${bullet.bullet.offsetTop - 10}px`;

      if (bullet.bullet.offsetTop <= 0) {
        // remove bullet
        bulletClass.getBulletsArray().splice(i, 1);
        i--;
        bullet.bullet.remove();
      }
    } else if (bullet.number === 4) {
      // move bullet
      bullet.bullet.style.top = `${bullet.bullet.offsetTop + 10}px`;

      if (bullet.bullet.offsetTop >= boardElement.offsetHeight) {
        // remove bullet
        bulletClass.getBulletsArray().splice(i, 1);
        i--;
        bullet.bullet.remove();
      }
    } else if (bullet.number === 2) {
      const { left, right } = boardElement.getBoundingClientRect();
      const maxRight = right - left;
      // move bullet
      bullet.bullet.style.left = `${bullet.bullet.offsetLeft + 10}px`;

      if (bullet.bullet.offsetLeft >= maxRight) {
        // remove bullet
        bulletClass.getBulletsArray().splice(i, 1);
        i--;
        bullet.bullet.remove();
      }
    } else if (bullet.number === 1) {
      const minLeft = 0;
      // move bullet
      bullet.bullet.style.left = `${bullet.bullet.offsetLeft - 10}px`;

      if (bullet.bullet.offsetLeft <= minLeft) {
        // remove bullet
        bulletClass.getBulletsArray().splice(i, 1);
        i--;
        bullet.bullet.remove();
      }
    }
  }
};

// set intervals
const moveTankInterval = setInterval(() => {
  randomDirection();
}, 2000);

setInterval(moveBullets, 30);

const stopShot = setInterval(() => bulletClass.creatBullet(moveTank), 1000);

const moveTankInt = setInterval(() => {
  switch (moveTank) {
    case 1:
      tank.movePlayerX(-1, -90);
      break;
    case 2:
      tank.movePlayerX(1, 90);
      break;
    case 3:
      tank.movePlayerY(-1, 0);
      break;
    case 4:
      tank.movePlayerY(1, 180);
      break;
  }
}, 100);

// keyboard functionality
//window.addEventListener("keydown", handleKeyboard);

// stop all intervals
const stopInterval = () => {
  clearInterval(moveTankInt);
  clearInterval(moveTankInterval);
  clearInterval(stopShot);
};

stopButton.addEventListener("click", stopInterval);
