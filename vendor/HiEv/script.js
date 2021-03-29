// If flag exists then return value, else return false
window.Flag = function (Fnam) {
    if (State.variables.Flags == undefined) {
        State.variables.Flags = {};
    } else if (State.variables.Flags[Fnam.toLowerCase()] !== undefined) {
        return State.variables.Flags[Fnam.toLowerCase()];
    };
    return false;
};

//custom save titles
Config.saves.onSave = function (save, details) {
    if (details.type === "slot") {
        save.title = prompt("Enter Save Slot Title:", save.title);
    }
};