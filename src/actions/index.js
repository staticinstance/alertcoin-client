export const selectExchange = (e) => ({
  type: "EXCHANGE_SELECTED",
  payload: e.target.value
})

export const selectPair = (e) => ({
  type: "PAIR_SELECTED",
  payload: e.target.value
})
