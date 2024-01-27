'use strict'

const box = document.getElementById('box')
console.log(box)
// *.  1
const btns = document.getElementsByTagName('button')[1]
console.log(btns)
// *    2
const btns1 = document.getElementsByTagName('button')
console.log(btns1[1])

const circles = document.getElementsByClassName('circle')
console.log(circles)
const hearts = document.querySelectorAll('.heart')
console.log(hearts)

// ? ===== Conversion a pseudo_array to arr.  =================================
function ArrayFromPseudoObj(data) {
	let array = []
	//* 1. method
	// for (var i = 0; i < data.length; i++) {
	// 	array.push(data[i])
	// }

	//* 2. method
	// array = Array.from(data)

	//* 3. method
	array = [...data]

	//* 4. method
	// data.__proto__ = Array.prototype
	// return data

	// * 5. method
	// data = Array.prototype.map.call(data, v => 'Буква: ' + v)
	// return data

	return array
}
const arrayFromObj = ArrayFromPseudoObj(hearts)
console.log(arrayFromObj)
console.log('Array.isArray', Array.isArray(arrayFromObj))

// console.log(
// 	hearts.forEach((value, key) => {
// 		console.log('Value', value)
// 		console.log('Key', key)
// 	})
// )

//* finds first element
const oneHeart = document.querySelector('.heart')
console.log(oneHeart)

// var object = {0: 1, 1: 2, 2: 3, length: 3}

var object = circles
var array = []

// Преобразуем псевдомассив в массив
for (var i = 0; i < object.length; i++) {
	array.push(object[i])
}

// console.log(array) // [1, 2, 3]

// ? -------------------------------------------------====================
// const box2 = document.getElementById('box'),
// 	btns2 = document.getElementsByTagName('button'),
// 	circles2 = document.getElementsByClassName('circle'),
// 	hearts2 = document.querySelectorAll('.heart'),
// 	oneHeart2 = document.querySelector('.heart');

//* aded wrapper and change
const box2 = document.getElementById('box'),
	btns2 = document.getElementsByTagName('button'),
	circles2 = document.getElementsByClassName('circle'),
	wrapper = document.querySelector('.wrapper'),
	// hearts2 = document.querySelectorAll('.wrapper
	hearts2 = wrapper.querySelectorAll('.heart'),
	oneHeart2 = wrapper.querySelector('.heart')

console.dir(box2)
box2.style.backgroundColor = 'purple'
circles2[2].style.backgroundColor = 'red'
box2.style.width = '500px'
box2.style.cssText = ' background-color: gray;width: 500px'
btns2[1].style.borderRadius = '100%'

for (let i = 0; i < hearts2.length; i++) {
	// hearts2[i].style.backgroundColor = 'green'
	hearts2.forEach(item => {
		item.style.backgroundColor = 'blue'
	})
}
const div = document.createElement('div')
div.classList.add('black')
wrapper.append(div)
// wrapper.prepend(div)
// hearts2[1].before(div)
// hearts2[1].after(div)
// circles2[0].remove()
//hearts2[0].replaceWith(circles2[2])
//div.innerHTML = 'Hello World'
div.innerHTML = '<h1>Hello World</h1>'
// div.textContent = '<h1>Hello World</h1>'
div.insertAdjacentHTML('beforebegin', '<p>h. yykkb</p>')
console.log('ojhoihh8op9y')
