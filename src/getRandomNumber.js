export const getRandomNum = () => {
    const max = 20, 
        min = 1;

    return Math.floor(Math.random() * (max - min)) + min;
}