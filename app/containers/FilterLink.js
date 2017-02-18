import { connect } from 'react-redux';
import setVisibilityFilter from '../actions/actionCreators';
import Filters from '../components/Filters';

const mapDispatchToProps = (dispatch) => ({
    onChange: (filter) => {
        dispatch(setVisibilityFilter(filter));
    }
});

const FilterLink = connect(
  null,
  mapDispatchToProps
)(Filters);

export default FilterLink;
