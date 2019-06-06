function createElement(vnode) {
    var tag = vnode.tag
    var attrs = vnode.attrs || {}
    var children = vnode.children || []
    if(!tag) {
        return null
    }
    // 创建元素
    var elem = document.createElement(tag)
    // 属性
    var attrName
    for(attrName in attrs) {
        if(attrs.hasOwnProperty(attrName)) {
            elem.setAttribute(attrName, attrs[attrName])
        }
    }
    // 子元素
    children.forEach(function(childVnode) {
        // 递归调用 createElement 创建子元素
        elem.appendChild(createElement(childVnode))
    })
    // 返回真实的dom元素
    return elem
}

var vnode = {
    tag: 'ul',
    attrs: { id: 'list'},
    children: [
        {
            tag: 'li',
            attrs: {className: 'item'},
            children: ['Item 1']
        },{
            tag: 'li',
            attrs: {className: 'item'},
            children: ['Item 2']
        },
    ]
}
//  转换为如下dom节点
{/* <ul id="list">
    <li class="item">Item 1</li>
    <li class="item">Item 2</li>
</ul> */}