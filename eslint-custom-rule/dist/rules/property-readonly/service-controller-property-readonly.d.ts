import { TSESTree } from '@typescript-eslint/utils';
declare const rule: import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleModule<"missing-property-readonly" | "missing-property-readonly-fixed" | "missing-param-property-readonly" | "missing-param-property-readonly-fixed", any[], {
    'ClassDeclaration[id.name=/Service/] PropertyDefinition'(node: TSESTree.PropertyDefinition): void;
    'ClassDeclaration[id.name=/Service/] MethodDefinition[kind=constructor] TSParameterProperty'(node: TSESTree.TSParameterProperty): void;
    'ClassDeclaration[id.name=/Controller/] PropertyDefinition'(node: TSESTree.PropertyDefinition): void;
    'ClassDeclaration[id.name=/Controller/] MethodDefinition[kind=constructor] TSParameterProperty'(node: TSESTree.TSParameterProperty): void;
}>;
export default rule;
