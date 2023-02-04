const nextElementInList = (list, value) => {
    let actions = list;
    let currentActionIndex = actions.indexOf(value);
    let nextActionIndex = (currentActionIndex + 1) % list.length;
    return actions[nextActionIndex];
};
export default nextElementInList;
