import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from 'store/filters/filterSelectors';
import { clearFilter, removeFilter } from 'store/filters/filterSlice';

const FilterPanel = () => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  const handlerRemoveFilter = (filter) => {
    dispatch(removeFilter(filter));
  };

  return (
    <Card className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <Stack>
          {filters &&
            filters.map((el) => (
              <Badge
                key={el}
                variant='clearable'
                onClear={() => handlerRemoveFilter(el)}
              >
                {el}
              </Badge>
            ))}
        </Stack>

        <button className='link' onClick={() => dispatch(clearFilter())}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
