import PropTypes from 'prop-types';
import { FilterStyled } from './FilterStyled';


export default function Filter(props) {
  const { filter, filterContact } = props;

  const handleInputChange = event => {
    filterContact(event.target.value);
  };

  return (
    <FilterStyled>
      <input
        value={filter}
        onChange={handleInputChange}
        type="text"
        name="search"
      />
    </FilterStyled>
  );
}

Filter.propTypes = {
  filterContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
