import PassShow from "./PassShow";

const PassCard = (props) => {
  return (
    <div>
      <div>
        <div className="flex gap-5 my-3">
          <div className="flex items-center">
            <span className="material-symbols-outlined">
              keyboard_arrow_down
            </span>
            <img src={`/.SVG/${props.app}.svg`} className="h-10" />
          </div>
          <div className="flex items-center gap-1">
            <div className="flex flex-col w-[67vw]">
              <h1 className="text-xl font-bold">{props.app}</h1>
              <p className="text-sm">Created on 25 Mar 2024</p>
            </div>
            <span className="material-symbols-outlined px-2">edit</span>
          </div>
        </div>
      </div>
      <PassShow username={props.username} password={props.password} />
    </div>
  );
};

export default PassCard;
