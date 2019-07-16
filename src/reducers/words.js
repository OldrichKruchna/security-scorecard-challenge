export default function words(state = [], action) {
    switch (action.type) {
      case 'ADD_WORD':
        return state.concat([action.text])
    case 'UPDATE_CURRENT_WORD':
        state[action.currentQuestion] = action.value;

        return [...state];
      default:
        return state
    }
  }