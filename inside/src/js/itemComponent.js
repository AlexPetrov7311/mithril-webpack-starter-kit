
// import "../scss/item.scss";
import m from 'mithril';

import imagePng from '../images/close.png';
import imageSVG from '../images/close.svg';
export class ItemComponent {
    constructor() {
        //console.log('ItemComponent');
    }
    view() {
        return m('', [
            m('label', 'Item Component label'),
            m('img', {
                src: imagePng
            }),
            m('img', {
                src: imageSVG
            })
        ]);
    }
}

export default {
    ItemComponent,
};
