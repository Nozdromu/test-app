const express=require('express')
const path=require('path')
const {exec} =require('child_process')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(express.static(path.join(__dirname,'build')))
const port=3001

var publicIP='';
exec('curl ip-adresim.app', function(error, stdout, stderr){
    if(error)
        return;
    publicIP=stdout
    console.log('your ip is :'+ stdout);
})
 
app.get('/ip',(req,res)=>{
    console.log('call')
    console.log(publicIP)
    res.send(publicIP);
})

app.get('/',(req,res)=>{
    res.sendFile('index.html')
})
app.listen(port,()=>{
    console.log('start listen on port '+port)
})