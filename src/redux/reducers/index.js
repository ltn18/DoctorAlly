const initState = {
  messagePanelVisible: false,
  chattingUser:null
};
export default (state = initState, action) => {
  switch (action.type) {
    case 'SHOW_MESSAGE_PANEL':
      return {
        ...state,
        messagePanelVisible: true,
        chattingUser:action.user
      };
    case 'HIDE_MESSAGE_PANEL':
      return {
        ...state, 
        messagePanelVisible: false,
        chattingUser:null
      }
    default:
      return state;
  }
};