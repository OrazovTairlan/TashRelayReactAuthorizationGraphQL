// @ts-ignore
import graphql from 'babel-plugin-relay/macro';


export const VIEWER_NOT_PARSED = `
    query ViewerViewsQuery{
  viewer{
    id
    email,
    sites{
      id,
      host
    }
  }
}
`


export const VIEWS = graphql`
    query ViewerViewsQuery{
        viewer{
            id
            email,
            sites{
                id,
                host
            }
        }
    }
`

