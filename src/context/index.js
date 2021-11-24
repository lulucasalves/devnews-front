import React, { createContext } from 'react';

const active = true;

const status = {
  logged: { active },
  name: 'lulucasalves',
};

export const statusContext = createContext(status);
