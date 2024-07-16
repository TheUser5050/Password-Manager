import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateDelete, updateDeleteId } from "../features/deleteSlice";
import {
  changeIsUpdated,
  changePassword,
  changeUsername,
  deleteList,
} from "../features/listSlice";

const PassShow = (props) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const list = useSelector((state) => state.list.myArray);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = async (data) => {
    let id = props.passid;
    dispatch(changeUsername({ id, name }));
    dispatch(changePassword({ id, password }));
    let isupdated = true;
    dispatch(changeIsUpdated({ id, isupdated }));
    let res = await fetch("http://localhost:3000/edit/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, username: name, password, isUpdated: true }),
    });
    let txt = await res.text();
    console.log(txt);
  };

  useEffect(() => {
    setName(props.username);
    setPassword(props.password);
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(handleChange)}>
        <span className="sm:flex sm:flex-col sm:gap-3">
          <span>
            <label htmlFor="username" className="mx-2">
              Username:-
            </label>
            <input
              type="email"
              {...register("username", { required: true })}
              value={name}
              className="w-[91vw] mx-4 bg-gray-700 rounded-full text-xl outline-0 sm:w-[38vw] px-2"
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="username"
            />
            {errors.username && (
              <p className="max-sm:text-[13px]">
                You have to change the email before saving or rewrite the email
              </p>
            )}
          </span>
          <span>
            <span className="sm:flex sm:items-center">
              <label htmlFor="password" className="mx-2">
                Password:-
              </label>
              <span className="flex items-center gap-0 w-[91vw] mx-4 sm:w-[38vw]">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  value={password}
                  className="bg-gray-700 rounded-l-full text-xl w-full outline-0 sm:w-[38vw] px-2"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                />
                <span
                  className="material-symbols-outlined text-xl bg-gray-700 px-2"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  <span className="material-symbols-outlined text-xl bg-gray-700 px-2 rounded-r-full">
                    content_copy
                  </span>
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </span>
            </span>
            {errors.password && (
              <p className="max-sm:text-[13px]">
                You have to change password before saving or rewrite the
                password
              </p>
            )}
          </span>
        </span>
        <span className="flex items-center justify-end gap-4 px-3 my-3">
          <button
            type="button"
            className="text-black bg-orange-500 py-1 px-2 rounded-full"
            onClick={async () => {
              dispatch(updateDelete(true));
              dispatch(updateDeleteId(props.passid));
              dispatch(deleteList(props.passid));
              setTimeout(() => {
                dispatch(updateDelete(false));
              }, 1000);
              let res = await fetch("http://localhost:3000/delete/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: props.passid }),
              });
              let txt = await res.text();
              console.log(txt);
            }}
          >
            Delete
          </button>
          <input
            type="submit"
            value="submit"
            className="text-orange-500 py-1 px-2 outline outline-orange-500 rounded-full"
          />
        </span>
      </form>
    </>
  );
};

export default PassShow;
