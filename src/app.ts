import ejs from "ejs"
import path from "path"

export type LanguageData = {
  title: string
  subTitle: string
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

export async function app(data: LanguageData) {
  console.log("In app.ts" + data)
  const ejsPath = path.join(process.cwd(), "src/views/OldBrowsersLanding.ejs")
  const { err, str } = await new Promise((resolve) => {
    ejs.renderFile(ejsPath, { ...data }, (err, str) => resolve({ err, str }))
  })
  if (err) {
    return "err"
  }
  return str
}

// function renderFileAsync(path:string, data: LanguageData) {
//     return new Promise(resolve => ejs.renderFile(path, data,
//         (err, data) => resolve([err, data])))
// }
