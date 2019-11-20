// @flow
import React from "react"
import { Link } from "react-router-dom"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import useStyles from "components/Stocks/Details/styles"

const GET_RELATED_STRAINS = gql`
  query StrainList($filter: String!) {
    listStrains(input: { limit: 10, filter: $filter }) {
      strains {
        id
        label
      }
    }
  }
`

type Props = {
  species: string,
}

const RelatedStrainsCard = ({ species }: Props) => {
  const classes = useStyles()
  const { loading, error, data } = useQuery(GET_RELATED_STRAINS, {
    variables: { filter: `species==='${species}'` },
  })

  if (loading) return <div />
  if (error) return <div />

  return (
    <Card raised className={classes.moreStrainsCard}>
      <Typography variant="h6" className={classes.cardHeader}>
        Related Strains
      </Typography>
      <Divider />
      <Typography className={classes.secondaryText} variant="body1">
        Strains with species <br />
        <em>{species}</em>
      </Typography>
      <div className={classes.options}>
        <List>
          {data.listStrains.strains.slice(0, 5).map((item, index) => (
            <ListItem
              disableGutters
              dense
              key={index}
              className={classes.relatedItem}>
              <Typography variant="body1">
                <Link className={classes.link} to={`/strains/${item.id}`}>
                  {item.label}
                </Link>
              </Typography>
            </ListItem>
          ))}
          <br />
          <Button color="primary" variant="outlined">
            View More
          </Button>
        </List>
      </div>
    </Card>
  )
}

export default RelatedStrainsCard
