# 环境配置
1. 安装node
2. 安装typescript编译环境

```bash
npm install -g typescript
```
3. 实现实时预览效果

    具体步骤如下：

    **3.1 安装依赖**

    在项目根目录下运行以下命令安装 webpack 相关的依赖：

    ```
    npm install webpack webpack-cli webpack-dev-server ts-loader typescript -D
    ```

    **3.2 配置 webpack.config.js**

    在项目根目录下创建 webpack.config.js 文件，并添加以下代码：

    ```js
    module.exports = {
      mode: "development",
      entry: "./src/index.ts", // 入口文件路径
      output: {
        filename: "bundle.js", // 输出文件名
      },
      resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
      devServer: {
        static: "./dist", // 资源文件的根目录
        open: true, // 自动打开浏览器
        hot: true, // 开启模块热替换
      },
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            use: "ts-loader",
          },
        ],
      },
    };
    ```

    以上配置说明：

    - mode: "development"：设置为 development 模式。
    - entry: "./src/index.tsx"：入口文件路径。
    - output: {}：输出文件配置。
    - resolve: {}：配置可以省略的文件后缀。
    - devServer: {}：开发服务器配置。
    - module: {}：模块加载器配置。


    **3.3 配置 package.json**

    在项目的 package.json 文件中添加以下代码：

    ```json
    {
      "scripts": {
        "dev": "webpack serve --config webpack.config.js",
        "build": "webpack --config webpack.config.js"
      }
    }
    ```

    以上代码中：

    - dev：启动 webpack-dev-server。
    - build：编译项目。

    **3.4 编写 TypeScript 代码**

    在 src 目录下创建 TypeScript 文件，例如 index.tsx，具体代码如下：

    ```tsx
    function greeter(person: string) {
      return "Hello, " + person;
    }

    let user = "TypeScript";
    document.body.innerHTML = greeter(user);
    ```

    **3.5 编译和查看效果**

    在终端中运行以下命令，启动开发服务器：

    ```
    npm run build
    npm run dev
    ```

    此时，在浏览器中打开 http://localhost:8080，即可看到 "Hello, TypeScript" 的输出，同时当修改代码之后，浏览器中也会实时更新。

4. 执行ts代码

```typescript
// compile to js
tsc index.ts

// run js
node index.js
```

# 目录结构

1.  `src`  目录：包含所有源代码文件，包括 TypeScript、CSS、HTML、图片等。
2.  `public`  目录：包含所有公共文件，例如静态资源文件、第三方库文件等。
3.  `dist`  目录：包含所有打包后的文件，用于部署到生产环境。
4.  `test`  目录：包含所有测试文件，用于测试代码的正确性和性能。
5.  `config`  目录：包含所有配置文件，例如 Webpack 配置文件、环境变量配置文件等。
6.  `node_modules`  目录：包含所有依赖项，例如第三方库、工具等。
7.  `docs`  目录：包含所有文档文件，例如项目说明、API 文档、学习文档等。
8.  `scripts`  目录：包含所有脚本文件，例如构建脚本、部署脚本等。
9.  `server` 目录：后端服务器代码
10. `mock` 目录：包含所有mock文件，例如mock数据、mock接口等。

在  `src`  目录中，通常会按照功能或模块划分子目录，例如：
1.  `components`  目录：包含所有组件代码。
2.  `pages`  目录：包含所有页面代码。
3.  `utils`  目录：包含所有工具函数代码。
4.  `styles`  目录：包含所有样式代码。
5.  `assets`  目录：包含所有图片、字体等资源文件。
```bash
在 `public` 目录中，通常会按照功能或模块划分子目录，例如：
public/
├── images/
│   ├── logo.png
│   ├── banner.jpg
│   └── ...
├── favicon.ico
└── index.html

在 `test` 目录中，通常会按照功能或模块划分子目录，例如：
test/
├── components/
│   ├── Button.test.tsx
│   ├── Input.test.tsx
│   └── ...
├── pages/
│   ├── Home.test.tsx
│   ├── About.test.tsx
│   └── ...
└── ...

在 `config` 目录中，通常会按照功能或模块划分子目录，例如：
config/
├── webpack/
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   ├── webpack.prod.js
│   └── ...
├── babel.config.js
├── jest.config.js
└── ...

在 `docs` 目录中，通常会按照功能或模块划分子目录，例如：
docs/
├── api/
│   ├── README.md
│   ├── Button.md
│   ├── Input.md
│   └── ...
├── learning/
│   ├── README.md
│   ├── React.md
│   ├── TypeScript.md
│   └── ...
└── ...

在 `scripts` 目录中，通常会按照功能或模块划分子目录，例如：
scripts/
├── build/
│   ├── build.js
│   ├── build.css.js
│   ├── build.html.js
│   └── ...
├── deploy/
│   ├── deploy.js
│   ├── deploy.css.js
│   ├── deploy.html.js  
│   └── ...
└── ...
```

# 测试
1. src/下写模块代码
2. test/下写测试代码，测试代码的文件名必须以.test.tsx结尾
3. 执行测试命令
```bash
npm test -- --config=config/jest.config.js
```