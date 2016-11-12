// new div
// var place = document.getElementById("addHere")
// var newDiv = document.createElement("div")
// place.appendChild(newDiv)

// put text in the div
// var text = document.createTextNode("poop a loop")
// place.appendChild(text)

// add a class to the div
// document.getElementById('div').classList.add("new class")
// newDiv.className = "newClass"

// add a img to the div
// var newImg = document.createElement('img')
// newImg.setAttribute('src', 'img/poop.jpg')
// place.appendChild(newImg)



// console.log("length " + pokemonArray.length)
// for(i = 0; i < pokemonArray.length; i++){
// console.log(pokemonArray[0] + "length " + pokemonArray[0].length + " characters")
// }

// var pokemonArray [12, "car", "two", "three", "pikachu"]
// for( var i = 0; i < pokemonArray.length; i++ ) {
// 	console.log(pokemonArray[i] + " is" + pokemonArray[i].length + " characters")
// }
// var num = 5
// var string = "hey"
// var bool = true
// var array = ["whats up", "hey","shhh"]
// var object = {
// 	name: "whatever"
// }

// console.log("reversed: " + pokemonArray.reverse())

// sort alphabetically
// console.log("sort alphdabetically: " + pokemonArray.sort())

// var numArray = [9, 33, 87, 140, 50]
// console.log("sort numerically " + numArray.sort( function(a, b){return a-b}))

// var stringValues = ["cool", "car", "poop", "pie", "pizza"]
// console.log("sort alphabetically " + stringValues.sort())

// var moreNumValues = [12312, 1234, 454574, 345345235, 29857398573844, 23948329847327]
// console.log("sorted numerically " + moreNumValues.sort(function(a, b){ return a-b}))

// pokemonArray.push("bulbasaur")
// pokemonArray.pop()
// console.log(pokemonArray)

var pokemonArray = ["pikachu", "squirtle", "charmander"]

function addPokemon(){
	var item = document.getElementById("addHere").value
	pokemonArray.push(item)
	console.log(pokemonArray)
}





