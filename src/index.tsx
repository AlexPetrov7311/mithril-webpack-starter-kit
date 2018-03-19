import * as m from 'mithril';


class ES6ClassComponent {
    kind: string;
    constructor(vnode) {
        // vnode.state is undefined at this point
        this.kind = vnode.attrs.name;
        
    }
    view() {
        return m("div", `Hello from an ${this.kind}`)
    }
    oncreate() {
        console.log(`A ${this.kind} component was created`)
    }
}

m.render(document.body, "hello world");

m.render(document.body, m(ES6ClassComponent, { name: 'Alex Petrov' }));