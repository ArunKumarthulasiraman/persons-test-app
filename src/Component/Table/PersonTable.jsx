import React from "react";
import { DataGrid, useGridApiContext, useGridState } from "@mui/x-data-grid";
import { row } from "./Row";
import Pagination from "@mui/material/Pagination";
import styled from "styled-components";

function CustomPagination() {
  const apiRef = useGridApiContext();
  const [state] = useGridState(apiRef);

  return (
    <Pagination
      color="primary"
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "person_name", headerName: "Person Name", width: 120 },
  {
    field: "person_phone",
    headerName: "Phone",
    width: 150,
  },
  { field: "address_line", headerName: "Address Line", width: 270 },
  {
    field: "address_end_date",
    headerName: "End Date",
    type: "date",
    width: 150,
  },
  { field: "street", headerName: "Street", width: 180 },
  { field: "city", headerName: "City", width: 180 },
  { field: "state", headerName: "AddressLine", width: 200,}
];

function PersonTable() {
  return (
    <>
      <TableHeader>
        <h2>Person Details</h2>
      </TableHeader>
      <div style={{ height: "92vh", width: "100%" }}>
        <GridTable
          rows={row}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          ColumnFilteredIcon
          components={{
            Pagination: CustomPagination,
          }}
        />
      </div>
    </>
  );
}
export default PersonTable;

const GridTable = styled(DataGrid)`
.MuiDataGrid-columnHeaders{
  background-color: blue;
}
  .MuiDataGrid-columnHeadersInner {
    width: 100%;
    color: white;
    background-color: blue;
    .MuiDataGrid-root {
      color: blue;
    }
  }
  .MuiSvgIcon-root {
    color: white;
  }
  .MuiPaginationItem-icon {
    color: black;
  }
  .MuiDataGrid-row{
    width: 100%;
    display:flex;
    justify-content:space-evenly;
  }

`;

const TableHeader = styled.div`
  color: white;
  background-color: blue;
  padding: 10px 0px;
`;

