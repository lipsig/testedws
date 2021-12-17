import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchData } from '../../actions';

import '../../styles/components/grid/grid.css'


const Grid = (props) => {


 useEffect(() => {
  props.dispatch(fetchData());
 }, [])

  

  if(props.isFetching) return <div>carregando...</div>

  return (
    <div className='grid'>  
        {props.myData.map(band =>
          <div className='bandBlock' key={band.id}>
            <div className='imageBlock'>
              <img src={band.image}></img>
            </div>
            <div className='bandInfo'>
              <h3>{band.name}</h3>
              <span>{band.numPlays.toLocaleString('en-US').replaceAll(',','.')} PLAYS</span>
            </div>
          </div>
        )}
  
    </div>
  );

}

const mapStateToProps = ({ things: { myData, isFetching } }) => ({
  myData,
  isFetching
});

export default connect(mapStateToProps)(Grid)
