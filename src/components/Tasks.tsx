import { useContext, useState } from "react";
import { TaskContext } from "../store/task-context";
import { ITASK_TYPE, TaskContextType } from '../TYPES/TASK_TYPES';
import EditTask from './EditTask';

import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";


const Tasks = () => {
  const [showModal, setShowModal] = useState(false);
  const {taskItems, deleteTask, updateTask} = useContext(TaskContext) as TaskContextType;
  const [taskID, setTaskid] = useState(0);

  const deleteItemHandler = (id:number) =>{
    deleteTask(id);
  };

  const showModalHandler = (id:number) =>{
    setTaskid(id);
    setShowModal(true);
  }

  return  (
    <div className="w-[500px] h-auto bg-gray-50 rounded-md shadow-md shadow-blue-300">
      <div className="justify-center items-center text-center mt-5">
        <span className="text-2xl text-blue-600 font-bold ">Your Tasks</span>
        <div className="w-full h-auto rounded-md p-5 mt-5 ">
          <div className="flex flex-row flex-wrap gap-10 justify-around ">
            {taskItems.map((item:ITASK_TYPE) =>(
               <div key={item.id} className="relative flex flex-col w-[200px] h-[250px] bg-blue-600 rounded-md text-white p-2">
                <span className="text-[25px] text-center uppercase mt-5">{item.title}</span>
                <span className="w-full h-auto flex flex-wrap">{item.description}</span>
                <span>{item.file}</span>
                <div className="absolute bottom-2 left-2 flex flex-row items-center gap-2" onClick={() => updateTask(item.id)}>
                <button >Change status</button>
                {item.status ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/> }
                </div>
              <div className="absolute top-2 right-2" onClick={() => showModalHandler(item.id)}>
              <MdEditSquare size={20}/>
              </div>

              <div className="absolute top-2 left-2 cursor-pointer" onClick={() => deleteItemHandler(item.id)}>
              <MdOutlineDeleteForever size={20} />
              </div>

               </div>
            ))}

            {showModal && <EditTask id={taskID} setShowModal={setShowModal} />}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks