import React, { useState, useEffect } from 'react';
import { handleAuthStateChange } from '@/lib/firebase/auth';
import { User } from 'firebase/auth';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(
    JSON.parse(localStorage!.getItem('currentUser') || 'null')
  );

  useEffect(() => {
    const unsubscribe = handleAuthStateChange((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

  return { currentUser };
};
