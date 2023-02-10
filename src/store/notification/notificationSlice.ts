import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Notification = {
  status?: 'success' | 'fail';
  message?: string;
  shown: boolean;
};

type NotificationState = {
  notification: Notification;
};

const initialState: NotificationState = {
  notification: {} as Notification,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notification = action.payload;
    },
    hideNotification: (state) => {
      state.notification = { shown: false };
    },
  },
});

export const { addNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
