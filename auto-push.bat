#!/bin/bash

REM 这是单行注释 进入目标文件夹
REM 这是单行注释 cd D:/www.zichin.com
git pull  # 执行 git pull 命令来更新代码库
git add .
git commit -m "feat: build"
git push
exit