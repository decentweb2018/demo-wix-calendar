/****************************************************/
/************* Get Token on SecureStore *************/
/****************************************************/
/*
    import * as SecureStore from "expo-secure-store";
    const getToken = async () => {
        const token = await SecureStore.getItemAsync('token');
        console.log("getToken() =>", token)
    }
    dispatch(getToken);
*/

/****************************************************/
/*********** CalendarScreen > DayComponent **********/
/****************************************************/
/*
    <Calendar
        hideExtraDays
        onDayPress={onDayPress}
        theme={CalendarStyles}
        firstDay={1}
        markingType={'custom'}
        markedDates={{
            [currentDate]: {
                marked: true,
                dotColor: THEME.INDIGO_COLOR,
                customStyles: {
                    text: {fontFamily: 'Inter-SemiBold',}
                },
            },
        }}
        dayComponent={(props) => (
            <DayComponent {...props}
                          navigation={navigation}
            />)}
    />
*/

