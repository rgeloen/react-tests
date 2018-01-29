import React, { Component } from 'react';

class TodoCard extends Component{
  constructor(props, context) {
    super(props, context);
    this.createTasks = this.createTasks.bind(this);

    render(){
      return(
        <div className="card-sheet">
          <h1 className="card-sheet-title">test</h1>
          <h2 className="card-sheet-date"> 02/02/1998</h2>
          <p className="card-sheet-description">restdyfu!içào)içu!yèt§fdf!èçyàuç)iuçyà!tgèfrdfg!uçài)àu)çy!tègf§!èghyàçu)iuy!çtèy!àuççyà!çtè!§ètyazeazeazeazezesrdtfyguiçoàazeaèçyàuç)iuçyà!tgèfrdfg!uçài)àu)çydfg!uçài)àu)çyèçyàuç)iuçyà!tgèfrdfg!uçài)àu)çy </p>
        </div>
      )
    }
}
