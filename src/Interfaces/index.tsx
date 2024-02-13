export interface IRoute {
  path: string
  restricted: boolean
  component: () => JSX.Element
  exact: boolean
}
