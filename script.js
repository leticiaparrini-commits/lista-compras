const txt = document.getElementById('txt');
const list = document.getElementById('list');

function addItem() {
    if (!txt.value.trim()) return;
    
    const li = document.createElement('li');
    li.innerHTML = `<span>${txt.value}</span><button onclick="this.parentElement.remove()">X</button>`;
    
  
    li.onclick = (e) => e.target.tagName !== 'BUTTON' && li.classList.toggle('done');
    
    list.appendChild(li);
    txt.value = '';
    txt.focus();
}


document.getElementById('add').onclick = addItem;


txt.onkeypress = (e) => {
    if (e.key === 'Enter') addItem();
};
