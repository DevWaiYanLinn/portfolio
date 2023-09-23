import { createContext, useReducer, useState, useEffect } from "react";
const initialState = {
  darkMode: true,
};
const reducer = (state: any, action: any) => {
  window.localStorage.setItem("darkMode", `${action.data}`);
  return { ...state, darkMode: action.data };
};
export const ThemeContext = createContext<any>(null);
export const DispatchThemeContext = createContext<any>(null);

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const darMode = window.localStorage.getItem("darkMode") === "true";
    if (darMode) dispatch({ data: true });
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={state}>
      <DispatchThemeContext.Provider value={dispatch}>
        <div className={`${state.darkMode ? "dark" : "light"}`}>{children}</div>
      </DispatchThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
