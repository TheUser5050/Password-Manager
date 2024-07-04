const PassInput = () => {
  return (
    <div className="max-sm:z-30 max-sm:top-0">
      <form>
        <label htmlFor="username">User Name</label>
        <input type="email" name="username" className="text-black" />
      </form>
    </div>
  );
};

export default PassInput;
