import { useForm } from "react-hook-form";

const PassShow = (props) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (data) => {
    props.username = data.username;
    props.password = data.password;
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleChange)}>
        <label htmlFor="username">Username:-</label>
        <input
          type="email"
          {...register("username", { required: true })}
          value={props.username}
          className="text-black"
        />
        {errors.username && <p>This field is required</p>}
        <label htmlFor="Password">Password:-</label>
        <input
          type="password"
          {...register("password", { required: true })}
          value={props.password}
          className="text-black"
        />
        {errors.password && <p>This field is required</p>}
        <input type="submit" name="submi" value="submit" />
      </form>
    </>
  );
};

export default PassShow;
