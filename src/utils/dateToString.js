export function dateToString(date) {
    const time = date.getFullYear() + '' + (date.getMonth() + 1) + '' + date.getDate();
    console.log('time', time);
    return time
}