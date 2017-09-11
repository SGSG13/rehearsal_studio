export function mapToArr(obj) {
    return Object.keys(obj).map(id => obj[id])
}