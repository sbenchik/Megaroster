$(document).foundation()

const App = {
    
    init(listSelector){
        nameForm = document.querySelector('form')
        nameForm.addEventListener('submit', (ev) => this.addStudent(ev))
    },

    delete(ev){
        ev.preventDefault()
        const listItem = ev.target.parentNode
        listItem.parentNode.removeChild(listItem)
    },

    promote(ev){
        ev.preventDefault()
        let listItem = ev.target.parentNode
        listItem.style.fontWeight = 'bold'
    },

    createList(person){
        const nameList = document.querySelector('ul')
        Array.from(person).map((input) => {
            if(input.value){
                let name = input.value
                const newLi = this.createListItem(name)
                //nameList.appendChild(newLi)
                nameList.insertBefore(newLi, nameList.firstChild)
            }
        })
        return nameList
    },

    createListItem(name){
        const newName = document.createElement('li')
        newName.textContent = name

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.classList.add('alert', 'button', 'listButton')
        deleteButton.addEventListener('click', (ev) => this.delete(ev))

        const promoteButton = document.createElement('button')
        promoteButton.textContent = 'Promote'
        promoteButton.classList.add('success', 'button', 'listButton')
        promoteButton.addEventListener('click', (ev) => this.promote(ev))

        newName.appendChild(promoteButton)
        newName.appendChild(deleteButton)
        return newName
    },

    addStudent(ev){
        ev.preventDefault()
        const form = ev.target
        const names = document.querySelector('.names')
        const list = this.createList(form.elements)
        names.appendChild(list)
        form.reset()
    },
}
App.init()