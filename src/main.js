const userForm = document.getElementById('user_form')
const scoreinput = document.getElementById('score')
const userURL = `http://localhost:3000/users`

userForm.addEventListener('submit', createUser)

function fetchData() {
  fetch(userURL)
    .then(res => res.json())
    .then((data) => {
      data.sort(function(a, b) {return b.score - a.score})
      let topTen = data.slice(0, 10)
      topTen.forEach(user => {
        let userscores = `<h3>${user.username} - ${user.score}</h3>`
        document.getElementById('topusers').innerHTML += userscores
      })
    })
}


function addUser(username, score) {
  fetch(userURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'username': username,
      'score': score
    })
  })
    .then(res => res.json())
    .then(data => localStorage.setItem('user_id', data.id))
}

function createUser(ev) {
  ev.preventDefault()
  document.getElementById('form').style.display = "none"
  document.getElementById('users').style.display = ""
  let username = ev.target[0].value
  addUser(username, 0)
  fetchData()
  let game = new Phaser.Game(config)
}

import GameScene from './game.js'
import TitleScene from './title.js'

let config = {
  type: Phaser.WEBGL,
  width: 800,
  height: 600,
  parent: 'canvas',
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 1000
      },
      debug: false
    }
  },
  scene: [
    TitleScene,
    GameScene
  ]
}
