import xs from 'xstream';
import { div } from '@cycle/dom';
import card from './components/news-card';

export default ({ DOM }, state$) => ({
    DOM: state$.flatten(state =>
        state.posts.map(post => card({ DOM, props: xs.from([post]) }).DOM)
    ),
});
