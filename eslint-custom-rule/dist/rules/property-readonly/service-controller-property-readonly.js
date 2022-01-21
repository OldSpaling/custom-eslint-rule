"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const createRule = utils_1.ESLintUtils.RuleCreator((name) => name);
const rule = createRule({
    name: 'service-controller-property-readonly',
    meta: {
        docs: {
            description: 'service and controller properties must be readonly',
            recommended: 'error',
            requiresTypeChecking: false,
            suggestion: true,
        },
        messages: {
            'missing-property-readonly': '"{{name}}" property must be readonly',
            'missing-property-readonly-fixed': 'add readonly for "{{name}}" property',
            'missing-param-property-readonly': 'constuctor "{{name}}" param must be readonly',
            'missing-param-property-readonly-fixed': 'add readonly for "{{name}}" param property',
        },
        type: 'problem',
        fixable: "code",
        hasSuggestions: true,
        schema: {},
    },
    defaultOptions: [],
    create: function (context) {
        return {
            'ClassDeclaration[id.name=/Service/] PropertyDefinition'(node) {
                console.log("ClassDeclaration[id.name=/Service/] PropertyDefinition");
                if (!node.readonly) {
                    context.report({
                        node: node,
                        data: { name: node.key["name"] },
                        messageId: 'missing-property-readonly',
                        fix: (fixer) => {
                            return fixer.replaceText(node.key, `readonly ${node.key["name"]}`);
                        },
                        suggest: [
                            {
                                messageId: 'missing-property-readonly-fixed',
                                data: { name: node.key["name"] },
                                fix: (fixer) => {
                                    return fixer.replaceText(node.key, `readonly ${node.key["name"]}`);
                                }
                            }
                        ]
                    });
                }
            },
            'ClassDeclaration[id.name=/Service/] MethodDefinition[kind=constructor] TSParameterProperty'(node) {
                console.log("ClassDeclaration[id.name=/Service/] MethodDefinition[kind=constructor] TSParameterProperty");
                if (!node.readonly) {
                    context.report({
                        node: node,
                        messageId: 'missing-param-property-readonly',
                        data: { name: node.parameter["name"] },
                        suggest: [
                            {
                                messageId: 'missing-param-property-readonly-fixed',
                                data: { name: node.parameter["name"] },
                                fix: (fixer) => {
                                    return fixer.insertTextBeforeRange(node.parameter.range, `readonly `);
                                }
                            }
                        ]
                    });
                }
            },
            'ClassDeclaration[id.name=/Controller/] PropertyDefinition'(node) {
                console.log("ClassDeclaration[id.name=/Service/] MethodDefinition[kind=constructor] TSParameterProperty");
                if (!node.readonly) {
                    context.report({
                        node: node,
                        messageId: 'missing-property-readonly',
                        data: { name: node.key["name"] },
                        suggest: [
                            {
                                messageId: 'missing-property-readonly-fixed',
                                data: { name: node.key["name"] },
                                fix: (fixer) => {
                                    return fixer.replaceText(node.key, `readonly ${node.key["name"]}`);
                                }
                            }
                        ]
                    });
                }
            },
            'ClassDeclaration[id.name=/Controller/] MethodDefinition[kind=constructor] TSParameterProperty'(node) {
                console.log("ClassDeclaration[id.name=/Service/] MethodDefinition[kind=constructor] TSParameterProperty");
                if (!node.readonly) {
                    context.report({
                        node: node,
                        messageId: 'missing-param-property-readonly',
                        data: { name: node.parameter["name"] },
                        suggest: [
                            {
                                messageId: 'missing-param-property-readonly-fixed',
                                data: { name: node.parameter["name"] },
                                fix: (fixer) => {
                                    return fixer.insertTextBeforeRange(node.parameter.range, `readonly `);
                                }
                            }
                        ]
                    });
                }
            },
        };
    },
});
exports.default = rule;
//# sourceMappingURL=service-controller-property-readonly.js.map