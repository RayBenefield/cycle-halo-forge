import { div, a, img, b } from '@cycle/dom';
import merge from 'lodash/merge';
import { $, _ } from './helpers';
import { overflowAuto, relative, mt2, z2, roboto, whiteText, bgGrey800, br1, fw5 } from './styles';

const width = { width: 320 };

export default state$ => ({
    DOM: state$.map(post =>
        div($(width, relative, mt2, z2, roboto, whiteText, bgGrey800, br1), [
            a(merge(_({ href: post.url }), $(roboto, fw5)), [
                div($(overflowAuto), [
                    img(_({ src: post.image })),
                    div([
                        b(post.title),
                    ]),
                ]),
            ]),
        ])
    ),
});
