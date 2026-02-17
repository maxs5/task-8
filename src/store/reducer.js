const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const createEmptyField = () => Array(9).fill('');

const createInitialState = () => ({
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false,
  field: createEmptyField(),
});

export const initialState = createInitialState();

const checkWinner = (field, player) => {
  return WIN_PATTERNS.some((pattern) => pattern.every((cellIndex) => field[cellIndex] === player));
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MAKE_MOVE': {
      if (state.isGameEnded || state.isDraw) {
        return state;
      }

      const index = action.payload;

      if (state.field[index]) {
        return state;
      }

      const nextField = [...state.field];
      nextField[index] = state.currentPlayer;

      if (checkWinner(nextField, state.currentPlayer)) {
        return {
          ...state,
          field: nextField,
          isGameEnded: true,
        };
      }

      if (!nextField.includes('')) {
        return {
          ...state,
          field: nextField,
          isDraw: true,
        };
      }

      return {
        ...state,
        field: nextField,
        currentPlayer: state.currentPlayer === 'X' ? '0' : 'X',
      };
    }
    case 'RESTART_GAME':
      return createInitialState();
    default:
      return state;
  }
};
