import './App.css'

function Item({nome, temSobrenome}){
  if(temSobrenome) {
    return <li className='item'>{nome} -- ok</li>
}
return <li className="item">{nome}</li>
// return null;

// uma outra opção de fazer o código todo do function
// return(
// <li className='item'>
// {temSobr4enome ? nome + '-- ok' : nome}
// </li>
// );
}

function App() {

  return (
    <>
      <section>
      <h1>Ana Laura's Lista de sobrenomes</h1>
        <Item 
        temSobrenome={true}
        nome ="Ana Laura"
        />
        <Item 
        temSobrenome={false}
        nome ="Ana Laura"
        />
      </section>
    </>
  )
}

export default App
