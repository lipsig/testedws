import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchData } from '../../actions';
import '../../styles/components/grid/grid.css'
import { Link } from "react-router-dom";

const Grid = (props) => {


 useEffect(() => {
  props.dispatch(fetchData());
 }, [])

 //function handleClick(id){
  // props.history.push('/interna/'+id)
 //}
  

  if(props.isFetching) return <div>carregando...</div>
 
  return (
    <div className='grid'>  
        <div id='result'>
          <div id='counter'>
           <span>{props.myData.length} Resultados</span> 
          </div>
          <div id='sorter'>
              <button id='sorterButton'></button>
          </div>
         
        </div>
          {props.myData.map(band =>
           <a key={band.id} href={`/internal?item=`+band.id}>
            <div className='bandBlock'>
              <div className='imageBlock'>
                <img src={band.image}></img>
              </div>
              <div className='bandInfo'>
                <h3>{band.name}</h3>
                <span>{band.numPlays.toLocaleString('en-US').replaceAll(',','.')} PLAYS</span>
              </div>
            </div>
            </a>
          )}  
    </div>
  );

}

const mapStateToProps = ({ things: { myData, isFetching } }) => ({
  myData,
  isFetching
});

export default connect(mapStateToProps)(Grid)
