import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addToArray } from "../features/listSlice";
import { v4 as uuidv4 } from "uuid";
import { addToId } from "../features/idSlice";
import { addToIsInCard } from "../features/isInCard";
// import { addToCard } from "../features/cardSlice";

const PassInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const list = useSelector((state) => state.list.myArray);
  const id = useSelector((state) => state.id.myId);
  const dispatch = useDispatch();

  const handleSave = (data) => {
    const newData = { ...data, id: uuidv4(), isUpdated: false };
    dispatch(addToId(newData.id));
    dispatch(addToArray(newData));
    dispatch(addToIsInCard({ ...newData, isInList: false }));
    // dispatch(addToCard({ ...newData, isInList: false }));
    console.log(list);
    // console.log(id);
  };

  return (
    <div className="max-sm:z-30 max-sm:top-0 px-2 border border-x-0 border-gray-500 py-4">
      <form onSubmit={handleSubmit(handleSave)}>
        <label htmlFor="apps">Select your application:-</label>
        <select
          className="bg-gray-500 outline-0 w-[80vw] text-xl rounded-full px-2 block mx-2"
          {...register("apps")}
          id="apps"
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
        <label htmlFor="username">User Name:-</label>
        <input
          type="email"
          name="username"
          className="block mx-2 outline-0 bg-gray-700 rounded-full px-3 text-xl"
          {...register("username", {
            required: {
              value: true,
              message: "This field is required",
            },
          })}
          id="username"
          autoComplete="email"
        />
        {errors.username && <p>{errors.username.message}</p>}
        <label htmlFor="password">Password:-</label>
        <input
          type="password"
          name="password"
          className="block mx-2 outline-0 bg-gray-700 rounded-full px-2 text-xl"
          {...register("password", {
            required: { value: true, message: "Thus field is required" },
          })}
          id="password"
          autoComplete="current-password"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          className="text-black text-xl rounded-full bg-orange-500 py-1 px-2 relative bottom-0 left-[80%] font-bold my-2"
          value="Save"
          type="submit"
        />
      </form>
    </div>
  );
};

export default PassInput;
