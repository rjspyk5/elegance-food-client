import { useEffect, useState } from "react";

export const useMenu = () => {
  const [menu, setmenu] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetch(`/menu.json`)
      .then((res) => res.json())
      .then((res) => {
        setmenu(res);
        setloading(false);
      });
  }, []);

  return [menu, loading];
};
