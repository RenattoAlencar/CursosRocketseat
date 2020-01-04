var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

//Array com descrição dos Elementos
var todos = [
  'Fazer Café',
  'Estudar JS',
  'Acessar Rocketseat'
]
 var todos = JSON.parse (localStorage.getItem('list_todos')) || []
function renderTodos() {

  //Function que renderiza a Lista de Elementos
  listElement.innerHTML = ''
  //Pegando cada posição do Array igual no Foreach
  for (todo of todos) {
    //Criando a Lista de (li) e colocando dentro da (ul)
    var todoElement = document.createElement('li')
    listElement.appendChild(todoElement)
    //recebendo o texto 
    var todoText = document.createTextNode(todo)
    //passando o texo para a (li)
    todoElement.appendChild(todoText)

    //Criando o <a href> para referenciar um link vazio
    var linkElement = document.createElement('a')
    linkElement.setAttribute('href', '#')
    todoElement.appendChild(linkElement)

    //Criando o Link  Excluir 
    var linkText = document.createTextNode('Excluir')
    linkElement.appendChild(linkText)

    //pegando a posição para cada atributo do Objeto
    var pos = todos.indexOf(todo)
    //Chamando a Funcion Excluir
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')
  }

}
//Chamando a Function para renderizar a Pagina
renderTodos()

function addTodos() {
  //Pegando valor digiado no input
  var todoText = inputElement.value
  // add no Array o valor Digitado
  todos.push(todoText)
  inputElement.value = ''
  renderTodos()
  saveTodoStorage()
}
buttonElement.onclick = addTodos

function deleteTodo(pos) {
  todos.splice(pos, 1)
  renderTodos()
  saveTodoStorage()
}

function saveTodoStorage() {
  //LocalStorage não consegue grava Vetores ou Objetos para isso precisa converter para string
  localStorage.setItem('list_todos', JSON.stringify(todos))
}
