import React, { Component } from 'react'
import FlipBook from 'react-flip-page'

export default class SamplePage extends Component {
  render() {
    const indented = {
      textIndent: '30pt',
      width: '100%',
      margin: 'auto',
      textAlign: 'left',
      lineHeight: '20pt'
    }
    const newPage ={
      ...indented,
      paddingTop: '40px'
    }
    return (
      <div style={{margin: '0 auto'}}>
        <FlipBook 
          orientation='horizontal'
          showHint={true}
          animationDuration={800}
          width={1000}
          height={700}
          uncutPages={false}
          style={{margin: 'auto'}}
        >
          <article>
            <div style={{float: 'left', width: '440px', textAlign: 'center'}}>
              <h1 style={{textAlign:'center', width: '100%'}}>7. The Outlaw Meets the In-Laws</h1>
              <p style={indented}>The trip had taken its toll on me. I was tired, nauseated and disoriented. Here I thought I was a seasoned flier, but for the first time in my young life I was experiencing major jet lag. </p>
              <p style={indented}>Linda, on the other hand, had traveled back and forth from Asia to the States many times. She had tried to get me to sleep on the plane, so I could reset my internal clock to deal with the 13-hour time change. However, being in such a physically challenged environment, all attempts at slumber were futile. I arrived in Taipei wasted, worn out, unable to comprehend English let alone Mandarin, Cantonese, native Taiwanese or the broken Chinglish that my future in-laws all were about to throw at me. Each one excited for the chance to hone their English language skills and taking full advantage of the opportunity to speak with an American dude. But today I was an American vegetable. </p>
              <p style={indented}>When I exited the air-conditioned terminal, it was like someone smacked me in the face with a hot wet rag. I could feel the life being sucked out of my already weak body. At 6:00 PM it was still 95 degrees with a humidity level of 90+ percent. It took mere seconds before rivulets of sweat were streaming down the sides of my face. It was akin to stepping into a steam sauna fully dressed. </p>
            </div>
            <div style={{float: 'right', width: '440px'}}>
              <p style={newPage}>At the curb we were greeted by Linda’s oldest sister, her husband and one of her middle sisters. Again, Linda comes from a family with six girls and one boy. In Chinese, you refer to each one with a number, except for the oldest who’s called Big Sister. </p>
              <p style={indented}>The Chinese pronunciations I provide throughout the book, such as Da4 jie3, which in English translates to Big Sister, end in numbers that provide the correct intonation to properly enunciate them. For the time being, please disregard them unless you already know how to use the system called “pin yin” for transliterating Chinese ideograms into the Roman alphabet—trust me, very confusing. </p>
              <p style={indented}>After Big Sister, there's Sister Two, the brother, who likes to be called by his Chinese name “Shi2 Hai2”, Sister Four, Sister Five, Sister Six (Linda) and the youngest, Sister Seven, who I called Little Sister or Little Ling. Several years later I was given the honor of bestowing English names on all the family members. I resisted the temptation to go with names like Gertrude, Hortense, Flossie, or Wilhelmina. Instead, I picked way cooler ones from a list of inductees into the Rock N Roll Hall of Fame. I was a child of the 70s and just couldn’t resist.</p>
            </div>
          </article>
          <article>
            <div style={{float: 'left', width: '440px'}}>
              <p style={newPage}></p>
              <p style={indented}></p>
            </div>
          </article>
          <article>
            <h1>Testing</h1>
            <p>Testing a lot more than that</p>
          </article>
          <article>
            <h1>Testing</h1>
            <p>Testing a lot more than that</p>
          </article>
          <article>
            <h1>Testing</h1>
            <p>Testing a lot more than that</p>
          </article>
        </FlipBook>
      </div>
    )
  }
}
