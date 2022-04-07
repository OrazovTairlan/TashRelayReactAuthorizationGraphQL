// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

export const LOGIN = graphql`
    mutation authLoginMutation ($email:String!, $password: String!){
        users{
            login(input:{email:$email, password:$password}){
                token{
                    accessToken,
                    refreshToken
                }
            }
        }
    }
`

export const LOGOUT_NOT_PARSED = `
    mutation authLogoutMutation ($refreshToken: String!){
        users{
            logout(refreshToken:$refreshToken)
        }
    }
`

export const LOGOUT = graphql`
    mutation authLogoutMutation ($refreshToken: String!){
        users{
            logout(refreshToken:$refreshToken)
        }
    }
`


export const REFRESH_TOKEN_NOT_PARSED = `
    mutation authRefreshMutation ($refreshToken: String!){
        users{
            refresh(refreshToken:$refreshToken){
                refreshToken,
                accessToken
            }
        }
    }
`

export const REFRESH_TOKEN = graphql`
    mutation authRefreshMutation ($refreshToken: String!){
        users{
            refresh(refreshToken:$refreshToken){
                refreshToken,
                accessToken
            }
        }
    }
`

