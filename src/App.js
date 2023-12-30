import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import './style.css'
import { useState } from "react";

let id = 0;

function App() {

  const [state, setState] = useState([]);

  function deleteList(li) {
    let newState = [...state];
    for(let i = 0; i < newState.length; i++) {
      if(Number(li.id) == Number(newState[i].id)) {
        if (i == 0) {
          newState.splice(0, 1);
        } else {
          newState.splice(i, i)
        }
      }
    }
    setState(newState)
  }

  function addList(value) {
    let newState = [
      ...state];
    newState.push({id: id, value: value});
    setState(newState);
    id += 1;
  }

  return (
    <section className="todoapp">
      <Header addList={addList} />
      <Main state={state} deleteList={deleteList}/>
      <Footer />
    </section>
  );
}

export default App;
