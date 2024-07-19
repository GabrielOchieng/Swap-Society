import { IoSearchSharp } from "react-icons/io5";

const SearchBar = ({ searchTerm, onChange, onSubmit }) => {
  return (
    <form className="flex items-center justify-between gap-4 bg-gray-100 rounded-md flex-1 w-72 ">
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none p-2 text-black "
        value={searchTerm}
        onChange={onChange}
      />

      {/* Added flex */}
      <div className="flex-grow-1 bg-orange-500 h-full p-2 ">
        {" "}
        {/* Added container and flex-grow */}
        <IoSearchSharp className="w-8 h-8" />
      </div>
    </form>
  );
};

export default SearchBar;
