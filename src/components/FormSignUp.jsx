import { useState } from "react"
import {
  Button,
  TextField,
  Switch,
  FormGroup,
  FormControlLabel
} from "@mui/material"

//{ handleSubmit } deestructurado desde el atributo
function FormSignUp({ handleSubmit }) {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [prom, setProm] = useState(true)
  const [nov, setNov] = useState(true)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit({ name, lastName, email, prom, nov })
      }}>
      <TextField
        id="name"
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <TextField
        id="last-name"
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />

      <TextField
        id="e-mail"
        label="E-mail"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <FormGroup>
        <FormControlLabel
          control={
            <Switch onChange={(e) => setProm(e.target.checked)} checked={prom} />
          }
          label="Promociones"
        />

        <FormControlLabel
          control={
            <Switch onChange={(e) => setNov(e.target.checked)} checked={nov} />
          }
          label="Novedades"
        />
      </FormGroup>

      <Button type="submit" variant="contained">
        Registrar
      </Button>
    </form>
  )
}

export default FormSignUp
