import InformationLayout from './InformationLayout.jsx';
import { useSelector } from '../../store/reactReduxLite.js';

const Information = () => {
  const { currentPlayer, isGameEnded, isDraw } = useSelector((state) => ({
    currentPlayer: state.currentPlayer,
    isGameEnded: state.isGameEnded,
    isDraw: state.isDraw,
  }));

  return (
    <InformationLayout currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
  );
};

export default Information;
