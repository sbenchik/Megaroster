const App = {
    init(){
        const nameForm = document.querySelector('form')
        nameForm.addEventListener('submit', (ev) => this.onSubmit(ev))
    },
}
App.init()