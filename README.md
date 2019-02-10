# tutorial-typescript

## TypeScript インストール

tscコマンドがインストールされてないので、aliasを作成した。

```bash
alias tsc='./node_modules/.bin/tsc'
```

## ファイルコンパイル

```
tsc greeter_1.ts
```
greeter_1.js が作成されていた。

## 静的型チェック

```
tsc greeter_2.ts
```

コンパイルエラーが表示されているが、 greeter_2.js ファイル作成は成功していた

## インターフェース

```
tsc greeter_3.ts
```
名前と型を宣言するだけの記述。
```
interface Person{
    firstName: string;
    lastName: string;
}
```

## クラス

```
tsc greeter_4.ts
```

implements 宣言が無くても、interfaceの定義と同じ構成なら、型チェックに通過する。
```
class Student {
    fullName: string;
    constructor(
        public firstName: string
        , public middleInitial: string
        , public lastName: string
    ){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("kazyan", "P.","jl");
```
greeter関数では、Personのパラメータしか候補に表示されない。
異なるパラメータを入力したらエラー波線が表示される。

## アプリケーション実行

greeter.html を用意。
greeter.js を読み込む。
表示を確認できる。
```
tsc greeter.ts
chrome で greeter.html を開く
```

