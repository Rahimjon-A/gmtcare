import Footer from '../home/Footer';
import Map from '../home/Map';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import CommentsItem from './CommentsItem';
import { comments } from '../../library/content';
import PaginationComponent from '../../ui/Pagination';

const Comments = () => {
  const itemsPerPage = 6;

  const renderComments = (currentItems) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
      {currentItems.map((comment) => (
        <CommentsItem key={comment.id} comment={comment} />
      ))}
    </div>
  );

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

        <PaginationComponent
          items={comments}
          itemsPerPage={itemsPerPage}
          renderItems={renderComments}
        />
      </div>
      <Map />
      <Footer />
    </>
  );
};

export default Comments;
