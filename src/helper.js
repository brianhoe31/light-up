function swap(state) {
    if (state === "on") {
        return "off";
    } else {
        return "on";
    }
}

export { swap };