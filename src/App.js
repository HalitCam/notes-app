import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBlue, addBlack, addGreen, addPink } from './redux/noteSlice';

function App() {
  const [section, setSection] = useState(null);
  const [store, setStore] = useState("pink");
  const [show, setShow] = useState("");
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  // the note text to Redux Store is being sent
  console.log(section)
  const handleNote = (color) => {
    if (!section) return;

    if (section) {
      switch (color) {
        case "pink":
          dispatch(addPink(section));
          break;
        case "blue":
          dispatch(addBlue(section));
          break;
        case "green":
          dispatch(addGreen(section));
          break;
        case "black":
          dispatch(addBlack(section));
          break;
        default:
          break;
      }
    }
      setSection("");
  }


  // from the redux the data is drown according to colors
  const dataPink = useSelector((state) => state.noteStore.pink);
  const dataGreen = useSelector((state) => state.noteStore.green);
  const dataBlue = useSelector((state) => state.noteStore.blue);
  const dataBlack = useSelector((state) => state.noteStore.black);
  const dataTotal = [...dataPink, ...dataGreen, ...dataBlue, ...dataBlack]
  const bothData = dataTotal.filter(data => data.text.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="App">
      <div >
        <h1>NotesApp</h1>
        <div >
          <input onChange={e => setSearch(e.target.value)} className="input" placeholder='   Search...' />
        </div >
        <div>
          {
            (search != "") && bothData.length > 0 ? (<ul>{bothData.map(data => <li>{data.text} - {data.date}</li>)}</ul>) : (<h6 className='color:red'>...</h6>)
          }
        </div>
        <div >
          <textarea value={section} onChange={e => setSection(e.target.value)} placeholder='Enter your note here...' className="text" name="" id="" />
        </div>
        <div className='command'>
          <select onChange={e => setStore(e.target.value)} name="color" id="">
            <option value="pink">pink</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="black">black</option>
          </select>
          <button onClick={() => handleNote(store)}>Add</button>
        </div>
        <div className='boxLayout'>
          <div id="pink" onClick={() => { setShow("pink") }} >Pink</div >
          <div id="green" onClick={() => { setShow("green") }} > Green </div >
          <div id="blue" onClick={() => { setShow("blue") }} > Blue </div >
          <div id="black" onClick={() => { setShow("black") }} >Black</div >
        </div>
        <div className='show'>
          {show === "pink" && (<ul>
            {dataPink.map((note, index) => (
              <li key={index}>
                {note.text} -  {note.date}
              </li>
            ))}
          </ul>)}
          {show === "green" && (<ul>
            {dataGreen.map((note, index) => (
              <li key={index}>
                {note.text} -  {note.date}
              </li>
            ))}
          </ul>)}
          {show === "blue" && (<ul>
            {dataBlue.map((note, index) => (
              <li key={index}>
                {note.text} -  {note.date}
              </li>
            ))}
          </ul>)}
          {show === "black" && (<ul>
            {dataBlack.map((note, index) => (
              <li key={index}>
                {note.text} -  {note.date}
              </li>
            ))}
          </ul>)}
        </div>
      </div>
    </div>
  );
}

export default App;
