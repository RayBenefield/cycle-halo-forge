import merge from 'lodash/merge';
import card from './components/news-card';

export default (sources, state$) => ({
    DOM: state$.map(post =>
        card(merge({}, sources, { props: post })).DOM
    ),
});
