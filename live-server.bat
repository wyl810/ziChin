@echo off
chcp 65001 > nul 2>&1
set /p PORT=请输入端口号：
node server.js %PORT%

@REM 这部分是批处理文件（`.bat` 文件）的内容，以下是对每个行的解释：
@REM 1. `@echo off`: 这个命令用于在执行批处理脚本时关闭命令回显。即，在运行 `.bat` 文件时不显示命令本身，只显示输出结果。
@REM 2. 将命令行编码设置为UTF-8。​chcp 65001​ 将命令行编码设置为UTF-8。 ​> nul 2>&1​ 是一个重定向命令，用于隐藏输出以避免显示乱码。
@REM 3. `set /p PORT=请输入端口号：`：这个命令用于提示用户手动输入端口号，并将输入的值保存到一个名为 `PORT` 的环境变量中。
@REM 4. `node server.js %PORT%`：这个命令使用 `node` 运行 `server.js` 文件，并将用户输入的端口号作为参数传递给 `server.js` 文件。