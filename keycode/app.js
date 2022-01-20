const eventKey = document.getElementById('key');
const eventCode = document.getElementById('code');
const eventShow = document.querySelectorAll('#show');

const nameTitle = document.getElementById('title');
const outputK = document.getElementById('output');


window.addEventListener("keydown", (Event) => {
  hint.style.display = 'none';
  outputK.style.display = 'flex';
  eventKey.innerHTML = Event.key;
  eventCode.innerHTML = Event.key;
  eventShow.forEach(holder => {
    holder.innerHTML = Event.key;
  })
})
