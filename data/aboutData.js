import React from 'react'
import Button from '../components/button/Button'

export const contactData = {
  title: (
    <>
      <div className="row">
        <div className="md-col-12">
          <div className="heading">
            <div className="flex flex--row nowrap">
              <header>
                <h1 className="m-0">Welcome, let me introduce myself</h1>
                <h2 className="mt-0">
                  My name is <br /> Coenie Marais
                </h2>
                <h3>
                  Owner and founder of <u>CUSTOM MADE TIMBER</u>
                </h3>
              </header>
            </div>
          </div>
        </div>
      </div>
    </>
  ),
  content: (
    <>
      <div className="row">
        <div className="md-col-10">
          <p>
            CUSTOM MADE TIMBER by <strong>Coenie Marais</strong> is a business that was created 11 years ago through my love for working
            with timber and creating custom joinery for commercial and residential customers. I am hands on and passionate about providing a
            quality finished product. My team and I handle each project uniquely to ensure absolute customer satisfaction.{' '}
          </p>
          <p>
            <Button href={`/contact-us`}>CONTACT US</Button>
          </p>
        </div>
      </div>
    </>
  ),
}
