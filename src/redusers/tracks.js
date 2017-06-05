const inirialState = [];

export default function tracks(state = inirialState, action) {
  if(action.type === 'ADD_TRACK'){
    return [
      ...state,
      action.payload
    ];
  }else if (action.type === 'FETCH_TRACKS_SECCESS') {
    return action.payload;
  }
  return state;
}
