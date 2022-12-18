export const SearchForm = ({ value, onChange }) => (
    <label>Find contacts by name<input
        type="text"
        value={value}
        onChange={onChange}
    />
    </label>
);