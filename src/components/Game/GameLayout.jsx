import Field from '../Field/Field.jsx';
import Information from '../Information/Information.jsx';
import { useDispatch } from '../../store/reactReduxLite.js';
import styles from './Game.module.css';

const GameLayout = () => {
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch({ type: 'RESTART_GAME' });
  };

  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <header className={styles.header}>
          <h1 className={styles.title}>Крестики-Нолики</h1>
          <Information />
        </header>
        <Field />
        <button className={styles.restart} type="button" onClick={handleRestart}>
          Начать заново
        </button>
      </div>
    </section>
  );
};

export default GameLayout;
