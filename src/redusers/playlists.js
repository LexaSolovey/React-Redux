const inirialState = [
  'my home playlist',
  'my work playlist'
];

export default function playlist(state = inirialState, action) {
  if(action.type === 'ADD_PLAYLIST'){
    return state;
  } else if (action.type === 'DELETE_PLAYLIST') {
    return state;
  }
  return state;
}
