import React, { Component } from 'react'
import TurnImage from '../imgs/arrow-17.png'

export default class SampleChapter extends Component {
  state = {
    displayPage: 0
  }

  pageDown = () => {
    if (this.state.displayPage !== 0) {
      this.setState({displayPage: this.state.displayPage - 1})
    }
  }

  pageUp = () => {
    if (this.state.displayPage !== 11) {
      this.setState({displayPage: this.state.displayPage + 1})
    }
  }

  renderPage = () => {
    if (this.state.displayPage === 0) {
      return (
        <div>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>The trip had taken its toll on me. I was tired, nauseated and disoriented. Here I thought I was a seasoned flier, but for the first time in my young life I was experiencing major jet lag. </p>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>Linda, on the other hand, had traveled back and forth from Asia to the States many times. She had tried to get me to sleep on the plane, so I could reset my internal clock to deal with the 13-hour time change. However, being in such a physically challenged environment, all attempts at slumber were futile. I arrived in Taipei wasted, worn out, unable to comprehend English let alone Mandarin, Cantonese, native Taiwanese or the broken Chinglish that my future in-laws all were about to throw at me. Each one excited for the chance to hone their English language skills and taking full advantage of the opportunity to speak with an American dude. But today I was an American vegetable.</p>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>When I exited the air-conditioned terminal, it was like someone smacked me in the face with a hot wet rag. I could feel the life being sucked out of my already weak body. At 6:00 PM it was still 95 degrees with a humidity level of 90+ percent. It took mere seconds before rivulets of sweat were streaming down the sides of my face. It was akin to stepping into a steam sauna fully dressed. </p>
        </div>
      )
    } else if (this.state.displayPage === 1) {
      return (
        <div>
           <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>At the curb we were greeted by Linda’s oldest sister, her husband and one of her middle sisters. Again, Linda comes from a family with six girls and one boy. In Chinese, you refer to each one with a number, except for the oldest who’s called Big Sister. </p>
           <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>The Chinese pronunciations I provide throughout the book, such as Da4 jie3, which in English translates to Big Sister, end in numbers that provide the correct intonation to properly enunciate them. For the time being, please disregard them unless you already know how to use the system called “pin yin” for transliterating Chinese ideograms into the Roman alphabet—trust me, very confusing. </p>
           <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>After Big Sister, there's Sister Two, the brother, who likes to be called by his Chinese name “Shi2 Hai2”, Sister Four, Sister Five, Sister Six (Linda) and the youngest, Sister Seven, who I called Little Sister or Little Ling. Several years later I was given the honor of bestowing English names on all the family members. I resisted the temptation to go with names like Gertrude, Hortense, Flossie, or Wilhelmina. Instead, I picked way cooler ones from a list of inductees into the Rock N Roll Hall of Fame. I was a child of the 70s and just couldn’t resist.</p>
        </div>
      )
    } else if (this.state.displayPage === 2) {
      return (
        <div>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>In any event, Big Sister, her husband and Sister Four, picked us up in their tiny Taiwan built car, a 1987 Yue Loong Feeling. While the little 1.6-liter Nissan engine ran like a charm, the rest of the car was far inferior to other import options, and just like the airline we flew in on, it was out of business within a few years. </p>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>The trunk was smaller than a bread box and could only hold two of the five pieces of luggage we brought. One of those pieces never made it to Taipei. Somewhere in Hong Kong, a Chinese person is wearing my favorite Rolling Stones T-shirt with a picture of Keith Richards and “Let’s Get Stoned” printed on the back. I looked at the car, not much bigger than my Z was, trying to figure out how we’d all fit. Solution: three of us squeezed into the back seat and Big Sister’s husband piled the other two suitcases on top of me. </p>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>It was déjà vu revisited twice again when Sister Four opened a brown paper bag and handed me something to eat. 
"Preserved dried plum. Common Asian treat. You try,” Linda suggested. </p>
        </div>
      )
    } else if (this.state.displayPage === 3) {
      return (
        <div>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>This time, thank heavens, it was odorless. I popped it into my mouth and it slowly dissolved flooding my taste buds with soothing sweet and sour flavors. 
At the time I could only say “thank you” and “goodbye” in Mandarin. Naturally I got them mixed up and said bye. </p>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>They all had a big laugh on me, which became routine from then on. Each time I tried to speak Chinese, everyone around me would get a big kick out of the goofy American. 
The tiny engine of the Feeling came to life and Big Sister’s husband drove to my potential mother-in-law’s home in Taoyuan, a small town approximately 14 miles from Taipei. I didn’t have much chance to look out the window at the passing scenery. I was curious but too tired to lift the cannonball that was my head. Added to that, I was pinned down by both of Linda’s 60 lb. suitcases. The motion of the car worked like a sedative and within a few minutes I zonked out. </p>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>When we arrived, Linda had to shake me violently to arouse me from my coma-like state. You might think that I’d have slept like a baby that evening, but nothing could be further from the truth. The jet lag had burrowed deep into my soul. I would not get a wink of sleep for the next three days.</p>
        </div>
      )
    } else if (this.state.displayPage === 4) {
      return (
        <div>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>My potential mother-in-law’s home was three stories and built like a fortress out of steel and concrete. Thanks to earthquakes and typhoons, this was the norm in this part of the world. The house had no air-conditioning; instead, an electric floor fan was set in each room. The first floor had a living/dining room, and a kitchen in the rear. The second floor, where the family all slept, had four tiny bedrooms and one bathroom. The top floor, a converted attic with low angled ceilings, was used for general storage.</p>          
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>Linda’s mother, who I was instructed to call “Ma”, had no way of knowing that I’d show up both exhausted and nauseated from my trip. She’d spent the entire day preparing a feast for my arrival. Ma had even bought a live chicken, which she killed and butchered in her backyard just a few hours before we landed. She used the fresh chicken meat as an ingredient in several of the traditional Chinese dishes she’d made for the family banquet. There were also two types of fish, numerous green vegetables, none of which I’d ever seen before, and three unrecognizable meat dishes sitting on the table. </p>          
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>SIDEBAR: I’d later learn that, what looked to me like an all-you-can-eat buffet, was in fact an everyday meal for them. And for the life of me, I’ll never figure out how they can eat all that chow and stay scarecrow thin?</p>          
        </div>
      )
    } else if (this.state.displayPage === 5) {
      return(
        <div>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>When I was introduced to Ma, she looked at me in a curious manner, sizing up her daughter's first-round draft pick. I couldn't tell whether she was impressed or intimidated by my height. 
Then, walking away, she announced in a sharp tone, “chi1 fan4 le5.” Translation: “Time to eat.” Ma’s proclamation didn't appear to be directed at me, rather the rest of the family. </p>   
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>I whispered to Linda, “Did I do something wrong? Is your mom upset with me?” 
“No,” she replied, “Just her way. You too much worry."
My stomach was turning summersaults, but I knew I had no choice. If I declined to eat, I might offend Ma. I still needed her approval, and I’d do anything to secure it. </p>   
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>At 7:00 PM it was still close to 90 degrees outside and remained sticky. Inside this concrete hotbox it was even worse. I told Linda, “I seriously need a quick shower.”   
Big Sister looked at me and announced in butchered English, “You go bedroom three floor. Toilet two floor. You no can sleep Hua Mei." Translation: "Liu house rules—unwed couples sleep apart—nightly bootie calls...Not allowed!"</p>   
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>At least, I was pretty sure that’s what she meant. I grabbed my bags and bolted up the stairs directly to the bathroom, barely making it to the toilet before I tossed my cookies.</p>   
        </div>
      )
    } else if (this.state.displayPage === 6) {
      return (
        <div>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>I recovered somewhat after a soothing, cool shower, but given the house’s sauna-like conditions, by the time I got dressed and went down to eat I’d completely sweated through my only shirt, which was starting to smell a little gamey. </p>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>I have to say, Ma was a pretty good cook. While I had no idea what I was eating, the dishes offered up to my palate wonderful flavors, and my olfactory system was adjusting to the strange-but-pleasant smells coming from the unidentifiable foods. Things were definitely looking up until I finished supper, and the war in my stomach reengaged. I rocketed up the stairs to the bathroom, kicked open the door, and barely made it in time before I projectile vomited dinner. </p>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>There I was, kneeling on the floor with my head halfway in the toilet bowl, when I heard an audible gasp, followed by a loud raspy voice: “Wo3 de5 tian1 na5!” which I was later told is the Chinese equivalent of “Oh my God!” </p>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>I turned my head and there stood Ma. No interpreter necessary. The look of pure horror on her face spelled it out for me. I'd just performed the ultimate insult to the woman who'd been cooking all day in preparation for my visit. </p>
        </div>
      )
    } else if (this.state.displayPage === 7) {
      return (
        <div>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>A moment later, Linda arrived at the bathroom entrance. Ma stood in place, arms folded, shaking her head and muttering things I was pretty darn sure weren’t flattering. Linda knew the real reason I'd ralphed. She conversed with Ma, attempting to explain. </p>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>But you know what they say about first impressions. Ma was a tough old bird; I feared I'd just destroyed any chance I had at winning her over. Ma spun on her heels and disappeared. I gargled, then Linda took me by the hand and led me downstairs to the kitchen. </p>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>Linda discussed my situation with Big Sister, who decided to brew some special tea to help settle my stomach. She pulled out a handful of dark tea leaves from a steel canister that sat on the kitchen counter. 
Ma popped out of nowhere, immediately taking over while loudly spewing out words that clearly meant, Get out! This is my domain! </p>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>I watched from a safe distance as she placed the leaves into what looked like an oversized thimble which was then inserted into a larger vessel full of hot water. The leaves steeped for a few minutes, and to my amazement, the tea worked like a charm. My tummy soon settled down. But, later that night, alone on the hot and humid top floor of the house, I was unable to fall asleep.</p>
        </div>
      )
    } else if (this.state.displayPage === 8) {
      return (
        <div>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>My bed was a thin mat not much softer than the hardwood surface underneath. A floor fan only pushed the hot, muggy air around. I was a spoiled American from Chicago, used to sleeping during the summer on my beloved Sealy Posturepedic pillow-top mattress under a lightweight down comforter with the central air running at full blast. But I dared not complain. I was already on razor-thin ice with Ma.</p>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>The next day I could aptly be described as a zombie; no sleep and still no appetite. Ma wouldn't look me in the eyes; but with Linda’s prodding, she half-heartedly prepared me Congee, a rice dish. Chinese consider this comfort food, but it's also eaten when they’re feeling under the weather. Congee is the Asian get-well equivalent to Jewish chicken soup, but with a texture more like our oatmeal. It basically has the flavor of cardboard unless something is added to it. Americans put slices of banana, strawberries, blueberries and brown sugar in their oatmeal. Chinese add chicken stock, scallions, fish, meat; and zha4 cai4, which is a type of pickle from a mustard plant originating in Sichuan, China. Even, lord have mercy, slices of the dreaded brown thousand-year-old egg. Both cultures regard their dishes as wholesome, easy on the stomach fare. Afterwards, I felt a trace better, but that night my attempt at sleep once again was for nil.</p>
        </div>
      )
    } else if (this.state.displayPage === 9) {
      return (
        <div>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>The following morning, at what must’ve been 5 or 6 AM, through the open window of my attic-bedroom came an unmistakable sound that stirred me to attention; a sound that by the age of seven had already been indelibly ingrained into the mind of every American child; a sound that immediately fired up all the neurons in our little brains alerting us to the wondrous joy that was rolling down the street in front of our home. If you grew up in the U.S., you know I’m talking about the euphoric musical jingle of the Good Humor truck. Is it possible that GH ice cream is sold in Taoyuan? And if so, why would the truck be out so damn early? Did I finally fall asleep and now I'm dreaming? In my weakened condition am I starting to hallucinate? Mine was not to question why, mine was but to eat ice cream or die. </p>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>At that moment I felt an incredible surge of energy. A good analogy would be the power rush experienced by a man dying of thirst in the desert when he spots an oasis in the near distance offering water and shade. I hopped up from my simulated bed of nails, threw on my shorts and darted down the stairs, out the front door at breakneck speed, pushing my body past all physical limits toward the Holy Grail, visions of a white coconut ice cream bar dancing in my head. As both a child and an adult, it was my top pick Good Humor treat.</p>
        </div>
      )
    } else if (this.state.displayPage === 10) {
      return (
        <div>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>Now, I’m not talking about the frozen ice crap they currently peddle from their trucks, but the original, made with real vanilla ice cream and loaded with huge coconut flakes. I don’t mean to knock the company’s new products, but when it comes to things like that I tend to obsess. </p>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>Once outside, I followed the sound down the street to the end of the block and around the corner. I found it somewhat odd there were no signs of children emerging from the houses I passed, filing out one-by-one, running to the truck with money gripped tightly in little hands to get their favorite delight before the vehicle moved on to the next neighborhood. In my state of delirium, my brain was ordering me, Who cares about the kiddies? I need my fix, and right now nothing else matters! </p>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>The sound grew louder as I jogged down the street, full of hope and anticipation, thinking, This trip is looking more promising! My spirits were rising, my stomach felt better, and I was excited about putting something in my mouth that I knew would be cool, delicious, satisfying and psychologically comforting. </p>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>I dashed around the corner...and came to a screeching halt, then dropped to my knees in total despair. What?! Ixnay Good Humor. </p> 
        </div>
      )
    } else if (this.state.displayPage === 11) {
      return (
        <div>
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>It was the morning garbage truck beckoning to the neighborhood’s residents to bring out their trash. What kind of sick twisted mind has garbage trucks playing a children’s song offering up the promise of cold creamy delights? It was only now I noticed various adults carrying bags and boxes of refuse and heading in the same direction. </p> 
          <p style={{padding: '5px', lineHeight: '35pt', fontSize: '18pt'}}>My spirits totally crushed, I stumbled back to the house. I was too despondent to care about potential repercussions from Ma, and climbed the stairs to the second floor, snuck into Linda’s room, and quietly laid down next to her. At 6:15 AM the air was still thick and dense, but the temperature had cooled down to a slightly more reasonable 84 degrees Fahrenheit. Bathed in sweat and unable to sleep, all I could do was lie there wondering, What other disappointments and embarrassments await me? </p> 
        </div>
      )
    }
  }

  render() {
    const pageStyle = {
      width: '80%',
      borderStyle: 'solid',
      barderColor: '#CBC7C6',
      borderWidth: '1px 1px 1px 1px',
      margin: 'auto'
    }
    const nextPage = {
      position: 'relative',
      width: '4%',
      height: '200px',
      transform: 'rotate(180deg)',
      float: 'right',
      marginRight: '2%',
      marginTop: '20%'
    }
    const previousPage = {
      position: 'relative',
      width: '4%',
      height: '200px',
      float: 'left',
      marginLeft: '2%',
      marginTop: '20%'
    }

    return (
      <div>
        <h1 style={{marginTop: '7%'}}>Chapter 7: The Outlaw Meets the In-Laws</h1>
        <img src={TurnImage} style={nextPage} alt='Page turn' onClick={() => {this.pageUp()}} />
        <img src={TurnImage} style={previousPage} alt='Page turn' onClick={() => {this.pageDown()}}/>
        <div style={pageStyle}>
          {this.renderPage()} 
        </div>
      </div>
    )
  }
}
