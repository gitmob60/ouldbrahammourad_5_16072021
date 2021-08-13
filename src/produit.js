const bodys = document.getElementsByTagName('body');
const body = bodys[0];
//-- 
console.log(body);
//-- 

const produit = {
    idProduit : ' ',
    nomProduit: ' ',
    prixProduit: 0
} 


let app = "<div id='app'><h1>Page produit Orinoco</h1></div>";
body.innerHTML = app;


let url = "http://localhost:3000/api/furniture";


let position = window.location.href.indexOf('=');
//
console.log("position : " + position)
//
if(position != -1) 
{
    var parametreUrl = window.location.href.substr(position +1);
    //
    console.log("valeur reference" + parametreUrl);
    //
}
let _id = parametreUrl;
//
    console.log("_id " + _id);
//

url += `/`;
url +=  parametreUrl;
//
console.log("url" + url);
//

 
fetch(url).then(response => 
    response.json().then((article) => {
        //-- 
        console.log("api article : " + article);
        console.log("retour api : " + article);
        console.log("nom article : " + article.name);
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
        
        produit.idProduit = article._id;
        produit.nomProduit = article.name;
        produit.prixProduit = article.price;
        
        console.log("produit : " + produit);

            
        blocArticle += '</div>';
        //-- 
        console.log(blocArticle);
        //--
        app += blocArticle;                      
 
        body.innerHTML = app; 
        
        const appElt = document.getElementById('app');
        // const body = document.querySelector("#app");
        
        console.log("App : " + appElt);
        
        const bouton = document.createElement('button');
        bouton.innerText = 'Ajouter au panier';
        bouton.setAttribute('href', 'panier.html');
        
        console.log("bouton : " + bouton);
        
        appElt.appendChild(bouton);
        
        console.log(localStorage)



        function handleClickAddToCart(event) {
            event.preventDefault();
            const panier = createCart();
            writeInLocalStorage(panier);
            location.replace('panier.html');
        }
        
        function createCart() {
          let panier;
          if (localStorage.getItem("panier")) {
            panier = JSON.parse(localStorage.getItem("panier"));
            console.log("panier : " + panier);
          } else {
            panier = {
              nbProduits: 0,
              produits: [],
              prixTotal: 0,
            };
          }
          return panier;
        }
        
        function writeInLocalStorage(panier) {
            panier.nbProduits++;
            panier.produits.push(produit);
            panier.prixTotal += produit.prixProduit;
            localStorage.setItem("panier", JSON.stringify(panier));
        }
        
        bouton.addEventListener('click', handleClickAddToCart);
     
    })
);





