import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { useIntersectionObserver } from "dicty-hooks"
import PhenotypeListHeader from "./PhenotypeListHeader"
import PhenotypeListItem from "./PhenotypeListItem"
import { StrainWithPhenotype } from "../Details/types/props"

const useStyles = makeStyles(({ palette }) => ({
  list: {
    paddingTop: "0px",
    paddingBottom: "0px",
  },
  loading: {
    color: palette.secondary.main,
  },
}))

type Props = {
  /** Array of strains with given phenotype */
  data: Array<StrainWithPhenotype>
  /** Function to load more data */
  loadMore: () => void
  /** Indicator for having more content */
  hasMore: boolean
  /** Indicator to determine if more data is being loaded */
  isLoadingMore: boolean
}

/**
 * PhenotypeList is used to display a list of phenotypes.
 */

const PhenotypeList = ({ data, loadMore, hasMore, isLoadingMore }: Props) => {
  const targetRef = React.useRef<HTMLDivElement>(null)
  const visible = useIntersectionObserver({
    ref: targetRef,
    hasMore,
  })
  const classes = useStyles()

  React.useEffect(() => {
    if (visible && hasMore) {
      loadMore()
    }
  }, [hasMore, loadMore, visible])

  return (
    <Paper>
      <PhenotypeListHeader />
      <List className={classes.list}>
        {data.map((item: StrainWithPhenotype, index: number) => (
          <PhenotypeListItem key={index} strain={item} />
        ))}
        {/* need to use new loading boolean to prevent double fetching on scroll */}
        {isLoadingMore && (
          <ListItem className={classes.loading}>
            Fetching more list items...
          </ListItem>
        )}
        <div ref={targetRef} />
      </List>
    </Paper>
  )
}

export default PhenotypeList
