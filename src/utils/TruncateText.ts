//Truncate text
export const TruncateText = (text: string, maxLength: number) => {
  if (text) {
    let allText = text.split(" ") //turn text to an array
    if (text.length > maxLength) {
      //found some long text
      let newText
      for (let i = allText; i.join(" ").length >= maxLength; i.pop()) {
        //pop (remove) one element if the total string length is more than maxLength
      }
      newText = allText.join(" ")
      return `${newText} ...`
    } else {
      return text
    }
  } else {
    return text
  }
}
