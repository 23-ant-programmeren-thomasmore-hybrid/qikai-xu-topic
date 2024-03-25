import { getDictionary } from '../../../dictionaries'
import {Locale} from "../../../../i18n.config";
 
export default async function Home({ params: { lang } }: {params: {lang: Locale}}) {
  const dict = await getDictionary(lang) // nl
  return (
    <main className="p-10">
      <h1>{dict.page.about.title}</h1>
      <h2>{dict.page.about.description}</h2>
    </main>
  )
}