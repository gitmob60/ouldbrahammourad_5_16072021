let body = document.getElementsByTagName('body');
body = body[0];
//-- 
console.log(body);
//-- 

app = "<div id='app'><h1>Vente d'articles de collection</h1></div>";
body.innerHTML = app;


let url = "http://localhost:3000/api/furniture";

fetch(url).then(response => 
    response.json().then((data) => {
        
        
        //-- 
        console.log(data);
        //-- 
  
        for (let article of data) {
            let referenceProduit = article._id;
            let urlProduit = `http://localhost:8080/produit.html`; 
            urlProduit +=  `?reference=`; 
            urlProduit += referenceProduit;  
             //-- 
             console.log(urlProduit);
            //--                    
            let blocArticle = `<a class="lienProduit" href=${urlProduit}><div class="blocArticle">`;
            blocArticle += `<p>nom : ${article.name}</p>`; 
            blocArticle += `<p>prix : ${article.price}</p>`;  
            blocArticle += `<p>description : ${article.description}</p>`; 
            blocArticle += `<p>référence : ${article._id}</p>`;
            let blocOptions = '<p>coloris : ';
            let options = article.varnish; 
            for (let option of options) { 
                blocOptions += option + '  ';
            }
            blocOptions += '</p>' 
            blocArticle += blocOptions;                   
            blocArticle += `<p><img src="${article.imageUrl}" alt="photo article"></p>`;             
                
            blocArticle += '</div></a>';
            //-- 
            console.log(blocArticle);
            //--
            app += blocArticle; 
            
        }
        body.innerHTML = app; 
     
    })
);