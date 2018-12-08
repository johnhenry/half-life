const portionLeft = (halfLife, time, init=1) => {
    if (time) {
        return init / 2 ** (time / halfLife);
    }
    return (time, init = 1) => init / 2 ** (time / halfLife);
}

export { portionLeft };
