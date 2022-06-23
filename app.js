/**Como fazer o site alterar conteudo da view */
//1ºconfigurar area de trabalho//
const express = require('express')
const expressLayouts = require('express-ejs-layouts')//por padrão chama(render) (p)layouts-(a)layout.ejs, então configuro em 4º//  
const app = express()

//2ºArquivos estáticos (cria a relação das (p's) do public com a aplicação)
app.use(express.static('public'))//app usa o express.static para relacionar(fazer referencia) com public)//
app.use('/css', express.static(__dirname+'public/css'))//dir_name é o proprio app.js que entra na (p) public e acessar o (p)css//
app.use('/img', express.static(__dirname+'public/img'))
app.use('/js', express.static(__dirname+'public/js'))

//3ºTemplate engine(relação com views e layouts: é o modelo que irei usar)//
app.use(expressLayouts)//gera a integração com views//
app.set('view engine', 'ejs')//configurar set e especificar q são (a's)ejs//
app.set('layout','./layouts/layout')//4ºconfigurar para ao renderizar vir (a)layout.ejs(que está (p)views- (p)layouts) Acesso o HTML do meu site com (a)layout.ejs//
app.set('views',__dirname+'/views')


//Rotas
app.get('/',(req,res)=>{    
    //res.send('Servidor iniciado')//somente para testar se está funcionando//
    res.render('index',{ title: 'Pagina Inicial',section:'Pagina inicial',body:'teste '})// 5º index da views,(sem a extensão), com o render atraves do layout.ejs, no formato objeto(chave,valor)irá retornar conteúdo para o usuario(frase:Pagina Inicial), criei essa rota //
})
//6º rota produtos//
app.get('/produtos',(req,res)=>{
    //res.send('Servidor iniciado')//resposta dada ao usuario, foi teste//
    let grid = "Conteudo da pagina de produtos"
   /**index na (p)views*/// res.render('index',{title: 'Pagina de Produtos', section:'Produtos', body: 'conteudo', divContem: 'grid'})//
    /*res.render('produtos/index',{title: 'Pagina de Produtos'}) teste*/
   /**index na(p)produtos em views*/ res.render('index',{title: 'Pagina de Produtos', section:'Produtos', body: 'conteudo', divContem: 'grid'})   
})
 

app.listen(3000,console.log('Servidor iniciado'))
