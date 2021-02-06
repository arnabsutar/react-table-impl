import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  overflow-x: auto;
`;

export const Paginator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const TableUtility = styled.div`
  font-family: "Manulife JH Sans", Helvetica, Arial, sans-serif;
  border-bottom: 4px solid #ededed;
  margin: 0 0 12px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
`;

export const Table = styled.table`
  font-family: "Manulife JH Sans", Helvetica, Arial, sans-serif;

  caption {
    text-align: left;
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
  }

  th {
    text-align: left;
    padding-left: 16px;
    border-bottom: 2px solid #ededed;
  }

  td {
    padding: 5px 16px 5px 16px;
    color: #34384b;
    border-bottom: 2px solid #ededed;
  }
`;

export const Select = styled.select`
  width: 144px;
  margin: 8px 0;
  padding: 12px;
  border: solid 1px #c2c3c9;
  background-color: #ffffff;
`;
