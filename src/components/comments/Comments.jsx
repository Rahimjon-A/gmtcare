import React, { useState } from 'react';
import Footer from '../home/Footer';
import Map from '../home/Map';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import CommentsItem from './CommentsItem';
import { comments } from '../../library/content';
import { Pagination, Stack } from '@mui/material';

const Comments = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6; // Number of comments per page

  // Calculate the start and end indices for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the comments for the current page
  const currentItems = comments.slice(startIndex, endIndex);

  const handleChangePage = (event, value) => {
    console.log(`Page changed to: ${value}`);
    setPage(value);
  };

  // Total number of pages
  const totalPages = Math.ceil(comments.length / itemsPerPage);

  return (
    <>
      <div className="container flex pt-[20px] gap-2 custom-text">
        <Link to={'/'}>
          <span className="text-[--text] cursor-pointer flex items-center gap-2">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px]" />
          </span>
        </Link>
        <span className="text-[--second] font-medium cursor-pointer flex items-center gap-2">
          Отзывы
        </span>
      </div>

      <div className="container custom-margin mt-[40px] md:mt-[50px] lg:mt-[100px]">
        <p className="custom-title mb-[20px] lg:mb-[40px]">Отзывы</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
          {currentItems.map((comment) => (
            <CommentsItem key={comment.id} comment={comment} />
          ))}
        </div>

        <div className="flex mt-[30px] justify-center">
          <Stack spacing={2}>
            <Pagination
              showFirstButton
              showLastButton
              count={totalPages}
              page={page}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
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
      </div>
      <Map />
      <Footer />
    </>
  );
};

export default Comments;
