import styled from 'styled-components';

const TitleForm = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-weight: 500;
`

const GridForm = styled.div`
  display: grid;
  column-gap: 1em;
  row-gap: 2em;
  padding: 1em 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ItemForm = styled.div<{ cols?: number, span?: number }>`
  display: grid;
  gap: 0.5em;
  align-items: center;
  grid-column: span ${({ span = 1 }) => span};
  justify-content: center;
  
  @media (min-width: 400px) {
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    gap: 1em;

    label {
      grid-column: span 1;
    }

    div {
      grid-column: span 2;
    }
  }
`

const ButtonsForm = styled.div`
  grid-column: span 1;
  display: flex;
  gap: 1em;
  justify-content: center;

  @media (min-width: 768px) {
    grid-column: span 2;
    grid-template-columns: repeat(2, 1fr);
  }
`

export {
  TitleForm,
  ButtonsForm,
  GridForm,
  ItemForm
}
