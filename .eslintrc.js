const DEFAULT_INDENT = 4;
const ERROR = 2;

module.exports = {
    root: true,
    extends: 'eslint:recommended',
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
        ecmaVersion: 'latest',
    },
    plugins: [],
    rules: {
        'no-empty-function': 'error',
        'array-callback-return': 'error',
        'arrow-body-style': 'error',
        'arrow-parens': 'off',
        'block-scoped-var': 'error',
        'block-spacing': 'error',
        'brace-style': [
            'error',
            '1tbs',
        ],
        'callback-return': 'error',
        camelcase: 'error',
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'comma-spacing': 'error',
        'dot-location': [
            'error',
            'property',
        ],
        'eol-last': 'error',
        eqeqeq: 'error',
        'func-call-spacing': 'error',
        indent: [
            'error',
            DEFAULT_INDENT,
            {
                SwitchCase: 1,
            },
        ],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'max-statements-per-line': 'error',
        'multiline-ternary': ['error'],
        'new-cap': 'error',
        'newline-per-chained-call': 'error',
        'no-console': [
            'warn',
            {
                allow: [
                    'warn',
                    'error',
                    'info',
                ],
            },
        ],
        'no-else-return': 'error',
        'no-implicit-globals': 'error',
        'no-magic-numbers': [
            'error',
            {
                ignore: [
                    -1,
                    0,
                    1,
                ],
                enforceConst: true,
            },
        ],
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': 'error',
        'no-param-reassign': 'error',
        'no-return-await': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'error',
        'no-unneeded-ternary': 'error',
        'no-use-before-define': [
            'error',
            {
                functions: false,
            },
        ],
        'no-useless-return': 'error',
        'no-warning-comments': 'warn',
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': [
            'error',
            'always',
        ],
        'operator-linebreak': [
            'error',
            'before',
        ],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
        ],
        'prefer-destructuring': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        quotes: [
            'error',
            'single',
        ],
        semi: [ERROR, 'always'],
        'space-before-function-paren': 'off',
        'spaced-comment': 'error',
        'template-curly-spacing': 'error',
        strict: ['error', 'never'],
        'valid-jsdoc': [
            'error',
            {
                requireReturn: false,
                requireParamDescription: false,
                requireReturnDescription: false,
            },
        ],
    },
};
