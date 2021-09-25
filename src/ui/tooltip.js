
import './styles/tooltip.css';


class Tooltip {
    constructor(element){
        // on element we are using element the span tag
        this.element = element;
        this.message = element.getAttribute('data-message');
    }
    init(){
        // to initialize our component
        const tip = document.createElement('div');
        tip.classList.add('tip');
        // style for component  tooltip
        tip.textContent = this.message;
        // where do we want to append this tooltip element.. to the element   span tag
        this.element.appendChild(tip);
        


        // when we enter mouse to the span  we add 'active' class
        this.element.addEventListener('mouseenter',()=>{
            tip.classList.add('active');
        });


        // when we move away from span / ie. this.element  remove active class
        this.element.addEventListener('mouseleave',()=>{
            tip.classList.remove('active');
        });

   
   
    }
}








export { Tooltip as default };