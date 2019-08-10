import React from 'react'
import styled from 'styled-components'

function Container({children}) {
  return (
      <Main>
        <Content>{children}</Content>
      </Main>
  )
}

const Main = styled.main`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  
`;

const Content = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
`

export default Container
