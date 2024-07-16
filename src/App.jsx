import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PassCard from "./components/PassCard";
import PassInput from "./components/PassInput";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addObject, addToArray, changeIsUpdated } from "./features/listSlice";

function App() {
  const [search, setSearch] = useState("");
  const [listCard, setListCard] = useState([]);
  const list = useSelector((state) => state.list.myArray);
  const isInCard = useSelector((state) => state.incard.myIsInCard);
  const dispatch = useDispatch();
  const isDelete = useSelector((state) => state.isdelete.Delete);
  const [filterList, setFilterList] = useState([]);
  const [mysqlist, setMysqlist] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  useEffect(() => {
    const obj = new Set();
    for (let i = 0; i < list.length; i++) {
      if (!obj.has(list[i].apps)) {
        obj.add(list[i].apps);
      }
    }
    let apps = Array.from(obj);
    let newF = [];
    apps.forEach((app) => {
      let appToF = list.find((item) => item.apps === app);
      newF.push(appToF);
    });
    setFilterList(newF);

    if (list.length === 0) {
      setFilterList([]);
    }
    // else if (isDelete.value) {
    //   let newflist = [];
    //   // Adding item to newflist variable with duplicate components
    //   list.forEach((lists) => {
    //     filterList.map((item) => {
    //       if (item.apps === lists.apps) {
    //         console.log(item);
    //         newflist = [...newflist, item];
    //       }
    //     });
    //   });
    //   // Removing the duplicate items from newflist variable
    //   let isInlist = -1;
    //   for (let i = 0; i <= newflist.length - 2; i++) {
    //     if (newflist[newflist.length - 1] === newflist[i]) {
    //       isInlist = newflist.findIndex((obj) => obj.id === newflist[i].id);
    //       newflist.splice(isInlist, 1);
    //     }
    //   }
    //   setFilterList(newflist);
    // }
    console.log(list);
  }, [list]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("http://localhost:3000/get/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let json = await res.json();
      for (let i = 0; i < json.length; i++) {
        dispatch(addToArray(json[i]));
      }
      console.log(json);
      setMysqlist(json);
      // for (let i = 0; i < list.length; i++) {
      //   let id = list[i].id;
      //   let t = true,
      //     f = false;
      //   if (list[i].isUpdated == 0) {
      //     dispatch(changeIsUpdated({ id, t }));
      //   } else if (list[i].isUpdated == 1) {
      //     dispatch(changeIsUpdated({ id, t }));
      //   }
      // }
    };
    fetchData();
  }, []);

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
          className="bg-gray-700 border text-xl h-[38px] border-gray-300 px-2 outline-0 border-r-0 w-[80%] sm:w-[50%]"
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
      {list.length == 0 && (
        <p className="text-center my-full font-bold">
          There is no password to show
        </p>
      )}
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
