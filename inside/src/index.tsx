import * as global from './declare/global';
import * as m from 'mithril';
import { ItemComponent } from './js/itemComponent';

import './scss/item.scss';

/**
 * @class ES6ClassComponent
 */
class ES6ClassComponent {
    private kind: string;
    constructor({state, attrs}) {
        this.kind = attrs.name;
    }
    public view() {
        return <div> Hello from an {this.kind}</div>;
    }
}

window.some = 'Global var for example';

m.render(document.body, [
    <ES6ClassComponent name="Alex Petrov"/>,
    <ItemComponent />
]);
