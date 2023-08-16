export type Plugin = {
  addListener: (event:string, callback:(payload:any) => void) => void
  run: (payload?: any) => void
}