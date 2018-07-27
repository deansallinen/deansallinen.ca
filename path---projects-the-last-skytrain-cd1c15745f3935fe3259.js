webpackJsonp([0xb5b85b11dc3f],{336:function(e,t){e.exports={data:{markdownRemark:{html:"<h2>Simplifying the late night train schedule experience.</h2>\n<p>Rethinking data visualization\nBrainstation Class Project</p>\n<h2>Challenges</h2>\n<p>Imagining an alternative to the official transit website that simplifies an existing multi-page workflow.\nChoosing an appropriate taxonomy to enhance usability.</p>\n<h2>Outcome</h2>\n<p>A single page scrolling site with colour-coded and spatially related information.</p>\n<h2>The Problem</h2>\n<p>The idea was to improve the experience of finding the time of the last Skytrain.</p>\n<p>Through research, I found that most people who need this information are searching Google on mobile and visiting the official Translink website.</p>\n<p>Unfortunately, the official website doesn’t prioritize this information or make it easy to find for a first time or infrequent user (Experienced users are able to find this information through recall).</p>\n<h2>Research</h2>\n<p>I began this project by researching the current process of finding the time of the last Skytrain.</p>\n<p>Official Website\nexisting steps</p>\n<p>Even with prior knowledge of the click path to get to the time of the last train, the small text size and poor information architecture make this process difficult on mobile.</p>\n<p>For a first time or occasional user the process is not immediately obvious.</p>\n<p>Google Maps\n\"Power users\" often used Google Maps to find the time of the last available transit. This works well for those that know about the feature, and are looking for the latest time to head home.</p>\n<p>However, this only shows the last couple methods to arrive at your destination, most of which are late night busses. For example, in the video I recorded here, we can see that the train isn't even listed as an option.</p>\n<p>This doesn't help the user looking for the last Skytrain home.\nAlmost a hidden feature, and still doesn't answer our question: \"When is the last Skytrain?\"\nUser Personas\nTo better understand the target user, a couple of personas were created.</p>\n<p>Emily Chambers\ngirl drinking a beer\nAge: 25\nStatus: 🍺 🍺 🍺\nLives in: Surrey\nCurrently: Downtown\nDay: Friday\nTime: 1:00 AM</p>\n<p>Key Quote\n\"lmao once i missed the last skytrain and i had to wander around downtown at 2am looking for a night bus home! not fun!\"\nUser Story\nEmily is out with friends at the Commodore Ballroom watching a live performance of local rock band Mother Mother. She's had a couple overpriced IPAs and is considering getting another. After all, she's hardly ever downtown and there's no work tomorrow morning!</p>\n<p>After a couple of crowd-pleasing encores, the show is letting out and her group of friends are standing outside the doors. Alex and Sarah live in Yaletown and are going to walk home. A couple of others live in Kits and can catch a late night bus. Emily and her friend Katelyn need to catch the Skytrain home, but is it still running? She knows it doesn't run 24 hours, but when is the last train? She needs to find out now if she can make the train or ask Alex or Sarah to crash on their couch.</p>\n<p>Emily pulls out her iPhone and begins her search...</p>\n<p>James Eldrich\nsharply dressed man\nAge: 29\nStatus: 😴 💤\nLives in: New Westminster\nCurrently: Downtown\nDay: Wednesday\nTime: 12:45 AM</p>\n<p>Key Quote\n\"Last time I read the Translink schedule incorrectly I missed the last helicopter out of Saigon. Not looking forward to another cab ride!\"\nUser Story\nJames just finished his first double shift as a concierge at his job in the Pan Pacific Hotel. He usually works the morning shift, but offered to cover for a co-worker tonight. Maybe it wasn't the greatest decision — he still has to work the morning shift tomorrow — but he knows the effect on his paycheck will be good. After 16 hours of work all he can think about right now is the sweet, pillowy softness of his bed...</p>\n<p>After collecting his bag from his locker in the employee change room, James wonders how he's going to get home. He took the Skytrain this morning but knows from experience it doesn't run late at night. He made that mistake once and had to take an expensive cab ride from the bar to his house.</p>\n<p>Not looking to spend the dough on a cab, James pulls out his beloved Samsung S8 and starts looking for the train schedule...</p>\n<h2>Experience Map</h2>\n<p>The experience map was created for a step by step analysis on what a user, in this case James, would feel as they tried to find the time of the last train home.</p>\n<p>experience map</p>\n<h2>Ideation</h2>\n<p>I began by considering the options available. We could either:</p>\n<p>Improve the official website. Make it easier for users to navigate and find the information they require. This would be an ideal solution, but would mean I could only provide an unsolicited redesign and our users will still have their needs unmet.\nImprove the Google maps option and simplify the process for less-technical users. This would require a redesign of the Google maps app to better advertise transit options, and is not an easy undertaking.\nCreate a new website. This would allow for a tailor-made experience that solves the user’s problem directly.\nFor this project I decided to move forward with option 3 and create and new website.</p>\n<h2>Why a website and not an app?</h2>\n<p>Where the users are: our users James and Emily are searching for the train schedule, not an app.</p>\n<p>A native app requires forethought to download. Emily doesn’t take the train very often, and wouldn’t make the psychological investment in another app for her phone. James wasn’t planning on staying at work this late, and wouldn’t have an app for this purpose.</p>\n<p>Websites are cross platform. Both our users are mobile, but if we were to develop a native app we would have to code for Android and iPhone. A website would cover their needs and provide desktop support for users who are checking this information from a larger screen (e.g. if James were to check on the concierge iMac before the end of his shift).</p>\n<p>Development would be easier and faster. HTML and CSS with some Javascript is cheaper and easier than writing native applications.</p>\n<p>train lines\nNope.\ntimeline view\nNope.\nlow fidelity mockup\nYep.\nWhy a new site and not a redesign of the official site?\nBe the change you want to see: a new site is something that can be designed, developed, and released to solve this real-world problem independently of Translink. This will allow us to build a product that takes a concept and implements a solution. Ideally, Translink would consider the UX of their site. In the meantime, we can help these users ourselves.</p>\n<p>Reduced constraints: admittedly, this is a double edged sword. Without constraints of existing branding, site structure, and content it gives license for more creative solutions. However, starting from scratch means that more difficult decisions need to be made which would have already be taken care of by working inside an existing framework.</p>\n<p>The proposed design doesn’t preclude integration into the official website. If Translink likes the solution, the unofficial website could be folded in to the official one. As long as the user’s needs are being met!</p>\n<h2>Process</h2>\n<h2>Inspiration</h2>\n<p>Early sketches were inspired by the \"Transit\" app, another valuable resource for any commuter.</p>\n<p>There would be a list of train lines with big colourful buttons including the time of the last train.</p>\n<p>Transit app inspiration\nTransit app, available on iOS and Android.\nInitial Sketches\nInitially the concept involved having a page for each station, organized by line, with each line visible on the home page.</p>\n<p>A user could click through from the homepage to the appropriate line, see the information they require, and click down to the station if they needed more info.</p>\n<p>train lines\nMain page with colour-coded service lines.\ntimeline view\nLine view with station name and departure time.\nlow fidelity mockup\nStation view with all lines and associated departure times.\nInitial Wireframes\nEarly feedback indicated that the station view was redundant. Once a user entered the line view, their questions had already been answered.</p>\n<p>low fidelity mockup\nV1 - Tapping on a train line would take the user to the line view.\nThe idea was based around progressive disclosure so that users looking for the departure time from the initial station had that information immediately.</p>\n<p>medium fidelity mockup\nV2 - Better affordances on the buttons should allow for easier discoverability.\nPrototype\nUser Testing\nHypotheses\nUsers should be able to find the relevant Skytrain line in the Home view\nUsers should be able to click on that line to find the Line view\nUsers should be able to use the Line view to find the departure time at their nearest station\nMethodology\nThe first test was conducted in an interview style. Participants were asked to imagine themselves at a certain station, eg. Granville, and navigate to their home station, eg. Lougheed.</p>\n<p>They were asked to verbally walk through their thought process throughout the experiment.</p>\n<h2>Results</h2>\n<p>After initial testing, I found that users were unlikely to drill down into Station view as they either:</p>\n<p>Already had the information they needed from the Line view.\nExpected the home page to include all stations, not just terminus stations.\nAnother insight was that users looked for a map view. They expected some method of viewing the spatial relationship between stations and lines.</p>\n<h2>Takeaways</h2>\n<p>The initial concept involved users learning a new taxonomy. The metaphor for the site was based on another app, which if users were not familiar with (Emily usually drives and would not use a Transit app) then it would be too time consuming.</p>\n<p>Considering feedback from user testing and the context of our personas (fatigued and intoxicated), the site design should be more compact and more visual.</p>\n<h2>Round Two</h2>\n<h2>Revised Ideation</h2>\n<p>Initial research helped inform the decision to reduce the site footprint, eliminate the station view, and bring all relevant information into a line view.</p>\n<p>To accomplish this goal, a new design based on the familiar Skytrain route map was considered.</p>\n<p>skytrain map\nTransit map as seen onboard a Skytrain\nFrequent travellers have seen this map so many times that most of them have it memorized, or are at least familiar with it’s general shape and the relative location of stations.</p>\n<p>This map is also seen by every transit rider unfamiliar with the system, as they use it to navigate from their current location to their desired destination.</p>\n<h2>Revised Sketches</h2>\n<p>The new design was based on the map everyone sees on the Skytrain, but rotated to better accomodate mobile screen length.</p>\n<p>new sketch\nStation view with all lines and associated departure times.\nRevised Wireframes\nThe new design capitalizes on recognition over recall. The classic Skytrain map has been turned on its side to make it easier to view and scroll on mobile in portrait orientation.</p>\n<p>So while the map is no longer oriented as “north-is-up”, the colouring of the lines and the progression of the stations should provide enough context clues to allow users to orientate.</p>\n<p>As users scroll down they are also scrolling through time. The farther down the page they go, the later the time of the last train. In a way, they are following the path of the last train from beginning to end.</p>\n<p>Users who are downtown, like James and Emily, are closer to the beginning of the line. This means the train leaves earlier relative to stations further down the list. This design prioritizes those stations and minimizes scrolling for any user looking to depart from the downtown core. This assumption can be tested!</p>\n<h2>Prototype</h2>\n<p>The second prototype:</p>\n<p>Hmm... looks like a lot of scrolling...\nFuture Directions\nRevised Testing\nUsers should be able to quickly find their nearest station and the time of departure.\nUsers should be able to switch directions of the line\nUsers should be able to switch to a different line\nThe different lines on the page should be distinct enough to not cause confusion\nMethodology\nIn an attempt to get into the mindset of Emily, I will be testing users after they consumed a similar amount of alcohol.</p>\n<p>In an attempt to get into the mindset of James, I will be testing users after a late night shift at work.</p>\n<h2>Results</h2>\n<p>Hopefully the new design will outperform the previous design.</p>\n<p>If not, then elements of the two can be combined to create a hybrid design with the best of both.</p>\n<h2>Learning Outcomes</h2>\n<p>This project has been instrumental in teaching the value of testing designs with users early and often. The faster you can get a design idea in front of real users, the less time you waste on creating something that doesn’t solve the problem at hand. -</p>",frontmatter:{date:"March 01, 2017",path:"/projects/the-last-skytrain",title:"The Last Skytrain"}}},pathContext:{}}}});
//# sourceMappingURL=path---projects-the-last-skytrain-cd1c15745f3935fe3259.js.map