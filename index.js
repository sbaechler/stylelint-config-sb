module.exports = {
    extends: 'stylelint-config-standard',
    plugins: [
        'stylelint-scss',
        'stylelint-declaration-use-variable'
    ],
    rules: {
        'at-rule-blacklist': [
            'media'
        ],
        'color-no-hex': true,
        'indentation': 2,
        'max-empty-lines': 2,
        'property-blacklist': [
            '/^font(?!-size)/'
        ],
        'scss/selector-no-redundant-nesting-selector': true,
        'scss/at-import-no-partial-leading-underscore': true,
        'selector-no-universal': true,
        // TODO: Wait until it supports currentColor.
        // https://github.com/sh-waqar/stylelint-declaration-use-variable/issues/14
        'sh-waqar/declaration-use-variable': 'font-size',
    }
};
