import { div, a, img, b } from '@cycle/dom';
import { $, relative, mt2, z2, roboto, whiteText, bgGrey800, br1 } from './styles';

export default state$ => ({
    DOM: state$.map(post =>
        div($(relative, mt2, z2, roboto, whiteText, bgGrey800, br1), [
            a({ attrs: { href: post.url } }, [
                div([
                    img({ attrs: { src: post.image } }),
                    div([
                        b(post.title),
                    ]),
                ]),
            ]),
        ])
    ),
});
