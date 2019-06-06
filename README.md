## diff 是一个很古老的linux命令
可以使用 diff ./diff/log1.txt ./diff/log2.txt 来查看两个文件的diff对比结果  

## git diff
Git中也包含diff算法，可以使用 git diff ./index.html 来查看Git的变更记录  

## snabbdom库
snabbdom： 一个virtual dom的库，vue2.0接入了snabbdom的做法。    
h(标签， {事件：{ }, style: { } },  content )  和 第一次渲染patch(容器， 虚拟dom节点) / 更新后 patch(旧的虚拟dom节点， 新的虚拟dom节点) 函数   

引入snabbdom.js  snabbdom-class.js  snabbdom-props.js  snabbdom-style.js  snabbdom-eventlistener.js   h.js     