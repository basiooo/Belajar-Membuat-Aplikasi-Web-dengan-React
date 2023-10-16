import PropTypes from 'prop-types';
const SearchBar = ({ onSearch }) => {
    const onSearchbarChange = (event) => {
        onSearch(event.target.value);
    }
    return (
        <div className="note-search">
            <input
                type="text"
                placeholder="Cari Catatan"
                onChange={onSearchbarChange}
            />
        </div>
    )
}
SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
}
export default SearchBar;