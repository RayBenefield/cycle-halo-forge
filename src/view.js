import { div } from '@cycle/dom';
import card from './components/news-card';

export default (sources, state$) => ({
    DOM: state$.map(state =>
        div(state.posts.map(post => card({ props: post }).DOM))
    ),
});
