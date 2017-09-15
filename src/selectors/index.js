import {createSelector} from 'reselect'
import {dateToString} from '../utils/dateToString'

const bookedGetter = state => state.slots.booked;
const dateGetter = state => state.order.date;

export const filtratedSlotsSelector = createSelector(bookedGetter, dateGetter, (booked, date) =>{
    let newBooked = {};
    const dateString = dateToString(date);

    if(booked.length) {
        const filterBooked = booked.filter(item => {
            return (item.date === dateString)
        });

        if(filterBooked.length) newBooked = filterBooked
    }
    return newBooked
});

