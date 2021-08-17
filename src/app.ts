import ejs from "ejs"

export type LanguageData = {
  title: string
  subtitle: string
  googleText: string
  googleLink: string
  safariText: string
  safariLink: string
  edgeText: string
  edgeLink: string
  firefoxText: string
  firefoxLink: string
}

export function sum(a: number, b: number): number {
    return a + b
  }

export function app(data: LanguageData){
    console.log('In app.ts'+ data)
  return "ejs.render()"
}

