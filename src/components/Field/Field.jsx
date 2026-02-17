import FieldLayout from './FieldLayout.jsx';
import { useDispatch, useSelector } from '../../store/reactReduxLite.js';

const Field = () => {
  const { field, isGameEnded, isDraw } = useSelector((state) => ({
    field: state.field,
    isGameEnded: state.isGameEnded,
    isDraw: state.isDraw,
  }));
  const dispatch = useDispatch();

  const handleCellClick = (index) => {
    dispatch({ type: 'MAKE_MOVE', payload: index });
  };

  return (
    <FieldLayout
      field={field}
      onCellClick={handleCellClick}
      isGameLocked={isGameEnded || isDraw}
    />
  );
};

export default Field;
