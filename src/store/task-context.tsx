import { createContext, useState } from 'react';
import { ITASK_TYPE, TaskContextType } from '../TYPES/TASK_TYPES';

export const TaskContext = createContext<TaskContextType | null>(null);

const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [taskItems, setTaskItems] = useState<ITASK_TYPE[]>([
    {
      id: 1,
      title: 'first Task',
      description: 'Super Description',
      status: false,
      file: null,
    },
  ]);

  const saveTask = (task: ITASK_TYPE) => {
    const newTask: ITASK_TYPE = {
      id: task.id,
      title: task.title,
      description: task.description,
      file: task.file,
      status: task.status,
    };

    setTaskItems([...taskItems, newTask]);
  };

  const updateTask = (id: number) => {
    const updatedTasks = taskItems.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTaskItems(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const newTaskItems = taskItems.filter((item) => (
      item.id !== id
    ));
    setTaskItems([...newTaskItems]);
  };

  const editTask = (id: number, title: string, description: string, file: any) => {
    const updatedTasks = taskItems.map((task) => {
      if (task.id === id ) {
        return {
          ...task,
          title: title !== '' ? title : task.title,
          description: description !== '' ? description : task.description,
          file: file !== '' ? file : task.file,
        };
      } 
    return task;
    });
    setTaskItems(updatedTasks);
  };
  

  return (
    <TaskContext.Provider value={{ taskItems, saveTask, updateTask, deleteTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
