import React,{useState} from 'react';
import {StyleSheet,TextInput,TouchableOpacity,View,} from 'react-native';
import {DateIcon} from '../Icons';

export const RETextInput = (props) => {
    const styles = makeStyles();
    const [isFocused,setIsFocused] = useState(false);
    const onChangeText = (txt) => {
        if(props.onChangeText){
            props.onChangeText(txt);
        }
    };
    const onBlur = () => {
        setIsFocused(false);
        if(props.onBlur){
            props.onBlur();
        }
    }
    const onFocus = () => {
        setIsFocused(true);
        if(props.onFocus){
            props.onFocus();
        }
    };

    const onDateIconPress = () => {
        props.onDateIconPress();
    };

    return (
        <View style={{justifyContent:'center'}}>
            <TextInput
            {...props}
            style={[styles.textInputStyles,props.style,isFocused && styles.inputFocusStyle]}
            editable
            onChangeText={onChangeText}
            value={props.value}
            onFocus={onFocus}
            onBlur={onBlur}
            />
            {props.showDateIcon &&  (<TouchableOpacity style={styles.dateIconStyle} onPress={onDateIconPress}>
                                        <DateIcon />
                                    </TouchableOpacity>)
            }
        </View>
    )
}

const makeStyles = () => StyleSheet.create({
    textInputStyles:{
        borderWidth:1.4,
        borderRadius:8,
        borderColor:'#DDDDDD',
        height:50,
        alignSelf:'stretch',
        paddingHorizontal:20,
    },
    inputFocusStyle:{
        borderColor:'#438883',
    },
    dateIconStyle:{
        position:"absolute",
        right:15,
    },
});

