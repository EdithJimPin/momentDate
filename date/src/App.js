import React, {Fragment} from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment';
import 'moment/locale/es';



function App() {
 
  const today = moment();;
  const date = new Date();
  //Idioma, se cambia en el argumento
  const fechaIdioma = new Intl.DateTimeFormat('es-MX').format(date); //06/4/21
  //Formatos personalizados, usando options
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const fechaLarga = new Intl.DateTimeFormat('es-MX', options).format(date); //martes, 6 de abril de 2021
  options = {
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    timeZone: 'America/Mexico_City',
    //timeZoneName: 'short'
  };
  const fechaNumerica = new Intl.DateTimeFormat('es-MX', options).format(date);
  options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: true,
    timeZone: 'America/Mexico_City'
  };
  const fechaPm = new Intl.DateTimeFormat('es-MX', options).format(date);
  options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
    timeZone: 'America/Mexico_City'
  };
  const fecha24 = new Intl.DateTimeFormat('es-MX', options).format(date);

  return (
    <Fragment>
      <div><h1>Date</h1></div>
      <div><h2></h2></div>
      <label htmlFor="" >
        <Moment>{today}</Moment>
      </label>
      <br/>
      <label htmlFor="">
        <Moment format="YYYY/MM/DD">
          {today}
        </Moment>
      </label>
      <br/>
      <label htmlFor="">
        <Moment format="YYYY/MM/DD hh:mm:ss">
          {today}
        </Moment>
      </label>
      <br/>
      <label htmlFor="">
          <Moment format="YYYY-MM-DD HH:mm">
            {today}
        </Moment>
      </label>
      <br/>
      <label htmlFor="">
          <Moment format="MMMM D YYYY, h:mm:ss a">
            {today}
        </Moment>
      </label>
      <br/>
      <h2>Formato con Intl.DateTimeFormat</h2>
      <label htmlFor="">
          {fechaIdioma}
      </label>
      <br/>
      <label htmlFor="">
          {fechaLarga}
      </label>
      <br/>
      <label htmlFor="">
          {fechaNumerica}
      </label>
      <br/>
      <label htmlFor="">
          {fechaPm}
      </label>
      <br/>
      <label htmlFor="">
          {fecha24}
      </label>

    </Fragment>
  );
}

export default App;
