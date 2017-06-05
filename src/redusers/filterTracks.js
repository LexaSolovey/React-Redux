const inirialState = '';

export default function filterTracks(state = inirialState, action) {
  if(action.type === 'FIND_TRACK'){
    return action.payload;
  }
  return state;
}
