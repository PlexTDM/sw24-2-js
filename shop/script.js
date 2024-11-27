const addBtn = document.getElementsByClassName('addToCart');
const nav = document.getElementById('cart');
const orderBtn = document.getElementById('orderBtn')

const minusBtn = document.getElementsByClassName('minusBtn')
const moreBtn = document.getElementsByClassName('addBtn')

const totalText = document.getElementById('total')

const prices = {
    peperoni: 29.99,
    double_cheese: 35.99,
    hawaii: 32.00
};

let cart = {};

let total = 0;

const toast = Toastify({
    text: "Added to Cart",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: () => toast.hideToast()
})

for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener('click', () => {
        try {
            let name = addBtn[i].value
            let price = prices[name]
            total += price
            if (Object.keys(cart).includes(name)) {
                cart[name] = cart[name] += 1
                console.log(cart);
            } else {
                cart[name] = 1
            }
            refreshCart();
            toast.showToast();
        } catch (error) {
            console.log(error)
        }
    });
};



const refreshCart = () => {
    nav.innerHTML = '';
    let l = Object.keys(cart).length
    if (l === 0) {
        orderBtn.disabled = true
        let div = document.createElement('div');
        div.className = 'empty'
        let empty = document.createElement('img');
        empty.src = "./img/empty.svg"
        div.appendChild(empty)
        return nav.appendChild(div)
    }

    orderBtn.disabled = false
    for (let i = 0; i < l; i++) {
        let name = Object.keys(cart)[i]
        let amount = Object.values(cart)[i]
        let nameTxt = name.split('_').join(' ')
        let div = `
        <div class='cart-item'>
            <img src="./img/peperoni.jpg" alt="order">
            <p class='name'>${nameTxt}</p>
            <span>
                <button class="minusBtn""><i class="fa-solid fa-minus"></i></button>
                <output>${amount}</output>
                <button class="addBtn"><i class="fa-solid fa-plus"></i></button>
                <p>$ ${Math.round(prices[name] * amount * 100) / 100}</p>
            </span>
        </div>
        `
        nav.innerHTML += div;
        totalText.innerText = '$ ' + Math.round(total * 100) / 100
    }


    for (let i = 0; i < minusBtn.length; i++) {
        let name = Object.keys(cart)[i]
        minusBtn[i].addEventListener('click', () => {
            cart[name] -= 1;
            total -= prices[name]
            if (cart[name] <= 0) {
                delete cart[name]
                console.log(name);
            }
            refreshCart()
        })
    }

    for (let i = 0; i < moreBtn.length; i++) {
        let name = Object.keys(cart)[i]
        moreBtn[i].addEventListener('click', () => {
            total += prices[name]
            cart[name] += 1;
            refreshCart()
        })
    }
}

refreshCart()
