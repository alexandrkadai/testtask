import { useContext, useState, useRef } from 'react';
import { TaskContext } from '../store/task-context';
import { ITASK_TYPE, TaskContextType } from '../TYPES/TASK_TYPES';

const CreateTask = () => {
  const { saveTask } = useContext(TaskContext) as TaskContextType;
  const [formInf, setFormInf] = useState<ITASK_TYPE | {}>();
  
  const titleForm = useRef<HTMLInputElement>(null);
  const descriptionForm = useRef<HTMLInputElement>(null);
  const fileForm = useRef<HTMLInputElement>(null);

  const formHandler = (titleForm: string, descriptionForm:string, fileForm:File): void => {
    setFormInf({id:Math.random(), title: titleForm, description: descriptionForm, file: fileForm });
  };


  const saveTaskHandler = (e:React.FormEvent, formInf:ITASK_TYPE | any) =>{
    e.preventDefault();
    saveTask(formInf);
    console.log(formInf);
    console.log('==============');
  };
 

  return (
    <div className="w-[500px] h-[500px] bg-gray-100 rounded-md shadow-xl shadow-blue-200">
      <div className="flex flex-col justify-center items-center text-center">
        <span className="text-2xl text-blue-600 font-bold mt-5">Create Task</span>

        <form  className="w-[400px] h-[300px] rounded-md p-5 mt-5 ">
          <input
            type="text"
            className="w-[300px] h-[30px] border-2 border-gray-300 rounded-md p-2"
            placeholder="Task Name"
            ref={titleForm}
          />

          <input
          type="text"
            className="w-[300px] h-[200px] border-2 border-gray-300 rounded-md p-2 mt-5"
            placeholder="Task Description"
            ref={descriptionForm}
            />

          <input
            className="w-[300px] h-[40px] border-2 border-gray-300 rounded-md py-1 px-1 mt-5"
            type="file"
            id="avatar"
            name="avatar"
            accept="image/*, audio/*, video/*, .doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            ref={fileForm}
          />
          <button  onClick={(e) => saveTaskHandler(e, formInf)} className="w-[100px] h-[30px] bg-blue-600 text-white rounded-md p-0 mt-5">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
