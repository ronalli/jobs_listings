// import data from '../mock/data.json';
import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import {
  selectVisiblePositions,
} from 'store/positions/positionSelectors';
import { addFilter } from 'store/filters/filterSlice';
import { selectFilters } from 'store/filters/filterSelectors';

const JobList = () => {
  const currentFilter = useSelector(selectFilters);

  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilter)
  );
  const dispatch = useDispatch();

  const handlerAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className='job-list'>
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handlerAddFilter={handlerAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
