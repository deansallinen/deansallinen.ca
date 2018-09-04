webpackJsonp([6709832987247],{337:function(e,t){e.exports={data:{markdownRemark:{html:'<p>This project uses Javascript to connect a popular event-industry inventory management system with a sharable Google calendar using REST APIs in an attempt to improve calendar usability. Initially written in ES5 using the Google Apps Script platform, the project was rewritten in ES6 on a Node server when the limitations of using Google Apps Script outweighed the initial benefits.</p>\n<h2 id="problem"><a href="#problem" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Problem</h2>\n<p>tl;dr: Automating a previously manual process to create accurate and up-to-date Load In and Load Out events so our Warehouse and Logistics teams could better schedule resources.</p>\n<p>The project began with an oversight. When I first joined the team I noticed our Account Managers (AMs)spent multiple hours a week entering Load In and Load Out events into a shared calendar in our company CRM. The idea was to have a calendar view better than what our inventory management software, Flex, provides.</p>\n<p>My observations showed that our Warehouse and Logistics teams rarely, if ever, used this calendar that the Account Managers painstakingly curated. Why? Because even with regular updates by the AMs the calendar was still inaccurate often enough to become dangerous to rely on. If a scheduled event Load In was missed by an hour because an AM forgot to update the calendar after receiving a call -- that could mean we lose business.</p>\n<p>The solution seemed simple at the time: Flex contained the "source of truth" and was always up-to-date with accurate dates and times. Our Warehouse and Logistics teams relied on the Flex calendar because the CRM calendar was wrong frequently enough. So cut out the step of having the AM update the CRM calendar for the Warehouse and Logistic\'s team\'s benefit (Load In and Load Out events) and use the freed time to maintain consistency in Flex.</p>\n<p>This worked, for a time. After a while the unintentional side-effects of altering a system began to arise. We noticed that Load Ins and Load Outs were starting to be scheduled on top of each other more often. Our trucks were getting booked, double-booked, triple-booked, etc. and we started relying more on sub-contractors, couriers and rental fleets. In addition to this, we noticed that AMs had very poor visibility into the days and weeks ahead, making requests on the Warehouse and Logistics teams that couldn\'t reasonably be fulfilled. The biggest indication was when our President asked our Logistics manager an innocuous question: "Are we busy this week?" To which the response was an incredulous laugh after yet another overtime shift. This is when I realized the full extent of the side-effects.</p>\n<h3 id="solution"><a href="#solution" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Solution</h3>\n<p>My proposed solution was the creation of an automated syncing service that consumed the Flex API to get upcoming Events, parse the Load In and Load Out dates, create multiple unique events and insert them into a company-wide Google Calendar using the Google Calendar API.</p>\n<p>Note: the Flex software does have a Google Calendar sync option built-in, however it syncs the <em>duration</em> of the event, not the discrete start and end times. What this means is that an event can last a month but our crews only need the Load In datetime and the Load Out datetime, as two separate events. Hence a custom solution.</p>\n<p>The result of that solution is seen below.</p>\n<h2 id="lessons"><a href="#lessons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lessons</h2>\n<p>This solution isn\'t perfect. Even though the old habits of manual entry were often inaccurate or out of date, the benefit was the AMs were continually aware of the pulse of the Operations team. By opening the schedule daily they could make judgement calls with their clients and move Load In and Load Out times around to better accomodate the Logistics team.</p>\n<p>Although they can see a "general overview" with the Google Calendar solution, as they could with the intermediary Flex-calendar-only solution, they don\'t have the tactility of inputing the events themselves to internalize the calendar.</p>',headings:[{value:"Problem",depth:2},{value:"Solution",depth:3},{value:"Lessons",depth:2}],frontmatter:{date:"May 01, 2018",path:"/projects/flextogcal",title:"Flex to Gcal",tags:["UX","JavaScript"],toc:!1}}},pathContext:{}}}});
//# sourceMappingURL=path---projects-flextogcal-d4409f8c6c695a7ba8d0.js.map