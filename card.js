console.log('Hello');

let n =  new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;

class UserCard extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `${this.getAttribute('name')}`;
    }
}

window.customElements.define('user-card', UserCard);

