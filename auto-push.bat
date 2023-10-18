#!/bin/bash

cd D:/www.zichin.com  # 进入目标文件夹
git pull  # 执行 git pull 命令来更新代码库
git add .
git commit -m "feat: build"
git push
exit