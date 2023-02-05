import styled from 'styled-components';

const TitleLayout = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 1em;
`;

const ContentLayout = styled.section`
  padding: 2em 1em;
`;

const GridLayout = styled.div`
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

const TableLayout = styled.div`
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

const FormLayout = styled.div`
  grid-column: span 5;
  border: 4px #e5e7eb dashed;
  padding: 1.5em;
  border-radius: 0.5rem;
`

export {
  TitleLayout,
  ContentLayout,
  GridLayout,
  TableLayout,
  FormLayout,
}
