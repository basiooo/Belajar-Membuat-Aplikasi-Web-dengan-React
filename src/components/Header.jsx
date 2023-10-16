import PropTypes from 'prop-types';

import SearchBar from "./SearchBar";

const Header = ({ onSearch }) => {
    return (
        <header className="note-app__header">
            <div className="container note-app__header-item">
                <h1>Catatan</h1>
                <SearchBar onSearch={onSearch} />
            </div>
        </header>
    )
}
Header.propTypes = {
    onSearch: PropTypes.func.isRequired
}
export default Header;