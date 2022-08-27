#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹  注意打包生成的文件夹  默认是docs/.vuepress/dist
# cd docs/.vuepress/dist
# 如果再 /.vueprress/config 中修改了打包地址 dest: 'build', 则进入到对象的文件夹下push
cd build

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:wayne-wang66/blog.git master:gh-pages

cd -