import { ESLintUtils, TSESTree } from '@typescript-eslint/utils';
const createRule = ESLintUtils.RuleCreator((name) => name);
const rule=createRule({
    name:"file-name",
    meta: {
        docs: {
            description: 'set file name style',
            recommended: 'warn',
            requiresTypeChecking: false,
            suggestion: true,
        },
        messages: {
            'missing-property-readonly': '"{{name}}" property must be readonly',
            'missing-property-readonly-fixed': 'add readonly for "{{name}}" property',
            'missing-param-property-readonly': 'constuctor "{{name}}" param must be readonly',
            'missing-param-property-readonly-fixed': 'add readonly for "{{name}}" param property',
        },
        type: 'suggestion',
        hasSuggestions: true,
        schema: {},
    },
    defaultOptions: [],
    create: function (context) {
        return {
            //todo
        };
    }
})