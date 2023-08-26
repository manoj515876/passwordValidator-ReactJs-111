import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.outline ? '#24263c' : '#383a4e')};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
`

export const Para = styled.p`
  color: ${props => (props.outline ? ' #ffffff' : '#ef4444')};
  font-family: 'Roboto';
`

export const InputText = styled.input`
  border: none;
  outline: none;
  padding: 10px;
`
