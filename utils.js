export const convertDate = (date) => {
    // const editedDate = new Date(date.substr(0, 4) + '-' + date.substr(4, 2) + '-' + date.substr(6));
    return Math.floor(Math.abs(new Date() - new Date(date)) / ( 1000 * 60 * 60)) + 'h';
};