import '../assets/sass/style.sass'
import NextNprogress from 'nextjs-progressbar'
import Nav from '../components/nav/Nav'
import AppFooter from '../components/footer/AppFooter'
import HeadRoom from '../components/nav/HeadRoom'
import SocialBanner from '../components/social/SocialBanner'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <NextNprogress color="#60b5ba" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <HeadRoom
        options={{
          tolerance: {
            up: 5,
            down: 12,
          },
          classes: {
            initial: 'nav--fixed',
            pinned: 'nav--pinned',
            unpinned: 'nav--unpinned',
            top: 'nav--top',
            notTop: 'nav--not-top',
            bottom: 'nav--bottom',
            notBottom: 'nav--not-bottom',
          },
        }}
      >
        <Nav />
      </HeadRoom>
      <Component {...pageProps} />
      <SocialBanner />
      <AppFooter />
    </>
  )
}

export default MyApp
