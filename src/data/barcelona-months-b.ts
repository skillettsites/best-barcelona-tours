import { MonthContent } from '@/lib/season-types';

// January through May.
//
// Same sourcing rules as the August to December file. Two things worth flagging
// for anyone editing this later:
//   1. There is no Formula 1 race in Barcelona in 2027. The Spanish Grand Prix
//      moved to Madrid from 2026 and the Circuit de Barcelona-Catalunya now
//      hosts a separately-named race in even years only, in June. Any source
//      putting F1 on a Barcelona May page is working from pre-2026 information.
//   2. Primavera Sound 2027 (3 to 5 June) and Sónar (17 to 19 June) both fall
//      outside this guide's window and must not appear on the May page.

export const january: MonthContent = {
  slug: 'barcelona-in-january',
  month: 'January',
  monthKey: 'january',
  yearOffset: 1,
  prevMonth: 'December',
  prevPath: '/barcelona-in-december',
  nextMonth: 'February',
  nextPath: '/barcelona-in-february',
  metaDescription:
    'Barcelona in January: the cheapest month of the year, with 13.5C highs and only four wet days. La Pedrera closes for a full week from 11 to 17 January and the Sagrada Família runs half-days on the 1st and 6th.',
  heroCapsule:
    'January is the cheapest month to visit Barcelona and the second driest, at 44mm across four wet days. Two things need planning around: the Sagrada Família opens 09:00 to 14:00 only on 1 and 6 January, and La Pedrera closes completely for a full week from 11 to 17 January.',

  verdict: {
    capsule:
      'Yes, if value is what you are optimising for. January has the lowest hotel rates of the year and only four wet days, the joint fewest with December. Average highs of 13.5C are the coldest of the ten months, but daylight has already started climbing back, to 9 hours 30 minutes.',
    body: [
      'January in Barcelona has two halves separated by Epiphany. Until 6 January the city is still in its Christmas season: lights up, Reis approaching, families out, restaurants busy and rates holding. From about 8 January it empties completely and stays empty until the trade-fair season starts in February. That second stretch is the cheapest and quietest Barcelona gets in the entire year.',
      'The weather is the coldest of the ten months but not by much and not in a way that stops anything. Thirteen and a half degrees at midday with low sun and no wind is comfortable walking weather, and 44mm over four wet days means it very rarely rains. What it is not is beach weather: the sea is at 14 to 15C and heading for its February floor.',
      'The one genuine planning obstacle is La Pedrera, which closes for a full week from 11 to 17 January. That is not a reduced timetable, it is a closure, and it lands squarely in the cheapest week of the year. If Casa Milà is on your list, either bracket that week or accept you will not see it.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 13.5C and lows of 4.7C, the coldest of the ten months, with 44mm of rain across four wet days. Daylight has already turned the corner at 9 hours 30 minutes, seventeen minutes up on December. The sea is at 14 to 15C.',
    body: [
      'The 4.7C average low is the coldest figure anywhere in this guide, and it is worth putting in context: that is an overnight number, not a daytime one, and it is still warmer than a London January night. Frost in the city is unusual. Snow in the city is rare enough that when it happens it makes the national news.',
      'Rainfall is low and, unusually, concentrated. Forty-four millimetres over only four wet days means when it does rain in January it rains properly, but twenty-seven days in the month see nothing at all. Combined with the low sun, that produces the clearest air of the year: the view from Park Güell and from Montjuïc across to the Collserola ridge is at its sharpest in January.',
      'The daylight number is the encouraging one. Nine hours thirty minutes on the 15th is already seventeen minutes better than December, and by the end of the month sunset has moved from just after 17:30 to around 18:00. The trajectory is upward for the rest of this guide.',
    ],
  },

  crowds: {
    capsule:
      'From about 8 January this is the emptiest and cheapest Barcelona gets all year. The first week is different: Reis on Wednesday 6 January is a major Spanish holiday and the Cavalcada de Reis on the evening of the 5th is one of the biggest street events in the city.',
    body: [
      'Epiphany matters far more in Spain than Christmas Day does, and it changes how the first week of January feels. The Three Kings arrive in Barcelona on the evening of 5 January in the Cavalcada de Reis, a large processional parade, and children receive their presents on the morning of the 6th rather than on the 25th. Shops, banks and a great many restaurants close on 6 January. We have not published a route or a start time for the parade because Barcelona had not confirmed the 2027 details when this page was written.',
      'After that the city empties. Park Güell slots are freely available, the Sagrada Família is as calm as it ever gets, and hotel rates hit their annual floor. It is the best month of the ten to visit if you want to improvise rather than book, with the single exception of La Pedrera\'s closed week.',
      'The city\'s per-night tourist tax is where January\'s bargain gets a little less impressive. It is a flat charge per person that takes no notice of what you paid for the room, so against the lowest rates of the year it is proportionally the heaviest it gets. On a seven-night stay for two it can rival the cost of a couple of nights of the accommodation itself. The rate card is set out on our August guide.',
    ],
  },

  tours: {
    capsule:
      'The January ten is a cold-weather, high-value ranking. Indoor experiences dominate, Park Güell benefits from the clearest air of the year, and two products are simply not on sale. All prices, ratings and review counts were checked against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: 'barcelona-sagrada-familia-entry-ticket-with-audio-guide',
        label: 'Sagrada Família entry ticket with audio guide',
        bestFor: 'A quiet basilica with two half-days to avoid',
        why: 'January is the calmest month inside the Sagrada Família and the audio guide format suits an empty nave, because you can stop where you like. The trap is the calendar: the basilica opens 09:00 to 14:00 only on 1 January and again on 6 January, rather than its usual 09:00 to 18:00.',
      },
      {
        slug: 'barcelona-casa-batll-entry-with-self-audioguide-tour',
        label: 'Casa Batlló entry with self-guided audio tour',
        bestFor: 'The week La Pedrera is shut',
        why: 'Ranked second for a very specific reason. La Pedrera closes completely from 11 to 17 January, and Casa Batlló is the direct substitute: the other great Modernista house on the same avenue, open every day of the year from 09:00 to 22:30. Non-refundable on GetYourGuide.',
      },
      {
        slug: 'barcelona-fc-barcelona-museum-and-quot-bar-a-immersive-tour-',
        label: 'FC Barcelona Museum and Barça Immersive Tour',
        bestFor: 'A cold, cheap indoor afternoon',
        why: 'January is the coldest month of the ten at 13.5C highs and 4.7C lows, and a stadium museum is three hours indoors with something to look at. Spotify Camp Nou reopened on 22 November 2025, capacity rose to 62,652 on 10 March 2026 and the third tier is still closed. Listed as non-refundable.',
      },
      {
        slug: 'barcelona-flamenco-show-at-the-theater-and-quot-city-hall-an',
        label: 'Flamenco show at the City Hall theatre',
        bestFor: 'An evening in the quietest month',
        why: 'January evenings in Barcelona are genuinely quiet once Epiphany has passed, which is either the appeal or the problem depending on your temperament. A booked show at 4.6 out of 5 from 11,934 reviews puts something certain in a diary that would otherwise be empty from half past five.',
      },
      {
        slug: 'barcelona-aquarium-entry-ticket',
        label: 'Barcelona Aquarium entry ticket',
        bestFor: 'Families over the Reis holiday',
        why: 'The Spanish school holiday runs through Epiphany, so the first week of January is family season in a way the rest of the month is not. The aquarium is fully indoors on Port Vell at 14 to 15C sea temperatures, when the actual Mediterranean is not an option.',
      },
      {
        slug: 'barcelona-park-g-ell-admission-ticket',
        label: 'Park Güell admission ticket',
        bestFor: 'The clearest air and the best view of the year',
        why: 'Ranked here on visibility rather than temperature. January\'s combination of low sun, four wet days and clean post-rain air gives the sharpest view from the mosaic terrace across the city to the sea of any month in this guide. General admission is 18 euros and slots are available on the day outside weekends.',
      },
      {
        slug: 'barcelona-sagrada-familia-skip-the-line-entry-ticket-and-tou',
        label: 'Sagrada Família skip-the-line entry ticket and tour',
        bestFor: 'A guide when the queue is not the problem',
        why: 'Rated 4.8 out of 5, the best of the site\'s Sagrada Família options. In January the skip-the-line element is worth least of any month, because there is barely a queue. What you are buying here is the guide, and 2026 was the Gaudí centenary year, so there is more to say than usual.',
      },
      {
        slug: 'barcelona-city-tour-hop-on-hop-off-bus-tour',
        label: 'Barcelona hop-on hop-off bus tour',
        bestFor: 'The Christmas lights, until the 6th',
        why: 'Ranked as a first-week option. The Christmas lights are expected to stay up to 6 January, so the early-January evenings still have something to look at from a bus. After Epiphany it reverts to a straightforward orientation tour in the coldest month of the year.',
      },
      {
        slug: 'barcelona-montserrat-tour-with-cog-wheel-and-black-madonna',
        label: 'Montserrat tour with cog-wheel train and Black Madonna',
        bestFor: 'A clear-air mountain day, properly dressed',
        why: 'January\'s clear air makes the view from the abbey exceptional, and the crowds that make Montserrat difficult in summer are gone entirely. The mountain is genuinely cold at altitude, several degrees below the city\'s 13.5C, and the wind on the terraces is the thing people underestimate.',
      },
      {
        slug: 'barcelona-park-guell-guided-tour-with-skip-the-line-entry',
        label: 'Park Güell guided tour with skip-the-line entry',
        bestFor: 'Standing still for an hour in the cold, with a reason',
        why: 'Ranked below the plain admission ticket this month, which reverses the summer order. In January the queue the guided tour skips barely exists, and a guided pace on a 4.7C morning means standing still in the cold. Take it for the commentary, not for the queue.',
      },
    ],
    note:
      'Two products are genuinely unavailable rather than ranked out: the Costa Brava kayak and snorkel day trip, the site\'s highest-rated tour, has no GetYourGuide availability until around April, and the Casa Batlló rooftop night visit runs 1 April to 31 August only. Both are in the closures table. The catamaran cruise is left out on our judgement, not availability: an open deck with the sea at 14 to 15C is not the experience it is sold as.',
  },

  events: {
    capsule:
      'January is dominated by Epiphany. The Cavalcada de Reis arrives on the evening of Tuesday 5 January and Reis itself, Wednesday 6 January, is a major national holiday. After that the calendar is empty until February.',
    rows: [
      { event: 'New Year\'s Day', dates: 'Friday 1 January', where: 'Nationwide public holiday', free: 'Public holiday' },
      { event: 'Cavalcada de Reis', dates: 'Evening of Tuesday 5 January', where: 'Barcelona city centre, route not yet published', free: 'Free' },
      { event: 'Reis (Epiphany)', dates: 'Wednesday 6 January', where: 'Nationwide public holiday', free: 'Public holiday' },
      { event: 'Christmas lights, final day (expected)', dates: 'Expected 6 January', where: 'Main avenues city-wide', free: 'Free' },
      { event: 'La Pedrera closed', dates: '11 to 17 January', where: 'Passeig de Gràcia 92', free: 'Closed, full week' },
    ],
    body: [
      'The Cavalcada de Reis is the biggest street event of Barcelona\'s winter and it is genuinely worth arranging a trip around. The Three Kings arrive in the city on the evening of 5 January with a large processional parade, floats and sweets thrown into the crowd, and children then wake to presents on the 6th. The date is structurally fixed because Epiphany is; the route and start time for 2027 had not been published when this page was written, so check the city\'s programme rather than relying on last year\'s.',
      'Reis on Wednesday 6 January is a full national public holiday and, falling midweek, it does close things properly. Banks, offices, most shops and many restaurants shut. The Sagrada Família drops to 09:00 to 14:00. Museums and transport run, but on a Sunday-style rhythm.',
      'After Epiphany, January is deliberately empty. The next fixed date of any consequence in Barcelona\'s calendar is ISE at the start of February, so anyone visiting between about 8 January and the end of the month has the city largely to themselves.',
    ],
  },

  closures: {
    capsule:
      'January carries the longest single closure in this guide: La Pedrera shuts completely from 11 to 17 January, a full week. The Sagrada Família also runs 09:00 to 14:00 only on 1 and 6 January, and two seasonal products remain off sale.',
    rows: [
      { site: 'La Pedrera (Casa Milà)', closed: '11 to 17 January, full week', note: 'A complete closure, not reduced hours. It also runs a Christmas timetable to 3 January, opening at 11:00 on 1 January, before returning to winter hours of 09:00 to 18:30.' },
      { site: 'Sagrada Família', closed: 'Half-days on 1 and 6 January', note: 'Open 09:00 to 14:00 only on both dates. Otherwise November to February hours: Monday to Saturday 09:00 to 18:00, Sunday 10:30 to 18:00.' },
      { site: 'Costa Brava sea trips', closed: 'All month, until about April', note: 'No GetYourGuide availability. The sea is 14 to 15C and still falling towards its February floor.' },
      { site: 'Casa Batlló night visit', closed: 'All month, until 1 April', note: 'Season is 1 April to 31 August only. Casa Batlló itself is open daily 09:00 to 22:30 including 1 and 6 January.' },
      { site: 'Banks, offices and most shops', closed: '1 and 6 January', note: 'New Year\'s Day falls on a Friday and Reis on a Wednesday, so the 6th genuinely interrupts the working week.' },
      { site: 'Independent restaurants', closed: 'Varies, first week', note: 'Many take their annual break after Epiphany rather than in August. Check before travelling out to a specific place.' },
    ],
    body: [
      'The La Pedrera week from 11 to 17 January is the longest closure of any major site in this guide and it is worth planning around rather than discovering. It is a genuine full closure for maintenance, not a shortened timetable. Given that the same week is otherwise one of the cheapest and quietest of the year, the sensible response is to book the flights anyway and substitute Casa Batlló, which is open every day of the year.',
      'The Sagrada Família half-days on 1 and 6 January mirror the pair on 25 and 26 December. Four half-days in a fortnight is the densest concentration of restricted opening in the basilica\'s calendar, and all four fall in the period when most people take a winter city break.',
      'It is also worth knowing that a fair number of independent Barcelona restaurants take their annual holiday after Epiphany rather than in August. It is the same phenomenon as the August shutdown, smaller in scale and much less written about, and it catches people who assumed the August warning was the only one.',
    ],
  },

  packing: {
    capsule:
      'Pack for the coldest month of the ten, 13.5C by day and 4.7C at night, but not for a northern winter. What you actually need is a proper jacket, a scarf and shoes you can stand around in, plus much warmer kit if Montserrat is on the list.',
    body: [
      'Barcelona in January is cold in the way an English April is cold: it needs a jacket and it does not need a parka. The trap is the swing. Nearly nine degrees separates the 13.5C afternoon from the 4.7C night, and the stone-floored interiors of the Gothic Quarter hold the night temperature well into the day.',
      'With only four wet days, waterproofing is close to irrelevant and warmth is what matters. A scarf does double duty here, since it also satisfies the Sagrada Família dress code, which applies just as strictly in January as in August.',
      'Montserrat needs a separate mental packing list. The abbey sits high on an exposed ridge and can be several degrees below the city with significant wind. A city jacket that is fine on Passeig de Gràcia will not be fine on the monastery terrace in January.',
    ],
    list: [
      'A proper insulated jacket, not a parka: 13.5C by day, 4.7C at night',
      'A scarf, which also covers the Sagrada Família dress code',
      'Much warmer layers and a hat if Montserrat is on the itinerary',
      'Shoes you can stand still in on cold stone for an hour',
      'Skip the umbrella if you are travelling light: four wet days is the year\'s joint fewest',
      'A camera: January has the clearest air and the sharpest views of the year',
    ],
  },

  faqs: [
    {
      question: 'Is January the cheapest time to visit Barcelona?',
      answer: 'Yes, from about 8 January onwards. The first week is still Christmas season, with Reis on 6 January keeping rates up and the city busy. Once Epiphany has passed, hotel rates fall to their annual floor and stay there until the trade-fair season starts with ISE in early February. Timed attraction slots are available on the day outside weekends.',
    },
    {
      question: 'Is La Pedrera closed in January?',
      answer: 'For one week, yes. La Pedrera closes completely from 11 to 17 January, which is the longest closure of any major Barcelona site in this guide. It is a full closure rather than reduced hours. Before that it runs a Christmas timetable to 3 January, opening at 11:00 on 1 January, then returns to winter hours of 09:00 to 18:30 with the night visit at 19:00 to 23:00.',
    },
    {
      question: 'What is Reis and how does it affect a January trip?',
      answer: 'Reis is Epiphany, 6 January, and it matters far more in Spain than Christmas Day does. The Three Kings arrive in the Cavalcada de Reis parade on the evening of the 5th and children get their presents on the morning of the 6th. In 2027 the 6th falls on a Wednesday, so banks, offices, most shops and many restaurants close midweek. The Sagrada Família opens 09:00 to 14:00 only.',
    },
    {
      question: 'How cold does Barcelona get in January?',
      answer: 'Average highs of 13.5C and lows of 4.7C, the coldest of the ten months in this guide but milder than most of northern Europe. Frost in the city is unusual and snow is rare enough to make the news. Montserrat, an hour inland and at altitude, is a genuinely different climate and can be several degrees colder with significant wind.',
    },
    {
      question: 'Does it rain much in Barcelona in January?',
      answer: 'Very little. About 44mm falls across four wet days, joint fewest with December, which means twenty-seven days of the month typically see no rain at all. The combination of low winter sun, clean air after those few rain days and no summer haze gives January the sharpest views of the year from Park Güell and Montjuïc.',
    },
    {
      question: 'Can you do the Costa Brava boat trips in January?',
      answer: 'No. The Costa Brava kayak, snorkel and cliff jump day trip, which is the highest-rated tour on this site at 4.9 out of 5, has no GetYourGuide availability through the winter and does not return until around April. The sea is at 14 to 15C in January and falling towards a February floor of about 13C.',
    },
  ],
};

