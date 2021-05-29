import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { HeroContext } from "@core/context";

export const Fight = () => {
  const history = useHistory();

  const { selectedHero } = useContext(HeroContext);
  useEffect(() => {
    if (!selectedHero?.id) {
      history.push("/");
    }
  }, []);
  return <div>{selectedHero?.hero}</div>;
};
