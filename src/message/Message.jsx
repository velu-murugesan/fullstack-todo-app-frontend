import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const Message = ({ text, updateMode, deleteTodo }) => {
  return (
    <div className='inner-text'>
      <p className=' '>
        <span className='span-1'>
          <p>{text}</p>
        </span>
        <span className='span-2'>
          <BiEdit size={30} onClick={updateMode} className='react-btn1' />
          <AiFillDelete size={30} onClick={deleteTodo} className='react-btn2' />
        </span>
      </p>
    </div>
  );
};

export default Message;
