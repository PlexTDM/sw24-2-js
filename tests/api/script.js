// import axios from 'axios';
const usersDiv = document.getElementById('users')
const URL1 = 'https://jsonplaceholder.typicode.com/posts'
const URL2 = 'https://jsonplaceholder.typicode.com/users';


// 1
const dasgal1 = () => {
    axios.get(URL1).then(res => {
        res.data.forEach(data => {
            console.log('title:', data.title)
            console.log('body:', data.body)
        });
    })
}
// 2
const dasgal2 = () => {
    axios.post(URL1, {
        title: 'hello',
        body: 'world'
    }).then(res => console.log(res.data))
}

// 3
const dasgal3 = () => {
    axios.put(`${URL1}/1`, {
        title: 'updated',
        body: 'hello updated'
    })
        .then(res => console.log(res.data))
}

const dasgal4 = () => {
    axios.delete(URL1 + '/1')
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
}

const dasgal5 = () => {
    axios.get(URL2)
        .then(res => {
            res.data.forEach(data => {
                console.log(data.name, data.email, data.address)
            })
        })
        .catch(err => console.error(err))
}
const dasgal6 = () => {
    const url = 'https://picsum.photos/v2/list';
    const random = Math.floor(Math.random() * 30)
    axios.get(url).then(res => {
        res.data.map(data => {
            console.log(data)
            let img = document.createElement('img');
            img.src = data.url
            document.body.appendChild(img)
        })
    })
}
dasgal6()

const dasgal7 = () => {
    const name = 'Bob'
    const url = 'https://api.agify.io?name=' + name;
    axios.get(url).then(res => console.log(res.data))
}

const dasgal8 = () => {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=47.92&longitude=106.92&hourly=temperature_2m';
    axios.get(url)
        .then(res => {
            const max = Math.max(...res.data.hourly.temperature_2m);
            const min = Math.min(...res.data.hourly.temperature_2m)
            console.log('max:', max, '\n', 'min:', min)
        })
        .catch(err => console.error("Цаг агаарын өгөгдөл олдсонгүй"))
}

const dasgal10 = async () => {
    const data = await axios.get(URL2)
        .then(res => {
            console.log(res.data)
            res.data.map(user => {
                let div = document.createElement('div');
                div.className = 'user';
                div.setAttribute('id', user.id)
                div.innerHTML = `
                    <h3>${user.name}</h3>
                    <h4>${user.username}</h4>
                `
                div.addEventListener('click', () => {
                    const id = div.getAttribute('id')
                    window.location = './posts.html?id=' + id;
                })
                usersDiv.appendChild(div)
            })
        })
        .catch(err => console.error(err))

    // if (!data) return
    // const random = Math.floor(Math.random() * data.length)

    // const url = `${URL1}?userId = ${random} `;
    // axios.get(url)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.error('Нийтлэл олдсонгүй'));
}
window.onload = dasgal10();