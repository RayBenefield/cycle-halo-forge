import { run } from '@cycle/xstream-run';
import { makeDOMDriver } from '@cycle/dom';
import model from './model';
import view from './view';
import intent from './intent';

function main(sources) {
    return view(model(intent(sources)));
}

const drivers = {
    DOM: makeDOMDriver('#app'),
};

run(main, drivers);
