// patch(vnode, newVnode)
function updateChildren(vnode, newVnode) {
    var children = vnode.children || []
    var newChildren = newVnode.children || []

    // 遍历现有 children
    children.forEach(function (child, index) {
        var newChild = newChildren[index]
        if(newChild == null) {
            return
        }
        if(child.tag === newChild.tag) {
            // 两者 tag 一样
            updateChildren(child, newChild)
        }else {
            // 两者不相同
            replaceNode(child, newChild)
        }
    })
}