//Actions are functions that return an object with a 'type/name' property
const question = () => {
  return {
    type: 'ADD QUESTION'
  }
}
const answer = () => {
  return {
    type: 'ADD ANSWER'
  }
}
const report = () => {
  return {
    type: 'REPORT'
  }
}