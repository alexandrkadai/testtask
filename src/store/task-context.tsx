import { createContext, useState } from "react"; 
import { ITASK_TYPE, TaskContextType } from "../TYPES/TASK_TYPES";

export const TaskContext = createContext<TaskContextType | null>(null);

const TaskProvider: React.FC<{children:React.ReactNode} > = ({children}) => {

  const [taskItems, setTaskItems ] = useState<ITASK_TYPE[]>([
    {
      id: 1,
      title: 'first Task',
      description: 'Super Description',
      status: false,
      file: null,
    }
  ]);

  const saveTask = (task:ITASK_TYPE) =>{
    const newTask:ITASK_TYPE = {
      id: Math.random(),
      title: task.title,
      description: task.description,
      status: false,
      file: task.file,
    };
    setTaskItems([...taskItems, newTask])
  };


  const updateTask = (id:number) =>{
    taskItems.filter((task:ITASK_TYPE) => {
      if(task.id === id) {
        task.status = true;
       
      }
      setTaskItems([...taskItems])
    })
  };

  const deleteTask = (id:number) => {
    taskItems.filter((task:ITASK_TYPE) => {
      if(task.id === id) {
        setTaskItems([...taskItems])
      }
    })
  };


  return (
    <TaskContext.Provider value={{ taskItems, saveTask, updateTask, deleteTask} }> 
    {children}
    </TaskContext.Provider>
  )
};

export default TaskProvider;

