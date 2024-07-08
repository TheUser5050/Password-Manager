import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PassCard from "./components/PassCard";
import PassInput from "./components/PassInput";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [search, setSearch] = useState("");
  const [listCard, setListCard] = useState([]);
  const list = useSelector((state) => state.list.myArray);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      console.log(search);
      e.target.blur();
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex items-center rounded-full justify-center my-3 w-screen">
        <span className="material-symbols-outlined text-3xl bg-gray-700 rounded-l-full px-2 border border-gray-300 text-gray-300">
          search
        </span>
        <input
          type="search"
          name="search"
          className="bg-gray-700 border text-xl h-[38px] border-gray-300 px-2 outline-0 border-r-0 w-[80%]"
          placeholder="Search"
          onChange={(e) => {
            handleSearch(e);
          }}
          value={search}
          onKeyDown={(e) => {
            handleKey(e);
          }}
        />
        <span
          className="material-symbols-outlined text-3xl bg-gray-700 rounded-r-full px-2 border border-gray-300 border-l-0"
          onClick={() => {
            setSearch("");
          }}
        >
          close
        </span>
      </div>
      <PassInput />
      {list.map((item) => {
        return (
          <PassCard
            app={item.apps}
            username={item.username}
            password={item.password}
            key={uuidv4()}
          />
        );
      })}
    </>
  );
}

export default App;
