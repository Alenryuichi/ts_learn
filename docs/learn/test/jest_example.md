以下是一个使用 Jest 和 TypeScript 进行测试的示例：
1. 创建一个 TypeScript 项目，并安装 Jest 和 TypeScript：
```bash
npm init -y
npm install --save-dev jest @types/jest ts-jest typescript
```

2. 修改  `package.json`  文件，并添加以下内容：
```json
  "scripts": {
    "test": "jest"
  }
```
这个配置文件告诉 TypeScript 编译器将代码编译为 ES6 模块，并将编译后的代码输出到  `dist`  目录中。

3. 在config目录下创建一个  `jest.config.js`  文件，并添加以下内容：

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
```

这个配置文件告诉 Jest 使用 TypeScript 进行测试，并将测试文件放在  `src`  目录下。它还告诉 Jest 在运行测试之前将 TypeScript 代码转换为 JavaScript 代码。

4. 在  `src`  目录下创建一个 TypeScript 文件，并添加以下内容：

```typescript
// add.ts
export function add(a: number, b: number): number {
  return a + b;
}
```
这个文件定义了一个  `add`  函数，它将两个数字相加并返回结果。

5. 在  `test`  目录下创建一个测试文件，并添加以下内容：

```typescript
// add.test.tsx
import { add } from '../src/add';

test('add function', () => {
  expect(add(1, 2)).toBe(3);
});
```
这个文件使用  `import`  语句导入  `add`  函数，并使用  `test`  函数编写一个测试，它检查  `add`  函数是否正确地将两个数字相加。

6. 运行测试：

```bash
npm test
// or
npm test -- --config=config/jest.config.js
```
这个命令将运行 Jest 并执行测试。如果一切正常，Jest 将输出测试结果，并在  `dist`  目录中生成编译后的代码。