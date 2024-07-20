import './App.css';
import Header from './components/Header';
import CreateTask from './components/CreateTask';
import Tasks from './components/Tasks';
import TaskProvider from './store/task-context';  




const App = () => {

  return (
    <div className="w-screen h-screen m-0 p-0">
      <Header />
      <div className="flex flex-row justify-around w-full h-full mt-10">
        <TaskProvider>
          <CreateTask />
          <Tasks />
        </TaskProvider>
      </div>
    </div>
  );
}

export default App;
