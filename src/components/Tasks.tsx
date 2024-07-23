import { useContext, useState } from "react";
import { TaskContext } from "../store/task-context";
import { ITASK_TYPE, TaskContextType } from '../TYPES/TASK_TYPES';
import EditTask from './EditTask';
import OneTask from './OneTask';




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

          <OneTask key={item.id} item={item} deleteItemHandler={deleteItemHandler} updateTask={updateTask} showModalHandler={showModalHandler} />
          ))}
            {showModal && <EditTask id={taskID} setShowModal={setShowModal} />}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks