import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <label className={css.labelFilter}>
        Find contacts by name
        <input
          className={css.inputFilter}
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Filter by name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        ></input>
      </label>
    </>
  );
};
