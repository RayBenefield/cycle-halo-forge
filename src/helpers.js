import merge from 'lodash/merge';

export const $ = (...styles) => ({
    style: (merge(...styles)),
});

export const _ = (...attrs) => ({
    attrs: merge(...attrs),
});
