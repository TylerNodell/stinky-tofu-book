import React, { Component } from 'react'

export default class TextBlock extends Component {
  
  renderedText = () => {
    if (this.props.className === "Summary") {
      // eslint-disable-next-line no-unused-expressions
      if (this.props.language === true) {
        return <div>
          <h1 style={{margin: "auto", textAlign: 'center', fontSize: '4vh'}}>Book Summary</h1>
          <br/>
          <p style={{lineHeight: '4vh', fontSize: '3.4vh'}} id="book-summary"> In this hilarious clash of cultures on steroids, conservative NYC Jewish banker Sam Lowe, falls head over heels for Linda Liu, a stunning Chinese immigrant. His desire to marry her requires a trip to Taiwan to get her mother's approval. Sam’s travels are rife with awkward and embarrassing situations as he struggles like a buffoon with the language barrier, a horde of potential in-laws, bizarre foods and befuddling Asian customs. Upon their return to New York, tensions ratchet up to an explosive level as Linda’s large family begins their mass migration from Asia to the couple’s tiny upper west side apartment. </p>
        </div>
      } else {
        return <div>
          <h1 style={{margin: "auto", textAlign: 'center'}}>书摘</h1>
          <br/>
          <p style={{lineHeight: '35pt', fontSize: '18pt'}}>在这场关于类固醇的文化热闹的冲突中，保守的纽约犹太银行家Sam Lowe为一位令人惊叹的中国移民Linda Liu而高枕无忧。他嫁给她的愿望需要去台湾旅行以获得她母亲的认可。萨姆的旅行充斥着他们回到纽约后，紧张局势升级到爆炸性的水平，就像小丑一样充满了语言障碍的小丑，一群潜在的亲戚，琳达的大家庭开始从亚洲大规模迁移这对夫妇的上西区小公寓。</p>
        </div>
      }
    } else if (this.props.className === "Author") {
      if (this.props.language === true) {
        return <div>
          <h1 style={{width: '100%', margin: 'auto', textAlign: "center", fontSize: '4vh'}}>About the Author</h1>
          <p style={{lineHeight: '4vh', fontSize: '2.5vh'}}>ROSS NODELL was born and raised in Chicago. He relocated to New York City in the late 80s to marry a Chinese woman.  Little did he know her entire family was part of the deal. Ross worked on Wall Street before starting his own real estate investment firm. He now follows his passion as a writer.
  Ross draws material from a wealth of life experience as a world traveler.  He's a true adventure-seeker having climbed Mount Rainer in Washington State, and The Grand Teton in Wyoming; scuba dived with hammerhead sharks off the North Wall in Grand Cayman; walked Kruger National Park searching for water buffalo; biked through the South of France; and windsurfed the Maldives.
  Ross has a love affair with food and wine, always seeking out new and exotic cuisines, no matter how peculiar or offensive. He brings all these adventures to his readers through the lens of a comical microscope.</p>
        </div>
      } else {
        return <div>
          <h1 style={{margin: 'auto', textAlign: "center"}}>关于作者</h1>
          <p style={{lineHeight: '30pt', fontSize: '16pt'}}>ROSS NODELL在芝加哥出生并长大。他于80年代末搬到纽约市与一名中国女子结婚。他很少知道她的整个家庭都是这笔交易的一部分。在创办自己的房地产投资公司之前，罗斯曾在华尔街工作过。他现在追随他作为作家的热情。作为世界旅行者，罗斯从丰富的生活经验中汲取材料。他是一位真正的探险者，曾在华盛顿州登上雷纳山，在怀俄明州登上大提顿;在大开曼岛的北墙上用双髻鲨潜水;走在克鲁格国家公园寻找水牛;穿越法国南部;和风帆冲浪马尔代夫。罗斯对食物和葡萄酒充满热爱，无论多么奇特或令人反感，总是寻求新的和异国情调的美食。他通过一个滑稽的显微镜镜头将所有这些冒险带给他的读者。</p>
        </div>
      }
    }
  }

  render() {
    const textBlock = {
      width: '90%',
      margin: 'auto',
      textAlign: 'justify'
    }
    return (
      <div style={textBlock}>
        {this.renderedText()}
      </div>
    )
  }
}
