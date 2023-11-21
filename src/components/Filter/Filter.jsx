import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <>
      <label htmlFor="findByName">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id="findByName"
        value={filter}
        onChange={handleInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </>
  );
};
