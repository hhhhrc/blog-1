const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

const serverHandle = (req, res) => {
    // 设置返回格式json
    res.setHeader('Content-type', 'application/json')

    //获取path
    const url = req.url
    req.path = url.split('?')[0]

    req.query = querystring.parse(url.split('?')[0])

    // 处理 Blog路由
    const blogData = handleBlogRouter(req, res)
    if (blogData) {
        res.end(
            JSON.stringify(blogData)
        )
        return
    }

    // 处理 User路由
    const userData = handleUserRouter(req, res)
    if (userData) {
        res.end(
            JSON.stringify(userData)
        )
        return
    }

    //未命中路由，返回404
    res.writeHead(404, { "Content-type": "text/plain" })
    res.write('404 not found\n')
    res.end()
}

module.exports = serverHandle

//process.env.NODE_ENV