/* tslint:disable */
// declare let window: any;
/* tslint:enable */

declare global {
    interface Window { some: String; }
}

// hack for import file
declare let _default: {}
export default _default;