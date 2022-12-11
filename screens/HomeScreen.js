import React,{useState} from  'react';
import {useNavigation,} from '@react-navigation/native';
import {View,Text,StyleSheet,TouchableOpacity,LayoutAnimation,FlatList} from 'react-native';
import {AddExpenseIcon,BellIcon} from '../Icons';
import {BackgroundImage} from '../components';
import {Entypo,Feather} from '@expo/vector-icons';
import {useSelector} from 'react-redux';


export const HomeScreen = (props) => {
    const {navigate} = useNavigation();
    const [isShowBalance,setIsShowBalance] = useState(true);
    const styles = makeStyles();
    const data = useSelector(state => [...state.expenses]);

    // On Press of Add Expense button.
    const  onPress = () => {
        navigate('AddExpenses');
    };

    // on TotalBalance click.
    const onShowBalanceClick = () =>{
        setIsShowBalance(!isShowBalance);
        LayoutAnimation.easeInEaseOut();
    }

    // FlatList Items tro render.
    const renderItem = ({item}) => {
        console.log(item);
        return(
        <View style={styles.flatListItem}>
            <View>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.nameText}>latestDate is:{item.date}</Text>
            </View>
            <Text style={styles.amountText}>{item.amount}</Text>
        </View>
        )
    }
    return (
        <BackgroundImage style={styles.backgroundImageContainer}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                    <Text style={styles.headingText}>
                        Good Afternoon,
                    </Text>
                    <Text style={styles.userNameText}>
                        Jitesh Keshwani
                    </Text>
                    </View>
                    <TouchableOpacity>
                    <BellIcon/>
                    </TouchableOpacity>
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.cardContent}>
                        <View style={styles.totalBalanceContainer}>
                            <View style={styles.cardContentHeight}>
                                <TouchableOpacity 
                                    style={styles.balanceButtonStyles} activeOpacity={0.2} 
                                    onPress={onShowBalanceClick}
                                    >
                                    <Text style={styles.totalBalanceTextStyle}>Total Balance</Text>
                                    <Entypo name={`${isShowBalance?'chevron-small-up':'chevron-small-down'}`} size={24} color={'#EEEEEE'}/>
                                </TouchableOpacity>
                                {isShowBalance && 
                                    <Text style={styles.totalBalanceAmount}>
                                        $2,548.00
                                    </Text>
                                }
                            </View>
                            <TouchableOpacity>
                            <Entypo name="dots-three-horizontal" size={24} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.incomeExpensesContainer}>
                            <View>
                                <View style={styles.incomeExpensesTextContainer}>
                                    <Feather name="arrow-down-circle" size={24} color="#FFFFFF" style={{marginRight:6}}/>
                                    <Text style={styles.incomeExpenseText}>Income</Text>
                                </View>
                                <Text style={styles.incomeExpenseAmount}>
                                    $ 0.00
                                </Text>
                            </View>
                            <View>
                                <View style={styles.incomeExpensesTextContainer}>
                                    <Feather name="arrow-up-circle" size={24} color="#FFFFFF" style={{marginRight:6}}/>
                                    <Text style={styles.incomeExpenseText}>Expenses</Text>
                                </View>
                                <Text style={styles.incomeExpenseAmount}>
                                    {data.reduce((prev,curr)=> {
                                        return {amount:curr.amount + prev.amount}
                                    },{amount:0}).amount}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.listTextContainer}>
                        <Text style={styles.transactionText}>Transaction History</Text>
                    </View>
                    {/* <View style={styles.flatListContainer}> */}

                        <FlatList
                        style={styles.flatListContainer}
                        keyExtractor={(item,index) => `${item}-${index}`}
                        data={data}
                        renderItem={renderItem}
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                        />
                    {/* </View> */}
                </View>
                <View style={styles.addExpenseButtonStyle}>
            <TouchableOpacity
                style={styles.buttonStyles}
                onPress={onPress}
                activeOpacity={0.8}
                >
                    <AddExpenseIcon/>
            </TouchableOpacity>
            </View >
            </View>
        </BackgroundImage>
    );
}

const makeStyles = () => StyleSheet.create({
    backgroundImageContainer:{
        backgroundColor:'#E5E5E5',
    },
    cardContainer:{
        marginTop:33,
        paddingHorizontal:20,
    },
    container:{
        flex:1,
    },
    buttonStyles:{
        width:75,
        height:75,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#438883",
    },
    header:{
        flexDirection:'row',
        marginTop:84,
        justifyContent:'space-between',
        paddingHorizontal:24,
    },
    headingText:{
        color:'#FFFFFF',
        fontSize:14,
        lineHeight:17
    },
    userNameText:{
        color:'#FFFFFF',
        fontSize:20,
        lineHeight:24,
    },
    cardContent:{
        borderRadius:20,
        backgroundColor:'#2F7E79',
        alignSelf:'stretch',
        height:201,
        paddingTop:25,
        paddingHorizontal:20,
    },
    totalBalanceContainer:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:"space-between",
    },
    cardContentHeight:{
        height:43,
    },
    balanceButtonStyles:{
        marginBottom:8,
        flexDirection:'row',
        alignItems:'center',
    },
    totalBalanceTextStyle:{
        color:'#FFFFFF',
        fontSize:16,
        lineHeight:19
    },
    totalBalanceAmount:{
        color:'#FFFFFF',
        fontSize:30,
        lineHeight:36
    },
    incomeExpensesContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:55
    },
    incomeExpensesTextContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    incomeExpenseAmount:{
        color:'#FFFFFF',
        lineHeight:24,
        fontSize:20,
        marginTop:8,
        paddingLeft:5,
    },
    incomeExpenseText:{
        color:'#D0E6E4',
        fontSize:16,
        lineHeight:19,
    },
    listContainer:{
        flexGrow:1,
        maxHeight:300,
        paddingHorizontal:22,
        marginTop:30,
    },
    listTextContainer:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
    },
    flatListContainer:{
        marginTop:24
    },
    flatListItem:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:15,
    },
    addExpenseButtonStyle:{
        alignItems:'center',
    },
    transactionText:{
        color:'#222222',
        fontSize:18,
        lineHeight:22,
    },
    seeAllText:{
        color:'#222222',
        fontSize:14,
        lineHeight:17,
    },
    nameText:{
        fontSize:18,
        lineHeight:22,
    },
    amountText:{
        fontSize:18,
        lineHeight:22,
    }
});