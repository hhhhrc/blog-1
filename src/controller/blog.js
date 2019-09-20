const getList = (authod, keyword) => {
    // 暂时返回假数据
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            creatTime: 1568969236149,
            author: '张三'
        }, {
            id: 1,
            title: '标题B',
            content: '内容B',
            creatTime: 1568969301648,
            author: '李四'
        }
    ]
}

const getDetail = (id) => {
    // 暂时返回假数据
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        creatTime: 1568969236149,
        author: '张三'
    }

}

module.exports = { getList, getDetail }