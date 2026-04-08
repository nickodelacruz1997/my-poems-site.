const lines = document.querySelectorAll('p');
let index = 0;
const delay = 1300; // ms between lines

function nextLine() {
  if (index < lines.length) {
    lines[index].classList.add('show');
    index++;
    setTimeout(nextLine, delay);
  }
}

window.onload = nextLine;