import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

import {useState, useEffect} from 'react';
import {ThemeContext,TodoContext, ShowContext, DragContext} from './context';
//import { AiTwotoneHdd } from 'react-icons/ai';


function Main (){
  const [theme, setTheme] = useState('dark');
  const [todos, addTodo] = useState([]);
  const [showOption, setShowOption] = useState('all');
  const [order, setOrder] = useState(0);

  const [whatDrag, setWhatDrag] = useState();
  const [whereDrag, setWhereDrag] = useState();

	useEffect(()=>{
		document.body.setAttribute('theme', theme)
	}, [theme]);


  const markDone = (id)=>{
    const todosCopy = todos.map(todo=>{
      if(todo.id===id){
        todo.done=!todo.done;
      };
      return todo;
  });
    addTodo(todosCopy);
  };

  const deleteTodo = (id)=>{
    const todosCopy = todos.filter(todo=>{
      return todo.id!==id
    });
    addTodo(todosCopy);
  };

  const clearCompleted = ()=>{
      const todosCopy = todos.filter(todo=>{
        return todo.done===false;
      });

    addTodo(todosCopy);
  };

  const changeShowOption = (mode)=>{
    switch(mode){
      case('all'):
        setShowOption('all');
        break;
      case('active'):
        setShowOption('active');
        break;
      case('completed'):
        setShowOption('completed');
        break;
      default:
        setShowOption('all');
    }
  }

  const setEditMode = (id)=>{
    const todosCopy = todos.map(todo=>{
      if(todo.id===id){todo.isEditing=!todo.isEditing};
      return todo;
  });
    addTodo(todosCopy);
  }

  const editTodo = (id, text)=>{
    const todosCopy = todos.map(todo=>{
      if(todo.id===id){
        todo.isEditing=!todo.isEditing
        todo.text=text;
      };
      return todo;
  });
    addTodo(todosCopy);
  };

  const reorderTodo = ()=>{
    const whatDragCopy = Object.assign({}, todos.filter(todo=>todo.id===whatDrag)[0]);
    const whereDragCopy = Object.assign({}, todos.filter(todo=>todo.id===whereDrag)[0]);

    const todosCopy = [...todos];
    
    if(whatDragCopy.order > whereDragCopy.order){
      todosCopy.map(todo=>{
      if(todo.id===whatDragCopy.id){
        todo.order=whereDragCopy.order;
      }
      if(todo.id===whereDragCopy.id){
        todo.order+=1;
      }
      if(whatDragCopy.order <todo.order && todo.order < whereDragCopy.order && todo.id !== whatDrag && todo.id !== whereDrag){
        todo.order+=1;
      }
    }
    );
    }else{
      todosCopy.map(todo=>{
      if(todo.id===whatDragCopy.id){
        todo.order=whereDragCopy.order;
      }
      if(todo.id===whereDragCopy.id){
        todo.order-=1;
      }
      if(whatDragCopy.order < todo.order && todo.order < whereDragCopy.order && todo.id !== whatDrag && todo.id !== whereDrag){    
        todo.order-=1;
      }
    }
    );
    };
    addTodo(todosCopy);
  };



  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <TodoContext.Provider value={{todos, addTodo, markDone, clearCompleted, deleteTodo, setEditMode, editTodo, order, setOrder}} >
          <ShowContext.Provider value={{showOption, changeShowOption}} >
            <DragContext.Provider value={{setWhatDrag, setWhereDrag, reorderTodo}}>
              <App />
            </DragContext.Provider>
          </ShowContext.Provider>
        </TodoContext.Provider>
      </ThemeContext.Provider>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// reportWebVitals();

