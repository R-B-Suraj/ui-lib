import './styles/dropdown.css';


class Dropdown {
    constructor(container){
        this.container = container;
        this.trigger = container.querySelector('.trigger');
        this.content = container.querySelector('.content');
    }
    init(){
        this.trigger.addEventListener('click',()=>{
            this.trigger.classList.toggle('active');
            this.content.classList.toggle('active');
        });
        // both trigger element and content element becomes active when we click trigger element
    }
}




export {Dropdown as default};