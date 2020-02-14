export default function findLinkEntities(
  contentBlock: any,
  callback: Function,
  contentState: any,
) {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity()
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    )
  }, callback)
}
