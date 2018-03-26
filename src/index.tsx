import * as global from './declare/global';
import * as m from 'mithril';
import { ItemComponent } from './js/itemComponent';

import './scss/item.scss';

/**
 * @class ES6ClassComponent
 */
class ES6ClassComponent {
    private kind: string;
    constructor(vnode) {
        // vnode.state is undefined at this point
        this.kind = vnode.attrs.name;
    }
    public view() {
        return m('div', `Hello from an ${this.kind}`);
    }
    public oncreate() {
        // console.log(`A ${this.kind} component was created`)
    }
}
// declare let window: any;

/* tslint:disable */

// declare global {
//     interface Window { s: any; }
// }
// window.s = 213213;

/* tslint:enable */

window.s = 213213;

m.render(document.body, 'hello world');

m.render(document.body, [
    <ES6ClassComponent name="Alex Petrov"/>,
    <ItemComponent />
]);
