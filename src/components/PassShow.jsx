import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addToId } from "../features/idSlice";
import {
  changeIsUpdated,
  changePassword,
  changeUsername,
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

  const handleChange = (data) => {
    let id = props.passid;
    dispatch(changeUsername({ id, name }));
    dispatch(changePassword({ id, password }));
    let isupdated = true;
    dispatch(changeIsUpdated({ id, isupdated }));
    // console.log(password);
  };

  useEffect(() => {
    setName(props.username);
    setPassword(props.password);
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(handleChange)}>
        <label htmlFor="username">Username:-</label>
        <input
          type="email"
          {...register("username", { required: true })}
          value={name}
          className="text-black"
          onChange={(e) => {
            setName(e.target.value);
          }}
          id="username"
        />
        {errors.username && <p>You have to change the email before saving</p>}
        <label htmlFor="password">Password:-</label>
        <input
          type="text"
          {...register("password", { required: true })}
          value={password}
          className="text-black"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          id="password"
        />
        {errors.password && <p>You have to change password before saving</p>}
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default PassShow;
