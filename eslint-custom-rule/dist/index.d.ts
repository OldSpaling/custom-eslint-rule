declare const configuration: {
    rules: {
        "service-controller-property-readonly": import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleModule<"missing-property-readonly" | "missing-property-readonly-fixed" | "missing-param-property-readonly" | "missing-param-property-readonly-fixed", any[], {
            'ClassDeclaration[id.name=/Service/] PropertyDefinition'(node: import("@typescript-eslint/types/dist/ast-spec").PropertyDefinition): void;
            'ClassDeclaration[id.name=/Service/] MethodDefinition[kind=constructor] TSParameterProperty'(node: import("@typescript-eslint/types/dist/ast-spec").TSParameterProperty): void;
            'ClassDeclaration[id.name=/Controller/] PropertyDefinition'(node: import("@typescript-eslint/types/dist/ast-spec").PropertyDefinition): void;
            'ClassDeclaration[id.name=/Controller/] MethodDefinition[kind=constructor] TSParameterProperty'(node: import("@typescript-eslint/types/dist/ast-spec").TSParameterProperty): void;
        }>;
    };
};
export = configuration;
