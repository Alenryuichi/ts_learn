以下是一个使用 TSLint 检查 TypeScript 代码的示例：
首先，需要安装 TSLint：
```bash
npm install tslint --save-dev
```
然后，在项目根目录下创建一个  `tslint.json`  文件，用于配置 TSLint：
```json
{
  "extends": [
    "tslint:recommended"
  ],
  "rules": {
    "no-console": true,
    "no-empty": true,
    "no-unused-variable": true,
    "no-var-keyword": true,
    "max-line-length": {
      "options": [80]
    }
  }
}
```

上述配置文件中， `extends`  指定了要使用的规则集，这里使用了 TSLint 推荐的规则集。 `rules`  指定了要检查的规则，例如禁止使用 console、禁止空的代码块、检查未使用的变量等。
接下来，可以使用命令行工具来运行 TSLint：

```bash
tslint src/**/*.ts
```
上述命令会检查  `src`  目录下所有的 TypeScript 文件，并输出检查结果。

如果在安装完 TSLint 后，使用 tslint 命令时出现 zsh: command not found: tslint 的错误，可能是因为 TSLint 没有被正确安装到全局环境中。

解决方法有两种：

- 使用 npx 命令
  
  可以使用 npx 命令来运行 TSLint，例如：

    ```bash
    npx tslint src/**/*.ts
    ```

    上述命令会在当前项目中查找 TSLint，并运行它来检查 src 目录下所有的 TypeScript文件。

- 将 TSLint 安装到全局环境中
    可以使用 -g 参数将 TSLint 安装到全局环境中，例如：

    ```bash
    npm install -g tslint
    ```
    上述命令会将 TSLint 安装到全局环境中，以便在任何地方都可以使用 tslint 命令。

下面是一个 TypeScript 代码示例，用于演示 TSLint 的检查结果：
```typescript
function add(a: number, b: number) {
  console.log(a + b);
}

let x: number = 1;
let y: number = 2;

add(x, y);

if (x == 1) {
  // do something
}

for (let i = 0; i < 10; i++) {
  // do something
}

```
上述代码中， `add`  函数使用了 console， `if`  语句中使用了  `==`  运算符， `for`  循环中使用了  `let`  声明。这些都是 TSLint 规则中禁止的行为。运行 TSLint 后，会输出以下检查结果：

```bash
src/index.ts[1, 1]: no-console: Calls to 'console.log' are not allowed.
src/index.ts[8, 5]: triple-equals: == should be ===.
src/index.ts[10, 5]: no-var-keyword: 'var' keyword is not allowed, use 'let' or 'const' instead.
src/index.ts[12, 1]: max-line-length: Line exceeds maximum length of 80.
```
上述检查结果指出了代码中存在的问题，例如使用了 console、使用了  `==`  运算符、使用了  `var`  声明、代码行超过了 80 个字符等。开发者可以根据这些检查结果来优化代码，提高代码的质量和可维护性。