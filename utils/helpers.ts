export const convertDate = (date: string) => {
    const splitDate = date.split('/')
    const day = splitDate[0]
    const month = splitDate[1]
    const year = splitDate[2]

    return new Date(`${year}-${month}-${day}`)
}