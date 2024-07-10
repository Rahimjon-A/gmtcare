import { IoIosStar } from 'react-icons/io';
import commentImg from '../../../public/icons/comment.svg';

const CommentsItem = ({ comment }) => {
  return (
    <div className="bg-white border border-[--border] rounded-[10px] p-[20px] ">
      <div className="flex justify-between pb-[20px] lg:pb-[25px] ">
        <div className="flex items-center gap-[15px]  ">
          <img
            src={commentImg}
            alt="image"
            className="w-[52px] h-[52px] lg:w-[64px] lg:h-[64px] "
          />
          <div>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">
              ООО Название компании
            </p>
            <p className="text-[12px] text-[--text] mb-[10px] ">Михаил Булич Андреевич, Директор</p>

            <span className="flex items-center gap-[3px] ">
              <IoIosStar className="text-yellow-500"></IoIosStar>
              <IoIosStar className="text-yellow-500"></IoIosStar>
              <IoIosStar className="text-yellow-500"></IoIosStar>
              <IoIosStar className="text-yellow-500"></IoIosStar>
              <IoIosStar className="text-slate-300"></IoIosStar>
            </span>
          </div>
        </div>
        <p className="text-[12px] hidden lg:block ">14.03.2023 </p>
      </div>
      <p className=" custom-text text-[--text] ">{comment.content}</p>
    </div>
  );
};

export default CommentsItem;
