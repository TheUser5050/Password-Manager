import { useSelector } from "react-redux";
import PassShow from "./PassShow";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const PassCard = (props) => {
  const list = useSelector((state) => state.list.myArray);
  const [filterPass, setFilterPass] = useState([]);
  const [showPass, setShowPass] = useState(true);
  useEffect(() => {
    let newList = list.filter((item) => {
      return item.apps === props.app;
    });
    setFilterPass(newList);
    // console.log(list);
  }, [list]);

  return (
    <div className="cursor-pointer">
      <div
        onClick={() => {
          setShowPass(!showPass);
          console.log(showPass);
        }}
      >
        <div>
          <div className="flex gap-5 my-3">
            <div className="flex items-center">
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
              <img
                src={`/.SVG/${props.app}.svg`}
                className={
                  ((("h-10", props.app === "Github" ? "invert" : ""),
                  "md:h-10 max-md:h-10"),
                  props.app === "TwitterX" ? "invert" : "")
                }
              />
            </div>
            <div className="flex  gap-0 flex-col">
              <h1 className="text-xl font-bold">{props.app}</h1>
              <p>Created on Mar 25 ago</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          showPass ? "transition-all" : "h-0 overflow-hidden transition-all"
        }
      >
        {filterPass.map((item) => {
          return (
            <PassShow
              username={item.username}
              password={item.password}
              passid={item.id}
              key={uuidv4()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PassCard;