export const february: MonthContent = {
  slug: 'barcelona-in-february',
  month: 'February',
  monthKey: 'february',
  yearOffset: 1,
  prevMonth: 'January',
  prevPath: '/barcelona-in-january',
  nextMonth: 'March',
  nextPath: '/barcelona-in-march',
  metaDescription:
    'Barcelona in February: the sea bottoms out at 13C, half its August temperature, while daylight climbs past ten and a half hours. ISE fills hotels from 2 to 5 February and Carnestoltes runs 4 to 10 February.',
  heroCapsule:
    'February is the month the Mediterranean is at its coldest, 13C against August\'s 25 to 26C, so this is a city trip and nothing else. In exchange you get an extra hour of daylight over December and Carnestoltes, Barcelona\'s carnival, running 4 to 10 February.',

  verdict: {
    capsule:
      'Yes, with two dates to avoid on price. February gains an hour of daylight over December and adds a degree of warmth over January, at 14.7C average highs. The sea hits its 13C annual floor, and the ISE trade fair from 2 to 5 February distorts hotel rates city-wide.',
    body: [
      'February is the month where Barcelona\'s numbers start moving in the right direction again. Daylight is up to 10 hours 36 minutes, more than an hour better than December, and average highs of 14.7C are a degree above January. Rainfall drops to 36mm, the second lowest of the year. It is a better month to visit than January on almost every measure except price.',
      'The exception, and it is the whole story on price, is that February is the start of Barcelona\'s trade-fair season. Integrated Systems Europe runs at Fira Gran Via from 2 to 5 February and fills a very large number of hotel rooms. Four weeks later Mobile World Congress does the same thing on a much bigger scale. If you are visiting in February for value, book around ISE rather than through it.',
      'The other thing to be clear-eyed about is the sea. Thirteen degrees is the annual minimum, roughly half the August peak, and it is why the coastal half of Barcelona is simply closed as an option this month. What is left is Modernisme, food and carnival, which is plenty, but anyone picturing a Mediterranean beach break should look at May or later.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 14.7C and lows of 5.9C, with 36mm of rain across six wet days. Daylight is 10 hours 36 minutes mid-month, over an hour up on December. The sea reaches 13C, its lowest reading of the year and roughly half the 25 to 26C August peak.',
    body: [
      'The sea temperature is worth a moment because it is Barcelona\'s single most honest seasonal statistic. Water lags air by about six weeks, so the Mediterranean off Barcelona keeps cooling well after the coldest air has passed, and it bottoms out in February rather than in January. Thirteen degrees is not swimming temperature by any reasonable definition, and it explains why no sea-based tour on this site is bookable this month.',
      'On land the picture is more cheerful. Six wet days and 36mm is a dry month by any standard, and 14.7C in low February sun on a sheltered street in the Eixample is comfortable. The daily swing to a 5.9C night is still nearly nine degrees, so the evening needs a jacket even when the afternoon did not.',
      'The daylight gain is the number that changes plans. At 10 hours 36 minutes, sunset is around 18:15 by the end of the month rather than December\'s 17:30. That is roughly forty-five minutes of extra usable evening, and it is enough to put a Park Güell late-afternoon slot back on the table.',
    ],
  },

  crowds: {
    capsule:
      'February is quiet except for one week. ISE at Fira Gran Via from 2 to 5 February fills hotels city-wide, and it is only about four weeks before Mobile World Congress does the same thing on a far bigger scale in early March.',
    body: [
      'Barcelona\'s trade-fair calendar is the thing that most determines what you pay for a room outside the summer, and almost no travel guide mentions it. Integrated Systems Europe is one of the largest professional audiovisual shows in the world and it takes over Fira Gran Via from 2 to 5 February. It does not fill Barcelona the way Mobile World Congress does, but it noticeably firms rates for that week and the nights either side.',
      'Outside that week, February is close to January in feel: light crowds, available slots, calm attractions. The Barcelona Half Marathon on Sunday 14 February brings central road closures for the morning, which is worth knowing if you have a fixed-time attraction slot that day or a taxi to catch.',
      'February is one of the last two full months before Barcelona\'s tourist tax changes. The current schedule holds to 31 March 2027 and a new one takes effect on 1 April 2027, for which the city had not published figures when this page was written. If you are weighing a late-winter trip against a late-spring one, that is a small but real point in February\'s favour. Current rates are set out on our August guide.',
    ],
  },

  tours: {
    capsule:
      'The February ten is a pure city-break ranking. With the sea at its 13C annual floor, everything with a sea component is either unavailable or ranked out, and the extra daylight over December brings the outdoor Gaudí sites back up the list. Figures verified against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: 'barcelona-sagrada-familia-entry-ticket-with-audio-guide',
        label: 'Sagrada Família entry ticket with audio guide',
        bestFor: 'The last month of the winter timetable',
        why: 'February is the final month of the basilica\'s November to February hours, Monday to Saturday 09:00 to 18:00 and Sunday 10:30 to 18:00, before they extend again in March. Unlike December and January there are no half-days in February at all, so every day of the month is a full one.',
      },
      {
        slug: 'barcelona-casa-batll-entry-with-self-audioguide-tour',
        label: 'Casa Batlló entry with self-guided audio tour',
        bestFor: 'Carnestoltes evenings',
        why: 'Carnival week runs 4 to 10 February and the city is out after dark. Casa Batlló\'s year-round 09:00 to 22:30 opening is the one Gaudí interior that fits around an evening rather than replacing it. Listed as non-refundable on GetYourGuide.',
      },
      {
        slug: 'barcelona-flamenco-show-at-the-theater-and-quot-city-hall-an',
        label: 'Flamenco show at the City Hall theatre',
        bestFor: 'Carnival week, when the city stays up',
        why: 'Ranked up for Carnestoltes. From Dijous Gras on 4 February to Ash Wednesday on the 10th, Barcelona is in the mood for a late evening, and a seated hour rated 4.6 out of 5 sits neatly before or after the street events without needing to be booked around them.',
      },
      {
        slug: 'barcelona-fc-barcelona-museum-and-quot-bar-a-immersive-tour-',
        label: 'FC Barcelona Museum and Barça Immersive Tour',
        bestFor: 'The business end of the league season',
        why: 'February is when La Liga positions harden and European knockout rounds start, so the stadium has more to say than in September. Spotify Camp Nou has been back in use since 22 November 2025 with capacity at 62,652 from 10 March 2026 and the third tier still closed. Non-refundable.',
      },
      {
        slug: 'barcelona-sagrada-familia-skip-the-line-entry-ticket-and-tou',
        label: 'Sagrada Família skip-the-line entry ticket and tour',
        bestFor: 'A guided hour with no queue to skip',
        why: 'Rated 4.8 out of 5, the best-rated Sagrada Família option here. As in January, you are buying the guide rather than the queue-jump. Worth asking about the Tower of Jesus Christ, completed on 20 February 2026 at 172.5m: this is the tallest church in the world and that tower is not open to visitors.',
      },
      {
        slug: 'barcelona-aquarium-entry-ticket',
        label: 'Barcelona Aquarium entry ticket',
        bestFor: 'The only warm water in Barcelona this month',
        why: 'Ranked here with a straight face. The Mediterranean off Barcelona is at 13C in February, its coldest of the year, so a heated tank on Port Vell is quite literally the only warm water on the list. It is also the reliable option on the six wet days.',
      },
      {
        slug: 'barcelona-park-guell-guided-tour-with-skip-the-line-entry',
        label: 'Park Güell guided tour with skip-the-line entry',
        bestFor: 'An extra hour of daylight over December',
        why: 'Ranked up from tenth in January. Ten and a half hours of daylight puts the mid-afternoon slots back in usable light, and at 14.7C an hour on the hillside is comfortable rather than an endurance test. Book the guided version for the pace; the queue is still no obstacle in February.',
      },
      {
        slug: 'barcelona-city-tour-hop-on-hop-off-bus-tour',
        label: 'Barcelona hop-on hop-off bus tour',
        bestFor: 'Covering ground in a low-crowd month',
        why: 'February is a good month for the bus for an unglamorous reason: with the summer crowds gone, you are not queueing at stops and the routes actually run to time. Thirty-six millimetres of rain across six days makes the top deck a reasonable bet on most days.',
      },
      {
        slug: 'barcelona-montserrat-tour-with-cog-wheel-and-black-madonna',
        label: 'Montserrat tour with cog-wheel train and Black Madonna',
        bestFor: 'A quiet abbey with lengthening days',
        why: 'The extra hour of daylight over December removes the first-departure-only constraint that applies in the darkest months. The mountain is still considerably colder than the city\'s 14.7C, and February is the month with the least excuse for underdressing, since you have been told twice.',
      },
      {
        slug: 'barcelona-gaud-s-park-g-ell-tour-with-fast-track-ticket',
        label: 'Gaudí\'s Park Güell tour with fast-track ticket',
        bestFor: 'A short guided visit on a cold morning',
        why: 'Ranked in for February specifically because of its length. At 55 minutes this is the shortest guided option on the site, which is exactly what you want on an exposed hillside at 5.9C first thing. Rated 4.7 out of 5 from 6,830 reviews.',
      },
    ],
    note:
      'Neither the Costa Brava kayak and snorkel trip nor the Casa Batlló rooftop night visit is bookable this month; both are listed in the closures table rather than ranked. February is the month where Barcelona\'s inventory is most obviously a city inventory: with the sea at 13C there is nothing genuinely coastal on sale, and we would rather say so than pad the list.',
  },

  events: {
    capsule:
      'February has two very different draws. Carnestoltes, Barcelona\'s carnival, runs from Dijous Gras on Thursday 4 February to Ash Wednesday on the 10th, and ISE fills Fira Gran Via from 2 to 5 February.',
    rows: [
      { event: 'ISE (Integrated Systems Europe)', dates: '2 to 5 February', where: 'Fira Gran Via, L\'Hospitalet', free: 'Trade only, ticketed' },
      { event: 'Carnestoltes (Carnival)', dates: '4 to 10 February', where: 'City-wide, district by district', free: 'Free' },
      { event: 'Dijous Gras', dates: 'Thursday 4 February', where: 'City-wide', free: 'Free' },
      { event: 'Barcelona Half Marathon', dates: 'Sunday 14 February', where: 'Central Barcelona, road closures', free: 'Free to watch' },
      { event: 'Ash Wednesday', dates: 'Wednesday 10 February', where: 'City-wide', free: 'Free' },
      { event: 'La Pedrera winter season ends', dates: '25 February', where: 'Passeig de Gràcia 92', free: 'Ticketed' },
    ],
    body: [
      'Carnestoltes is Barcelona\'s carnival and it is organised very differently from the ones people picture. Rather than one central parade, each district runs its own, so the week is a scatter of neighbourhood events rather than a single spectacle. It opens on Dijous Gras, Fat Thursday, on 4 February, when the traditional food is the truita de llardons, a pork-crackling omelette, and coca de llardons to follow. It ends on Ash Wednesday, 10 February, with the burial of the sardine.',
      'Sitges, forty minutes down the coast by train, runs a far larger and much more famous carnival than Barcelona does, and a great many visitors make the trip. Its 2027 parade dates had not been published when this page was written, so we are not listing them; check the Sitges town programme closer to the time.',
      'The Barcelona Half Marathon on Sunday 14 February closes central roads for the morning. It is a fast, flat course and pleasant to watch, but if you have a timed attraction slot or an airport transfer that morning, build in extra time.',
    ],
  },

  closures: {
    capsule:
      'February is the cleanest month in this guide for closures. There are no public holidays at all, no half-days at the Sagrada Família and no full-day closures at La Pedrera. The only things off the table are the two seasonal products.',
    rows: [
      { site: 'Costa Brava sea trips', closed: 'All month, until about April', note: 'No GetYourGuide availability. The sea is at 13C, its lowest reading of the year.' },
      { site: 'Casa Batlló night visit', closed: 'All month, until 1 April', note: 'Season is 1 April to 31 August only. Casa Batlló itself is open daily 09:00 to 22:30.' },
      { site: 'La Pedrera (Casa Milà)', closed: 'Nothing', note: 'Winter season runs to 25 February: daytime 09:00 to 18:30, night visit 19:00 to 23:00. The summer season starts 6 March.' },
      { site: 'Sagrada Família', closed: 'Nothing', note: 'Full winter hours all month with no half-days: Monday to Saturday 09:00 to 18:00, Sunday 10:30 to 18:00.' },
      { site: 'Park Güell', closed: 'Nothing', note: 'Timed slots 09:30 to 19:30. With sunset around 18:15 by month end, the later slots become usable again.' },
      { site: 'Central roads', closed: 'Sunday 14 February, morning', note: 'Barcelona Half Marathon. Allow extra time for timed entries and transfers.' },
    ],
    body: [
      'This is the only month of the ten with no public holiday of any kind, which makes it the most predictable month to plan. Every attraction runs its normal timetable every day. If your priority is that nothing on your itinerary hits a shut door, February is the safest month in this guide, and it is a genuine argument for choosing it over the more obviously appealing March.',
      'There is a gap between seasons at La Pedrera worth noting. The winter season ends on 25 February and the summer season does not begin until 6 March, which leaves a short transitional window at the very end of the month. La Pedrera does not publish that gap as a closure, so treat the last few days of February as a period to check the house\'s own calendar before booking a specific time.',
      'The two seasonal absences are unchanged and, at this point in the guide, familiar: no Costa Brava sea trips until roughly April, and no Casa Batlló rooftop night visit until 1 April. February is the deepest point of both.',
    ],
  },

  packing: {
    capsule:
      'Pack as for January but with slightly less commitment, and add something for carnival if you are here in the first week. Fourteen point seven degrees by day, 5.9C at night, six wet days and no need whatsoever for swimwear at a 13C sea.',
    body: [
      'The February kit list is the January one with the edge taken off. A jacket rather than a heavy coat, layers underneath, and shoes that cope with an hour of standing on cold stone. Rain is a minor consideration at 36mm across six days.',
      'If your trip covers Carnestoltes from 4 to 10 February, some form of costume is genuinely useful rather than a gimmick. The district parades are participatory and locals dress up in numbers; standing in a raincoat watching is the odd choice, not the other way round.',
      'And to state it once more, because it is the number that defines the month: the sea is at 13C. That is its coldest reading of the year and roughly half the August peak. Leave the swimwear at home.',
    ],
    list: [
      'A jacket and layers for 14.7C days and 5.9C nights',
      'Something to wear for Carnestoltes if you are here 4 to 10 February',
      'Shoes for standing on cold stone, not for the beach',
      'A light umbrella for six wet days, 36mm in total',
      'Warm kit if Montserrat is on the list, which is colder than the city',
      'No swimwear: the sea is at its 13C annual floor',
    ],
  },

  faqs: [
    {
      question: 'How cold is the sea in Barcelona in February?',
      answer: 'About 13C, which is the coldest reading of the year and roughly half the 25 to 26C the Mediterranean reaches off Barcelona in August. The water lags the air by about six weeks, which is why it bottoms out in February rather than January. No sea-based tour on this site is bookable in February as a result.',
    },
    {
      question: 'Is anything closed in Barcelona in February?',
      answer: 'Nothing, and it is the only month in this guide with no public holiday at all. The Sagrada Família runs full winter hours every day with no half-days, and La Pedrera has no closure dates. The only things unavailable are the two seasonal products: the Costa Brava sea trips, out until about April, and the Casa Batlló rooftop night visit, out until 1 April.',
    },
    {
      question: 'What is Carnestoltes and when is it in 2027?',
      answer: 'Carnestoltes is Barcelona\'s carnival, running from Dijous Gras on Thursday 4 February 2027 to Ash Wednesday on the 10th. Unlike most carnivals it has no single central parade: each district runs its own, so it is a week of neighbourhood events. Sitges, forty minutes away by train, runs a much larger and better-known carnival, though its 2027 parade dates were not published when this page was written.',
    },
    {
      question: 'Why are Barcelona hotels expensive in early February?',
      answer: 'Integrated Systems Europe, one of the world\'s largest professional audiovisual trade shows, runs at Fira Gran Via from 2 to 5 February and fills a large number of hotel rooms city-wide. It is the first of Barcelona\'s two big trade-fair spikes; Mobile World Congress follows about four weeks later in early March and has a far larger effect on rates.',
    },
    {
      question: 'Is February better than January in Barcelona?',
      answer: 'On the numbers, yes. February gains over an hour of daylight on December and about six minutes a day through the month, adds a degree of warmth over January at 14.7C average highs, and drops to 36mm of rain. It also has no public holidays and no attraction closures. The one thing January beats it on is price, because February carries the ISE trade fair.',
    },
    {
      question: 'How long are the days in Barcelona in February?',
      answer: '10 hours 36 minutes on the 15th, which is over an hour more than December\'s annual low of 9 hours 13 minutes. By the end of the month sunset has moved to around 18:15. That is enough extra evening to put Park Güell\'s mid-afternoon and late-afternoon slots back into usable daylight, which is not the case in December or January.',
    },
  ],
};

