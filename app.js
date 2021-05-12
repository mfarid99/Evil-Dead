// document.querySelector('.title').addEventListener('click', function (e) {
//   console.log('Hello World')
//   e.preventDefault()
// })

// document.querySelector('.evildead').addEventListener('click', onClick)
// function onClick(e) {
//   console.log('clickedd')
// }

var scaryImage = document.querySelector('.evildead')

scaryImage.addEventListener('click', function (scaryImage) {
  scaryImage.target.toggle('.scurred')
})
