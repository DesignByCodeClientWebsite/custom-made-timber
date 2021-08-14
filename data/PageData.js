import Link from 'next/link'
import Button from '../components/button/Button'

export const welcomeData = {
  title: (
    <header className="heading">
      <h2>CUSTOM MADE TIMBER</h2>
      <h3>by coenie marais</h3>
    </header>
  ),
  content: (
    <article>
      <p className="lead">
        CUSTOM MADE TIMBER by Coenie Marais focuses on all interior and exterior joinery work throughout South Africa. We have a loyal
        customer base and are able to provide a custom made solution to your project, big or small.
      </p>
      <Button href={`/gallery`}>VIEW</Button>
    </article>
  ),
}

export const businessData = {
  title: (
    <header className="heading">
      <h2>Corporate Projects</h2>
    </header>
  ),
  content: (
    <article>
      <Button href={`/gallery`}>VIEW</Button>
    </article>
  ),
}

export const clientsData = {
  title: (
    <header className="heading">
      <h2>Residential Projects</h2>
    </header>
  ),
  content: (
    <article>
      <Button href={`/gallery`}>VIEW</Button>
    </article>
  ),
}
