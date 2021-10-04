// Variables et Question
var Prenom = prompt("Quel est votre Prénom?")
var Milieu = prompt("Quel est votre nom de Milieu?")
var Famille = prompt("Quel est votre nom de Famille?")
var tblText = Prenom + Milieu + Famille
 
// Affichage de Noms
tblText.split(",") + console.log("Nom: " + Prenom+" " + Milieu+" "  + Famille+"!")
 
// Initial
var initial = ""
initial = initial+Prenom.charAt(0)
initial = initial+Milieu.charAt(0)
initial = initial+Famille.charAt(0)
console.log("Initials: " + initial)
 
// Nom d’utilisateur
var utili = ""
utili = utili+Prenom.charAt(0)
utili = utili+Milieu.charAt(0)
utili = utili+Famille
var utilimin = utili.toLowerCase();
console.log("Nom d’utilisateur: " + utilimin)
