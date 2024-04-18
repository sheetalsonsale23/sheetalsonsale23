// "use client"
import React, { useEffect } from 'react'
import Post from "../_api/_post/post";
import EventCard from '../components/EventCard';

const EventPage = async () => {
    const { fetchPost }: any = Post();
      const getItem=async ()=> {
            // The `fetch` function is automatically memoized and the result
            // is cached
            const res = await fetch('https://6486faf7beba6297278f99d8.mockapi.io/feed')
            console.log(res,'card')
            return res.json()
          }
    const item = await getItem()
    console.log(item,'schemammmmmmmmmmmmmmmmmmmmmmmm')
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SportsEvent',
        name: 'Basketball Game Final: Team 1 vs Team 2 '+item[0].title,
        image: 'product.image',
        "startDate": "2024-04-10T20:00",
        "endDate": "2024-04-10T22:30",
        "location": {
            "@type": "Place",
            "name": "Spectrum Center",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Charlotte",
              "addressRegion": "NC"
            }
          },
          "description": "A thrilling final match at the Spectrum Center with Team 1 facing off against Team 2. The game concluded with Team 2 securing a victory with a final score of 130 to 104. Key statistics include Team 1's 43.8% field goal percentage and Team 2's superior 53.8% field goal percentage. Notable performances were seen from Miles Bridges of Team 1 and Luka Doncic of Team 2, with Doncic leading in points, rebounds, and assists.",
          "competitor": [
            {
              "@type": "SportsTeam",
              "name": "Team 1",
              "sport": "Basketball",
              "image": "URL_of_Team_1_Image",
              "description": "Team 1 put up a valiant effort with a final score of 104. Statistics: Rebounds: 39, Assists: 24, Field Goal Percentage: 43.8%, Three Point Percentage: 31.3%. Leading player: Miles Bridges with 22 points and a 36.6 rating."
            },
            {
              "@type": "SportsTeam",
              "name": "Team 2",
              "sport": "Basketball",
              "image": "URL_of_Team_2_Image",
              "description": "Team 2 emerged victorious with a final score of 130. Statistics: Rebounds: 55, Assists: 35, Field Goal Percentage: 53.8%, Three Point Percentage: 34.0%. Leading player: Luka Doncic dominated with 39 points, 12 rebounds, 10 assists, and a 70.65 rating."
            }
          ],
          "eventStatus": "http://schema.org/EventScheduled",
          "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode"
        
      }
    // useEffect(() => {
    //     try {
    //       fetchPost().then((response: any) => {
    //         if (!response?.error) {
    //           console.log(JSON.stringify(response),'event page');
    //         //   for (const post of response) {
    //         //     post.like= false
    //         //   }
    //         //   setFeedData(response);
    //         }
    //       });
    //     } catch (e: any) {
    //       console.log(e, "catch error");
    //     }
    //   }, []);
  return (
    <div>
        <section>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ... */}
    </section>
        <EventCard/>
    </div>
  )
}

export default EventPage