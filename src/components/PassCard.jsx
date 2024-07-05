import PassInput from "./PassInput";
import discordLogo from "/.SVG/Discord.svg";
const PassCard = () => {
  return (
    <>
      <div className="flex gap-5 my-3">
        <div className="flex items-center">
          <span className="material-symbols-outlined">keyboard_arrow_down</span>
          <img src={discordLogo} className="h-10" />
        </div>
        <div className="flex items-center gap-1">
          <div className="flex flex-col w-[67vw]">
            <h1 className="text-xl font-bold">Discord</h1>
            <p className="text-sm">Created on 25 Mar 2024</p>
          </div>
          <span className="material-symbols-outlined px-2">edit</span>
        </div>
      </div>
      {/* <PassInput /> */}
    </>
  );
};

export default PassCard;
