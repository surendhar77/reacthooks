const reducer = (count, action) => {
  // if (action.type === "INC") {
  //   return (state = state + 1);
  // }
  // if (action.type === "DEC") {
  //   // return (state = state - 1);
  //   let newNum = 0;
  //   state >= 1 ? (newNum = state - 1) : (newNum = 0);
  //   return newNum;
  // }
  // return state;
   let newCount = 0;
  switch (action.type) {
    case "INC":
      return (count += 1);
    case "DEC":
      count >= 1 ? (newCount = count - 1) : (newCount = 0);
      return newCount;
    default:
      return count;
  }
};

export default reducer;