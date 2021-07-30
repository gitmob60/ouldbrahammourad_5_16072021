const bodys = document.getElementsByTagName('body');
const body = bodys[0];
//-- 
console.log(body);
//-- 

let app = "<div id='app'><h1>Page produit Orinoco</h1></div>";
body.innerHTML = app;


let url = "http://localhost:3000/api/furniture";


let position = window.location.href.indexOf('=');
//
alert("position : " + position)
//
if(position != -1) 
{
    var parametreUrl = window.location.href.substr(position +1);
    //
    alert("valeur reference" + parametreUrl);
    //
}
let _id = parametreUrl;
//
    alert("_id " + _id);
//

url += `?_id=`;
url +=  parametreUrl;
//

//

 
fetch(url).then(response => 
    response.json().then((article) => {
        //-- 
        console.log("api article : " + article);
        alert("retour api : " + article);
        alert("nom article : " + article.name);
        //-- 
     
        let blocArticle = '<div class="blocArticle">';
        blocArticle += `<p>nom : ${article.name}</p>`; 
        blocArticle += `<p>prix : ${article.price}</p>`;  
        blocArticle += `<p>description : ${article.description}</p>`; 
        blocArticle += `<p>référence : ${article._id}</p>`;
        let blocOptions = '<p>coloris : ';
        let option = article.varnish; 
        blocOptions += option + '  </p>';
        blocArticle += blocOptions;                   
        blocArticle += `<p><img src="${article.imageUrl}" alt="photo orinoco"></p>`;             
            
        blocArticle += '</div>';
        //-- 
        console.log(blocArticle);
        //--
        app += blocArticle;                      
 
        body.innerHTML = app; 
     
    })
);