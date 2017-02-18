import merge from 'lodash/merge';

export const relative = { position: 'relative' };
export const mt2 = { 'margin-top': '0.5rem' };
export const z2 = { 'box-shadow': '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3)' };
export const roboto = { 'font-family': 'Roboto, sans-serif' };
export const whiteText = { color: 'rgba(255, 255, 255)' };
export const bgGrey800 = { 'background-color': 'rgb(66, 66, 66)' };
export const br1 = { 'border-radius': '0.125rem' };

export const $ = (...styles) => ({
    style: (merge(...styles)),
});
