// https://dev.to/selbekk/persisting-your-react-state-in-9-lines-of-code-9go
import { useEffect, useState } from "react";

function usePersistedState(key: any, defaultValue: any) {
  const [state, setState] = useState(() => {
    const localState = localStorage.getItem(key);
    return localState ? JSON.parse(localState) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
