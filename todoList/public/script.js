let container = document.querySelector('.container');
let inputValue = document.querySelector('.input');
let add = document.querySelector('.add');
let todoData;
class Item {
    constructor(name, old = false, id = null) {
        if (old) {
            this.createItem(name, id);
        } else {
            this.createNewItem(name);
        }
    }

    updateToServer = async (updatedData) => {
        try {
            const response = await axios.post('./todo', updatedData); // Or use PUT if applicable
            console.log('Server response:', response.data);
        } catch (error) {
            console.error('Error updating server:', error);
        }
    };
    createNewItem(name) {
        const id = Date.now();
        todoData[id] = { text: name };
        this.updateToServer(todoData);
        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let input = document.createElement('input');
        input.value = name;
        input.classList.add('item_input');

        let remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = "REMOVE";
        remove.addEventListener('click', () => this.remove(itemBox, id));

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(remove);

    }
    createItem(name, id) {
        ;
        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let input = document.createElement('input');
        input.value = name;
        input.classList.add('item_input');

        let remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = "REMOVE";
        remove.addEventListener('click', () => this.remove(itemBox, id));

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(remove);

    }
    remove(itemBox, id) {
        // Remove the item from the DOM
        itemBox.parentNode.removeChild(itemBox);

        // Send DELETE request to the server
        console.log(id)
        axios.delete(`./todo/${id}`)
            .then(response => {
                console.log(`Todo with ID ${id} deleted:`, response.data);

                // Update local todoData object
                delete todoData[id];
            })
            .catch(error => {
                console.error(`Error deleting todo with ID ${id}:`, error);
            });
    }
}

const check = () => {
    if (inputValue.value != "" && inputValue.value != " ") {
        new Item(inputValue.value, false);
        inputValue.value = "";
    }
    else {
        alert('Please Write Something')
    }
}


window.onload = () => {
    axios.get('./todo').then(res => {
        console.log(res.data)
        Object.keys(res.data).map(id => {
            console.log(res.data[id].text)
            new Item(res.data[id].text, true, id)
        })
        todoData = res.data
    })
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.key == 'enter') {
        check();
    }
})