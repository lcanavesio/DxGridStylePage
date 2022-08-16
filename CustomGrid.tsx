import { useState } from "react";
import { pagingPanelMessages } from "./utils/dxgrid/messages";
import { PagingPanel } from "./utils/dxgrid/plugins/paging-panel";
import { CustomPaging, PagingState } from "@devexpress/dx-react-grid";
import { Grid, Table } from "@devexpress/dx-react-grid-material-ui";

// ***********************************************************
// PagingPanel -> Pagination component line 29 in activeButton this is the current page color
//
// PagingPanel - > Pager - >  Pagination

// ***********************************************************

type TProps = {
  currentPage: number;
  currentPageChangeHandler: (nroPagina: number) => void;
  currentPageSizeChangeHandler: (pageSize: number) => void;
};

const CustomGrid = (props: TProps) => {
  const {
    currentPage,
    currentPageChangeHandler,
    currentPageSizeChangeHandler,
  } = props;
  const [pageSizes] = useState([5, 10, 20]);
  const rows = [];
  const total = 100;

  return (
    <>
      <Grid
        rows={rows}
        columns={[{ name: "test", title: "test test" }]}
        getRowId={getRowId}
      >
        <PagingState
          currentPage={currentPage}
          pageSize={20}
          onCurrentPageChange={currentPageChangeHandler}
          onPageSizeChange={currentPageSizeChangeHandler}
        />
        <CustomPaging totalCount={total} />
        <Table messages={{ noData: "No data" }} />
        <PagingPanel pageSizes={pageSizes} messages={pagingPanelMessages} />
      </Grid>
    </>
  );
};

const getRowId = (row) => row.id;

export default CustomGrid;
