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

# 基础
## 基础类型
### 布尔值
```ts
let isDone: boolean = false;
```
### 数字
```ts
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
```
### 字符串
```ts
let name: string = "bob";
name = "smith";
```
### 数组
```ts
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
let misList: (number|string)[] = [1, "2", "3", 4];
```
### 元组
```ts
let x: [string, number];
x = ["hello", 10]; // OK
x = [10, "hello"]; // Error
```
### 枚举
```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```
### Any
Any 用来表示允许赋值为任意类型。
```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```
### Void
```ts
function warnUser(): void {
    console.log("This is my warning message");
}
```
### Null 和 Undefined

Null 和 Undefined 是所有其它类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。

使用场景： 一般用于函数的返回值，表示没有返回值。
```ts
let u: undefined = undefined;
let n: null = null;
```
### Never

never 类型表示的是那些永不存在的值的类型。 例如， never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never 类型，当它们被永不为真的类型保护所约束时。

never 类型是任何类型的子类型，也可以赋值给任何类型； 然而，没有类型是 never 的子类型或可以赋值给 never 类型（除了 never 本身之外）。 即使 any 也不可以赋值给 never。
```ts
function error(message: string): never {
    throw new Error(message);
}
```
### Object

object 表示非原始类型，也就是除 number，string，boolean，symbol，null 或 undefined 之外的类型。

使用场景： 一般用于函数的参数，表示传入的参数是一个对象。
```ts
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK
create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```
## 类型断言

类型断言（Type Assertion）可以用来手动指定一个值的类型。


```ts
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```
## 接口

接口（Interfaces）是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。

```ts
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
    say(): string;
}
```
## 函数
```ts
function add(x: number, y: number): number {
    return x + y;
}
```
## 类
```ts
class Animal {
    // public 
    name: string;
    // ctor
    constructor(theName: string) { this.name = theName; }
    // method
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```

### 继承
类的继承使用 `extends` 关键字。 
注意事项：
- 子类中的构造函数必须调用 `super()`，否则会报错。
```ts
class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
```
### 公共，私有与受保护的修饰符
默认为 `public`，可以省略。                                
`private` 修饰符修饰的属性或方法，不能在声明它的类的外部访问。
受保护的修饰符 `protected` 修饰的属性或方法，不能在声明它的类的外部访问，但是可以在子类中访问。

注意事项：
- 当构造函数修饰为 `private` 时，该类不允许被继承或者实例化。
- 当构造函数修饰为 `protected` 时，该类只允许被继承。

```ts
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}
new Animal("Cat").name; // Error: 'name' is private;
```
### 存取器
存取器需要通过 `get` 和 `set` 关键字来声明。
```ts
class Employee {
    private _fullName: string;
    get fullName(): string {
        return this._fullName;
    }
    set fullName(newName: string) {
        this._fullName = newName;
    }
}
```
### 静态属性
静态属性存在于类本身上面而不是类的实例上。
```ts
class Grid {
    static origin = { x: 0, y: 0 };
    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}
```
### 抽象类

抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 `abstract` 关键字是用于定义抽象类和在抽象类内部定义抽象方法。

注意事项：
- 抽象类中的抽象方法必须被子类实现。
- 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含 `abstract` 关键字并且可以包含访问修饰符。

```ts
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}

// 子类
class Dog extends Animal {
    move() {
        console.log("running...");
        super.move();
    }
}
```

## 泛型
```ts
function identity<T>(arg: T): T {
    return arg;
}
```
## 声明文件
```ts
declare var jQuery: (selector: string) => any;
```
## 命名空间
```ts
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}
```
## 模块
```ts
export interface StringValidator {
    isAcceptable(s: string): boolean;
}
```
## 装饰器
```ts
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
```
## Mixins
```ts
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
```
## JSX
```ts
interface ButtonProps {
    color: string;
    children: string;
}
function Button(props: ButtonProps) {
    return <button style={{ background: props.color }}>{props.children}</button>;
}
```
## 类型推论
```ts
let x = 3;
```
## 类型兼容性
```ts
interface Named {
    name: string;
}
let x: Named;
let y = { name: "Alice", location: "Seattle" };
x = y;
```
## 类型保护
```ts
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}
```
## 类型别名
```ts
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
```
## 字符串字面量类型
```ts


