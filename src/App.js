import "./App.css"
import { Container, Typography } from "@mui/material"
import FormSignUp from "./components/FormSignUp.jsx"

function App() {
  return (
    //Eliminar el "div", porque react permite tener un solo elemento padre (Fragment)
    //La etiqueta vacía permite trabajar con diferentes estilos css
    <Container component="section" maxWidth="sm">
      <Typography variant="h4" align="center" component="h1">
        Formulario de registro
      </Typography>

      <FormSignUp />
    </Container>
  )
}

export default App
