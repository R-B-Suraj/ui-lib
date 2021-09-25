
import './styles/tabs.css';


class Tabs {
    constructor(container){
        // container is the whole container of tabs
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');

    }
    init(){
        this.tabs.forEach(tab=>{
            tab.addEventListener('click', e =>{
                // we want toggle active class for tabs... the tab we clicked should be active others not
                this.toggleTabs(e);
                this.toggleContent(e);
            });
        });
    }
    toggleTabs(e){
        // remove current active classes
        this.tabs.forEach(tab=> tab.classList.remove('active'));
        // add new active class to clicked tab
        e.target.classList.add('active');
    }
    toggleContent(e){
        this.container.querySelectorAll('.content').forEach(item=>{
            item.classList.remove('active');

        });
        
        // now add active to the tab clicked refer to
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);
        content.classList.add('active');
    }
}



export { Tabs as default};