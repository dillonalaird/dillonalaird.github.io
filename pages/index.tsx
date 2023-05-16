import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <center>
        <p>
          Working on vision models <a href="https://landing.ai/">@LandingAI</a> 🤖
          Previously <a href="https://twitter.com/StanfordEng"> @StanfordEng </a> <a href="https://twitter.com/uwcse">@uwcse</a> 🎓
          neovim enthusiast 💻 I help neural networks find local minima 🧠 <br></br>
          <a href="https://github.com/dillonalaird">[Github]</a>
          <a href="https://twitter.com/DillonLaird">[Twitter]</a>
          <a href="https://cs.stanford.edu/people/dalaird/">[Academic]</a>
        </p>
        </center>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
