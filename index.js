const App = {
    
    init(){
        const nameForm = document.querySelector('form')
        nameForm.addEventListener('submit', (ev) => this.onSubmit(ev))
    },

    createList(person){
        const nameList = document.createElement('ul')
        Array.from(person).map((input) => {
            if(input.value){
                let name = input.value
                let li = this.createListItem(name)
                nameList.appendChild(li)
            }
        })
        return nameList
    },

    createListItem(name){
        const newName = document.createElement('li')
        newName.textContent = name
        return newName
    },

    onSubmit(ev){
        ev.preventDefault()
        const form = ev.target
        const names = document.querySelector('.names')
        const list = this.createList(form.elements)
        names.appendChild(list)
    },
}
App.init()