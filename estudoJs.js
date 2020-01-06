var elementUl = document.querySelector('#app ul')
var elementInput = document.querySelector('#app input')
var elementButton = document.querySelector('#app button').addEventListener('click', addLista)

var lista = [
  'Java',
  'Spring',
  'PrimeFaces',
  'JavaScript',
  'Angular',
  'React Native',
  'NodeJs'
]
var lista = JSON.parse(localStorage.getItem('list_todos')) || []

function renderizar() {
  elementUl.innerHTML = ''

  for (novaLista of lista) {
    // Criando o Elemento e adicionando dentro da (ul)
    var createListElement = document.createElement('li')
    var addElementList = document.createTextNode(novaLista)
    elementUl.appendChild(createListElement)
    createListElement.appendChild(addElementList)

    var createLinkElement = document.createElement('a')
    createLinkElement.setAttribute('href', '#')
    createLinkElement.textContent = 'excluir'
    createListElement.appendChild(createLinkElement)
    lista.indexOf(novaLista)
    var posicaoList = lista.indexOf(novaLista)
    createLinkElement.setAttribute('onclick', 'deleteList(' + posicaoList + ')')

  }

}

renderizar()
function addLista() {
  var textoDigiado = elementInput.value
  if (textoDigiado === '') {
    alert('Campo Texto Obrigatorio')
  } else {
    lista.push(textoDigiado)
    elementInput.value = ''
    renderizar()
    saveTodoStorage()

  }

}

function deleteList(posicaoList) {
  lista.splice(posicaoList, 1)
  renderizar()
  saveTodoStorage()
}
function saveTodoStorage() {
  //LocalStorage não consegue grava Vetores ou Objetos para isso precisa converter para string
  localStorage.setItem('list_todos', JSON.stringify(lista))
}


