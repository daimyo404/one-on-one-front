## はじめに

これは 1on1 ツールのフロントエンドリポジトリです。

## 技術スタック

- Next.js
- ChakraUI

## ESLint

### React の import 文が不要となったため設定 OFF

- "react/jsx-uses-react": "off"
- "react/react-in-jsx-scope": "off"

### prettier の設定と競合していたため設定 OFF(prettier を優先)

- "@typescript-eslint/quotes": "off",
- "@typescript-eslint/semi": "off",
- "@typescript-eslint/space-before-function-paren": "off",
- "@typescript-eslint/comma-dangle": "off",
- "@typescript-eslint/consistent-type-definitions": "off",
- "@typescript-eslint/member-delimiter-style": "off"