export const march: MonthContent = {
  slug: 'barcelona-in-march',
  month: 'March',
  monthKey: 'march',
  yearOffset: 1,
  prevMonth: 'February',
  prevPath: '/barcelona-in-february',
  nextMonth: 'April',
  nextPath: '/barcelona-in-april',
  metaDescription:
    'Barcelona in March: Mobile World Congress from 1 to 4 March takes hotel rates to three to five times normal, then Holy Week arrives at the end of the month. La Pedrera returns to summer hours on 6 March.',
  heroCapsule:
    'March is the most expensive week and the best value month in Barcelona, depending entirely on which days you pick. Mobile World Congress runs 1 to 4 March and routinely takes hotel rates to three to five times normal city-wide. Everything after the 8th is a different city at a different price.',

  verdict: {
    capsule:
      'Yes, provided you do not arrive in the first week. Mobile World Congress from 1 to 4 March produces the single biggest hotel price spike of Barcelona\'s year. After it, March offers 16.1C highs, 11 hours 52 minutes of daylight and the clocks going forward on the 28th.',
    body: [
      'No other month in this guide has a swing like March\'s. Mobile World Congress brings roughly a hundred thousand delegates to Fira Gran Via from 1 to 4 March, and Barcelona hotel rates for that week routinely run at three to five times their normal level. A room that costs a hundred pounds in the middle of March can cost four hundred in the first week of it. This is not a modest peak-season uplift, it is a different market, and it is the single most valuable piece of pricing information on this page.',
      'It is also worth noting how compressed the trade-fair season is. ISE finished on 5 February and MWC starts on 1 March, so Barcelona absorbs two major international shows inside four weeks. The gap between them, roughly 8 to 25 February, is one of the best value windows of the year for a city that is otherwise firming up for spring.',
      'Once MWC has packed up, March is a genuinely good month. Average highs of 16.1C, 11 hours 52 minutes of daylight and, from 6 March, La Pedrera back on its summer timetable with the daytime visit running to 20:30. The clocks go forward on Sunday 28 March, which lands an extra hour of evening light on the last few days of the month.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 16.1C and lows of 7.7C, with 46mm of rain across seven wet days. Daylight reaches 11 hours 52 minutes mid-month and the clocks go forward on Sunday 28 March. The sea is still cold at 13 to 14C, barely above its February floor.',
    body: [
      'March is the month the air and the sea diverge most sharply. Air temperatures have climbed 2.6 degrees since January and daylight is up by nearly two and a half hours, but the water is at 13 to 14C, essentially unchanged from February\'s annual minimum. The Mediterranean takes until May to respond to the spring. Anyone expecting the beach to be usable because the city feels springlike will be disappointed.',
      'On land the change is real and quick. By the end of March, Barcelona is measurably warmer, brighter and greener than at the start, and the terraces along Rambla de Catalunya start filling in the afternoons. Seven wet days and 46mm is a moderate month, well below October and September and slightly above February.',
      'The clock change on Sunday 28 March is the mirror of October\'s, and this time it works in your favour. Spain moves back to Central European Summer Time and sunset jumps from around 19:30 to around 20:30 overnight. If your trip covers the last few days of March, you get a genuinely long evening for the first time since the previous September.',
    ],
  },

  crowds: {
    capsule:
      'March has the year\'s most extreme pricing. Mobile World Congress from 1 to 4 March takes rates to three to five times normal, and Holy Week begins at the very end of the month with Good Friday on 26 March and Easter Sunday on the 28th.',
    body: [
      'To be blunt about the Mobile World Congress week: unless you are attending, do not book it. Rates across the whole city, not just near Fira Gran Via, run at three to five times normal, availability is thin, and taxis and airport transfers are difficult. Delegates arrive from the weekend of 27 and 28 February and the effect persists into the 5th and 6th. Shift a March trip to the second or third week and you will pay a fraction of the price for a slightly better city.',
      'Holy Week is the other end of the month. Good Friday falls on Friday 26 March 2027 and Easter Sunday on the 28th. Catalonia is one of the parts of Spain that observes Easter Monday, on 29 March, which most of the country does not, so the holiday runs longer here than a visitor consulting a Spain-wide calendar would expect. Rates rise for the Easter weekend, though nothing like the MWC spike.',
      'The Zurich Marató de Barcelona on Sunday 14 March closes central roads for much of the morning. It is a big-city marathon with a route through the centre, so allow substantial extra time for anything timed that day. March is also the last month charged under the current tourist tax schedule, which runs to 31 March 2027 before a rise on 1 April for which Barcelona had not published figures when this page was written. A trip on 30 March is charged less than the identical trip on 2 April. Current rates are set out on our August guide.',
    ],
  },

  tours: {
    capsule:
      'The March ten reflects a city coming back outdoors. The outdoor Gaudí sites and the mountain trip climb as daylight passes eleven and a half hours, while everything sea-based remains unavailable at 13 to 14C. Figures verified against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: 'barcelona-sagrada-familia-entry-ticket-with-audio-guide',
        label: 'Sagrada Família entry ticket with audio guide',
        bestFor: 'Longer hours from the start of the month',
        why: 'March is the month the basilica reopens its evening. Hours extend to Monday to Friday 09:00 to 19:00, Saturday 09:00 to 18:00 and Sunday 10:30 to 19:00, an hour more than the winter timetable, so a late-afternoon slot works again for the first time since October.',
      },
      {
        slug: 'barcelona-park-guell-guided-tour-with-skip-the-line-entry',
        label: 'Park Güell guided tour with skip-the-line entry',
        bestFor: 'The hillside becoming pleasant again',
        why: 'Ranked second, up from seventh in February. At 16.1C with almost twelve hours of daylight, the exposed terraces are comfortable and the late-afternoon slots are back in real light. This is also the point in the year when slots start selling out again, so stop assuming same-day availability.',
      },
      {
        slug: 'barcelona-casa-batll-entry-with-self-audioguide-tour',
        label: 'Casa Batlló entry with self-guided audio tour',
        bestFor: 'The month before its night season returns',
        why: 'The rooftop night visit returns on 1 April, so March is the last month where the self-guided daytime ticket is the only way in. If your trip straddles the two months and the roof terrace matters to you, that is a reason to shift it later. Non-refundable on GetYourGuide.',
      },
      {
        slug: 'barcelona-montserrat-tour-with-cog-wheel-and-black-madonna',
        label: 'Montserrat tour with cog-wheel train and Black Madonna',
        bestFor: 'A mountain day with margin again',
        why: 'Ranked up sharply. At 11 hours 52 minutes of daylight, and 12 hours 50 minutes after the clocks go forward on the 28th, a five to seven hour trip has real margin for the first time since October. Holy Week at the end of the month makes the abbey particularly busy and particularly atmospheric.',
      },
      {
        slug: 'barcelona-flamenco-show-at-the-theater-and-quot-city-hall-an',
        label: 'Flamenco show at the City Hall theatre',
        bestFor: 'Easter week evenings',
        why: 'Holy Week runs from Good Friday on 26 March, and evenings during it are busy in the centre. A booked hour at 4.6 out of 5 from 11,934 reviews is a fixed point in a week when a lot of restaurants are running holiday hours and walk-ins get harder.',
      },
      {
        slug: 'barcelona-sagrada-familia-skip-the-line-entry-ticket-and-tou',
        label: 'Sagrada Família skip-the-line entry ticket and tour',
        bestFor: 'When the queue starts existing again',
        why: 'March is when skip-the-line stops being decorative. Spring visitor numbers return, MWC brings a hundred thousand people to the city in week one, and the Carrer de Mallorca queue reappears. Rated 4.8 out of 5, the best of the site\'s Sagrada Família options.',
      },
      {
        slug: 'barcelona-city-tour-hop-on-hop-off-bus-tour',
        label: 'Barcelona hop-on hop-off bus tour',
        bestFor: 'Any day except Sunday the 14th',
        why: 'Good open-deck weather at 16.1C with seven wet days, and a useful way to cover a city that has spread back outdoors. The exception is Sunday 14 March, when the Zurich Marató closes central roads for much of the morning and bus routes are diverted or suspended.',
      },
      {
        slug: 'barcelona-fc-barcelona-museum-and-quot-bar-a-immersive-tour-',
        label: 'FC Barcelona Museum and Barça Immersive Tour',
        bestFor: 'A wet-day option in a seven-wet-day month',
        why: 'Ranked lower than in the deep winter because there are better things to do outdoors now, but still the strongest fully indoor half-day on the list. Spotify Camp Nou has been operating since 22 November 2025 with capacity at 62,652 and the third tier still closed. Non-refundable.',
      },
      {
        slug: 'barcelona-aquarium-entry-ticket',
        label: 'Barcelona Aquarium entry ticket',
        bestFor: 'The Easter school holiday',
        why: 'Easter falls at the end of March in 2027, bringing the Spanish school holiday with it. The aquarium is the most reliable indoor family option in the city and it is at its busiest in exactly that week, so book rather than turning up.',
      },
      {
        slug: 'barcelona-park-g-ell-admission-ticket',
        label: 'Park Güell admission ticket',
        bestFor: 'A cheap hour once the light is back',
        why: 'At 18 euros general admission this is the least expensive way into the Monumental Zone, and in March you no longer need a guide to make the timing work: there is enough daylight to take a late slot and simply sit on the terrace. Listed as non-refundable.',
      },
    ],
    note:
      'The Costa Brava sea trips remain unavailable in March, with the sea at 13 to 14C and GetYourGuide availability not resuming until around April. The Casa Batlló rooftop night visit returns on 1 April, one day after this month ends. March is the last of the five pages in this guide where Barcelona\'s best-rated tour is genuinely off sale.',
  },

  events: {
    capsule:
      'March is dominated by two very different crowds. Mobile World Congress fills Fira Gran Via from 1 to 4 March, and Holy Week arrives at the end of the month with Good Friday on 26 March and Easter Monday, which Catalonia observes, on the 29th.',
    rows: [
      { event: 'Mobile World Congress', dates: '1 to 4 March', where: 'Fira Gran Via, L\'Hospitalet', free: 'Trade only, ticketed' },
      { event: 'La Pedrera summer season begins', dates: '6 March', where: 'Passeig de Gràcia 92', free: 'Ticketed' },
      { event: 'Zurich Marató de Barcelona', dates: 'Sunday 14 March', where: 'Central Barcelona, road closures', free: 'Free to watch' },
      { event: 'Good Friday (Divendres Sant)', dates: 'Friday 26 March', where: 'Nationwide public holiday', free: 'Public holiday' },
      { event: 'Clocks go forward one hour', dates: 'Sunday 28 March, 02:00 to 03:00', where: 'Spain and the rest of the EU', free: 'Free' },
      { event: 'Easter Monday (Dilluns de Pasqua)', dates: 'Monday 29 March', where: 'Catalonia, not most of Spain', free: 'Public holiday, Catalonia' },
    ],
    body: [
      'Easter Monday is the date that catches visitors out, and it is a genuinely regional difference. Most of Spain does not observe Easter Monday as a public holiday. Catalonia does. On Monday 29 March 2027, banks, offices and many shops in Barcelona will be closed while their equivalents in Madrid are open. The traditional Catalan food that day is the mona de Pasqua, an elaborate chocolate sculpture that godparents give to their godchildren, and the pastry shop windows in the week before Easter are worth a detour on their own.',
      'Mobile World Congress needs stating plainly for anyone planning a March trip. Roughly a hundred thousand delegates arrive at Fira Gran Via from 1 to 4 March and the effect on hotel rates is city-wide rather than local, routinely three to five times normal. Even if you have no interest in the show, it dictates what a March trip costs.',
      'The Zurich Marató on Sunday 14 March closes a substantial amount of central road for the morning. Timed attraction entries still apply on marathon day, so allow a long margin for getting across the city.',
    ],
  },

  closures: {
    capsule:
      'Nothing significant closes in March, and one thing reopens: La Pedrera returns to its summer timetable on 6 March with the daytime visit running to 20:30. The Sagrada Família also extends its hours by an hour for the month.',
    rows: [
      { site: 'La Pedrera (Casa Milà)', closed: 'Nothing, summer hours from 6 March', note: 'Summer season: daytime 09:00 to 20:30, night visit 20:40 to 22:20. Winter hours applied to 25 February.' },
      { site: 'Sagrada Família', closed: 'Nothing, but longer hours', note: 'March hours: Monday to Friday 09:00 to 19:00, Saturday 09:00 to 18:00, Sunday 10:30 to 19:00. An hour more than February.' },
      { site: 'Costa Brava sea trips', closed: 'All month, until about April', note: 'Still no GetYourGuide availability. The sea is 13 to 14C, barely above its February floor.' },
      { site: 'Casa Batlló night visit', closed: 'All month, returns 1 April', note: 'The final month out of season. Casa Batlló itself is open daily 09:00 to 22:30.' },
      { site: 'Banks, offices and most shops', closed: '26 and 29 March', note: 'Good Friday nationwide, and Easter Monday in Catalonia specifically. Most of Spain does not observe the Monday.' },
      { site: 'Central roads', closed: 'Sunday 14 March, morning', note: 'Zurich Marató de Barcelona. Substantial central closures.' },
    ],
    body: [
      'March is a month of things opening rather than closing. La Pedrera\'s summer season starts on 6 March, which pushes the daytime visit from an 18:30 finish to a 20:30 one and moves the night visit back to 20:40 to 22:20. The Origins show runs all year, so this is a change of timing rather than the return of a product; the adult ticket is 39.50 euros.',
      'The Sagrada Família adds an hour on weekdays from March, running 09:00 to 19:00 Monday to Friday. Combined with the clocks going forward on the 28th, the last week of March is the first time since early October that the basilica is open in genuine evening light. Prices are unchanged at 26 euros for the basilica, 30 euros with a guide, 36 euros with tower access and 40 euros for guided plus towers, free for under-11s.',
      'The Holy Week closures are the only real interruption, and the Catalan Easter Monday is the one to write down. On 29 March Barcelona is closed in a way Madrid is not.',
    ],
  },

  packing: {
    capsule:
      'Pack for a month that changes character halfway through. Early March is a jacket month at 16.1C with 7.7C nights; late March, after the clocks go forward on the 28th, has long light evenings and feels like spring. Seven wet days sit somewhere in the middle.',
    body: [
      'The practical answer for March is the same as for October, in reverse: layers, plus something showerproof, plus an acceptance that the evening is a different temperature from the afternoon. The 8.4-degree daily swing is close to the widest of the year.',
      'If your trip covers Holy Week, one smarter item is worth the space. Barcelona dresses up over Easter and the restaurants that matter are busy with families rather than tourists.',
      'The sea is at 13 to 14C, essentially unchanged from its February floor, so this is still not a swimming month whatever the air temperature suggests. That is worth repeating because 16.1C and long evenings make March feel much more like a beach month than it is.',
    ],
    list: [
      'Layers for an 8.4-degree daily swing, close to the year\'s widest',
      'A light showerproof for seven wet days and 46mm',
      'One smarter item if you are here over Holy Week',
      'Sunglasses: daylight passes eleven and a half hours this month',
      'Warm kit for Montserrat, still notably colder than the city',
      'No swimwear: the sea is 13 to 14C, barely above the annual floor',
    ],
  },

  faqs: [
    {
      question: 'Why are Barcelona hotels so expensive in early March?',
      answer: 'Mobile World Congress runs at Fira Gran Via from 1 to 4 March 2027 and brings roughly a hundred thousand delegates to the city. Hotel rates city-wide, not just near the venue, routinely reach three to five times their normal level, and the effect extends from the preceding weekend into the 5th and 6th. It is the single biggest price spike in Barcelona\'s year.',
    },
    {
      question: 'Is Easter Monday a public holiday in Barcelona?',
      answer: 'Yes, and this is a genuine regional difference that catches people out. Catalonia observes Easter Monday, on 29 March 2027, while most of the rest of Spain does not. Banks, offices and many shops in Barcelona close that day while the same businesses in Madrid trade normally. Good Friday, 26 March, is a nationwide holiday.',
    },
    {
      question: 'When do the clocks change in Barcelona in 2027?',
      answer: 'On Sunday 28 March 2027, when Spain moves to Central European Summer Time and the clocks go forward an hour at 02:00. Sunset jumps from around 19:30 to around 20:30 overnight. Combined with the Sagrada Família extending to a 19:00 weekday close from the start of March, the last days of the month are the first genuinely long evenings since early October.',
    },
    {
      question: 'Can you swim in Barcelona in March?',
      answer: 'Not realistically. The sea is at 13 to 14C, barely above its 13C February annual floor, because the Mediterranean takes until about May to respond to the spring. Air temperatures at 16.1C average highs and nearly twelve hours of daylight make March feel far more like a beach month than it is, and the sea trips on this site do not resume until around April.',
    },
    {
      question: 'Is March a good time to visit Barcelona?',
      answer: 'Very good, from about the 8th onwards. Average highs of 16.1C, 11 hours 52 minutes of daylight, La Pedrera back on summer hours from 6 March and the Sagrada Família open an hour later on weekdays. The first week is the exception: Mobile World Congress makes it the most expensive week of the Barcelona year by a wide margin.',
    },
    {
      question: 'Is there a Formula 1 race in Barcelona in 2027?',
      answer: 'No. The Spanish Grand Prix moved to Madrid from 2026, and the Circuit de Barcelona-Catalunya now hosts a separately-named race in even years only, in June. Any guide placing Formula 1 on a Barcelona May or March page is working from pre-2026 information. Primavera Sound and Sónar also fall outside this guide, in June 2027.',
    },
  ],
};

