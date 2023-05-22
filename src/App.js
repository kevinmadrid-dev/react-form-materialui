import "./App.css"
import FormSignUp from "./components/FormSignUp.jsx"

function App() {
  return (
    //Eliminar el "div", porque react permite tener un solo elemento padre (Fragment)
    //La etiqueta vacía permite trabajar con diferentes estilos css
    <>
      <FormSignUp />
    </>
  )
}

export default App
