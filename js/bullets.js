export default class Bullets {
  constructor(settings) {
    this.bulletsArray = [];
    this.playerElement = settings.playerElement;
    this.boardElement = settings.boardElement;
  }

  creatBullet(number) {
    // bullet

    const bullet = document.createElement("div");
    bullet.className = "bullet";
    if (number === 2) {
      bullet.style.left = `${
        this.playerElement.offsetLeft + this.playerElement.offsetWidth
      }px`;
      bullet.style.top = `${
        this.playerElement.offsetTop + this.playerElement.offsetHeight / 2
      }px`;
    } else if (number === 1) {
      bullet.style.left = `${this.playerElement.offsetLeft}px`;
      bullet.style.top = `${
        this.playerElement.offsetTop + this.playerElement.offsetHeight / 2
      }px`;
    } else if (number === 3) {
      bullet.style.left = `${
        this.playerElement.offsetLeft + this.playerElement.offsetWidth / 2
      }px`;
      bullet.style.top = `${this.playerElement.offsetTop}px`;
    } else if (number === 4) {
      bullet.style.left = `${
        this.playerElement.offsetLeft + this.playerElement.offsetWidth / 2
      }px`;
      bullet.style.top = `${
        this.playerElement.offsetTop + this.playerElement.offsetHeight
      }px`;
    }

    // add onto board
    this.boardElement.appendChild(bullet);
    this.bulletsArray.push({ bullet, number });
  }

  getBulletsArray() {
    return this.bulletsArray;
  }

  setBulletsArray() {
    this.bulletsArray.push(data);
  }
}