export const april: MonthContent = {
  slug: 'barcelona-in-april',
  month: 'April',
  monthKey: 'april',
  yearOffset: 1,
  prevMonth: 'March',
  prevPath: '/barcelona-in-march',
  nextMonth: 'May',
  nextPath: '/barcelona-in-may',
  metaDescription:
    'Barcelona in April: the Casa Batlló rooftop night visit returns on 1 April after seven months off, the tourist tax rises the same day, and Sant Jordi on Friday 23 April fills Las Ramblas with book and rose stalls.',
  heroCapsule:
    'Two things change on 1 April. The Casa Batlló rooftop night visit comes back after seven months off sale, and Barcelona\'s tourist tax rises. April is also the wettest spring month at 70mm across nine wet days, and it hosts Sant Jordi on Friday the 23rd.',

  verdict: {
    capsule:
      'Yes, and it is the month with the most product changes in the guide. The Casa Batlló night visit returns on 1 April and the Costa Brava sea trips come back around the same time. The trade-offs are nine wet days, the most of any spring month, and a sea still at only 14 to 15C.',
    body: [
      'April is the hinge of the Barcelona year. On the first of the month the Casa Batlló rooftop night visit with live music goes back on sale after seven months unavailable, and the Costa Brava kayak and snorkel day trip, the highest-rated tour on this site, returns to the booking calendar. Barcelona stops being purely a city-break destination and starts being a coastal one again, at least on paper.',
      'On paper is doing some work in that sentence. The sea is at 14 to 15C in April, which is a degree or two above the February floor and nothing like swimming temperature. Costa Brava trips in April are wetsuit trips, and the honest comparison is with October, where the same day out happens in 21 to 22C water. If a warm sea is the point, this is not yet the month.',
      'What April genuinely offers is 13 hours 17 minutes of daylight, spring in the parks, and Sant Jordi on Friday 23 April, which is the best day of the year to be in central Barcelona and is not a public holiday, so absolutely everything stays open.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 17.8C and lows of 9.8C, with 70mm of rain across nine wet days, the wettest month between November and September. Daylight is 13 hours 17 minutes mid-month. The sea has only crept up to 14 to 15C.',
    body: [
      'Nine wet days is the number people do not expect from a Mediterranean April, and it is more than October\'s ten only just falls short of. Seventy millimetres is well above March\'s 46mm and February\'s 36mm. April in Barcelona is a genuinely showery month, with the rain arriving in short spring bursts rather than the heavy autumn storms of September and October.',
      'The air and sea gap is at its widest in April. Air temperature has climbed to 17.8C, close to November\'s 17.4C, but the water is at 14 to 15C where November\'s was 17 to 19C. That is the clearest illustration of the six-week lag in this whole guide: an April day and a November day feel similar on land and are completely different in the water.',
      'Daylight is the good news. Thirteen hours seventeen minutes is more than August had in this guide, because the clocks went forward on 28 March and the solstice is approaching. Sunset around half past eight means the evening is fully back, and it is what makes the returning Casa Batlló night visit worth booking rather than merely available.',
    ],
  },

  crowds: {
    capsule:
      'April is the start of the high season proper, and the tourist tax rises on 1 April 2027. Sant Jordi on Friday 23 April is the busiest ordinary working day of the year in the centre, and Easter Monday on 29 March means the school holiday runs into the first days of the month.',
    body: [
      'The tourist tax rise on 1 April 2027 is a real cost change and one we cannot quantify for you. Barcelona had not published its post-1 April 2027 figures when this page was written, so anyone quoting a 2027 Barcelona rate is guessing. What we can tell you is the current position, which applies to 31 March 2027: 12.00 euros per person per night in a 5-star hotel, 8.40 euros in a 4-star, 9.50 euros in a licensed tourist apartment, 7.00 euros elsewhere and 6.00 euros in a hostel, capped at seven nights. Those rates already rose sharply on 1 April 2026, so expect another meaningful step rather than a token one.',
      'Sant Jordi is the crowd event of the month and it is unusual in that it is not a public holiday. Everything, including banks and offices, works normally on Friday 23 April. What happens is that Las Ramblas and Passeig de Gràcia fill with book and rose stalls from early morning, the tradition being that couples exchange a book and a rose, and the centre becomes the busiest it gets on any normal working day of the year. It is a wonderful day to be there and a poor day to try to get across the centre quickly.',
      'Park Güell timed slots tighten noticeably from April onwards. The same-day availability of the winter months is over; book several days ahead, particularly for morning slots and for the Sant Jordi weekend.',
    ],
  },

  tours: {
    capsule:
      'The April ten is defined by two products returning after a long absence. The Casa Batlló night visit is back from the 1st and the Costa Brava trip returns to the calendar, both for the first time since the summer. Figures verified against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: 'casa-batll-night-visit-with-live-music-on-the-roof-terrace',
        label: 'Casa Batlló night visit with rooftop live music',
        bestFor: 'The first night of its season',
        why: 'First for April on the strength of its return. The rooftop night visit with live music runs 1 April to 31 August only, so 1 April is the first date it has been bookable since 31 August. With sunset around half past eight and 17.8C evenings, April is a better month for a roof terrace than August\'s humid nights. Non-refundable on GetYourGuide.',
      },
      {
        slug: 'barcelona-sagrada-familia-entry-ticket-with-audio-guide',
        label: 'Sagrada Família entry ticket with audio guide',
        bestFor: 'Long hours returning for the summer',
        why: 'April is the first month of the basilica\'s longest timetable: Monday to Friday 09:00 to 20:00, Saturday 09:00 to 18:00, Sunday 10:30 to 20:00. That is two hours later than February and it puts the whole evening back on the table.',
      },
      {
        slug: 'costa-brava-tour-kayak-snorkel-and-cliff-jump-from-barcelona',
        label: 'Costa Brava kayak, snorkel and cliff jump day trip',
        bestFor: 'The season restarting, with a wetsuit',
        why: 'Back on the calendar after five months off, and we would rather be straight about what April means: the sea is at 14 to 15C, so this is a wetsuit day, not a swim. It is still the highest-rated tour on the site at 4.9 out of 5 from 2,790 reviews, and the coves are empty in a way they never are in August.',
      },
      {
        slug: 'barcelona-park-guell-guided-tour-with-skip-the-line-entry',
        label: 'Park Güell guided tour with skip-the-line entry',
        bestFor: 'The month the queue comes back',
        why: 'April is when skip-the-line stops being optional at Park Güell. Timed slots that were available same-day in January now go days ahead, and 13 hours 17 minutes of daylight means the whole span from 09:30 to 19:30 is usable. Book early rather than on arrival.',
      },
      {
        slug: 'barcelona-flamenco-show-at-the-theater-and-quot-city-hall-an',
        label: 'Flamenco show at the City Hall theatre',
        bestFor: 'Sant Jordi evening, when the centre is packed',
        why: 'A seated, booked hour is worth more than usual on 23 April, when Las Ramblas and Passeig de Gràcia are full of book and rose stalls and every restaurant in the centre is full. Rated 4.6 out of 5 from 11,934 reviews.',
      },
      {
        slug: 'barcelona-casa-batll-entry-with-self-audioguide-tour',
        label: 'Casa Batlló entry with self-guided audio tour',
        bestFor: 'The daytime version, on one of nine wet days',
        why: 'Still the better choice if you want to take your time inside rather than be on the roof after dark, and the reliable indoor option on the nine wet days April delivers. Casa Batlló runs 09:00 to 22:30 daily. Non-refundable on GetYourGuide.',
      },
      {
        slug: 'barcelona-aquarium-entry-ticket',
        label: 'Barcelona Aquarium entry ticket',
        bestFor: 'The wettest spring month',
        why: 'Seventy millimetres across nine wet days is more rain than any month between November and September, and April showers in Barcelona arrive fast. A fully indoor attraction on Port Vell is the practical answer, and the Easter school holiday runs into the first days of the month.',
      },
      {
        slug: 'barcelona-montserrat-tour-with-cog-wheel-and-black-madonna',
        label: 'Montserrat tour with cog-wheel train and Black Madonna',
        bestFor: 'Spring on the mountain',
        why: 'April is arguably the best month of the ten for Montserrat. The mountain is green rather than parched, the summer coach crowds have not arrived, and 13 hours 17 minutes of daylight gives the round trip comfortable margin. Still colder up there than in the city.',
      },
      {
        slug: 'barcelona-sagrada-familia-skip-the-line-entry-ticket-and-tou',
        label: 'Sagrada Família skip-the-line entry ticket and tour',
        bestFor: 'Spring queues on an unshaded street',
        why: 'Rated 4.8 out of 5, the best-rated Sagrada Família option here. From April the Carrer de Mallorca queue is back to a proper spring length, and it has no shade, so the skip-the-line element earns its price again after a winter of being decorative.',
      },
      {
        slug: 'barcelona-fc-barcelona-museum-and-quot-bar-a-immersive-tour-',
        label: 'FC Barcelona Museum and Barça Immersive Tour',
        bestFor: 'The run-in to the end of the season',
        why: 'April and May are when La Liga is decided, so the stadium has an edge to it that it lacks in November. Spotify Camp Nou reopened on 22 November 2025, capacity rose to 62,652 on 10 March 2026 and the third tier is still closed, with full completion expected in 2027. Non-refundable.',
      },
    ],
    note:
      'The hop-on hop-off bus drops out of the April ten. Nine wet days is the most of any month between November and September and an open top deck is the wrong bet on that frequency; it returns in May at 21.4C and seven wet days. This is the first page in the guide since October where nothing on the list is unavailable for seasonal reasons.',
  },

  events: {
    capsule:
      'April belongs to Sant Jordi on Friday 23 April, when Las Ramblas and Passeig de Gràcia fill with book and rose stalls. It is not a public holiday: everything stays open, which is exactly why it works.',
    rows: [
      { event: 'Casa Batlló night visit season begins', dates: 'From 1 April', where: 'Passeig de Gràcia 43', free: 'Ticketed' },
      { event: 'Tourist tax rises', dates: '1 April', where: 'City-wide, new rates not yet published', free: 'Charged per person per night' },
      { event: 'Sant Jordi', dates: 'Friday 23 April', where: 'Las Ramblas, Passeig de Gràcia and city-wide', free: 'Free, not a public holiday' },
      { event: 'La Liga run-in', dates: 'Throughout', where: 'Spotify Camp Nou', free: 'Ticketed' },
    ],
    body: [
      'Sant Jordi is Catalonia\'s day and it is unlike anything else in the European calendar. Saint George is the patron saint of Catalonia, and the tradition is that couples exchange a book and a rose. Booksellers set up trestle tables the length of Las Ramblas and Passeig de Gràcia, publishers bring authors out to sign, and rose stalls appear on every corner. Something like half of Catalonia\'s annual book sales happen on that one day.',
      'The critical practical point, and the one most guides get wrong, is that Sant Jordi is not a public holiday. Nothing closes. Offices work, banks open, schools run. That is why the streets are so full: people go out at lunchtime and after work rather than treating it as a day off. If you want the atmosphere without the crush, go early in the morning or take the Rambla de Catalunya rather than Las Ramblas.',
      'The other April date is administrative rather than festive. The tourist tax rises on 1 April 2027, following a sharp rise on 1 April 2026. Barcelona had not published the new figures when this page was written, so we are not going to invent one; check your booking confirmation, which will show the charge.',
    ],
  },

  closures: {
    capsule:
      'April is the month things come back rather than shut. The Casa Batlló night visit returns on 1 April after seven months, the Costa Brava sea trips return to the calendar, and the Sagrada Família moves onto its longest hours of the year. Nothing of consequence closes.',
    rows: [
      { site: 'Casa Batlló night visit', closed: 'Nothing, season starts 1 April', note: 'The rooftop night visit with live music runs 1 April to 31 August. This is its first available date since 31 August.' },
      { site: 'Costa Brava sea trips', closed: 'Nothing, availability returns', note: 'The kayak and snorkel day trip is bookable again after five months. The sea is 14 to 15C, so wetsuit conditions.' },
      { site: 'Sagrada Família', closed: 'Nothing, longest hours of the year', note: 'April to September: Monday to Friday 09:00 to 20:00, Saturday 09:00 to 18:00, Sunday 10:30 to 20:00.' },
      { site: 'La Pedrera (Casa Milà)', closed: 'Nothing', note: 'Summer season since 6 March: daytime 09:00 to 20:30, night visit 20:40 to 22:20. Next closure is not until 7 September.' },
      { site: 'Park Güell', closed: 'Nothing', note: 'Timed slots 09:30 to 19:30, all now in daylight. Slots start selling out several days ahead from this month.' },
      { site: 'Sant Jordi, 23 April', closed: 'Nothing at all', note: 'Sant Jordi is not a public holiday. Shops, banks, offices and attractions all work normally, which is why the streets are so full.' },
    ],
    body: [
      'Putting "nothing" in a closures table six times over is unusual, and it is the point of this month. Between the Easter Monday holiday on 29 March and the Labour Day holiday on 1 May, April 2027 has no public holidays in Barcelona at all. Every attraction runs its normal timetable every day and the Sagrada Família is on its longest hours of the year.',
      'The Sant Jordi row is there because the assumption goes the other way. Visitors see a saint\'s day with the whole city in the street and reasonably conclude it must be a holiday. It is not. If your plan was to do something administrative on 23 April, that plan works; if it was to walk quickly down Las Ramblas, it does not.',
      'One thing to watch at the very start of the month: Easter Monday falls on 29 March 2027 and Catalonia observes it, so the Easter school holiday spills into the first days of April. Attractions are busier in that first week than the rest of the month.',
    ],
  },

  packing: {
    capsule:
      'Pack for showers and for a long evening. Nine wet days is the most of any month between November and September, and with sunset around half past eight after the clocks changed, you will be outside after dark in a way you have not been since September.',
    body: [
      'The April rule is a light shell rather than a coat. Seventeen point eight degrees by day is comfortable and 9.8C at night is not cold, but nine wet days across the month means showers are more likely than not during a week-long trip, and Barcelona spring rain arrives quickly.',
      'The returning evening matters for what you pack too. A rooftop night visit at Casa Batlló in April is a 10 to 12C proposition after dark, several degrees cooler than the same terrace in August, so take a layer for it rather than assuming a summer evening.',
      'And if the Costa Brava trip is on your list, be realistic about 14 to 15C water. Operators provide wetsuits, but this is not a warm-water day, and if that is what you wanted the answer is to wait for the autumn.',
    ],
    list: [
      'A light waterproof shell for nine wet days and 70mm',
      'A warm layer for the Casa Batlló roof terrace after dark, cooler than it sounds',
      'Sunglasses and sun cream: 13 hours 17 minutes of daylight and a high spring sun',
      'Comfortable shoes for Sant Jordi, when walking is the only way through the centre',
      'A cover-up for the Sagrada Família dress code',
      'Swimwear only if you are doing a wetsuit trip: the sea is 14 to 15C',
    ],
  },

  faqs: [
    {
      question: 'What is Sant Jordi and is it a public holiday?',
      answer: 'Sant Jordi is Catalonia\'s day of the book and the rose, on 23 April, when couples exchange a book and a rose and booksellers fill Las Ramblas and Passeig de Gràcia with stalls. It is not a public holiday. Shops, banks, offices and attractions all work normally, which is precisely why the centre becomes the busiest it gets on any ordinary working day of the year.',
    },
    {
      question: 'Can I do the Casa Batlló night visit in April?',
      answer: 'Yes, and 1 April is the first date it is available. The rooftop night visit with live music runs 1 April to 31 August only and has been off sale since 31 August. April is arguably a better month for it than August: sunset is around half past eight and the evening is 17.8C rather than a humid 21.5C.',
    },
    {
      question: 'Is Barcelona\'s tourist tax going up in April 2027?',
      answer: 'Yes, on 1 April 2027, following a sharp rise on 1 April 2026. Barcelona had not published the new figures when this page was written, so we do not quote a 2027 number. The rates to 31 March 2027 are 12.00 euros per person per night in a 5-star hotel, 8.40 euros in a 4-star, 9.50 euros in a licensed tourist apartment, 7.00 euros elsewhere and 6.00 euros in a hostel, capped at seven nights.',
    },
    {
      question: 'Can you swim in Barcelona in April?',
      answer: 'Not comfortably. The sea is at 14 to 15C, only a degree or two above the 13C February floor, because the Mediterranean lags the air by about six weeks. The Costa Brava kayak and snorkel day trip returns to the booking calendar around April, but it is a wetsuit trip in spring. The same day out in October happens in 21 to 22C water.',
    },
    {
      question: 'Does it rain a lot in Barcelona in April?',
      answer: 'More than most people expect. April brings about 70mm across nine wet days, more than any month between November and September, and well above March\'s 46mm. The rain comes as short spring showers rather than the heavy autumn storms of September and October, but it is frequent enough that a light waterproof is worth packing.',
    },
    {
      question: 'Is anything closed in Barcelona in April?',
      answer: 'Nothing of consequence, and April 2027 has no public holidays at all in Barcelona, sitting between Easter Monday on 29 March and Labour Day on 1 May. The Sagrada Família is on its longest hours of the year, La Pedrera is on its summer timetable and Park Güell runs normally. Two seasonal products actually return this month rather than closing.',
    },
  ],
};

