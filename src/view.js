import { h1 } from '@cycle/dom';

export default state$ => ({
    DOM: state$.map(i => h1(`${i} seconds elapsed`)),
});
