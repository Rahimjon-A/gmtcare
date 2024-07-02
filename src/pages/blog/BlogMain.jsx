import React from 'react';
import CatalogTitle from '../../components/CatalogTitle';
import CategoryList from '../../components/CategoryList';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { blogmain } from '../../library/content';
import BlogArticle from '../../components/blogItems/BlogArticle';
import PaginationComponent from '../../ui/Pagination';
import Mail from '../../components/home/Mail';
import Footer from '../../components/home/Footer';

const BlogMain = () => {
  const itemsPerPage = 3;

  const renderBlog = (currentItems) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[10px] ">
      {currentItems.map((blog) => (
        <BlogArticle key={blog.id} blog={blog} />
      ))}
    </div>
  );

  return (
    <>
      <div className=" container flex pt-[20px] gap-2 custom-text ">
        <Link to={'/'}>
          <span className="text-[--text] cursor-pointer  flex items-center gap-2 ">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>
        <Link>
          <span className="text-[--second] font-medium cursor-pointer  flex items-center gap-2 ">
            Блог
          </span>
        </Link>
      </div>

      <p className=" custom-title container mt-[100px] hidden lg:block ">Блог</p>

      <CatalogTitle text={'Блог'} />
      <div className="container grid lg:grid-cols-[1fr_3fr] md:pt-[25px] grid-cols-1 gap-[10px] custom-margin ">
        <CategoryList />

        <div className='flex flex-col'>
        <PaginationComponent
        items={blogmain}
        itemsPerPage={itemsPerPage}
        renderItems={renderBlog}
        />
        </div>
      </div>
      <Mail/>
      <Footer/>
    </>
  );
};

export default BlogMain;
