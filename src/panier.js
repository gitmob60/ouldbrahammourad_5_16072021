// JavaScript Document

const panier = JSON.parse(localStorage.getItem("panier"));
console.log("panier : " + panier);

const app = document.querySelector('#app');

console.log("app : " + app);

const titre = document.createElement('h1');
titre.innerText = " Votre panier Orinoco"
app.appendChild(titre);

for (let i = panier.produits.length; i--; ) {
  const produit = panier.produits[i];
  const productElt = document.createElement('div');
  // const productName = document.createElement('div');
  // const productPrice = document.createElement('div');
  const deleteFromLocalStorage = document.createElement('a');
  // productName.innerText = "article : " + produit.nomProduit;
  // productPrice.innerText = "prix unitaire " + produit.prixProduit;
  const ligneArticle = document.createElement('p');
  ligneArticle.innerText = "article : " + produit.nomProduit + ",    prix unitaire : " + produit.prixProduit;
        // deleteFromLocalStorage.innerText = 'Supprimer la ligne du panier';
        // deleteFromLocalStorage.addEventListener('click', deleteProduct)
  // productElt.appendChild(productName);
  // productElt.appendChild(productPrice);
  productElt.appendChild(ligneArticle);
  productElt.appendChild(deleteFromLocalStorage);
  app.appendChild(productElt);
}

function deleteProduct() {
    //gérer la suppression d'un produit, non obligatoire
    //  possibilité plusieurs lignes avec le meme id ==> déduire et supprimer via indice i et regénérer la local storage
    console.log(1)
}

const totalPrice = document.createElement('div');
totalPrice.innerText = "prix total : " + panier.prixTotal;
totalPrice.style.color = 'blue';
app.appendChild(totalPrice);


function handleClickRetour(event) {
            event.preventDefault();
            location.replace('index.html');
        }


const lienRetour = document.createElement('button');
lienRetour.innerText = 'poursuivre vos achats';
app.appendChild(lienRetour);
lienRetour.addEventListener('click', handleClickRetour);


// <div><input type="text" id="name" placeholder="Nom" /></div>

const saisie = document.createElement('form');

const nom = document.createElement('input');
nom.placeholder = 'Nom : ';
nom.type = 'text';
saisie.appendChild(nom);

const prenom = document.createElement('input');
prenom.placeholder = 'Prénom : ';
prenom.type = 'text';
saisie.appendChild(prenom);

const email = document.createElement('input');
email.placeholder = 'Mel : ';
email.type = 'email';
saisie.appendChild(email);


app.appendChild(saisie);










 