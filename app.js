// document.querySelector('.title').addEventListener('click', function (e) {
//   console.log('Hello World')
//   e.preventDefault()
// })

// document.querySelector('.evildead').addEventListener('click', onClick)
// function onClick(e) {
//   console.log('clickedd')
// }

// function myFunction() {
//   var scaryImage = document.querySelector('.evildead')
//   scaryImage.classList.toggle('.scurred')
// }

// var scaryImage = document.querySelector('.evildead')

// scaryImage.addEventListener('click', function (scaryImage) {
//   scaryImage.target.classList.toggle('.scurred')
//   console.log('clicked')
// })

// function myFunction() {
//   var scaryImage = document.querySelector('.evildead')
//   scaryImage.src =
//     'https://img.discogs.com/J1GELHH2a2R1bjXFgFSohs0UYX4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-564493-1355684645-1963.jpeg.jpg'
//   var scaryImageSrc = scaryImage.src

//   var scurredImage = document.querySelector('.scurred')
//   scurredImage.src =
//     'https://pbs.twimg.com/profile_images/466318196115390464/XmTdQBb5_400x400.jpeg'
//   var scurredImageSrc = scurredImage.src

//   scaryImageSrc.remove(scurredImageSrc)
//   console.log('clicked')
// }

var light = document.getElementById('mainImage')

light.addEventListener('click', function (light) {
  light.target.classList.toggle('evildead2')
})
