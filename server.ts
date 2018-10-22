import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
export class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string, 
        public task:number,
        public person:number
    ){}
}
const courses = [
    new Course(1,'2017级web开发（二）',
    "http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",
    10,90),
    new Course(2,'2016级混合应用开发',
    "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",
    23,100),
    new Course(3,'2016级测试基础',
    "http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",
    15,97),
    new Course(4,'2017级计算机导论',
    "http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",
    30,79),
    new Course(5,'2017级软件测试基础',
    "http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",
    50,99) ,
    new Course(6,'2017级信息素养',
    "http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130",
    20,99),
    new Course(7,'2017级数据结构',
    "http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130",
    30,100),
    new Course(8,'2017级数据结构',
    "http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130",
    30,109)
]
export class kecheng{
    constructor(
        public id:number,
        public images:string, 
        public jianjie:string,
        public jieshao:string,
        public task:number,
        public person:number
    ){}
}
const kechengs=[
    new kecheng(1,"http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",
   "Github 开源之旅视频课程第一季：启程","      完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
   14,5),
    new kecheng(2,"http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",
    "CSS3基础","CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性。",
    14,5),
    new kecheng(3,"http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190",
    "HTML5基础"," HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API。",
    14,5),
    new kecheng(4,"http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190",
    "Selenium IDE WEB自动化测试入门视频课程（中）","上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。中篇和下篇会介绍很多技术细节。基本上中篇会把最常用到的技术细节都讲到。这样上篇和中篇的内容可以应付80%网站的自动化测试任务了。下篇有些高级话题，不是每个人都会用到的，适合骨灰级玩家。",
    14,5),
    new kecheng(1,"http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",
   "Github 开源之旅视频课程第一季：启程","      完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
   14,5),
    new kecheng(2,"http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",
    "CSS3基础","CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性。",
    14,5),
    new kecheng(3,"http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190",
    "HTML5基础"," HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API。",
    14,5),
    new kecheng(4,"http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190",
    "Selenium IDE WEB自动化测试入门视频课程（中）","上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。中篇和下篇会介绍很多技术细节。基本上中篇会把最常用到的技术细节都讲到。这样上篇和中篇的内容可以应付80%网站的自动化测试任务了。下篇有些高级话题，不是每个人都会用到的，适合骨灰级玩家。",
    14,5)
]

export class coursexiangxi{
    constructor(
        public id:number,
        public url:string, 
        public title:string,
    ){}
}
const coursevideo=[
    new coursexiangxi(1,"http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4",
"课程说明(上)"),
new coursexiangxi(2,"http://usercontent.edu2act.cn/media/cs/17-02-20/LHoJVYvWRpBZZkrpLKNTbN.mp4",
"课程说明(下)"),
new coursexiangxi(3,"http://usercontent.edu2act.cn/media/cs/17-02-20/DdU4obu4z6p872WHroaP47.mp4",
"注册Github账户")
]
export class shequ{
    constructor(
        public img:string,
        public images:string, 
        public title:string,
        public jieshao:string,
        public author:string,
        public date:string,
        public look:number,
        public pinglun:number
    ){}
}
const shequ1=[
    new shequ("http://usercontent.edu2act.cn/media/userheader/18-04-28/MHsG2fvR989uTfkLRZxDCY.jpeg?imageView2/1/w/256/h/256",
"http://usercontent.edu2act.cn/media/ckeditor/upload2018/1020/ySftMWD6MCnGSFbdqZia4U.png",
" 链栈的表示及基本操作的实现",
"写了一点链栈的基本操作，第一次发文，如发现错误之处请大家及时指正。// 补充：链栈的基本操作 #include <stdio.h> #include <stdlib.h> typedef int ElemType; ",
"2-马增来 ·","2018-10-21 17:26",25,0),
new shequ("http://usercontent.edu2act.cn/media/userheader/18-03-11/H2v8Qhkq4DnS33dBbBYKMo.jpg?imageView2/1/w/256/h/256",
"http://usercontent.edu2act.cn/media/ckeditor/upload2018/1020/vsBhNsaAn8Zqd5RSPEVmVM.jpg",
" js数组",
"声明：数组声明的三种方式：1. var arr = new Array（）；(声明一个空数组对象)    arr[0]=abc;2. var arr = new Array（5）；（声明数组并初始化长度，注意数组的长",
"7-李建涛 ·","2018-10-21 11:27",17,0),
new shequ("http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256",
"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg",
" WEB开发（二）—— 函数","（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式 注： 不需要在函数声明的后面添加一",
"刘秀梅 ·","2018-10-11 15:10",10,0),
new shequ("http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256",
"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg",
" WEB开发（二）—— 函数","（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式 注： 不需要在函数声明的后面添加一",
"刘秀梅 ·","2018-10-11 15:10",10,0),
new shequ("http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256",
"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg",
" WEB开发（二）—— 函数","（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式 注： 不需要在函数声明的后面添加一",
"刘秀梅 ·","2018-10-11 15:10",10,0)
]

// app.get('/api',(req,res)=>{
//     res.json(courses);
// });
app.get('/api/courses',(req,res)=>{
    res.json(courses);
});
app.get('/api/courses/:id',(req,res)=>{
    // console.log(req.params)
    // res.json(courses.filter((ele)=>ele.id ==req.params.id));
    res.json(courses.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses);
})
app.get('/api/kecheng/:id',(req,res)=>{
    res.json(kechengs.find((ele)=>ele.id == req.params.id));
});
app.get('/api/kecheng',(req,res)=>{
    res.json(kechengs);
});
app.get('/api/coursexiangxi/:id',(req,res)=>{
    res.json(coursevideo.find((ele)=>ele.id == req.params.id));
});
app.get('/api/coursexiangxi',(req,res)=>{
    res.json(coursevideo);
});
app.get('/api/shequ',(req,res)=>{
    res.json(shequ1);
});
app.listen(8000);
