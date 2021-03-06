import catSeeder from './catSeeder.js';
import {html, render} from './node_modules/lit-html/lit-html.js';
import {styleMap} from './node_modules/lit-html/directives/style-map.js';

const styleNone = {
    display: 'none'
};


const clickHandler = (e) => {
    let btn = e.target;
    let div = btn.parentNode.querySelector('.status');

    if (btn.textContent === `Show status code`) {

        btn.textContent = `Hide status code`;
        div.style.display = 'block';

    } else if (btn.textContent === `Hide status code`) {

        btn.textContent = `Show status code`;
        div.style.display = 'none';
    }
};
const createLis = (cats) => html`
    <ul>
        ${cats.map((cat) => html`
            <li>
                <img src=./images/${cat.imageLocation}.jpg width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button @click=${clickHandler} class="showBtn">Show status code</button>
                    <div class="status" style=${styleMap(styleNone)} id=${cat.id}>
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
            </li>
        `)}
    </ul>`;


const seed = () => {
    render(createLis(catSeeder.cats), document.querySelector('#allCats'));
}
seed();

