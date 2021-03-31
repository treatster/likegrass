// If flag exists then return value, else return false
window.Flag = function (Fnam) {
    if (State.variables.Flags == undefined) {
        State.variables.Flags = {};
    } else if (State.variables.Flags[Fnam.toLowerCase()] !== undefined) {
        return State.variables.Flags[Fnam.toLowerCase()];
    };
    return false;
};