import React, {Fragment} from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment';
import 'moment/locale/es';



function App() {
 
  const today = moment();

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

    </Fragment>
  );
}

export default App;
