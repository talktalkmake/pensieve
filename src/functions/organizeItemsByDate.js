function organizeItemsByDate(items) {
    return items.sort((a, b) => a.date.getTime() - b.date.getTime());
}
export default organizeItemsByDate