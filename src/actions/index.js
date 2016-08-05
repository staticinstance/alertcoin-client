export const selectExchange = (e) => {
  return {
    type: "EXCHANGE_SELECTED",
    payload: e.target.value
  }
}

export const selectPair = (e) => {
  return {
    type: "PAIR_SELECTED",
    payload: e.target.value
  }
}
