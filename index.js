import fs from 'fs';
import express from 'express';


const index = fs.readFileSync('index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const products = data.products;



const app = express();

app.use((req,res,next)=>{
    console.log(req.method, req.ip, req.hostname,new Date() , req.get('User-Agent'));
    next()
});




const auth = ((req,res,next)=>{
    console.log("Inside Auth");
    console.log(req.query);
    if(req.query.password == 12345){}
    else{
        res.sendStatus(401);
    }
    next()
});


//Auth middleware will be used on all paths
//app.use(auth)


// API -- End Point 

//If we pass auth here
app.get('/',auth, (req, res) => {
    console.log("Get Called");
    res.json({type:"GET"})
})
app.post('/',auth, (req, res) => {
    res.json({type:"POST Successfull"})
})
app.put('/', (req, res) => {
    res.json({type:"PUT"})
})
app.delete('/', (req, res) => {
    res.json({type:"DELETE"})
})
app.patch('/', (req, res) => {
    res.json({type:"PATCH"})
})








app.get('/demo', (req, res) => {
    // res.send("<h1>Hello</h1>");
    // res.json(data)
    // res.sendFile('D:/PROJECTS/Learn-NodeJs/index.html')
})





app.listen(8080, () =>{
    console.log('Server is listening on port 8080');
})