export function dateToString(date) {
    const time = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
    console.log('time', time);
    return time
}