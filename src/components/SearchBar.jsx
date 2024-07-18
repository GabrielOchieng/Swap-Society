import { IoSearchSharp } from "react-icons/io5";

const SearchBar = ({ searchTerm, onChange, onSubmit }) => {
  return (
    <form className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-full flex-1 w-72 md:w-[96] ">
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
        value={searchTerm}
        onChange={onChange}
      />
      <button type="submit" className="cursor-pointer">
        <IoSearchSharp className="w-8 h-8" />
      </button>
    </form>
  );
};

export default SearchBar;
