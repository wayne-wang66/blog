---
layout: Post
title: FormData上传文件到服务器
date: 2022-08-29
headerImage: https://img-qn.51miz.com/preview/photo/00/01/50/33/P-1503304-E0B46C52O.jpg!/quality/90/unsharp/true/compress/true/format/jpg/fw/720
headerMask: rgba(40, 57, 101, .4)
tags:
  - FormData
  - Koa
---

#### 后端配置

------

上传文件一定是 post 请求 , 这里我们使用 koa 实现一个简易的 post 请求, 并且让获取前端发来的 formdata 数据 并进行一些简易的处理 ;

```
const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

let app = new Koa();
let router = new Router();

app.use(koaBody({
  multipart: true // 允许客户端上传文件
}));

router.post('/upload', async (ctx, next) => {
  // 客户端上传的文件会在这个对象中存在 ctx.request.files
  // 读取这个文件, 然后存到 upload 文件夹, 实现简易的存储文件功能
  let data = fs.readFileSync(ctx.request.files.image.path);
  fs.writeFileSync(path.join(__dirname, 'upload', ctx.request.files.image.name), data);
  ctx.body = { status: 1 };
});

app.use(router.routes());
app.listen(3000);
```

#### 前端实现单文件上传

------

前端这里使用 FormData 对象和 XMLHttpRequest 对象来实现文件上传

这里咱们就先不考虑样式了, 只是简单实现功能

```
<input type="file" />
<button>点击上传</button>
```

```
document.querySelector('button').onclick = function () {
  // 这里会获取一个 files 数组对象 因为是单文件上传取第一个即可
  let file = document.querySelector('input').files[0];
  let xhr = new XMLHttpRequest();
  xhr.open('post', '/upload', true);
  xhr.onload = function () {
    let res = JSON.parse(xhr.responseText);
    console.log(res);
  }
  
  let form = new FormData();
  form.append('image', file); // 对应 key value
  xhr.send(form);
}
```

到这里, 就已经实现了 文件上传并且通过服务端进行转存 ; 需求怎么可能这么简单就实现呢, 我们可以再添加一些拓展, 比如进度条, 和上传速度 ;

#### 单文件的上传速度与进度条

------

html 优化部分 : 这里进度条, 我们就根据 html5 原生的 progress 标签来实现 ;

```
<input type="file" />
<progress value="0" max="100"></progress>
<span class="percent">0 %</span>
<span class="speed">0 b/s</span>
<button>点击上传</button>
```

js 铺垫 ; 这里如果想要知道上传的进度和当前下载的速度,  我们肯定要办到下面一些事情 ;

- 上传文件时的状态监控

`xhr.upload` 下面有文件上传时的钩子,  我们可以利用这些钩子函数实现进度条的监控

[ https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/upload](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FXMLHttpRequest%2Fupload)

- 获取文件的大小 total
- 获取当前下载的大小 size

可以通过 钩子函数中的 event 获取到 total 和 size [https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequestEventTarget/onprogress](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FXMLHttpRequestEventTarget%2Fonprogress)

```
let startTime;
let startSize;
document.querySelector('button').onclick = function () {
  // 这里会获取一个 files 数组对象 因为是单文件上传取第一个即可
  let file = document.querySelector('input').files[0];
  let xhr = new XMLHttpRequest();
  xhr.open('post', '/upload', true);
  xhr.onload = function () {
    let res = JSON.parse(xhr.responseText);
    console.log(res);
  }
  
  let form = new FormData();
  form.append('image', file); // 对应 key value
  
  xhr.upload.onloadstart = function () {
    // 开始上传钩子
    startTime = new Date().getTime();
    startSize = 0;
  }
  xhr.upload.onprogress = function (event) {
   // 正在上传钩子, 会被多次调用
   // 已传输的数据量 / 总共的数据量 * 100
   let percent = (event.loaded / event.total * 100).toFixed(0);
   document.querySelector('progress').value = percent;
   document.querySelector('.percent').innerHTML = percent + ' %';
   
   let currentTime = new Date().getTime();
   let dtime = (currentTime - startTime) / 1000; // 时间差 s
   startTime = new Date().getTime(); // 计算完成后重新获取时间
   
   let dsize = event.loaded - startSize; // 大小差 b
   startSize = event.loaded; // 计算完成后重新获取带下
   
   let speed = dsize / dtime; // 速度
   let unit = 'b/s';  // 单位
   // 单位进制计算
   if (speed / 1024 > 1) {
     speed = speed / 1024;
     unit = 'kb/s';
   }
   if (speed / 1024 > 1) {
     speed = speed / 1024;
     unit = 'mb/s';
   }
   
   document.querySelector('.speed').innerHTML = speed.toFixed(2) + unit;
  }
  // 上传完成后重置 进度条等
  xhr.onload = function () {
   document.querySelector('progress').value = 0;
   document.querySelector('.percent').innerHTML = 0 + ' %';
   document.querySelector('.speed').innerHTML = '0b/s';
  }
  xhr.send(form);
}
```

#### axios 单文件上传带进度条

------

axios 中监控进度, 通过 onUploadProgress 钩子来监控进度

```
axios.post('/upload', form, {
  onUploadProgress: event => {
    let complete = (event.loaded / event.total * 100 | 0)
    document.querySelector('progress').value = complete;
    document.querySelector('.percent').innerHTML = complete + ' %';
    if (complete >= 100) {
      document.querySelector('progress').value = '0';
      document.querySelector('.percent').innerHTML = 0 + ' %';
    }
  },
}).then(res => {
  console.log(res)
});
```

