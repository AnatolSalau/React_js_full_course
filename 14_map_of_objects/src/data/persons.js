import data from "./persons-data.json";

const persons = () => {
    const arr = [];
    arr.push(...data);
    return arr;
}

export default persons();