export const increment = (multiply) => {
    return { type: 'INCREMENT', payload: multiply }
}

export const decrement = () => {
    return { type: 'DECREMENT' }
}