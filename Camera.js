import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {connect} from 'react-redux'
class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front,
    flash : Camera.Constants.FlashMode.off
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }


  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} flashMode={this.state.flash} ratio='1:1' ref={ref => {
                        this.camera = ref;}}>
            <View style={{
                flex: 7,}}></View><View
              style={{
                flex: 1,
                backgroundColor: 'black',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    flash:
                      this.state.flash === Camera.Constants.FlashMode.off
                        ? Camera.Constants.FlashMode.on
                        : Camera.Constants.FlashMode.off,
                  });
                }}>
                  
               {
                 ( this.state.flash === Camera.Constants.FlashMode.off) 
                
                 ?<MaterialIcons
                        name= "flash-off"
                        color="white"
                        size={30}
                />
                :<MaterialIcons
                name= "flash-on"
                color="white"
                size={30}
        />
               }
              </TouchableOpacity>
              <TouchableOpacity style={{
                                flex: 1,
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }} onPress={
                                async () => {
                                    if (this.camera) {
                                      let photo = await this.camera.takePictureAsync()
                                      
                                        this.props.navigation.navigate('Preview')
                                        this.props.sendUri(photo.uri)
                                        console.log(photo.uri)

                                    }
                                }
                            }>
                                <MaterialIcons
                        name="camera"
                        color="white"
                        size={50}
                              />  
                            </TouchableOpacity>
                            <TouchableOpacity
                style={{
                  flex: 1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Ionicons
                        name="md-reverse-camera"
                        color="white"
                        size={30}
                    />
                    
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

function mapDispatchToProps(dispatch){
  return({
    sendUri : (uri)=>{
     console.log("hih")
      dispatch({type:'URI', payload:uri})
    }
  })
}
function mapStateToProps(state){
  return({
    imageUri : state.basicInfo.uri
  })
}
export default connect (mapStateToProps,mapDispatchToProps)(CameraExample)