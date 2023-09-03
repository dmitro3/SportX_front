import React, { createContext, useContext, useState, ReactNode } from 'react';
import { getUserData } from '../api/get-user-data';
import { useUserContext } from './auth-context';

type TabData = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  fetchData: () => void;
};

const TabDataContext = createContext<TabData | undefined>(undefined);

export const useTabData = (): TabData => {
  const context = useContext(TabDataContext);
  if (!context) {
    throw new Error('useTabData must be used within a TabDataProvider');
  }
  return context;
};

interface TabDataProviderProps {
  children: ReactNode;
}

export const TabDataProvider: React.FC<TabDataProviderProps> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState<string>('Home');
  const { setUser } = useUserContext();

  const fetchData = async () => {
    // Perform your data fetching logic here
    try {
      const userMe = await getUserData();

      setUser(userMe.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <TabDataContext.Provider
      value={{
        selectedTab,
        setSelectedTab,
        fetchData,
      }}
    >
      {children}
    </TabDataContext.Provider>
  );
};
