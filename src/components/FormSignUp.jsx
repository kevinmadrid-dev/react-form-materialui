import Button from "@mui/material/Button"

function FormSignUp() {
  return (
    <form>
      <label>Nombres</label>
      <input type="text" />

      <label>Apellidos</label>
      <input type="text" />

      <label>Correo electrónico</label>
      <input type="email" />

      <label>Promociones</label>
      <input type="checkbox" />

      <label>Novedades</label>
      <input type="checkbox" />

      <Button variant="contained">Registrar</Button>
    </form>
  )
}

export default FormSignUp
