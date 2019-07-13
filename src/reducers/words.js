export default function words(state = [], action) {
    switch (action.type) {
      case 'ADD_WORD':
        return state.concat([action.text])
    case 'UPDATE_WORD':
        // TODO
        throw new Error('Not implemented');
      default:
        return state
    }
  }