export default class Tank {
  constructor(settings) {
    this.boardElement = settings.boardElement;
    this.playerElement = settings.playerElement;
    this.randomDirection = settings.randomDirection;
  }

  movePlayerX = (direction, rotate) => {
    const newPosition = this.playerElement.offsetLeft + direction * 10;

    const { left, right } = this.boardElement.getBoundingClientRect();
    const maxRight = right - left - this.playerElement.offsetWidth;

    if (newPosition > 0 && newPosition < maxRight) {
      this.playerElement.style.transform = `rotate(${rotate}deg)`;
      this.playerElement.style.left = `${newPosition}px`;
    } else if (newPosition === 0) {
      this.randomDirection();
    } else if (newPosition > maxRight) {
      this.randomDirection();
    }
  };

  movePlayerY = (direction, rotate) => {
    const newPosition = this.playerElement.offsetTop + direction * 10;
    const minTop = 0;
    const maxTop =
      this.boardElement.offsetHeight - this.playerElement.offsetHeight;

    if (newPosition >= minTop && newPosition < maxTop) {
      this.playerElement.style.transform = `rotate(${rotate}deg)`;
      this.playerElement.style.top = `${newPosition}px`;
    } else if (newPosition < 0) {
      this.randomDirection();
    } else if (newPosition >= maxTop) {
      this.randomDirection();
    }
  };
}
