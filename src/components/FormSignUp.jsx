import { useState, useEffect } from "react"
import {
  Button,
  TextField,
  Switch,
  FormGroup,
  FormControlLabel
} from "@mui/material"

function FormSignUp() {
  const [name, setName] = useState("")
  useEffect(() => {}, [name])

  return (
    <form>
      <TextField
        id="name"
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => {
          console.log(e.target.value)
          setName(e.target.value)
        }}
        value={name}
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
