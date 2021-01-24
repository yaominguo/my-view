/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'animate.css'

declare module 'vue-grid-layout' {
  import Vue from 'vue'

  export class GridLayout extends Vue {}

  export class GridItem extends Vue {}

  export interface GridItemData {
    x: number
    y: number
    w: number
    h: number
    i: string
  }
}

declare module '*.vue'
declare module '*.css'
declare module '*.styl'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'