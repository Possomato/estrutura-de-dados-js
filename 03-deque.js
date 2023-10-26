/* 
deque: estrutura de dados lineares, entrada no iníco e sáida no final, com uma combinação de dados de filas e pilhas

final da pilha: base/cauda
início da pilha: base/cauda

principais operações:
  - insertFront: insere um novo elemento na frente
  - insertLast: insere um novo elemento na cauda
  - deleteFront: remove o primeiro elemento
  - deleteLast: remove o último elemento
  - front: retorna o primeiro elemento
  - rear: retorna o último elemento
  - isEmpty: verifica se a fila está vazia
  - isFull: verifica se a fila está cheia
*/

class Deque{
  itens = []

  insertFront(item){
    this.itens.unshift(item)
  }

  insertLast(item){
    this.itens.push(item)
  }

  deleteFront(){
    this.itens.shift()
  }

  deleteLast(){
    this.itens.pop()
  }

  front(){
    return this.itens[0]
  }

  rear(){
    const lastIndex = this.itens.length -1
    return this.itens[lastIndex]
  }

  isFull(){
    if(this.itens[0]){
      return true
    } else{
      return false
    }
  }

  isEmpty(){
    if(this.itens[0]){
      return false
    } else{
      return true
    }
  }
}

const deque = new Deque()

deque.insertLast('teste')
deque.insertLast('teste2')
deque.insertLast('teste2')
deque.insertLast('teste2')
deque.insertFront('teste0')
deque.deleteFront()
deque.deleteLast()
console.log(deque.itens)
console.log(deque.rear())
