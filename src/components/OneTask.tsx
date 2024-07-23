import { ITASK_TYPE } from '../TYPES/TASK_TYPES';
import { MdCheckBoxOutlineBlank,MdCheckBox,MdEditSquare, MdOutlineDeleteForever } from "react-icons/md";

type Props = {
    item  : ITASK_TYPE,
    deleteItemHandler: (id:number) => void,
    updateTask: (id:number) => void,
    showModalHandler: (id:number) => void,
}

const OneTask:React.FC<Props> = ({item, deleteItemHandler, updateTask, showModalHandler}) => {
  
  return (
    
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
   
  )
}

export default OneTask