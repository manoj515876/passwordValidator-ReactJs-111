import {useState} from 'react'
import {Heading, Container, Para, InputText} from './styledComponents'

const PasswordValidator = () => {
  const [passLen, setPassLen] = useState(false)
  const [value, setter] = useState('')
  const onChangePass = event => {
    if (event.target.value.length >= 8) {
      setPassLen(true)
      setter(event.target.value)
    } else {
      setPassLen(false)
      setter(event.target.value)
    }
  }
  return (
    <Container outline>
      <Container>
        <Heading>Password Validator</Heading>
        <Para outline>Check how strong and secure is your password</Para>
        <InputText type="password" onChange={onChangePass} />
        {!passLen ? (
          <Para>Your password must be at least 8 characters</Para>
        ) : null}
      </Container>
    </Container>
  )
}

export default PasswordValidator