export const may: MonthContent = {
  slug: 'barcelona-in-may',
  month: 'May',
  monthKey: 'may',
  yearOffset: 1,
  prevMonth: 'April',
  prevPath: '/barcelona-in-april',
  nextMonth: 'June',
  nextPath: '/best-time-to-visit-barcelona#june',
  metaDescription:
    'Barcelona in May: the longest daylight in this guide at 14 hours 29 minutes, with 21.4C highs. Monday 17 May is a public holiday in the city of Barcelona alone. There is no Formula 1 race in Barcelona in 2027.',
  heroCapsule:
    'May has the longest days in this guide at 14 hours 29 minutes and the best balance of warmth and comfort at 21.4C. One local trap: Monday 17 May, Pasqua Granada, is a public holiday in the city of Barcelona and almost nowhere else, and it catches people out every year.',

  verdict: {
    capsule:
      'Yes, and on most measures it is the best month in this guide. Fourteen and a half hours of daylight, 21.4C average highs and a sea that has finally started warming to 17 to 18C. The only real drawbacks are price, which is now at spring peak, and a sea that is still not properly warm.',
    body: [
      'May is what people imagine when they imagine Barcelona. Twenty-one point four degrees is the temperature the city was built for: warm enough to eat outside every night, cool enough to walk all day, and without August\'s humidity. Daylight at 14 hours 29 minutes on the 15th is the longest of the ten months here, with sunset after nine and the light lasting to nearly ten.',
      'The sea is the one thing still catching up. At 17 to 18C it has climbed four degrees from April but is a long way from the 25 to 26C of August. That is warm enough for a wetsuit trip to feel comfortable rather than bracing, and warm enough for a quick swim if you are determined, but the beach season proper is still a month or two away.',
      'The trap in May is a date rather than the weather. Monday 17 May 2027 is Pasqua Granada, a public holiday in the city of Barcelona alone, observed neither in the rest of Catalonia nor in Spain. It is the second of the two Barcelona-only holidays in this guide, along with La Mercè in September, and it is the one that catches the most people out because almost nobody has heard of it.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 21.4C and lows of 13.6C, with 47mm of rain across seven wet days. Daylight reaches 14 hours 29 minutes mid-month, the longest in this guide, with sunset after nine. The sea has warmed to 17 to 18C.',
    body: [
      'The daily swing narrows in May to 7.8 degrees, and that is what makes the month feel so easy. In January the gap between a 13.5C afternoon and a 4.7C night forces a change of clothes; in May a 21.4C day and a 13.6C evening are both comfortable in the same shirt. It is the most consistent month in the guide.',
      'Rain drops back to 47mm over seven wet days, well below April\'s 70mm over nine. May showers are brief and warm and rarely change a plan. Combined with the daylight, this is the month where you can genuinely fit three things into a day without rushing any of them.',
      'On the sea, 17 to 18C is a four-degree jump from April and the first month where the water is going somewhere. The pattern to understand is that Barcelona\'s sea peaks in August at 25 to 26C, six weeks after the air does, and troughs in February at 13C, six weeks after the coldest air. May is on the steep part of that curve, so the end of the month is noticeably warmer in the water than the start.',
    ],
  },

  crowds: {
    capsule:
      'May is spring peak on price and crowds, without the summer heat to thin them. Book everything timed well ahead. Monday 17 May is a Barcelona-only public holiday, and Labour Day on Saturday 1 May falls on a weekend so costs nobody a working day.',
    body: [
      'This is the month where the winter habits stop working. Park Güell slots that were available same-day in January now need booking several days out, particularly for morning entries, and the Sagrada Família\'s best slots go well ahead. General admission at Park Güell is 18 euros, 13.50 euros for ages 7 to 12 and over-65s, and free under 7, on timed 30-minute windows with no re-entry and no admission outside your slot.',
      'Pasqua Granada on Monday 17 May is worth planning around. It is a public holiday in the municipality of Barcelona only, so banks, offices and many local shops close in the city while the equivalents in Tarragona or Madrid trade normally. Attractions and transport run. It is the same kind of local-only date as La Mercè on 24 September, and between them they are the two most commonly missed holidays in the Barcelona calendar.',
      'Labour Day on Saturday 1 May is a national holiday that, falling on a Saturday, costs nobody a working day. One warning specific to booking a May trip: the tourist tax changed on 1 April 2027 and Barcelona had not published the new schedule when this page was written, so a May stay will be charged at a rate we genuinely cannot quote. Anyone publishing a 2027 Barcelona figure is guessing. Take the number from your booking confirmation, which is obliged to show it.',
    ],
  },

  tours: {
    capsule:
      'The May ten is the most balanced ranking in this guide, because for the first time since October nothing is constrained by weather, light or availability. That means it is ranked on quality and on what the long evenings make possible. Figures verified against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: 'costa-brava-tour-kayak-snorkel-and-cliff-jump-from-barcelona',
        label: 'Costa Brava kayak, snorkel and cliff jump day trip',
        bestFor: 'A full eight-hour day inside long daylight',
        why: 'First for May because this is when an eight-hour day trip stops needing careful timing. With 14 hours 29 minutes of daylight there is margin at both ends, the sea has climbed to 17 to 18C, and the Costa Brava coves are still empty before the summer. Highest-rated tour on the site at 4.9 out of 5.',
      },
      {
        slug: 'barcelona-sagrada-familia-entry-ticket-with-audio-guide',
        label: 'Sagrada Família entry ticket with audio guide',
        bestFor: 'A late slot in the best light of the year',
        why: 'The basilica is on its longest hours, Monday to Friday 09:00 to 20:00, and May gives the strongest late light of the ten months. The western stained glass reads at its most intense in the two hours before closing, which is a genuinely different experience from a morning visit.',
      },
      {
        slug: 'barcelona-park-guell-guided-tour-with-skip-the-line-entry',
        label: 'Park Güell guided tour with skip-the-line entry',
        bestFor: 'Peak spring, when slots genuinely sell out',
        why: 'Ranked third and with a warning. May is the month Park Güell is hardest to get into at short notice: high demand, no summer heat to deter anyone, and 30-minute timed slots with no re-entry. Book several days ahead and take the guided version to make the window count.',
      },
      {
        slug: 'casa-batll-night-visit-with-live-music-on-the-roof-terrace',
        label: 'Casa Batlló night visit with rooftop live music',
        bestFor: 'A warm roof terrace with the light still going',
        why: 'The best month of its 1 April to 31 August season. At 13.6C overnight lows and sunset after nine, you get the roof in the last of the light and then under the stars, without August\'s humidity. Listed as non-refundable on GetYourGuide.',
      },
      {
        slug: 'barcelona-daytime-or-sunset-catamaran-cruise-with-music',
        label: 'Daytime or sunset catamaran cruise',
        bestFor: 'A nine o\'clock sunset off the Barceloneta',
        why: 'Back in the ranking for the first time since September. A sunset sailing in May leaves in warm evening air with the sun going down after nine, which is later than at any other point in this guide, and at 12 pounds it is the cheapest thing on the list by a distance.',
      },
      {
        slug: 'barcelona-montserrat-tour-with-cog-wheel-and-black-madonna',
        label: 'Montserrat tour with cog-wheel train and Black Madonna',
        bestFor: 'The best mountain conditions of the year',
        why: 'May and April are the two strongest months for Montserrat, and May has the daylight advantage. The mountain is warm without being hot, the paths above the abbey are usable, and a five to seven hour trip barely dents a 14 hour 29 minute day.',
      },
      {
        slug: 'barcelona-city-tour-hop-on-hop-off-bus-tour',
        label: 'Barcelona hop-on hop-off bus tour',
        bestFor: 'Open-deck weather without the August humidity',
        why: 'Back after being ranked out of April\'s nine wet days. Twenty-one point four degrees with seven wet days is close to ideal for an open top deck, and unlike August you are not sitting in humid air waiting for a storm. One of the most-booked things in the city at 23,410 reviews.',
      },
      {
        slug: 'barcelona-casa-batll-entry-with-self-audioguide-tour',
        label: 'Casa Batlló entry with self-guided audio tour',
        bestFor: 'The daytime alternative to the night visit',
        why: 'Ranked below the night version for the first time in this guide, which is the right way round in May: the roof terrace after dark is the better experience when the evening is warm. Take the daytime ticket if you would rather have the interior at your own pace. Non-refundable.',
      },
      {
        slug: 'barcelona-flamenco-show-at-the-theater-and-quot-city-hall-an',
        label: 'Flamenco show at the City Hall theatre',
        bestFor: 'A late show, after a long evening outside',
        why: 'Ranked lower than in the winter, and deliberately so. In December this was the answer to a five-hour dark evening; in May the evening is the attraction and a show competes with it. Take a late slot rather than an early one, at 4.6 out of 5 from 11,934 reviews.',
      },
      {
        slug: 'barcelona-fc-barcelona-museum-and-quot-bar-a-immersive-tour-',
        label: 'FC Barcelona Museum and Barça Immersive Tour',
        bestFor: 'The final home fixtures of the season',
        why: 'La Liga finishes in late May, so this is the last month of the season and the stadium is at its most charged. Spotify Camp Nou has been in use since 22 November 2025, capacity reached 62,652 on 10 March 2026, the third tier is still closed and full completion is expected in 2027. Non-refundable.',
      },
    ],
    note:
      'This is the only page in the guide where nothing is ranked out for seasonal reasons. Everything on this site that runs a season is running it in May. The aquarium drops out of the ten on our judgement, because with 21.4C, seven wet days and long evenings an indoor tank is competing with the best outdoor conditions of the year. Full listings are on our tours page.',
  },

  events: {
    capsule:
      'May\'s calendar is thinner than its weather deserves, and the two dates that matter are both holidays. Labour Day on Saturday 1 May costs nobody a working day; Pasqua Granada on Monday 17 May is a public holiday in the city of Barcelona alone.',
    rows: [
      { event: 'Labour Day (Dia del Treball)', dates: 'Saturday 1 May', where: 'Nationwide public holiday', free: 'Public holiday, falls on a Saturday' },
      { event: 'Pasqua Granada', dates: 'Monday 17 May', where: 'City of Barcelona only', free: 'Public holiday, Barcelona only' },
      { event: 'La Liga season ends', dates: 'Late May', where: 'Spotify Camp Nou', free: 'Ticketed' },
      { event: 'Casa Batlló night visit', dates: 'Running, season to 31 August', where: 'Passeig de Gràcia 43', free: 'Ticketed' },
    ],
    body: [
      'Pasqua Granada, Whit Monday, is the single most missed date in the Barcelona calendar. On Monday 17 May 2027 it is a public holiday in the municipality of Barcelona and not in the rest of Catalonia or Spain. Banks, offices and many local shops close in the city while the same businesses elsewhere trade normally. Attractions and public transport run as usual, but anything administrative in Barcelona on that day will not happen.',
      'Two things regularly appear on other sites\' May pages that do not belong there. There is no Formula 1 race in Barcelona in 2027: the Spanish Grand Prix moved to Madrid from 2026, and the Circuit de Barcelona-Catalunya now hosts a separately-named race in even-numbered years only, in June. And Primavera Sound, on 3 to 5 June 2027, and Sónar, on 17 to 19 June, are both June festivals. Anyone planning a May trip around any of those three is working from out-of-date information.',
      'What May does have, in place of a headline festival, is the best ordinary evening of the year. Sunset after nine, 13.6C at midnight and terraces open across the city is a fair trade for a thin events calendar.',
    ],
  },

  closures: {
    capsule:
      'Nothing closes in May and nothing is out of season. Every attraction is on its longest or near-longest timetable and both of the site\'s seasonal products are running. The only date to note is the Barcelona-only public holiday on Monday 17 May.',
    rows: [
      { site: 'Sagrada Família', closed: 'Nothing', note: 'April to September hours: Monday to Friday 09:00 to 20:00, Saturday 09:00 to 18:00, Sunday 10:30 to 20:00. The longest of the year.' },
      { site: 'La Pedrera (Casa Milà)', closed: 'Nothing', note: 'Summer season: daytime 09:00 to 20:30, night visit 20:40 to 22:20. Its next closure is 7 September.' },
      { site: 'Casa Batlló', closed: 'Nothing', note: 'Open daily 09:00 to 22:30. The rooftop night visit with live music is running, season 1 April to 31 August.' },
      { site: 'Park Güell', closed: 'Nothing', note: 'Timed slots 09:30 to 19:30, all in daylight with sunset after nine. Slots sell out several days ahead this month.' },
      { site: 'Costa Brava sea trips', closed: 'Nothing', note: 'Bookable, with the sea at 17 to 18C. The warmest water of the year is still three months away.' },
      { site: 'Banks and offices, Barcelona city', closed: 'Monday 17 May', note: 'Pasqua Granada, a public holiday in the municipality of Barcelona only. Not observed elsewhere in Catalonia or Spain.' },
    ],
    body: [
      'A closures section with nothing in it is the right way to end this guide, and it is the strongest single argument for visiting in May. There is no month between August and April where every attraction is on full hours and every seasonal product is on sale. In May they all are.',
      'The Barcelona-only holiday on 17 May is the exception and it is worth taking seriously precisely because it is so obscure. Along with La Mercè on 24 September, it is one of two dates in this guide when the city of Barcelona has a public holiday that the country around it does not. Neither closes an attraction, but both close the administrative city.',
      'Looking beyond this guide, the next closure of consequence is La Pedrera on 7 September, which is a long way off. If you are choosing a month on the basis of nothing being shut, May is the answer, and the shape of the year says June and July would be too.',
    ],
  },

  packing: {
    capsule:
      'Pack lightly and for a narrow seven point eight degree daily swing, the smallest of the ten months. Twenty-one point four degrees by day and 13.6C at night means one layer covers the whole day, and seven wet days means showers rather than rain.',
    body: [
      'May is the easiest month in this guide to pack for, because the day and the evening are not different seasons. A shirt and a light jumper covers a fourteen and a half hour day from a nine o\'clock breakfast to a ten o\'clock dinner. That is not true of any month from October to March.',
      'What you do need is proper sun protection, and people underestimate it because the temperature is moderate. The May sun in Barcelona is high and strong, the Park Güell terrace and the Montserrat paths have no shade, and 14 hours 29 minutes of daylight is a long exposure.',
      'Swimwear is worth taking, with realistic expectations. At 17 to 18C the sea is swimmable for the determined and comfortable in a wetsuit, and it will be noticeably warmer at the end of the month than the start.',
    ],
    list: [
      'One light layer for a narrow 7.8-degree daily swing, the year\'s smallest',
      'High-factor sun cream and sunglasses: a strong high sun and 14 hours 29 minutes of daylight',
      'Swimwear for a 17 to 18C sea, warm enough for the determined',
      'Walking shoes for Montserrat, at its best this month',
      'A cover-up for the Sagrada Família dress code',
      'Almost no wet-weather kit: 47mm over seven days, and warm showers',
    ],
  },

  faqs: [
    {
      question: 'Is May the best month to visit Barcelona?',
      answer: 'On most measures in this guide, yes. It has the longest daylight at 14 hours 29 minutes, comfortable 21.4C average highs, the narrowest daily temperature swing of the ten months, and nothing at all closed or out of season. The two costs are price, which is at spring peak, and a sea that has only reached 17 to 18C against August\'s 25 to 26C.',
    },
    {
      question: 'Is 17 May a public holiday in Barcelona?',
      answer: 'Yes, and only in Barcelona. Monday 17 May 2027 is Pasqua Granada, a public holiday in the municipality of Barcelona that is observed neither in the rest of Catalonia nor in Spain. Banks, offices and many local shops in the city close while the same businesses elsewhere trade normally. Attractions and public transport run as usual.',
    },
    {
      question: 'Is there a Formula 1 race in Barcelona in May 2027?',
      answer: 'No. The Spanish Grand Prix moved to Madrid from 2026, and the Circuit de Barcelona-Catalunya now hosts a separately-named race in even-numbered years only, in June. Any guide putting Formula 1 on a Barcelona May page is working from pre-2026 information. Primavera Sound, on 3 to 5 June 2027, and Sónar, on 17 to 19 June, are also outside May.',
    },
    {
      question: 'Can you swim in Barcelona in May?',
      answer: 'If you are determined, yes. The sea reaches 17 to 18C, four degrees up on April and the first month where the water is warming quickly, so the end of May is noticeably better than the start. It is comfortable for a wetsuit trip and brisk for a swim. The Mediterranean off Barcelona does not peak until August, at 25 to 26C.',
    },
    {
      question: 'How busy is Barcelona in May?',
      answer: 'Busy, and it is the month where booking habits have to change. Park Güell timed slots that were available same-day in January now need several days\' notice, particularly mornings, and the Sagrada Família\'s best slots go well ahead. There is no summer heat to deter anyone and the weather is at its most reliable, which is exactly why everyone is there.',
    },
    {
      question: 'Is anything closed in Barcelona in May?',
      answer: 'Nothing. Every attraction is on its longest or near-longest timetable, the Sagrada Família is on its April to September hours of 09:00 to 20:00 on weekdays, La Pedrera is on its summer season and both seasonal products on this site are running: the Casa Batlló rooftop night visit and the Costa Brava sea trips. It is the only month in this guide where that is true.',
    },
  ],
};
