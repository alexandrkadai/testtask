export interface ITASK_TYPE {
  id: number;
  status: boolean;
  title: string;
  description: string;
  file: string | any;
}


export type TaskContextType = {
  taskItems: ITASK_TYPE[];
  saveTask: (todo: ITASK_TYPE) => void;
  updateTask: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, title: string, description: string, file: File) => void;
};
