// import { TaskContext } from "../store/task-context";

const Tasks = () => {
  return  (
    <div className="w-[500px] h-[500px] bg-gray-100">
      <div className="justify-center items-center text-center">
        <span className="text-2xl text-blue-600 font-bold">Your Tasks</span>
        <div className="w-[400px] h-[300px] bg-white rounded-md p-5 mt-5">
          <div className="flex flex-row justify-around items-center">
            <div className="w-[100px] h-[100px] bg-blue-600 rounded-md">

            </div>
            <div className="w-[100px] h-[100px] bg-blue-600 rounded-md"></div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks