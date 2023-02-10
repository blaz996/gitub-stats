import { configureStore } from '@reduxjs/toolkit';
import notificationSlice from './notification/notificationSlice';

export const store = configureStore({
  reducer: { notification: notificationSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
