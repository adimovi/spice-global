import React from "react";
import { Link } from "react-router-dom";

export function About() {
  return (
   <>
    <div className="container">
      <section>
      <div className="row my-5 ">
          <div className="col-lg-7 col-12 p-lg-4 p-2 bg-white rounded-3  shadow">
              <p>I don’t like talking about my own achievements, which are very modest compared to Elon Musk!, but at the same time they are what they are, and I suppose in some ways I am a little proud considering my start in life.</p>
              <p>The short version of my life story is that I left home and education when I was 14 years old, and lived in a tent for a year. I trained as a motor mechanic, and by the time I was 22 years old, I started importing high end cars from The UK to Ireland, and built a very small logistics transport company.</p>
              <p>My businesses went bust when I was 23 years of age, which was devastating for me at the time, and I got a job driving a truck to keep food on the table.</p>
              <p className="mb-0">After a year, I created my second small logistics transport company, and by the time I was 32 years old, I had designed, constructed and was operating the first automated waste recycling company in Ireland with close to 100 employees. 
              We were able to recycle and sell 85% of the waste we collected, which was an obvious benefit to the environment, when you consider that 100% of waste was going into landfill prior to that.</p>
          </div>
          <div className="col-lg-5 col-12 p-lg-4 p-2 align-self-center">
           
            <img src="imgs/barry2.jpg" alt="" style={{width:"100%"}}/>
          </div>

          <div className="col-lg-12 p-lg-4 p-2 bg-white rounded-3 mt-3 mb-5 shadow">
             <p>
             At the same time, I also developed an automated leather processing facility, which was also doing very well, and is now run by my eldest son today, who is making a better job of it than I did thank God.
             </p>
             <p>
             I sold the waste recycling business for a very decent price, and that sale made me a millionaire in my mid 30s, much to my own surprise. Some people around me asked me why I wouldn’t build myself a bigger, better house than my 3 bedroom semi detached, and I told them it was because I was happy there, and I loved my neighbours, which was absolutely true.
             </p>
             <p className="mb-0">
             I decided there was no point in being a millionaire in my 80s, when it would be too late to enjoy it,  so I made the sensible decision to buy an autocaravan/campervan/RV and a motorcycle, to travel around Europe like a happy gypsy for a couple of years playing music in Irish pubs, as I went.
             </p>
             <p>
             The end of that chapter ended up with me operating two very successful live music venues in The Canary Islands for 10 years, which was much more work than I expected, but great fun.
             </p>
             <p className="mb-0">
             Here are a couple of things that I am most proud of:
             </p>
             <p>
             I never lost one good supplier, employee or customer in my career, because I always treated them with equal respect and appreciation.
             </p>
             <p>
             I have always had a lot more respect for people and creating new positive opportunities than I ever had for money, and I have never been a materialistic person, but still always ambitious to turn concepts I designed into reality, where possible. It’s a great buzz!
             </p>
             <p>
             I love designing a new concept and watching how it seriously benefits everyone concerned as the story unfolds from a concept into reality.
             </p>
             <p>
             Of course not every designed concept turns out a successful reality, but as long as most do, we can bury the losses with a few songs and a beer, before moving onto the next!
             </p>
             <p>
             While I am a real social people’s person, I also expect of myself, and anyone I’m working with to be totally reliable and consistent at all times in anything we undertake.
             </p>
             <p>
             There is a very different cold and sharp side to me if anything is taken for granted or messed up due to carelessness. No arguing, no arguments, just good by.
             </p>
             <p>
             That’s because I won’t allow anyone to bring down our good name or the effort of all other partners and stakeholders under any circumstances. If a mistake is made with the best intentions and effort, that is no problem, but carelessness, stupidity or laziness will never be tolerated, whether it comes from a cleaner, a CEO or anyone in between.
             </p>
             <p>
             A good reliable cleaner who brings a positive attitude to their work environment is worth a thousand times the value and respect of a CEO or anyone else with a bad attitude, and I would really appreciate it if anyone who doesn’t understand that philosophy would stay as far away from me as possible!!
             </p>
             <p>
             Put another way, I have no respect for insecure people who will do ANYTHING to make themselves feel more important or worthwhile in their own narrow vision of what really matters at anyone’s cost.
             </p>
             <p>
             OK, OK, let’s finish this on a very positive note, and that is that I look forward to continuously working with and meeting as many reliable decent partners and stakeholders as is humanly possible on this journey, while at the same time having some great social philosophical discussions over a few relaxed beers, whenever the opportunity arises. Yahup!!
             </p>
             <h2><b><i>Barry</i></b></h2>

             <div className="text-center">
                 
                 <Link to="/spice-global/join">
                 <h2 className="footer-button shadow my-5">Apply to join as an event manager partner</h2>
                 </Link>
                 
                 </div>
          </div>
        </div>
      </section>
    </div>
   </>
   );
  
}

export default About;