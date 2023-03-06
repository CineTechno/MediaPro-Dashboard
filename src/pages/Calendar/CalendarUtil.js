import dayjs from "dayjs";

const getMonth = () => {
    const year = dayjs().year()
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day()
}