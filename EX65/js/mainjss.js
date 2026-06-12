function load_data(nodes, nodeList)
{
    for (i=0;i<nodes.length;i++)
    {
        node=nodes[i]
        li=create_li(node)
        nodeList.appendChild(li)
    }
}
function create_li(node){
    li=document.createElement('li')
    li.innerHTML=node
    return li
}
function refresh(){
    nodeList=document.getElementById("nodeList")
    nodeList.innerHTML=""
    load_data(nodes, nodeList)
}
function add_node(){
    content=document.getElementById("content").value
    position=document.getElementById("position").value
    nodes.splice(position-1, 0, content)
    refresh()
    document.getElementById("content").value=""
    document.getElementById("position").value=""
}
function delete_node(){
    position=document.getElementById("positionDel").value
    nodes.splice(position-1, 1)
    refresh()
    document.getElementById("positionDel").value=""
}
function modify_node(){
    position=document.getElementById("modifyPosition").value
    newContent=document.getElementById("newContent").value
    nodes[position-1]=newContent
    refresh()
    document.getElementById("newContent").value=""
    document.getElementById("modifyPosition").value=""
}
