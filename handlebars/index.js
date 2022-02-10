const express=require('express')
const exphbs=require('express-handlebars');
const port = 2000;

const app=express();

app.engine('handlebars',exphbs());
app.set('view engine', 'handlebars');

app.get('/',(req,res)=>{
    const person=[{
        name:"Eric",
        role:"developer"
    },
    {
        name:"Otis",
        role:"developer"
    },
    {
        name:"Maeve",
        role:"developer"
    }
]
    res.render('./about.handlebars',{person})
})

app.get('/contact',(req,res)=>{
    const users=['eric','otis','meave']
    res.render('./contact.handlebars',{users})
})

app.listen(port,()=>{
    console.log(`the server is listening on port ${port} `);
})