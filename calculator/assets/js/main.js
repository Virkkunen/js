// factory -> constructor

function Calculator() {
  this.display = document.querySelector(`.display`);

  this.start = () => {
    this.getClicks();
    this.getEnter();
  };

  this.getClicks = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains(`btn-num`)) this.addNumberDisplay(el);
      if (el.classList.contains(`btn-clear`)) this.clear();
      if (el.classList.contains(`btn-del`)) this.del();
      if (el.classList.contains(`btn-eq`)) this.equals();
    });
  };

  this.getEnter = () =>
    document.addEventListener(`keypress`, (e) => {
      if (e.keycode === 13) this.equals();
    });

  this.addNumberDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };
  this.clear = () => (this.display.value = ``);
  this.del = () => (this.display.value = this.display.value.slice(0, -1));

  this.equals = () => {
    try {
      const result = eval(this.display.value);

      if (!result) {
        alert("Invalid calculation");
        return;
      }

      this.display.value = result;
    } catch (e) {
      alert(`Invalid`);
    }
  };
}

const calculator = new Calculator();
calculator.start();
