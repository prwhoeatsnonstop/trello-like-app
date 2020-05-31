console.log('Hello');

let n =  new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();
document.getElementById('date').innerHTML = d + '/' + m + '/' + y;


const template = document.createElement('template');
template.innerHTML = `
<style>
    h3 {
        color: #172b4d;
    }

    .user-card {
        font-family: 'Arial', sans-serif;
        background: #f4f4f4;
        width: 250px;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 10px;
        margin-bottom: 15px;
    }

    .input {
        position: relative;
        margin-top: 40px;
        top: 5px;
        right: 88px;
    }
</style>
<div class='user-card'>
    <h3></h3>
    <div class='input'>
    <input></input>
    </div>
    <button id="submit">Add card</button>
</div>
`;

class UserCard extends HTMLElement {
    constructor(){
        super();
        // attaching shadow to this custom element
        this.attachShadow({ mode: 'open'})
        this.shadowRoot.appendChild(template.content.
            cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    }
}

window.customElements.define('user-card', UserCard);




