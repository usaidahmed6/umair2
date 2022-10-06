import React, { useEffect, useState } from 'react';
import './../styles/home.css';
import { addDoc, todoRef, getDocs, doc, deleteDoc, db, onSnapshot, collection, setDoc } from '../config/firebase'
import { async } from '@firebase/util';

const Home = () => {
  // for geting value 
  const [todo, setTodo] = useState([false]);
  //for saving onChange input value
  const [onChnageTodo, setOnChnageTodo] = useState('');

  useEffect(() => {
    // onSnapshot(
    //   collection(db, "Items"),
    //   (snapshot) => {
    //     getTodos()

    //   }
    // )
    onSnapshot(
      collection(db, 'todos'),
      (snapshot) => {
        getTodos()
      }
    )
  }, [])

  //for getting onChange input value
  const handleInput = (e) => {
    setOnChnageTodo(e.target.value);
  }
  //When clicked on button, input-value=>firebase
  const onfinsh = async () => {
    const obj = {
      name: onChnageTodo,
    }

    await addDoc(todoRef, obj)

  }
  //For getting values from Firebase database 
  const getTodos = async () => {
    const querySnapshort = await getDocs(todoRef)
    let todosItems = [];
    querySnapshort.forEach((doc) => {
      console.log('=>>>>>>>>>', doc.id);
      todosItems.push({ id: doc.id, ...doc.data() });
      setTodo(todosItems);

    })
  }

  const deletes = (id) => {
    const deletes = deleteDoc(doc(db, "todos", id));
  }

  // console.log('data=====>', todo);

  //HTML
  return (
    <div className='container'>
      <input type="text" onChange={handleInput} />
      <button onClick={onfinsh}>
        submit
      </button>
      {
        todo.map((data, index) => {
          // console.log(data.name);

          return (

            <div key={index}>
              <p > {data.name}</p>
              {/* Callback function or fat arrow function */}
              <button onClick={() => deletes(data.id)}>
                delete
              </button>
            </div>
          )

        }
        )
      }
    </div >
  )
}

export default Home