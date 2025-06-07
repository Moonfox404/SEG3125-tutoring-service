import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SearchBar = ({ placeholder = "Search..." }: { placeholder?: string }) => {
  return <div className="size-fit border-base-content border-b-2">
    <label className="input input-md input-ghost">
      <FontAwesomeIcon icon={faSearch} />
      <input type="search" placeholder={placeholder}></input>
    </label>
  </div>
}

export default SearchBar;
