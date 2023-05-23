import {
  Button,
  TextField,
  Switch,
  FormGroup,
  FormControlLabel
} from "@mui/material"

function FormSignUp() {
  return (
    <form>
      <TextField
        id="name"
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        id="last-name"
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        id="e-mail"
        label="E-mail"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Promociones" />
      </FormGroup>

      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Novedades" />
      </FormGroup>

      <Button variant="contained">Registrar</Button>
    </form>
  )
}

export default FormSignUp
