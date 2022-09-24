## 如何安装一个包？
1. 方法一：npm install 包名
2. 方法二：npm i 包名
注意：可以一次安装多个包，多个包名间用逗号分割

## 如何快速创建package.json文件
作用：在运行npm install 命令安装包时，自动将包的名称和版本号记录到package.json文件中
`npm init -y`
注意：上述命令只能在英文的目录下成功运行！不能使用中文也不能有空格。

## 如何快速安装package.json中记录的包？
`npm install` 或者 `npm i`
作用：一次性安装所有的依赖包（在执行命令时，npm包管理工具会读取package.json中的dependencies节点，当读取到记录的所有依赖包的名称和版本号后，将它们一次性下载到项目中。）

## 如何卸载包？
`npm uninstall 包名`

## 如何将包记录到devDependencies节点中？
**devDependencies节点**：如果有的包只在项目开发阶段会用到，项目上线后就用不到了，建议把这些包记录到devDependencies节点中。
`npm i 包名 -D` 或 `npm install 包名 --save-dev`

## 下包速度慢怎么办？
答：使用国内淘宝搭建的NPM镜像服务器
### 查看当前的下包镜像源
`npm config get registry`
官方：https://registry.npmjs.org/
### 切换npm的下包镜像源
`npm config set registry=https://registry.npm.taobao.org/`
淘宝：https://registry.npm.taobao.org/
### nrm工具快速切换npm的下包镜像源
~~~
#通过npm包管理器，将nrm安装为全局可用小工具(-g表示安装为全局包)
npm i nrm -g
#查看所有可用的镜像源
nrm ls
#将下载包的镜像源切换为taobao
nrm use taobao
~~~