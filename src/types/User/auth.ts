export type InputMaybe<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type Logged = {
    __typename?: 'Logged';
    viewer: Viewer;
    token: Token;
};

export type LoginInput = {
    email: Scalars['String'];
    password: Scalars['String'];
};

export type Mutation = {
    __typename: 'Mutation';
    users: UsersMutation;
};

export type Query = {
    __typename: 'Query';
    viewer: Viewer;
};

export type Sites = {
    __typename: 'Sites';
    id: Scalars['ID'];
    host: Scalars['String'];
};

export type Token = {
    __typename: 'Token';
    accessToken: Scalars['String'];
    refreshToken: Scalars['String'];
};

export type UsersMutation = {
    __typename: 'UsersMutation';
    login: Logged;
    logout: Scalars['Boolean'];
    refresh: Token;
};


export type UsersMutationLoginArgs = {
    input: InputMaybe<LoginInput>;
};


export type UsersMutationLogoutArgs = {
    refreshToken: Scalars['String'];
};


export type UsersMutationRefreshArgs = {
    refreshToken: Scalars['String'];
};

export type Viewer = {
    __typename: 'Viewer';
    id: Scalars['ID'];
    email: Scalars['String'];
    sites: Array<Sites>;
};
