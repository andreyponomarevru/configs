// Fetch data from the php Api, from the client side

const url = 'http://localhost:8000/api'
const $clientList = document.getElementById('client-list')
const createNode = element => document.createElement(element)
const append = (parent, el) => parent.appendChild(el)
const htmlListCreate = json => {
  const ul = createNode('ul')
  json.map(entry => {
    let li = createNode('li')
    let img = createNode('img')
    let span = createNode('span')
    img.src = entry.img
    span.innerHTML = entry.name + ': ' + entry.value
    append(li, img)
    append(li, span)
    append(ul, li)
  })
  return ul
}
fetch(url)
  .then(data => data.json())
  .then(json => {
    console.log(json)
    append($clientList, htmlListCreate(json))
  })
  .catch(error => console.log(error))
