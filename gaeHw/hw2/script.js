// 1
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

box1.innerHTML = 'updated';
box2.innerHTML = 'updated';
box3.innerHTML = 'updated';

// 2
const p = document.getElementsByClassName('intro');

for (let i = 0; i < p.length; i++) {
    p[i].style.color = 'blue';
};
// 3
console.log(`Total paragraphs: ${p.length}`);

// 4
const submit = document.getElementById('submit');
const form = document.getElementById('userForm');

submit.addEventListener('mouseup', e => {
    e.preventDefault();
    console.log(form)
});