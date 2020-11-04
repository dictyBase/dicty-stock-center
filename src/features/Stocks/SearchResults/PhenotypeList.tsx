import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import CircularProgress from "@material-ui/core/CircularProgress"
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
  spinner: {
    marginTop: "15px",
  },
  totalCount: {
    marginTop: "15px",
    textAlign: "center",
    color: "rgb(112, 117, 122)",
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
  /** Total number of strains found with given phenotype */
  totalCount: number
}

/**
 * PhenotypeList is used to display a list of phenotypes.
 */

const PhenotypeList = ({
  data,
  loadMore,
  hasMore,
  isLoadingMore,
  totalCount,
}: Props) => {
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
    <React.Fragment>
      <Paper>
        <PhenotypeListHeader />
        <List className={classes.list}>
          {data.map((item: StrainWithPhenotype, index: number) => (
            <PhenotypeListItem key={index} strain={item} />
          ))}
          <div ref={targetRef} />
        </List>
      </Paper>
      {isLoadingMore && <CircularProgress className={classes.spinner} />}
      <div className={classes.totalCount}>Displaying {totalCount} results</div>
    </React.Fragment>
  )
}

export default PhenotypeList
