export const cleanTags = (tags?: string) => {
  //remove sqaure braces.
  if (tags && tags?.length > 2) {
    let tag = tags?.replaceAll(`["`, "")
    tag = tag?.replaceAll(`"]`, "")
    return tag
  }
}
