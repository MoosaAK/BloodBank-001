import React from 'react';
import { Text, View, TouchableHighlight ,StyleSheet, Image} from 'react-native';
import { connect } from 'react-redux';
import {mark} from './redux/actions/action'
import noPhotoAvailable from './assets/noPhotoAvailable.png';
class Mark extends React.Component {
    markattendance(){
        const {fullName,rollNo,section} = this.props.item
        const url = this.props.item.url || ''
        this.props.mark(fullName,rollNo,section,url)
    }


    
    render() {
        let {fullName,rollNo,section,url}=this.props.item;
        
        return (
            <View style={{ flex: 1 }}>
                
                <TouchableHighlight style={{ backgroundColor:'#F5F5F5',flexDirection:'row', borderColor :'black', borderWidth: 1 , flexWrap : 'wrap', padding: 2,justifyContent : 'space-between' }}  onPress = {this.markattendance.bind(this)}>
                    <View style = {{flexDirection : 'row', }}>
                        <View style={{justifyContent:'center'}} >
                            {(url !== undefined && url !== null && url !== '')
                        ?<Image style={{width: 80,height:80, alignSelf:'center', borderRadius:80}} source={{uri:url}}/>
                    :<Image style={{width: 80,height:80, alignSelf:'center', borderRadius:80}} source={noPhotoAvailable}/>}
                        </View>
                        <View style={{padding:2, marginLeft:10}}>
                    <Text style={{ fontSize:22 }}>{fullName}</Text>
                    <Text style={{ fontSize:17 }}>{rollNo}</Text>
                    <Text style={{ fontSize:17,fontStyle:'italic',color:'blue' }}>{section}</Text>
                    </View></View>
                </TouchableHighlight>
            </View>
        )
    }
}

function mapStateToProps(states) {
    return ({
        // breakFast: states.foodInfo.breakFast
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        mark : (fullName,rollNo,section,url)=>{
            dispatch(mark(fullName,rollNo,section,url))
        }
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Mark)
const styles = StyleSheet.create({
    
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
      },
      signupButton: {
        backgroundColor: "#FF4DFF",
      },
      signUpText: {
        color: 'white',
      }
})
















