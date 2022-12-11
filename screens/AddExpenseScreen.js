import React,{useState,useRef} from 'react';
import {Text,View,StyleSheet,Platform,Alert} from 'react-native';
import {Button,Modal} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {addExpense} from '../store';
import {useDispatch,useSelector} from 'react-redux';
import {BackgroundImage} from '../components';
import { RETextInput } from '../components/RETextInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DatePicker, {getToday} from 'react-native-modern-datepicker';


export const AddExpenseScreen = (props) => {
    const dispatch = useDispatch();
    const [name,setNameValue] = useState('');
    const [amount,setAmount] = useState('');
    
    const calendarRef = useRef(null);
    const [datePicker, showDatePicker] = useState(false);
    const [calendarDate, setCalendarDate] = useState(getToday());
    const [calendarOffset, setCalendarOffset] = useState({
        x: 0,
        y: 0,
      });


    const {goBack} = useNavigation();
    const styles = makeStyles();

    const onNameChange = (text) => {
        setNameValue(text);
    }
    const onAmountChange = (text) => {
        setAmount(text);
    }
    
    const addExpenseClick = () => {
        dispatch(addExpense({name,amount:Number(amount),date:calendarDate}));
        Alert.alert(
            "",
            "Data Added",
            [
              { text: "OK" }
            ]
          );
    }

    const onPress= () =>{
        console.log('Icon pressed');
        if (datePicker) {
            // just clear out these values
            showDatePicker(false);
          }
          if (!datePicker) {
            showDatePicker(true);
          }
        
    }

    const onDismiss = ()=>{
        showDatePicker(false)
    }

    const onSelectedDateChange = (date) => {
        setCalendarDate(date);
    }

    const onDateTextChange = (text) => {
        setCalendarDate(text);
    }
    
    return (

    <BackgroundImage style={styles.container}>
        <KeyboardAwareScrollView 
            contentContainerStyle={styles.keyboardAwareScrollViewStyle}>
                <View style={{flexDirection:'row',marginTop:84,justifyContent:'space-between',paddingHorizontal:24}}>
                    <Text onPress={() => {goBack()}}>Go Back</Text>
                    <Text style={{color:'white'}}>Add Expense</Text>
                    <Text>Icons</Text>
                </View>
            <View style={styles.formContainer}>
                <Text style={styles.fieldTextStyles}>Name</Text>
                <RETextInput
                onChangeText={onNameChange}
                value={name}
                />
                <Text style={styles.fieldTextStyles}>Amount</Text>
                <RETextInput
                onChangeText={onAmountChange}
                value={amount}
                />
                <Text style={styles.fieldTextStyles}>Date</Text>
                <View ref={calendarRef}>
                <RETextInput
                showDateIcon
                onDateIconPress = {onPress}
                value={calendarDate}
                onChangeText={onDateTextChange}
                />
                </View>
            </View>

            <Button 
            buttonColor='#438883'
            style={styles.addExpenseButtonStyle}
            onPress={addExpenseClick}
            >
            <Text style={{color:'white'}}>Add</Text>
            </Button>
            {true && (
            <Modal
            dismissable
            visible={datePicker}
            onDismiss={onDismiss}
            contentContainerStyle={{paddingHorizontal:25}}
            >
              <DatePicker
                onDateChange={onSelectedDateChange}
                mode="calendar"
                current={calendarDate}
                selected={calendarDate}
              />
              </Modal>
        )}
        </KeyboardAwareScrollView>
    </BackgroundImage>
    );
}

const makeStyles = () => StyleSheet.create({
    container:{
        backgroundColor:"#E5E5E5",
    },
    formContainer:{
        paddingHorizontal:20,
        paddingTop:6,
        paddingBottom:30,
        backgroundColor:'#FFFFFF',
        borderRadius:20,
        borderColor:'black',
        alignSelf:'stretch',
        marginTop:56,
    },
    textInputStyles:{
        borderWidth:1.4,
        borderRadius:8,
        borderColor:'#438883',
        height:50,
        alignSelf:'stretch',
    },
    fieldTextStyles:{
        color:'#666666',
        marginTop:24,
        marginBottom:10,
        textTransform:'uppercase',
    },
    keyboardAwareScrollViewStyle:{
        flex:1,
        paddingHorizontal:28,
    },
    addExpenseButtonStyle:{
        marginTop:16,
    },
    menuContentContainer:{
        paddingVertical: 0,
        borderRadius: 8,
        minWidth: 290,
    }
})

