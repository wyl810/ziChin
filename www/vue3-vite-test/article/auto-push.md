自动提交代码实现方式：

npm可以通过在package.json文件的`scripts`字段中定义一个脚本命令来间接执行.bat文件。例如，假设有一个.bat文件名为`example.bat`，您可以将其作为npm脚本的一部分来执行。

首先，在package.json文件中定义一个自定义的脚本命令。例如：

```json
{
  "name": "my-project",
  "scripts": {
    "auto-push": "auto-push.bat"
  }
}
```

然后，您可以使用`npm run`命令来运行该自定义脚本：

```bash
npm run auto-push
```

这会使用系统的默认命令行解释器（如cmd.exe或PowerShell）运行.bat文件并执行其中的命令。

auto-push.bat 文件内容如下：
```bash
#!/bin/bash

cd D:/www.zichin.com  # 进入目标文件夹
git pull  # 执行 git pull 命令来更新代码库
git add .
git commit -m "feat: build"
git push
```