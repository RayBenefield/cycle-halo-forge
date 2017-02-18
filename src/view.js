import { div, a, img, b } from '@cycle/dom';

export default state$ => ({
    DOM: state$.map(post =>
        div([
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
