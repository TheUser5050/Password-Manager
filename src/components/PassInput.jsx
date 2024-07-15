import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addToArray } from "../features/listSlice";
import { v4 as uuidv4 } from "uuid";
import { addToIsInCard } from "../features/isInCard";
// import { addToCard } from "../features/cardSlice";

const PassInput = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const list = useSelector((state) => state.list.myArray);
  const dispatch = useDispatch();

  const handleSave = (data) => {
    const newData = { ...data, id: uuidv4(), isUpdated: false };
    dispatch(addToArray(newData));
    dispatch(addToIsInCard({ ...newData, isInList: false }));
  };

  return (
    <div
      className={
        "max-sm:z-30 max-sm:top-0 px-2 border border-x-0 border-gray-500 pt-4 mb-2"
      }
    >
      <form onSubmit={handleSubmit(handleSave)}>
        <span className="sm:flex-col sm:gap-4 sm:flex">
          <span className="sm:flex sm:gap-9 sm:justify-center">
            <label htmlFor="apps" className="sm:hidden">
              Select your application:-
            </label>
            <select
              className="bg-gray-500 outline-0 text-2xl rounded-full px-2 block mx-2 max-sm:w-[91vw] md:w-[25vw] border border-white sm:h-fit"
              {...register("apps")}
              id="apps"
              aria-placeholder="Your application"
            >
              <option value="Discord">Discord</option>
              <option value="Instagram">Instagram</option>
              <option value="Github">Github</option>
              <option value="Gitlab">Gitlab</option>
              <option value="Dropbox">Dropbox</option>
              <option value="Facebook">Facebook</option>
              <option value="Reddit">Reddit</option>
              <option value="Pinterest">Pinterest</option>
              <option value="TwitterX">TwitterX</option>
              <option value="Linkedin">Linkedin</option>
            </select>
            <label htmlFor="username" className="sm:hidden">
              User Name:-
            </label>
            <span>
              <input
                type="email"
                name="username"
                className="block mx-2 outline-0 bg-gray-700 rounded-full px-3 text-xl w-[91vw] sm:w-[35vw]"
                {...register("username", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                id="username"
                placeholder=" Enter your Username"
              />
              {errors.username && <p>{errors.username.message}</p>}
            </span>
          </span>
          <label htmlFor="password" className="sm:hidden">
            Password:-
          </label>
          <span className="sm:flex sm:flex-col sm:items-center">
            <span className="flex items-center gap-0 w-[91vw] sm:justify-center sm:text-2xl">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="block ml-2 outline-0 bg-gray-700 rounded-l-full px-2 text-xl inline w-full sm:w-[35vw]"
                {...register("password", {
                  required: { value: true, message: "Thus field is required" },
                })}
                id="password"
                placeholder="Enter yourPassword"
              />
              <span
                className="material-symbols-outlined bg-gray-700 rounded-r-full text-xl px-2"
                onClick={(e) => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </span>
            {errors.password && <p>{errors.password.message}</p>}
          </span>
        </span>
        <input
          className="text-black text-xl rounded-full bg-orange-500 py-0 px-1 relative bottom-0 left-[80%] font-bold my-2"
          value="Save"
          type="submit"
        />
      </form>
    </div>
  );
};

export default PassInput;
