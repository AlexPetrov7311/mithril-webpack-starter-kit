// import { window } from './declare/global';
import * as m from 'mithril';
import { ItemComponent } from './js/itemComponent';

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
// window.s = 213213;
// console.log(window);

m.render(document.body, 'hello world');

m.render(document.body, m(ES6ClassComponent, { name: 'Alex Petrov' }));
