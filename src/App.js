import React, {Component} from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap';
import Rock from './components/Rock';
import './css/style.css';

class App extends Component {
    constructor(props){
        super(props);        
        this.state = {
          contador: 0
        };
        this.displayScene = 'none'
      }

      onClickHandler(_index) {
        this.setState({
          contador: _index
        })
        this.displayScene = 'block'
      }

      render() {
        const rockIndex = this.state.contador
        return(
            <div>
            <div style={fullScreen}>
                <div style={centeredVert}>
                <ButtonToolbar>
                    <Button variant="primary" size="lg" onClick={ () => this.onClickHandler(0) }>River Thames</Button>
                    <Button variant="primary" size="lg" onClick={ () => this.onClickHandler(1) }>Prospect Cottage and Garden</Button> 
                    <Button variant="primary" size="lg" onClick={ () => this.onClickHandler(2) }>Acropolis</Button>  
                    <Button variant="primary" size="lg" onClick={ () => this.onClickHandler(3) }>Jokulsarlon</Button>  
                    </ButtonToolbar>
                </div>
            </div>

            <div style={{display:this.displayScene}}>
              <Rock data = {rockIndex} />        
            </div>  
         </div>
        )
      }
}

export default App

const fullScreen = {
  display:'block',
  height: '100vh'  
}

const centeredVert = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}
