import "./search-box.style.css";

const SearchBox = (props) => {
    const { placeholder, classes, id, onChangeHandler } = props
    return (
      <input
        type="search"
        className={`search-box ${classes}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
        id= {id}
      />
    );
}

export default SearchBox;
