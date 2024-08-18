import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { IoMdSearch } from "react-icons/io";
import { IconContext } from "react-icons";
import handlerParent from "./handler";
import "./App.css";

function App() {
  const [inputName, setInput] = useState("");
  const [result, setResult] = useState("Result will be here!!");
  async function handler(e) {
    e.preventDefault();
    try {
      if (inputName === "") {
        alert("User Must provide a URL !!");
      } else {
        let abc = await handlerParent(inputName);
        abc = "http://localhost:3000/" + abc;
        setResult(abc);
        setInput("");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="container">
        <p className="Title">Tiny URL</p>
        <form className="form">
          <div className="searchbar">
            <IconContext.Provider
              value={{
                size: "30px",
                className: "global-class-name , search-icon",
              }}
            >
              <div>
                <IoMdSearch />
              </div>
            </IconContext.Provider>
            <input
              className="search-input"
              type="text"
              autoFocus
              value={inputName}
              onChange={(e) => {
                setInput(e.target.value);
                console.log(inputName);
              }}
              placeholder="Paste Url Link"
            ></input>
          </div>
          <button className="button" onClick={handler}>
            Submit
          </button>
        </form>
        <p>{result}</p>
      </div>
    </>
  );
}

export default App;
