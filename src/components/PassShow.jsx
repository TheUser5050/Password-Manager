import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addToId } from "../features/idSlice";
import { changePassword, changeUsername } from "../features/listSlice";

const PassShow = (props) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (data) => {
    let id = props.passid;
    dispatch(changeUsername({ id, name }));
    let pass = data.password;
    dispatch(changePassword({ id, pass }));
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
        />
        {errors.username && <p>You have to change the email before saving</p>}
        <label htmlFor="password">Password:-</label>
        <input
          type="password"
          {...register("password", { required: true })}
          value={password}
          className="text-black"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {errors.password && <p>You have to change password before saving</p>}
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default PassShow;
