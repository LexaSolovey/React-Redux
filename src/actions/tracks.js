var nockApiData = [
  {
    id: 1,
    name:'my home track'
  },
  {
    id: 2,
    name:'Smells like teen spirit'
  },
  {
    id: 3,
    name:'Scar tissue'
  },
  {
    id: 4,
    name:'Ill Ray(The King)'
  },
  {
    id: 5,
    name:'Doberman'
  }
];
export const getTracks = () => dispatch => {
    setTimeout(() =>{
      console.log('I got tracks');
      dispatch({type: 'FETCH_TRACKS_SECCESS', payload: nockApiData })
    }, 2000)
}
