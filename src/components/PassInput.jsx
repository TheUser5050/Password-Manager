import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addToArray } from "../features/listSlice";

const PassInput = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const list = useSelector((state) => state.list.myArray);
  const dispatch = useDispatch();

  const [i, setI] = useState(0);

  const handleSave = (data) => {
    data.id = setI(i + 1);
    dispatch(addToArray(data));
    console.log(list);
  };
  useEffect(() => {
    // console.log("This is my log");
    // console.log(query);
  }, []);

  return (
    <div className="max-sm:z-30 max-sm:top-0 px-2 border border-x-0 border-gray-500 py-4">
      <form onSubmit={handleSubmit(handleSave)}>
        <label htmlFor="apps">Select your application:-</label>
        <select
          className="bg-gray-500 outline-0 w-[80vw] text-xl rounded-full px-2 block mx-2"
          {...register("apps")}
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
