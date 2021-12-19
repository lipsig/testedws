import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchData2 } from '../../../../actions/band';
import { fetchAlbum } from '../../../../actions/albuns';
import { Link } from "react-router-dom";
import '../../../../styles/components/grid/internal/internal.css'
import Album from './album';


const Internal = (props) => {

  const location = useLocation()
  const query = new URLSearchParams(location.search);
  const token = query.get('item')

  useEffect(() => {
    props.dispatch(fetchData2(token));
  }, [])

  function textHandler(text) {
    const el = document.createElement("html");
    el.innerHTML = text;
    const anchors = el.getElementsByTagName("a");
    if (anchors.length > 0)
      return anchors[0].href
    else {
      return ''
    }
  }


  if (props.isFetching2) return <div>carregando...</div>

  return (
    props.bandInternal.image != undefined ?
      <div id='internal'>
        <div id='coverImage' style={{ backgroundImage: `url(${props.bandInternal?.image})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 300px', backgroundPosition: 'center', backgroundPositionY: '-1vh', height: '55vh' }}>
          <div id='basicInfo'>
            <h3>{props.bandInternal?.name}</h3>
            <div id='infoContent'>
              <span id='genre'>{props.bandInternal?.genre}</span>
              <img id='profileBand' src={props.bandInternal?.image} alt={props.bandInternal?.name} />
              <span id='numPlays'>{props.bandInternal?.numPlays?.toLocaleString('pt-PT').replaceAll(',', '.')} PLAYS</span>
            </div>
          </div>
        </div>
        <div id="description">
          <p>{props.bandInternal.biography.replace(/<\/?a[^>]*>/g, "")}</p>
          {textHandler(props.bandInternal.biography) != '' ? (<a style={{ marginTop: '10px' }} href={textHandler(props.bandInternal.biography)}>Pagina da Banda Last FM</a>) : null}
        </div>
        <hr>
        </hr>
        <h3>Albums</h3>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          {props.bandInternal.albums?.map(
            item =>
              <Album id={item}></Album>
          )}
        </div>

      </div> : <div>carregando</div>
  );

}

const mapStateToProps = ({ band: { bandInternal, isFetching2 } }) => ({
  bandInternal,
  isFetching2
});

export default connect(mapStateToProps)(Internal)
