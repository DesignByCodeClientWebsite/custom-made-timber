import '../assets/sass/style.sass'
import NextNprogress from 'nextjs-progressbar'
import Nav from '../components/nav/Nav'
import AppFooter from '../components/footer/AppFooter'
import HeadRoom from '../components/nav/HeadRoom'
import SocialBanner from '../components/social/SocialBanner'

function MyApp({ Component, pageProps }) {
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
