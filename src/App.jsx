import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PassCard from "./components/PassCard";
import PassInput from "./components/PassInput";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { changeIsInList } from "./features/isInCard";

function App() {
  const [search, setSearch] = useState("");
  const [listCard, setListCard] = useState([]);
  const list = useSelector((state) => state.list.myArray);
  const isInCard = useSelector((state) => state.incard.myIsInCard);
  const dispatch = useDispatch();
  // const isInCard = useSelector((state) => state.card.myCard);
  const [filterList, setFilterList] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      console.log(search);
      e.target.blur();
    }
  };

  useEffect(() => {
    // if (list.lengtg > 1) {
    //   list.forEach((item) => {
    //     if (item.apps == isInCard.apps) {
    //       dispatch(changeIsInList(true));
    //       console.log("The apps are equal");
    //     } else {
    //       dispatch(changeIsInList(false));
    //     }
    //   });
    // }
    // console.log(isInCard);
    // isInCard.isInList == false && setFilterList([...filterList, isInCard]);
    if (list.length > 0) {
      let isInList = false;
      let item = list[list.length - 1];
      let apps = [];
      for (let i = 0; i <= list.length - 2; i++) {
        if (item.apps === list[i].apps) {
          isInList = true;
        }
        // console.log(item.apps, list[i]);
      }
      list.forEach((item) => {
        if (!isInList && !item.isUpdated) {
          list.forEach((item) => {
            apps = [...apps, item.apps];
          });
          setFilterList([...filterList, item]);
        }
      });
      // console.log(filterList);
      console.log(list);
      // console.log(apps);
      // console.log("The useEffect for list triggered");
    }
    // console.log(list[list.length - 1]);
  }, [list]);

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
      {filterList.map((item) => {
        return (
          <PassCard
            app={item.apps}
            username={item.username}
            password={item.password}
            id={item.id}
            key={uuidv4()}
          />
        );
      })}
    </>
  );
}

export default App;
