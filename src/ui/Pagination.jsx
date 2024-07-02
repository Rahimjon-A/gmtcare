import { useState } from 'react';
import { Pagination, Stack } from '@mui/material';

const PaginationComponent = ({ items, itemsPerPage, renderItems }) => {
  
  const [page, setPage] = useState(1);

  // Calculate the start and end indices for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the items for the current page
  const currentItems = items.slice(startIndex, endIndex);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  // Total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  
  return (
    <>
      <div>
        {renderItems(currentItems)}
      </div>

      <div className="flex mt-[30px] justify-center">
        <Stack spacing={2} direction="row" alignItems="center">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            variant="outlined"
            shape="rounded"
            showFirstButton
            showLastButton
            sx={{
              '& .MuiPaginationItem-root': {
                bgcolor: 'white',
                color: 'black',
                '&:hover': {
                  bgcolor: '#088269',
                  color: 'white',
                },
                '&.Mui-selected': {
                  bgcolor: '#088269',
                  color: 'white',
                },
              },
            }}
          />
        </Stack>
      </div>
    </>
  );
};

export default PaginationComponent;
