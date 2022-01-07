export const modalReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return false;
    case "CLOSE_MODAL":
      return true;
    default:
      return state;
  }
};

