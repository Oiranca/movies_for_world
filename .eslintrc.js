module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        "no-param-reassign": "off",
        "arrow-body-style": "off",
        "no-unused-vars": [1],
        "no-undef": [0],
        "react/function-component-definition": "off",
        "react/require-default-props": "off",
        "react/jsx-curly-brace-presence": "off",
        "react/jsx-props-no-spreading": ["off"],
        "no-use-before-define": ["off"],
        "import/prefer-default-export": ["off"],
        "react/react-in-jsx-scope": "off", "react/prop-types": "off",
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".js", ".jsx"]
            }
        ]
    }
};
