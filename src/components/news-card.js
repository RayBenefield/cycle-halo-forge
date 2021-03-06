import merge from 'lodash/merge';
import { div, a, img, sub } from '@cycle/dom';
import { $, _ } from '../helpers';
import {
    overflowAuto, relative, mt2, z2, roboto, whiteText, w2,
    bgGrey800, br1, fw5, h15, pa3, pr4, fl, w25, vTop, h2,
    greyText, absolute, bottom05, right1, mAuto, pl2, vMid,
} from '../styles';

const cardSize = { width: '20rem', height: '7.5rem' };
const time = require('time-ago')();

export default ({ DOM, props: post }) => {
    const click$ = DOM.select('body').events('click');
    return {
        DOM: post.debug().map(() => div('.card', $(mAuto, cardSize, relative, mt2, z2, roboto, whiteText, bgGrey800, br1), [
            //a(merge(_({ href: post.url }), $(roboto, fw5)), [
                div($(overflowAuto), [
                    img(merge(_({ src: post.image }), $(pa3, pr4, fl, w25))),
                    div($(vTop, pa3), [
                        post.title,
                        div($(h15), [
                            sub($(greyText, absolute, bottom05, right1), [
                                a(_({ href: post.source.url }), [
                                    `${time.ago(post.added)} • ${post.source.name} `,
                                    img(merge(_({ href: post.image }), $(pl2, vMid, w2, h2))),
                                ]),
                            ]),
                        ]),
                    ]),
                ]),
            //]),
        ]),
        )
    };
};
