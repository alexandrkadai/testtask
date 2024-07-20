import React, { useContext, useRef } from 'react'
import { TaskContext } from '../store/task-context';
import { TaskContextType } from '../TYPES/TASK_TYPES';

type Props = {
    id: number,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
}
const EditTask:React.FC<Props> = ({id, setShowModal}) => {
    const titleForm = useRef<HTMLInputElement>(null);
    const descriptionForm = useRef<HTMLInputElement>(null);
    const fileForm = useRef<HTMLInputElement>(null);

        const { editTask } = useContext(TaskContext) as TaskContextType;

        const editTaskHandler = (e:React.FormEvent) => {
            e.preventDefault();
            let file:any = fileForm.current?.value!;
            editTask(id, titleForm.current?.value!, descriptionForm.current?.value!, file);
            setShowModal(false);
        }
  return (
    <div className="flex flex-col absolute z-1 top-120 w-[500px] h-[200px] bg-gray-50 rounded-md shadow-md shadow-blue-300 border-2 border-blue-600">
        <span className="text-2xl text-blue-600 font-bold ">Edit Task</span>
        <form className="flex flex-col justify-center items-center gap-3 rounded-md" onSubmit={(e) => editTaskHandler(e)}>
          <input type="text" placeholder="Task Name" ref={titleForm}/>
          <input type="text" placeholder="Task Description" ref={descriptionForm}/>
          <input type="file" accept="image/*, audio/*, video/*, .doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" placeholder="Task File" ref={fileForm} />
          <button className='bg-blue-600 text-white font-bold rounded-md p-2 absolute bottom-1 right-2'>Update</button>
          </form>
          <button className='absolute bottom-1 left-2 border-2 border-red-600 p-2 bg-red-600 text-white font-bold rounded-md' onClick={() => setShowModal(false)}>Cancel</button>
    </div>
  )
}

export default EditTask