// factory para treinar

function createCalc() {
  return {
    display: document.querySelector(`.display`),
    btnClear: document.querySelector(".btn-clear"),

    start() {
      this.clickButtons();
      this.pressEnter();
    },

    pressEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.calculate();
        }
      });
    },

    clearDisplay() {
      this.display.value = "";
    },

    backspace() {
      this.display.value = this.display.value.slice(0, -1);
    },

    calculate() {
      let calc = this.display.value;

      try {
        calc = eval(calc);

        if (!calc) {
          alert("Invalid values");
          return;
        }

        this.display.value = String(calc);
      } catch (e) {
        alert("Invalid values");
        return;
      }
    },

    clickButtons() {
      // this = calculator
      document.addEventListener("click", (e) => {
        // mesma coisa que function.bind(this) (this = calculator)
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          // this = document
          this.btnToDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.backspace();
        }

        if (el.classList.contains("btn-eq")) {
          this.calculate();
        }
      });
    },

    btnToDisplay(value) {
      this.display.value += value;
    },
  };
}

const calculator = createCalc();
calculator.start();
