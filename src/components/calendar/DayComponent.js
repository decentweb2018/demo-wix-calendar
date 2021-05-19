import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Today from "./Today";
import EmptyDay from "./EmptyDay";
import JobLogMissing from "./JobLogMissing";
import JobLogFilled from "./JobLogFilled";
import FullyAvailable from "./FullyAvailable";
import NotAvailable from "./NotAvailable";
import PartlyAvailable from "./PartlyAvailable";
import NotAvailableSickLeave from "./NotAvailableSickLeave";
import NotAvailableOtherReason from "./NotAvailableOtherReason";
import NewJobOffer from "./NewJobOffer";
import MultipleJobOffer from "./MultipleJobOffer";
import AcceptedJobOffer from "./AcceptedJobOffer";
import OfferIgnored from "./OfferIgnored";
import OfferDeclined from "./OfferDeclined";

const DayComponent = ({date, state, marking, navigation}) => {

    const onDayPress = day => {
        navigation.navigate("JobOffer", {date: day})
    };

    /*   useEffect(() => {
           console.log(`${date.day} => state => ${state}`);
           console.log(`${date.day} => marking => ${marking}`)
       }, [])*/

    switch (state) {
        case 'today': {
            return <Today date={date} onPressCallback={onDayPress}/>
        }
        case 'JobLogMissing': {
            return <JobLogMissing date={date} onPressCallback={onDayPress}/>
        }
        case 'JobLogFilled': {
            return <JobLogFilled date={date} onPressCallback={onDayPress}/>
        }
        case 'FullyAvailable': {
            return <FullyAvailable date={date} onPressCallback={onDayPress}/>
        }
        case 'PartlyAvailable': {
            return <PartlyAvailable date={date} onPressCallback={onDayPress}/>
        }
        case 'NotAvailable': {
            return <NotAvailable date={date} onPressCallback={onDayPress}/>
        }
        case 'NotAvailableSickLeave': {
            return <NotAvailableSickLeave date={date} onPressCallback={onDayPress}/>
        }
        case 'NotAvailableOtherReason': {
            return <NotAvailableOtherReason date={date} onPressCallback={onDayPress}/>
        }
        case 'NewJobOffer': {
            return <NewJobOffer date={date} onPressCallback={onDayPress}/>
        }
        case 'MultipleJobOffer': {
            return <MultipleJobOffer date={date} onPressCallback={onDayPress}/>
        }
        case 'AcceptedJobOffer': {
            return <AcceptedJobOffer date={date} onPressCallback={onDayPress}/>
        }
        case 'OfferIgnored': {
            return <OfferIgnored date={date} onPressCallback={onDayPress}/>
        }
        case 'OfferDeclined': {
            return <OfferDeclined date={date} onPressCallback={onDayPress}/>
        }
        default: {
            return <EmptyDay date={date} onPressCallback={onDayPress}/>
        }
    }
}

DayComponent.propTypes = {
    date: PropTypes.any,
    state: PropTypes.any,
    marking: PropTypes.any,
    navigation: PropTypes.object,
}

export default React.memo(DayComponent)