export interface ITASK_TYPE {
  id: number;
  title: string;
  description: string;
  status: boolean;
  file: File | null;
}

export type TaskContextType = {
  taskItems: ITASK_TYPE[];
  saveTask: (todo: ITASK_TYPE) => void;
  updateTask: (id: number) => void;
  deleteTask: (id: number) => void;
};
