var boulons = parseInt(prompt("Combien de boulon veut-tu?"))
var ecrous = parseInt(prompt("Combien de ecrous veut-tu?"))
var rondelles = parseInt(prompt("Combien de rondelles veut-tu?"))
 
if ((boulons===ecrous) && (ecrous===rondelles)){
  var prixT = boulons*0.09*1.13
    console.log("Total: " + prixT.toFixed(2) + "$")
} else {
  console.log("Tu as besoin de la meme nombre de tout les item")
}
