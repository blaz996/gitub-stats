import React, { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { handleAuthStateChange } from '@/lib/firebase/auth';

export const useAuth = () => {
  const ls = JSON.parse(localStorage!.getItem('currentUser') || '');
  const [currentUser, setCurrentUser] = useState<User | null>(ls || null);
  useEffect(() => {
    const unsubscribe = handleAuthStateChange((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  });

  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

  return { currentUser };
};
