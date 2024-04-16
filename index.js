import http from 'http';
import fs from 'fs';



const index = fs.readFileSync('index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))

const products = data.products;




const server = http.createServer((req, res) => {
    if (req.url.startsWith('/product')) {
        const id = req.url.split('/')[2]
        const prd = products.find(p => p.id === (+id))
        res.setHeader('Content-Type', 'text/html')
        let ModifiedIndex = index.replace('**title**', prd.title).replace('**url**', prd.thumbnail)
        console.log(prd);
        res.end(ModifiedIndex)
        return;
    }
    switch (req.url) {
        case '/':
            res.setHeader('Content-Type', 'text/html')
            res.end(index)
            break;
        case '/data':
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(data))
            break;
        default:
            res.writeHead(404, "Page not found")
            res.end()
            break;
    }
    console.log("Server started on port 8080");
    console.log(req.url);

})

server.listen(8080)