// @flow
export default function findLinkEntities(
  contentBlock: Object,
  callback: Function,
  contentState: Function
) {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity()
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    )
  }, callback)
}
