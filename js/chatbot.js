
const emojiBtn = document.querySelector('#emoji-btn');
const picker = new EmojiButton();

window.addEventListener('DOMContentLoaded', () => {

  picker.on('emoji', emoji => {
    document.querySelector('input').value += emoji;
  });

  emojiBtn.addEventListener('click', () => {
    picker.togglePicker(emojiBtn);
  });
});        
const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('input');


chatBtn.addEventListener('click', ()=>{
  popup.classList.toggle('show');
})

submitBtn.addEventListener('click', ()=>{
  let userInput = inputElm.value;

  let temp = `<div class="out-msg">

  <span class="my-msg">${userInput}</span>
  <img src="images/logo.png" class="img">

  </div>`;

  chatArea.insertAdjacentHTML("beforeend", temp);
  inputElm.value = '';

})