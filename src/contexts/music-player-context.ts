import { createContext, useState } from "react";

const MusicPlayerContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => {}]);

export default MusicPlayerContext;
