const p = document.getElementById('first');
const div1 = document.querySelector('div.container');
const ul = document.getElementById('list');
const imgs = document.getElementsByClassName('image');


p.innerText = "Энэ текст шинэчлэгдсэн!";
div1.textContent = 'Контейнер шинэчлэгдсэн!'

for (let i = 0; i < 3; i++) {
    let li = document.createElement('li')
    li.innerText = i + 1 + ' dehi list element';

    ul.appendChild(li)
}

for (let i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute('alt', `"Шинэ зураг ${i + 1}`)

}