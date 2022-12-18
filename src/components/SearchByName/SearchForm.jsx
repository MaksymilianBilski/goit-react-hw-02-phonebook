import css from './SearchForm.module.css'

export const SearchForm = ({ value, onChange }) => (
    <label className={css.label}>Find contacts by name:<input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
    />
    </label>
);