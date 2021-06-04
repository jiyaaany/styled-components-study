import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import Button from './components/Button';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color};
  border-radius: 50%;
  ${props => 
    props.huge && 
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595',
};

function App() {
  return (
    <ThemeProvider 
      theme={{
        palette
      }}
    >
      <AppBlock>
        
        <h3>Circle Color, Huge</h3>
        <Circle color="blue" />
        <Circle color="blue" huge />
        
        <h3>Button Size, Color</h3>
        <ButtonGroup>
          <Button size="large">BUTTON</Button>
          <Button>BUTTON</Button>
          <Button size="small">BUTTON</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button color="gray" size="large">BUTTON</Button>
          <Button color="gray">BUTTON</Button>
          <Button color="gray" size="small">BUTTON</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button color="pink" size="large">BUTTON</Button>
          <Button color="pink">BUTTON</Button>
          <Button color="pink" size="small">BUTTON</Button>
        </ButtonGroup>

        <h3>Button OutLine</h3>
        <ButtonGroup>
          <Button size="large" outline>BUTTON</Button>
          <Button outline>BUTTON</Button>
          <Button size="small" outline>BUTTON</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button color="gray" size="large" outline>BUTTON</Button>
          <Button color="gray" outline>BUTTON</Button>
          <Button color="gray" size="small" outline>BUTTON</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button color="pink" size="large" outline>BUTTON</Button>
          <Button color="pink" outline>BUTTON</Button>
          <Button color="pink" size="small" outline>BUTTON</Button>
        </ButtonGroup>

        <h3>Button FullWidth</h3>
        <ButtonGroup>
          <Button size="large" fullWidth>BUTTON</Button>
          <Button color="gray" size="large" fullWidth>BUTTON</Button>
          <Button color="pink" size="large" fullWidth>BUTTON</Button>
        </ButtonGroup>

      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
