import React, { useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { Javascript } from '@mui/icons-material';

const PocketContext = React.createContext();

const usePocketHookEffect = () => {
  const [pocket, setPocket] = useState([]);

  const saveRestaurant = (item) => {
    let pocketS = window.sessionStorage.getItem('pocketList');
    if(pocketS){
        let pocketO = JSON.parse(pocketS);
        let newPocket = [...pocketO, item];
        let newPocketS = JSON.stringify(newPocket);
        window.sessionStorage.setItem('pocketList', newPocketS);
        console.log(window.sessionStorage.getItem('pocketList'));
        setPocket(newPocket);
    }
    else{
        let newPocket = [item];
        let newPocketS = JSON.stringify(newPocket);
        window.sessionStorage.setItem('pocketList', newPocketS);
        console.log(window.sessionStorage.getItem('pocketList'));
        setPocket(newPocket)
    }
  };

  const deleteRestaurant = (id) =>{
    let pocketS = window.sessionStorage.getItem('pocketList');
    if(pocketS){
        let pocketO = JSON.parse(pocketS);
        let newPocket = pocketO.filter(item=>item.id !== id);
        let newPocketS = JSON.stringify(newPocket);
        window.sessionStorage.setItem('pocketList', newPocketS);
        setPocket(newPocket);
    }
  }

  useEffect(() => {
    const pocketList = window.sessionStorage.setItem('pocketList', JSON.stringify([]));
    setPocket(pocketList);
  }, []);

  return { pocket, saveRestaurant, deleteRestaurant };
};

// Provider component that wraps app and makes themeMode object
export function PocketHookProvider({ children }) {
  const myEffect = usePocketHookEffect();
  return (
    <PocketContext.Provider value={myEffect}>
        {children}
    </PocketContext.Provider>
  );
}

PocketHookProvider.defaultProps = {
  children: null,
};

PocketHookProvider.propTypes = {
  children: PropTypes.node,
};

export const usePocketHook = () => useContext(PocketContext);