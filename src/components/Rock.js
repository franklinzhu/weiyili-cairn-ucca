import 'aframe';
import React, { Component } from 'react';

const rock_path_1 = require('../../assets/01.jpg');
const rock_path_2 = require('../../assets/02.jpg');
const rock_path_3 = require('../../assets/03.jpg');
const rock_path_4 = require('../../assets/04.jpg');
const model_path_1 = require('../../assets/rock1.obj');
const model_path_2 = require('../../assets/rock2.obj');
const model_path_3 = require('../../assets/rock3.obj');
const model_path_4 = require('../../assets/rock4.obj');

class Rock extends Component {
	constructor(props) {
		super(props);
	}
	
	render () {
	
		if(this.props.data == 0){
			return (
				<a-scene >
					<a-assets>
						<img id="rock1Tex" src={rock_path_1}/>
						<img id="rock2Tex" src={rock_path_2}/>
						<img id="rock3Tex" src={rock_path_3}/>
						<img id="rock4Tex" src={rock_path_4}/>
						<a-asset-item id="rock1" src={model_path_1}></a-asset-item>
						<a-asset-item id="rock2" src={model_path_2}></a-asset-item>
						<a-asset-item id="rock3" src={model_path_3}></a-asset-item>
						<a-asset-item id="rock4" src={model_path_4}></a-asset-item>
					</a-assets>
	
					<a-entity
					material = "src: #rock1Tex"
					obj-model="obj: #rock1"
					scale="0.2 0.2 0.2"/>
	
					<a-entity primitive="a-camera"></a-entity>
				</a-scene>
			);
		}
		if(this.props.data == 1){
			return (
				<a-scene >
					<a-assets>
						<img id="rock1Tex" src={rock_path_1}/>
						<img id="rock2Tex" src={rock_path_2}/>
						<img id="rock3Tex" src={rock_path_3}/>
						<img id="rock4Tex" src={rock_path_4}/>
						<a-asset-item id="rock1" src={model_path_1}></a-asset-item>
						<a-asset-item id="rock2" src={model_path_2}></a-asset-item>
						<a-asset-item id="rock3" src={model_path_3}></a-asset-item>
						<a-asset-item id="rock4" src={model_path_4}></a-asset-item>
					</a-assets>
	
					<a-entity
					material = "src: #rock2Tex"
					obj-model="obj: #rock2"
					scale="0.2 0.2 0.2"/>
	
					<a-entity primitive="a-camera"></a-entity>
				</a-scene>
			);
		}
		if(this.props.data == 2){
			return (
				<a-scene >
					<a-assets>
						<img id="rock1Tex" src={rock_path_1}/>
						<img id="rock2Tex" src={rock_path_2}/>
						<img id="rock3Tex" src={rock_path_3}/>
						<img id="rock4Tex" src={rock_path_4}/>
						<a-asset-item id="rock1" src={model_path_1}></a-asset-item>
						<a-asset-item id="rock2" src={model_path_2}></a-asset-item>
						<a-asset-item id="rock3" src={model_path_3}></a-asset-item>
						<a-asset-item id="rock4" src={model_path_4}></a-asset-item>
					</a-assets>
	
					<a-entity
					material = "src: #rock3Tex"
					obj-model="obj: #rock3"
					scale="0.2 0.2 0.2"/>
	
					<a-entity primitive="a-camera"></a-entity>
				</a-scene>
			);
		}
		if(this.props.data == 3){
			return (
				<a-scene >
					<a-assets>
						<img id="rock1Tex" src={rock_path_1}/>
						<img id="rock2Tex" src={rock_path_2}/>
						<img id="rock3Tex" src={rock_path_3}/>
						<img id="rock4Tex" src={rock_path_4}/>
						<a-asset-item id="rock1" src={model_path_1}></a-asset-item>
						<a-asset-item id="rock2" src={model_path_2}></a-asset-item>
						<a-asset-item id="rock3" src={model_path_3}></a-asset-item>
						<a-asset-item id="rock4" src={model_path_4}></a-asset-item>
					</a-assets>
	
					<a-entity
					material = "src: #rock4Tex"
					obj-model="obj: #rock"
					scale="0.2 0.2 0.2"/>
	
					<a-entity primitive="a-camera"></a-entity>
				</a-scene>
			);
		}
		
	}

}

export default Rock;




