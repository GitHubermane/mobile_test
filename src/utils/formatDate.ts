const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
]

export const formatDate = (date: number | Date) => {
    let dateObj
    //  Если передано число, то превращаем его в объект
    if (typeof date === "number") {
        dateObj = new Date(date)
    } else {
        dateObj = date
    }
    
    const day = dateObj.getDate()
    const month = monthNames[dateObj.getMonth()]
    const year = dateObj.getFullYear()

    return `${day} ${month}, ${year}`
}