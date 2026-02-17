import { useEffect, useRef, useState } from 'react';
import { store } from './store.js';

export const useDispatch = () => store.dispatch;

export const useSelector = (selector) => {
  const selectorRef = useRef(selector);
  selectorRef.current = selector;

  const [selectedState, setSelectedState] = useState(() =>
    selectorRef.current(store.getState())
  );

  useEffect(() => {
    const checkForUpdates = () => {
      const nextSelectedState = selectorRef.current(store.getState());
      setSelectedState((prevSelectedState) =>
        Object.is(prevSelectedState, nextSelectedState) ? prevSelectedState : nextSelectedState
      );
    };

    const unsubscribe = store.subscribe(checkForUpdates);
    checkForUpdates();

    return unsubscribe;
  }, []);

  return selectedState;
};
