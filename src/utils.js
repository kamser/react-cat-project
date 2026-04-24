export const getFirstThreeWords = ({ sentence }) => {
  return sentence.split(' ').slice(0, 3).join(' ')
}
