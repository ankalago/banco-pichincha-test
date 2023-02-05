import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 1em;
`;

const Content = styled.section`
  padding: 2em 1em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1em;
  row-gap: 2em;

  .search {
    grid-column: span 3;
    @media (min-width: 768px) {
      grid-column: span 1;
    }
  }

  .add {
    grid-column-start: 4;
    grid-column-end: 6;
    @media (min-width: 768px) {
      grid-column-start: 5;
    }
  }
`

const Table = styled.div`
  grid-column: span 5;
  margin-top: 1em;
  width: 100%;
  text-indent: 0;
  overflow-x: scroll;
  
  table {
    width: 100%;
  }

  th, td {
    display: table-cell;
    padding: 0 1rem 0.75rem 2rem;
    border-color: #e5e7eb;
    border-style: solid;
    border-bottom-width: 1px;
    font-size: 14px;
  }

  th {
    font-weight: 500;
  }

  td {
    padding-top: 1em;
    font-weight: 300;
  }
`

const Form = styled.div`
  grid-column: span 5;
  border: 4px #e5e7eb dashed;
  padding: 1.5em;
  border-radius: 0.5rem;
`

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
  Title,
  Content,
  Grid,
  Table,
  Form,
  TitleForm,
  ButtonsForm,
  GridForm,
  ItemForm
}
