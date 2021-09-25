// we will import code from ui folder
// how we are going to handle ui library css in this project
// keep styles and js together in ui folder... that means we are going to use a css-loader
// to process the css in our source folder  and output in assets folder
// when we need the css we import from a js file... it means we need to process all our css through webpack module system just like we did for js files
// config in webpack..... one rule was  js through babel loader...
// another rule pass css throuh css loader
// while importing  runs the loaders through loaders  if not loaded style is not set
// css-loader helps webpack to collect css from a css file when we import it and style-loader
// takes that css and adds it to our html file
// check in style inside head  in browser









// create a tooltip
import Tooltip from './ui/tooltip';

const tooltip = new Tooltip(document.querySelector('.tooltip') );
tooltip.init();




// dropdown
import Dropdown from './ui/dropdown';

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});





// tabs
import Tabs from './ui/tabs';

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();




// snackbar
import Snackbar from './ui/snackbar';

const snackbar = new Snackbar();
snackbar.init();

const snackbar_trigger = document.querySelector('.snackbar-trigger');
snackbar_trigger.addEventListener('click',()=>{
    snackbar.show('you clicked me :)');
});


