import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex items-center rounded-full justify-center my-4 w-screen">
        <span className="material-symbols-outlined text-3xl bg-gray-700 rounded-l-full px-2 outline outline-gray-300 text-gray-300">
          search
        </span>
        <input
          type="search"
          name="search"
          className="bg-gray-700 outline text-xl h-10 outline-gray-300 px-2"
          placeholder="Search"
        />
        <span className="material-symbols-outlined text-3xl bg-gray-700 rounded-r-full px-2 outline outline-gray-300">
          close
        </span>
      </div>
    </>
  );
}

export default App;
