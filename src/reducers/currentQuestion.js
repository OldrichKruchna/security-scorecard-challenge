export default function currentQuestion(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      case 'SET':
        return state = action.index;
      default:
        return state;
    };
};
