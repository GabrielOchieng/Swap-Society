import { IoSearchSharp } from "react-icons/io5";

const SearchBar = ({ searchTerm, onChange, onSubmit , searchBy, setSearchBy}) => {
  return (
    <form className="flex items-center justify-between gap-2 md:gap-4 bg-gray-100 rounded-md md:flex-1 w-72 ">
      <input
        type="text"
        name="name"
        className="flex-1 bg-transparent outline-none p-2 text-black w-full "
        value={searchTerm}
        onChange={onChange}
      />
        <IoSearchSharp className="w-8 h-8 hidden md:block" />

      {/* Added flex */}
      <div className="flex-grow-1 bg-orange-500 h-full p-2 ">
        {" "}
        {/* Added container and flex-grow */}

        <select
          value={searchBy}
          onChange={(event) => setSearchBy(event.target.value)}
          className=" border-none bg-orange-500 text-white focus:outline-none"
        >
          <option value="title">Title</option>
          <option value="location">Location </option>
        
        </select>

      </div>
    </form>
  );
};

export default SearchBar;


