export function getDate(date) {
    const time = date.getFullYear()+'-'+0+(date.getMonth()+ 1)+'-'+date.getDate();
    console.log(time);
    return time
}