import { MonthContent } from '@/lib/season-types';

// August through December.
//
// Every closure date here comes from the attraction's own official timetable
// (Sagrada Família, Park Güell, La Pedrera, Casa Batlló). Every public holiday
// was checked against the official Catalan calendar and every weekday was
// calculated rather than assumed. Where a date could not be confirmed from an
// official source it is described in general terms and labelled as such:
// that applies to the 2026 dates of the Fira de Santa Llúcia, the exact day of
// La Mercè's free museum opening, the route and start time of the Cavalcada de
// Reis, and every water-activity operating season. None of those is stated as
// fact anywhere on these pages.

export const august: MonthContent = {
  slug: 'barcelona-in-august',
  month: 'August',
  monthKey: 'august',
  yearOffset: 0,
  prevMonth: 'July',
  prevPath: '/best-time-to-visit-barcelona#july',
  nextMonth: 'September',
  nextPath: '/barcelona-in-september',
  metaDescription:
    'Barcelona in August: the sea hits 25 to 26C, its warmest of the year, with 28.6C average highs. The Casa Batlló night visit runs only to 31 August. Weather table, closures, events and ten ranked tours.',
  heroCapsule:
    'August is the month the Mediterranean does the work. The sea reaches 25 to 26C, its annual peak and roughly twice February\'s 13C, while air temperatures average a manageable 28.6C. The talk of Barcelona shutting down is overstated: every major sight keeps normal hours, and two of them run their longest of the year.',

  verdict: {
    capsule:
      'Yes, and for one reason above all others: the water. At 25 to 26C the sea is warmer than it is anywhere else in the ten months this guide covers, and the coastal half of Barcelona only really works at that temperature. The cost is humidity and seven wet days, most of them short storms.',
    body: [
      'Barcelona in August is not the furnace people brace for. The average high is 28.6C, which is milder than Rome, Seville or Athens in the same week, because the sea moderates the city. What the sea gives in the afternoon it takes back at night: the average low is 21.5C, and a humid 21.5C at two in the morning in a top-floor Eixample flat with no air conditioning is the genuine discomfort of a Barcelona August, not the daytime.',
      'That single fact should shape the whole trip. Build the day around the coast and the evening rather than around midday sightseeing. The Sagrada Família runs its longest hours of the year in August, Monday to Friday 09:00 to 20:00, so a 19:00 slot is a real option and the nave at that hour is a different building from the nave at 11:00. Casa Batlló is open daily to 22:30 in every month, and its rooftop night visit with live music runs only from 1 April to 31 August, which makes August the last chance until the following spring.',
      'The reputation for closure is worth unpicking, because most guides get it wrong. What closes in Barcelona in August is the local service layer: independent neighbourhood restaurants, bakeries and workshops in Gràcia, Eixample and Sant Antoni shut for two or three weeks around 15 August. That is a real inconvenience if you had a specific bar in mind. It is not a city shutdown. No major attraction publishes reduced August hours, and two of the biggest run extended ones.',
    ],
  },

  weather: {
    capsule:
      'Expect 28.6C average highs and 21.5C lows, 52mm of rain spread over seven wet days, and 13 hours 53 minutes of daylight in mid-month. The sea sits at 25 to 26C, the warmest reading of the year and nearly double the 13C annual floor in February.',
    body: [
      'The wet days surprise people. Seven of them is more than March, more than February and more than double December\'s four, and 52mm is twice what December delivers. August rain in Barcelona is not drizzle. It arrives as a short, violent late-afternoon storm off the sea, drops a lot of water in forty minutes and clears. Nothing gets cancelled by it, but an open-top bus seat or an unshaded terrace on the Park Güell hillside can become unpleasant with very little warning.',
      'Humidity is the variable that does not appear in a temperature table and matters more than the temperature itself. Barcelona sits between the sea and the Collserola ridge, and the air holds moisture. A 28.6C day here feels heavier than a 31C day inland. The practical consequence is that shade, not air conditioning, is the thing you plan around, and that the difference between a 10:00 and a 13:00 Park Güell slot is much larger than three hours of clock time suggests.',
      'Daylight is still generous at 13 hours 53 minutes on the 15th, so sunset falls around half past eight and the useful evening runs to ten. That is the window that makes August work. It is also why the month suits people who are happy to eat at Spanish hours rather than fighting them.',
    ],
  },

  crowds: {
    capsule:
      'August is peak leisure season and everything timed sells out. Park Güell releases 30-minute entry slots and genuinely runs out several days ahead. Barcelona\'s tourist tax is charged per person per night and is capped at the first seven nights.',
    body: [
      'Park Güell is the booking that catches people out, not the Sagrada Família. Entry to the Monumental Zone is by timed 30-minute slot, you have to arrive inside that half hour, latecomers are refused and there is no re-entry. General admission is 18 euros, 13.50 euros for ages 7 to 12 and over-65s, and free under 7. The first slot is 09:30 and the last is 19:30. In August the morning slots go days in advance, so book before you fly rather than on the morning.',
      'One myth needs killing here because it circulates widely. The free early-morning "Bon Dia" window from 07:00 to 09:30 and the evening "Bon Vespre" window from 20:00 to 22:00 are for local residents only. If you turn up at 08:00 as a visitor expecting free access to the Monumental Zone, you will not get in. The park\'s wider woodland paths are open and free to everyone; the mosaic terrace, the dragon and the Hypostyle Hall are not.',
      'On price, Barcelona\'s tourist tax is set by the city and charged in euros, so it is the one figure on this page not quoted in pounds. To 31 March 2027 it runs at 12.00 euros per person per night in a 5-star hotel, 8.40 euros in a 4-star, 9.50 euros in a licensed tourist apartment, 7.00 euros elsewhere and 6.00 euros in a hostel, capped at seven nights. It rose sharply on 1 April 2026 and rises again on 1 April 2027. Two adults in a 4-star for a week therefore pay about 118 euros in tax alone on top of the room rate, which is worth putting in the budget rather than discovering at checkout.',
      'Hotel pricing in August is high but not the year\'s peak. That distinction belongs to the first week of March, when Mobile World Congress routinely takes city-wide rates to three to five times normal. August is expensive in the ordinary summer way, and the second half of the month is softer than the first.',
    ],
  },

  tours: {
    capsule:
      'The August ten leads with water and darkness, because those are the two things this month has that no other month in this guide does. Prices, ratings and review counts were checked against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: 'costa-brava-tour-kayak-snorkel-and-cliff-jump-from-barcelona',
        label: 'Costa Brava kayak, snorkel and cliff jump day trip',
        bestFor: 'The one month the sea is genuinely warm',
        why: 'Ranked first for August on a single number: 25 to 26C water. This is the highest-rated tour on the whole site at 4.9 out of 5, and it is bookable for only about half the year. Snorkelling a Costa Brava cove in August needs no wetsuit and no willpower, which is not true in April and impossible in January.',
      },
      {
        slug: 'casa-batll-night-visit-with-live-music-on-the-roof-terrace',
        label: 'Casa Batlló night visit with rooftop live music',
        bestFor: 'The last night season until April',
        why: 'The night visit runs only from 1 April to 31 August, so 31 August is the final date until the following spring. It solves the August problem exactly: you are on Gaudí\'s chimney-stack roof after dark with live music, at the hour the city is actually pleasant. Note that this option is non-refundable on GetYourGuide.',
      },
      {
        slug: 'barcelona-sagrada-familia-entry-ticket-with-audio-guide',
        label: 'Sagrada Família entry ticket with audio guide',
        bestFor: 'A late slot in an air-conditioned basilica',
        why: 'The most-reviewed listing on the site by a wide margin, and August is when its extended hours pay off. Monday to Friday the basilica runs 09:00 to 20:00, its longest of the year, so you can put it at the end of the day rather than the middle of it. The stained glass reads warm in the late afternoon and cool in the morning.',
      },
      {
        slug: 'barcelona-daytime-or-sunset-catamaran-cruise-with-music',
        label: 'Daytime or sunset catamaran cruise',
        bestFor: 'Getting off the pavement for an hour',
        why: 'Ranked up sharply for August. Sunset falls around 20:30 in mid-month, so a sunset sailing is a genuine sunset rather than a name, and an hour of sea breeze off the Barceloneta is the cheapest relief from a humid afternoon on the list.',
      },
      {
        slug: 'barcelona-casa-batll-entry-with-self-audioguide-tour',
        label: 'Casa Batlló entry with self-guided audio tour',
        bestFor: 'The middle of the day, indoors, at your own pace',
        why: 'Casa Batlló opens daily to 22:30 all year, and the self-guided format lets you slow down in the cool interior rooms rather than keeping pace with a group. Worth knowing before you book: GetYourGuide lists this option as non-refundable.',
      },
      {
        slug: 'barcelona-park-guell-guided-tour-with-skip-the-line-entry',
        label: 'Park Güell guided tour with skip-the-line entry',
        bestFor: 'Doing the exposed hillside early',
        why: 'Ranked here rather than higher purely because of where it is. Park Güell is an open hillside with very little shade, so the guided hour works in August only if you take a morning slot. The guided version is the better August choice than a plain ticket because you are moving with a purpose instead of wandering in the sun.',
      },
      {
        slug: 'barcelona-aquarium-entry-ticket',
        label: 'Barcelona Aquarium entry ticket',
        bestFor: 'Families when a storm arrives',
        why: 'August has seven wet days, and they land as sudden late-afternoon storms rather than all-day rain. The aquarium sits on Port Vell, is entirely indoors and is ten minutes from most of the waterfront, which makes it the most useful contingency plan on this list rather than a headline attraction.',
      },
      {
        slug: 'barcelona-flamenco-show-at-the-theater-and-quot-city-hall-an',
        label: 'Flamenco show at the City Hall theatre',
        bestFor: 'A seated indoor evening',
        why: 'An hour, seated, indoors and air conditioned, at the time of day when Barcelona is at its most humid. Flamenco is Andalusian rather than Catalan and we would not pretend otherwise, but it is a well-run show and it fills the 21:00 slot better than anything else in the list.',
      },
      {
        slug: 'barcelona-sagrada-familia-skip-the-line-entry-ticket-and-tou',
        label: 'Sagrada Família skip-the-line entry ticket and tour',
        bestFor: 'A guide, with the queue removed',
        why: 'The highest-rated Sagrada Família option at 4.8 out of 5. In August the skip-the-line element is worth more than in any other month for a simple reason: the Carrer de Mallorca side of the basilica has no shade at all, so the queue you are avoiding is a queue in direct sun.',
      },
      {
        slug: 'barcelona-fc-barcelona-museum-and-quot-bar-a-immersive-tour-',
        label: 'FC Barcelona Museum and Barça Immersive Tour',
        bestFor: 'The first week of the new season',
        why: 'La Liga starts in mid-August, so this is the month the stadium comes back to life. Spotify Camp Nou reopened on 22 November 2025 and its capacity rose to 62,652 on 10 March 2026, with the third tier still closed and full completion now expected in 2027. GetYourGuide lists this ticket as non-refundable.',
      },
    ],
    note:
      'The hop-on hop-off bus and the Montserrat cog-wheel trip both drop out of the August ten despite strong review counts. The bus sells an open top deck, which is the wrong product for a humid 28.6C afternoon with a storm risk, and Montserrat is a five to seven hour day on an exposed mountain. Both return in the autumn, when the numbers suit them. Full listings for every tour, including the ones we have ranked out this month, are on our tours page.',
  },

  events: {
    capsule:
      'August has one neighbourhood festival that outranks everything else: the Festa Major de Gràcia from 15 to 21 August, when residents decorate entire streets and compete on them. The Assumption on Saturday 15 August is a national public holiday and falls on the festival\'s opening day.',
    rows: [
      { event: 'Festa Major de Gràcia', dates: '15 to 21 August', where: 'Streets of the Gràcia district', free: 'Free' },
      { event: 'Assumption (l\'Assumpció)', dates: 'Saturday 15 August', where: 'Nationwide public holiday', free: 'Public holiday' },
      { event: 'La Liga season opens', dates: 'Mid-August', where: 'Spotify Camp Nou and away', free: 'Ticketed' },
      { event: 'Casa Batlló night visit, final dates', dates: 'To 31 August', where: 'Passeig de Gràcia 43', free: 'Ticketed' },
    ],
    body: [
      'The Festa Major de Gràcia is the best free thing you can do in Barcelona in August and it barely registers on most itineraries. Residents of individual streets spend months building elaborate themed decorations out of recycled material, then hang them across the road and compete for a prize. The whole of Gràcia becomes walkable theatre for a week, with street concerts and food stalls under the installations. Go after dark, go on a weekday if crowds bother you, and go on foot from Passeig de Gràcia rather than driving.',
      'The Assumption on Saturday 15 August is a national holiday across Spain and, landing on a Saturday, causes far less disruption than a midweek date would. Shops and banks close; attractions, restaurants in the tourist core and public transport run normally. It is also the pivot point of the local August shutdown, so the neighbourhood places that are going to close for the fortnight generally close from about that weekend.',
      'On football, La Liga runs from roughly mid-August to late May, which means home fixtures are bookable across the entire span of this guide. Fixture dates are released and moved for television scheduling, so we do not publish specific match dates here; check the club\'s own calendar close to your trip.',
    ],
  },

  closures: {
    capsule:
      'Nothing major shuts in August. La Pedrera, Casa Batlló, Park Güell and the Sagrada Família all keep normal hours, and the last two are on their longest timetables of the year. What closes is the neighbourhood restaurant layer, for two to three weeks around 15 August.',
    rows: [
      { site: 'Sagrada Família', closed: 'Nothing', note: 'April to September hours: Monday to Friday 09:00 to 20:00, Saturday 09:00 to 18:00, Sunday 10:30 to 20:00. The longest timetable of the year.' },
      { site: 'La Pedrera (Casa Milà)', closed: 'Nothing', note: 'Summer season to 1 November: daytime 09:00 to 20:30, night visit 20:40 to 22:20. Its first closure of the season is 7 September.' },
      { site: 'Casa Batlló', closed: 'Nothing', note: 'Open daily 09:00 to 22:30 year-round. The night visit with rooftop live music ends for the season on 31 August.' },
      { site: 'Park Güell', closed: 'Nothing', note: 'Timed 30-minute slots, first 09:30 and last 19:30. No re-entry, and latecomers past their half-hour window are refused.' },
      { site: 'Independent restaurants and shops', closed: 'Two to three weeks around 15 August', note: 'Concentrated in Gràcia, Eixample and Sant Antoni. Places in the tourist core trade through.' },
      { site: 'Shops and banks', closed: 'Saturday 15 August', note: 'Assumption, a national public holiday. Attractions and transport run normally.' },
    ],
    body: [
      'The "Barcelona closes in August" line is the single most repeated inaccuracy about this month, and it is worth being precise about it. We could not find a single major Barcelona museum or Gaudí site publishing reduced August hours. The Sagrada Família and La Pedrera both run their longest daily timetables of the year in August. What is genuinely true is that a large share of independent, resident-facing businesses take the same two or three weeks off around the Assumption, so the tapas bar a friend recommended in Sant Antoni may well have a handwritten sign on the shutter.',
      'The practical fix is to book dinner rather than wander for it, and to check the specific place is open for your dates rather than assuming. In the Gothic Quarter, El Born and along the waterfront, almost everything trades through August because its customers are visitors.',
      'One forward-looking closure matters if you are planning a longer stay across the turn of the month: La Pedrera closes entirely on 7 September. If Casa Milà is on your list and your trip straddles the two months, do it in August.',
    ],
  },

  packing: {
    capsule:
      'Pack for humidity rather than heat, and for a strict basilica dress code. The Sagrada Família refuses entry in beachwear, see-through clothing or bare torsos, which is easy to fall foul of when you have come straight off the sand at Barceloneta ten minutes away.',
    body: [
      'Barcelona\'s specific August problem is that the beach and the cathedral are twenty minutes apart, and what works at one gets you turned away at the other. The Sagrada Família enforces a dress code, and being refused at the door after booking a timed slot is a wasted ticket rather than a delay. A light overshirt in the bag solves it for both people in a couple.',
      'The city is also unusually walkable and unusually hard on feet. The Eixample grid is deceptive: those long chamfered blocks add up, and a day of Gaudí houses plus Park Güell is comfortably fifteen thousand steps on hard pavement and hillside path. Thin-soled sandals will not survive it.',
      'Finally, plan for the storm rather than the sun. Seven wet days concentrated into short violent bursts means a packable layer earns its space, while a full waterproof does not.',
    ],
    list: [
      'A light overshirt or scarf to meet the Sagrada Família dress code straight off the beach',
      'Proper walking shoes, not sandals, for the Park Güell hillside paths',
      'Swimwear and a quick-dry towel: the sea is at its 25 to 26C annual peak',
      'High-factor sun cream and a brimmed hat for the unshaded Park Güell terrace',
      'A packable layer for the short late-afternoon storms rather than a full waterproof',
      'A refillable bottle; humidity means you drink far more than the temperature suggests',
    ],
  },

  faqs: [
    {
      question: 'Does Barcelona really shut down in August?',
      answer: 'No, and the claim is materially overstated. Every major attraction keeps normal hours, and the Sagrada Família and La Pedrera both run their longest daily timetables of the year in August. What does close is the local service layer: independent neighbourhood restaurants and shops in Gràcia, Eixample and Sant Antoni shut for two to three weeks around 15 August. Places in the tourist core trade through.',
    },
    {
      question: 'How warm is the sea in Barcelona in August?',
      answer: 'Between 25 and 26C, its warmest of the year and roughly double the 13C annual floor the Mediterranean reaches off Barcelona in February. That is the single strongest argument for visiting in August rather than a shoulder month. It is also why the Costa Brava kayak and snorkel day trip ranks first on this page and is not bookable at all from about November to March.',
    },
    {
      question: 'Is it too hot to sightsee in Barcelona in August?',
      answer: 'Less than its reputation suggests. The average high is 28.6C, milder than most southern European capitals in the same week, because the sea moderates the city. The genuine discomfort is the 21.5C average overnight low combined with high humidity. Plan the coast and evenings around the heat and use the Sagrada Família\'s 20:00 closing time, and August is comfortable.',
    },
    {
      question: 'Can I do the Casa Batlló night visit in August?',
      answer: 'Yes, and August is your last chance for seven months. The rooftop night visit with live music runs only from 1 April to 31 August and is genuinely unbookable from September through March. Casa Batlló itself stays open daily 09:00 to 22:30 all year, so a late self-guided visit is possible in any month; the live-music roof terrace version is not.',
    },
    {
      question: 'Do I need to book Park Güell in advance in August?',
      answer: 'Yes. Entry to the Monumental Zone runs on timed 30-minute slots, you must arrive inside your window, latecomers are refused and there is no re-entry. Morning slots sell out several days ahead in August. General admission is 18 euros, 13.50 euros for ages 7 to 12 and over-65s, free under 7. The free early and late windows are for local residents only, not visitors.',
    },
    {
      question: 'How much is Barcelona\'s tourist tax in August?',
      answer: 'To 31 March 2027 it is 12.00 euros per person per night in a 5-star hotel, 8.40 euros in a 4-star, 9.50 euros in a licensed tourist apartment, 7.00 euros elsewhere and 6.00 euros in a hostel, capped at the first seven nights. It is quoted in euros because the city sets it. It rose on 1 April 2026 and rises again on 1 April 2027; Barcelona had not published the new figures when this page was written.',
    },
  ],
};

export const september: MonthContent = {
  slug: 'barcelona-in-september',
  month: 'September',
  monthKey: 'september',
  yearOffset: 0,
  prevMonth: 'August',
  prevPath: '/barcelona-in-august',
  nextMonth: 'October',
  nextPath: '/barcelona-in-october',
  metaDescription:
    'Barcelona in September: La Mercè runs 23 to 27 September and wet days jump from seven to twelve. The Casa Batlló night visit stops on 1 September and La Pedrera closes on the 7th. Full weather, closures and ten tours.',
  heroCapsule:
    'September is Barcelona\'s festival month and its wettest by frequency: twelve wet days, up from seven in August, and 92mm of rain. La Mercè, the city\'s own patronal festival, fills 23 to 27 September. The sea barely cools, holding 24 to 25C, so summer effectively continues while the crowds thin.',

  verdict: {
    capsule:
      'Yes, and it is the best-value strong month in this guide. Air temperatures fall to 25.0C while the sea holds 24 to 25C, so the water stays summer-warm after the crowds go home. The cost is rain: twelve wet days, the most of any month in the year.',
    body: [
      'September in Barcelona is a month of two personalities, and the seam runs through the middle of it. The first fortnight behaves like a cooler August: sea still at 24 to 25C, terraces full, the local businesses that shut for the Assumption lifting their shutters again. From about the 20th the city turns its attention to itself and stages La Mercè, which is the single best reason to be here in September and the reason most visitors have never heard of it.',
      'The weather trade is real and worth stating plainly. Twelve wet days is the highest count of any month in Barcelona\'s year, higher than October, higher than November, higher than anything in winter. September rain arrives as heavy Mediterranean convective storms, sometimes with genuine flooding on the lower streets of the Raval and Barceloneta for an hour or two. It does not rain for twelve days solidly; it rains hard on twelve separate days, usually in the afternoon.',
      'What has definitively ended is the Casa Batlló night season. The rooftop night visit with live music runs 1 April to 31 August only, so from 1 September it is off the table until spring. This is the clearest month-to-month product change in Barcelona and it happens on the first day of this month.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 25.0C and lows of 18.0C, with 92mm of rain across twelve wet days, the highest wet-day count in the Barcelona year. Daylight falls to 12 hours 33 minutes by mid-month, eighty minutes down on August. The sea holds 24 to 25C.',
    body: [
      'The sea lags the air by about six weeks in Barcelona, and September is where that lag pays. Air temperatures have dropped 3.6 degrees from the August average while the water has barely moved, from 25 to 26C down to 24 to 25C. In practice that means the beach is more comfortable in September than in August: the sand is not scorching, the sea is still warm and the crowd has thinned.',
      'Daylight is the number that changes fastest. Barcelona loses roughly eighty minutes of day between mid-August and mid-September, and another eighty by mid-October. By the end of September sunset is around half past seven rather than half past eight, which shortens the useful evening and starts to matter for anything on the Park Güell hillside or the Montserrat cog-wheel.',
      'On the rain, the useful mental model is that September storms are short and heavy rather than persistent. Ninety-two millimetres over twelve days is under 8mm per wet day, which is nothing like a British autumn. What it does mean is that an unbooked outdoor plan will get disrupted at some point in a week-long trip, so having one indoor option per day held in reserve is sensible.',
    ],
  },

  crowds: {
    capsule:
      'Crowds fall through September, but La Mercè from 23 to 27 September reverses that completely for five days. Thursday 24 September is a public holiday in the city of Barcelona and nowhere else in Spain, which is exactly the kind of local-only date that catches visitors out.',
    body: [
      'The La Mercè holiday deserves its own paragraph because it is genuinely obscure. Thursday 24 September 2026 is a public holiday in the municipality of Barcelona only. It is not a Spanish national holiday and it is not a Catalonia-wide one. Banks, offices and many local shops in Barcelona close, while the same chain in Girona or Madrid stays open. Attractions and public transport run normally, but do not schedule anything administrative in the city on that day.',
      'La Diada on Friday 11 September is the other holiday in the month, this one across Catalonia. It marks the fall of Barcelona in 1714 and is a political and civic day rather than a party. Expect large organised demonstrations, senyera flags on balconies across the city and some central road closures. Sights stay open.',
      'Hotel rates behave in an interesting way this month. The first half is peak-adjacent; the middle dips; then La Mercè week firms them up again. If price is the priority and the festival is not, target roughly 14 to 20 September, which is the softest week of the month. Barcelona\'s per-night tourist tax applies unchanged in every season, and the full rate card is set out on our August guide.',
    ],
  },

  tours: {
    capsule:
      'The September ten is built around the fact that the water is still warm and the sky is not reliable. Water experiences stay high, an indoor option sits in the top five, and the Casa Batlló night visit disappears entirely. All figures were checked against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: 'barcelona-sagrada-familia-entry-ticket-with-audio-guide',
        label: 'Sagrada Família entry ticket with audio guide',
        bestFor: 'The month with twelve wet days',
        why: 'Takes first place in September for the reason it was third in August: twelve wet days is the highest count in the Barcelona year, and this is the single best indoor hour in the city. The April to September timetable still applies, so Monday to Friday you can go as late as 20:00.',
      },
      {
        slug: 'costa-brava-tour-kayak-snorkel-and-cliff-jump-from-barcelona',
        label: 'Costa Brava kayak, snorkel and cliff jump day trip',
        bestFor: 'The last comfortable month in the water',
        why: 'The sea is still 24 to 25C and the coves north of Barcelona are emptier than in August. This is the site\'s highest-rated tour at 4.9 from 2,790 reviews, and September is the last month it is both bookable and genuinely warm. It disappears from the ranking entirely from November.',
      },
      {
        slug: 'barcelona-park-guell-guided-tour-with-skip-the-line-entry',
        label: 'Park Güell guided tour with skip-the-line entry',
        bestFor: 'Comfortable walking on the hillside',
        why: 'Ranked up from sixth in August. At 25.0C the exposed terraces and the climb up from Lesseps stop being a chore, and a 55 to 75 minute guided walk is the right length before the afternoon storm window opens.',
      },
      {
        slug: 'barcelona-flamenco-show-at-the-theater-and-quot-city-hall-an',
        label: 'Flamenco show at the City Hall theatre',
        bestFor: 'La Mercè week, when the city is out late',
        why: 'Ranked up for the festival. During La Mercè the streets are the venue and the atmosphere runs past midnight, so a seated hour indoors before or after fits the rhythm of the week. It is also a reliable fallback on the twelve evenings a month when a storm lands.',
      },
      {
        slug: 'barcelona-casa-batll-entry-with-self-audioguide-tour',
        label: 'Casa Batlló entry with self-guided audio tour',
        bestFor: 'The Gaudí house that is still open late',
        why: 'The night visit with live music ended on 31 August, so this daytime self-guided ticket is what remains of Casa Batlló for the next seven months. The house itself is still open daily to 22:30. GetYourGuide lists this option as non-refundable.',
      },
      {
        slug: 'barcelona-daytime-or-sunset-catamaran-cruise-with-music',
        label: 'Daytime or sunset catamaran cruise',
        bestFor: 'The Piromusical waterfront finale',
        why: 'Ranked for La Mercè specifically. The festival ends with the Piromusical, a fireworks and music finale at the Magic Fountain, and the waterfront is alive all week. Sunset has pulled back to around eight o\'clock by mid-month, so the sunset sailing runs earlier than in August.',
      },
      {
        slug: 'barcelona-city-tour-hop-on-hop-off-bus-tour',
        label: 'Barcelona hop-on hop-off bus tour',
        bestFor: 'Returning to the ranking after the August heat',
        why: 'Back in the list after being ranked out of August. At 25.0C rather than 28.6C the open top deck becomes an asset instead of a liability, and with 23,410 reviews it is one of the most-booked things in the city. Check the forecast: this is the one product on the list that a September storm genuinely ruins.',
      },
      {
        slug: 'barcelona-fc-barcelona-museum-and-quot-bar-a-immersive-tour-',
        label: 'FC Barcelona Museum and Barça Immersive Tour',
        bestFor: 'The season proper getting under way',
        why: 'September is when La Liga settles into its rhythm and European nights start. Spotify Camp Nou is back in use with capacity at 62,652 since 10 March 2026, third tier still closed and full completion expected in 2027. Listed as non-refundable on GetYourGuide.',
      },
      {
        slug: 'barcelona-sagrada-familia-skip-the-line-entry-ticket-and-tou',
        label: 'Sagrada Família skip-the-line entry ticket and tour',
        bestFor: 'A guided version with the queue removed',
        why: 'The best-rated Sagrada Família option at 4.8 out of 5. Worth a guide in September because the story of the building changed recently: the Tower of Jesus Christ was completed on 20 February 2026 at 172.5m, making this the tallest church in the world, and a guide will explain what you are looking at from outside.',
      },
      {
        slug: 'barcelona-montserrat-tour-with-cog-wheel-and-black-madonna',
        label: 'Montserrat tour with cog-wheel train and Black Madonna',
        bestFor: 'A mountain day while the light lasts',
        why: 'Ranked in for September and out of August. A five to seven hour trip up a serrated mountain works at 25.0C in a way it does not at 28.6C, and 12 hours 33 minutes of daylight still comfortably covers the round trip. That margin narrows every month from here.',
      },
    ],
    note:
      'The Casa Batlló night visit with rooftop live music leaves the ranking entirely from 1 September and does not return until 1 April. That is not a judgement call on our part: the season is fixed by the house and the product is genuinely unbookable in between. See our full tour list for everything available this month.',
  },

  events: {
    capsule:
      'La Mercè, Barcelona\'s own patronal festival, runs 23 to 27 September 2026 and is the largest free event in the city\'s year. La Diada on Friday 11 September is a Catalonia-wide public holiday, and Thursday 24 September is a public holiday in the city of Barcelona alone.',
    rows: [
      { event: 'La Diada, National Day of Catalonia', dates: 'Friday 11 September', where: 'Across Catalonia', free: 'Public holiday, Catalonia' },
      { event: 'La Mercè festival', dates: '23 to 27 September', where: 'City-wide: Plaça Sant Jaume, Ciutadella, the waterfront', free: 'Free' },
      { event: 'La Mercè public holiday', dates: 'Thursday 24 September', where: 'City of Barcelona only', free: 'Public holiday, Barcelona only' },
      { event: 'Piromusical finale', dates: 'End of La Mercè', where: 'Magic Fountain, Montjuïc', free: 'Free' },
      { event: 'La Pedrera closed', dates: 'Monday 7 September', where: 'Passeig de Gràcia 92', free: 'Closed all day' },
    ],
    body: [
      'La Mercè is what a European city festival looks like when it is genuinely for residents. The set pieces are the correfoc, in which devils and dragons run through the crowd throwing fireworks and you are expected to wear old clothes with a collar you can turn up; the castellers, human towers built by competing colles at Plaça Sant Jaume from around midday; the parade of gegants, the giant figures each district maintains; and BAM, a free music programme across several squares. It closes with the Piromusical at the Magic Fountain.',
      'The festival also traditionally includes a portes obertes day when city museums open free of charge. That happens, but Barcelona had not published which specific day it falls on in 2026 when this page was written, so we are not going to name one. Check the official La Mercè programme, which the city publishes a few weeks ahead.',
      'La Diada on 11 September is a very different kind of day and it is worth understanding before you arrive rather than walking into it. It commemorates the fall of Barcelona at the end of the War of the Spanish Succession in 1714 and is the focal point of Catalan national identity, with large organised demonstrations and road closures in the centre. Museums and attractions stay open; banks and offices do not.',
    ],
  },

  closures: {
    capsule:
      'Two closures define September. The Casa Batlló night visit ends its season on 31 August and is unbookable until 1 April, and La Pedrera closes completely on Monday 7 September, its only full closure between the summer and Christmas.',
    rows: [
      { site: 'Casa Batlló night visit', closed: 'All month, and until 1 April', note: 'The rooftop night visit with live music runs 1 April to 31 August only. Casa Batlló itself is open daily 09:00 to 22:30.' },
      { site: 'La Pedrera (Casa Milà)', closed: 'Monday 7 September, all day', note: 'A single full-day closure. Otherwise on summer hours to 1 November: 09:00 to 20:30 daytime, 20:40 to 22:20 night visit.' },
      { site: 'Banks and offices, Catalonia', closed: 'Friday 11 September', note: 'La Diada, the National Day of Catalonia. Attractions and transport run normally.' },
      { site: 'Banks and offices, Barcelona city', closed: 'Thursday 24 September', note: 'La Mercè, a public holiday in the municipality of Barcelona only. Not observed elsewhere in Spain.' },
      { site: 'Sagrada Família', closed: 'Nothing', note: 'Still on April to September hours: Monday to Friday 09:00 to 20:00, Saturday 09:00 to 18:00, Sunday 10:30 to 20:00.' },
      { site: 'Park Güell', closed: 'Nothing', note: 'Timed 30-minute slots, 09:30 to 19:30. Slots ease off after the first fortnight but tighten again for La Mercè week.' },
    ],
    body: [
      'The 7 September La Pedrera closure is easy to miss and expensive to walk into, because it is a single arbitrary Monday rather than part of a pattern. If Casa Milà is on your list and your trip covers that date, move it. The house is otherwise on its summer timetable right through to 1 November, with the daytime visit 09:00 to 20:30 and the night visit 20:40 to 22:20 at 39.50 euros for an adult.',
      'The Casa Batlló night change is the more consequential one for a whole month\'s planning. Plenty of guides still describe rooftop concerts at Casa Batlló as if they run year-round. They do not. From 1 September the roof terrace night visit is off sale, and it stays off until 1 April. If that is the experience you came for, either move the trip into August or accept the daytime visit instead.',
      'Nothing else of consequence closes. The Sagrada Família keeps its full April to September timetable through the month, Park Güell runs its normal timed slots, and neither the Diada nor the La Mercè holiday shuts attractions.',
    ],
  },

  packing: {
    capsule:
      'Pack for twelve wet days and for the correfoc. September is the wettest month by frequency in Barcelona, and if you are going anywhere near La Mercè\'s fire run you want old clothes, long sleeves, a hat and a collar you can turn up against sparks.',
    body: [
      'The correfoc is not a spectator event in the way a parade is. Devils and dragons carrying fireworks run down the street and the crowd runs with them, so the standard local kit is a long-sleeved cotton shirt you do not care about, long trousers, closed shoes, a hat and something over the neck. Synthetic fabrics melt. If that does not appeal, watch from a side street; nobody minds.',
      'For the rest of the month it is straightforward Mediterranean autumn packing with one addition: something genuinely showerproof, because 92mm falling on twelve separate days means roughly one afternoon in two and a half will produce rain during a week-long trip. A folding umbrella works better than a coat in 25C.',
      'The sea is still 24 to 25C, so swimwear stays in the bag. This is the last month of the ten covered here where that is unarguably true.',
    ],
    list: [
      'Old long-sleeved cotton, long trousers and a hat if you are going to the correfoc',
      'A folding umbrella rather than a coat: 25C rain does not need a waterproof',
      'Swimwear, because the sea is still 24 to 25C',
      'Closed shoes for La Mercè crowds and for the Park Güell hillside',
      'A light layer for evenings, which cool noticeably after the 20th',
      'A Sagrada Família dress-code cover-up: shoulders and torso must be covered',
    ],
  },

  faqs: [
    {
      question: 'Is September a good time to visit Barcelona?',
      answer: 'It is one of the best, with one caveat. Air temperatures drop to 25.0C average highs while the sea barely moves, holding 24 to 25C, so the beach is more comfortable than in August. The caveat is rain: twelve wet days and 92mm, the highest wet-day count of any month in Barcelona\'s year. It falls as short heavy storms, not persistent drizzle.',
    },
    {
      question: 'What is La Mercè and when is it in 2026?',
      answer: 'La Mercè is Barcelona\'s own patronal festival and the biggest free event in the city\'s calendar. In 2026 it runs from 23 to 27 September. Expect the correfoc fire run, castellers building human towers at Plaça Sant Jaume from around midday, parades of gegants, the free BAM music programme, and a Piromusical fireworks finale at the Magic Fountain on Montjuïc.',
    },
    {
      question: 'Is 24 September a public holiday in Barcelona?',
      answer: 'Yes, but only in the city of Barcelona. Thursday 24 September 2026 is a municipal public holiday for La Mercè and is not observed in the rest of Catalonia or Spain. Banks, offices and many local shops close in the city while the same businesses trade normally elsewhere. Attractions and public transport run as usual.',
    },
    {
      question: 'Can I still do the Casa Batlló rooftop night visit in September?',
      answer: 'No. The night visit with live music on the roof terrace runs from 1 April to 31 August only and is genuinely unbookable from 1 September until the following April. Casa Batlló itself remains open daily from 09:00 to 22:30 all year, so a late self-guided visit is still possible, but the live-music roof terrace experience is not.',
    },
    {
      question: 'Is anything closed in Barcelona in September?',
      answer: 'La Pedrera closes completely on Monday 7 September, which is its only full-day closure between the summer and Christmas and is easy to walk into because it is a single arbitrary date. Everything else runs normally. The Sagrada Família keeps its April to September hours all month and Park Güell keeps its usual timed slots.',
    },
    {
      question: 'How much does it rain in Barcelona in September?',
      answer: 'About 92mm across twelve wet days, which is the highest number of wet days of any month in the Barcelona year, ahead of October at ten and November at eight. It works out at under 8mm per wet day. In practice that means short, heavy convective storms, usually in the afternoon, rather than the all-day drizzle a northern European visitor might picture.',
    },
  ],
};

export const october: MonthContent = {
  slug: 'barcelona-in-october',
  month: 'October',
  monthKey: 'october',
  yearOffset: 0,
  prevMonth: 'September',
  prevPath: '/barcelona-in-september',
  nextMonth: 'November',
  nextPath: '/barcelona-in-november',
  metaDescription:
    'Barcelona in October: the wettest month of the year at 105mm, with 21.7C highs and the clocks going back on 25 October. The last bookable month for the Costa Brava sea trip. Weather, closures, events and ten ranked tours.',
  heroCapsule:
    'October is the wettest month of Barcelona\'s year at 105mm, and simultaneously the best walking temperature of the year at 21.7C. The clocks go back on Sunday 25 October, cutting the useful evening by an hour overnight. It is also the last month the Costa Brava sea trip is bookable before winter.',

  verdict: {
    capsule:
      'Yes, if you accept that this is the wettest month on the calendar. It delivers 105mm, more than any other month, but at 21.7C average highs it is also the most comfortable temperature of the year for walking a city built for walking. The clocks going back on 25 October is the sharper practical change.',
    body: [
      'October is the month Barcelona is most pleasant to be in and least reliable to plan around. Twenty-one point seven degrees with a light sea breeze is close to perfect for the Gothic Quarter, the Eixample grid and the climb through Gràcia, and the summer crowds have gone. Against that, 105mm of rain is the highest monthly total of the year, ahead of September\'s 92mm, and it arrives on ten separate wet days.',
      'The interesting detail is that October is wetter than September by volume but drier by frequency: 105mm over ten days against 92mm over twelve. October storms are bigger. This is the tail of the Mediterranean autumn convective season, and a single October afternoon can deliver more water than a whole week of British November.',
      'The other structural change is light. Central European Summer Time ends on Sunday 25 October, so sunset moves back by an hour in a single night, from around half past six to around half past five. Everything you had planned for "after work light" in the last week of the month happens in the dark instead.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 21.7C and lows of 14.7C, with 105mm of rain over ten wet days, the wettest month of the Barcelona year. Daylight is 11 hours 11 minutes mid-month, and the clocks go back on Sunday 25 October. The sea is still 21 to 22C.',
    body: [
      'The sea is October\'s quiet advantage and the reason the month is not simply a wet version of April. April and October have almost the same air temperature, 17.8C against 21.7C, but the water is completely different: 14 to 15C in April against 21 to 22C in October. The Mediterranean spends the summer charging and releases the heat slowly, so October swimming is genuinely possible for anyone who does not need it to be tropical, and April swimming is not.',
      'Ten wet days out of thirty-one means roughly one day in three sees rain, and the volume tells you those are serious downpours rather than showers. The pattern is usually a clear morning, a build through the early afternoon and a heavy hour somewhere between four and seven. Front-loading outdoor plans into the morning is a more effective strategy in October than in any other month here.',
      'The clock change on 25 October is worth writing into the itinerary rather than treating as trivia. Before it, sunset is around 18:45 and Park Güell\'s last 19:30 slot still has usable light in it. After it, sunset is around 17:45 and that same slot is a night visit. If the mosaic terrace and the city view are the point, book before the 25th or book a morning.',
    ],
  },

  crowds: {
    capsule:
      'October is the first genuinely quiet month since spring and prices reflect it, apart from the long weekend around Hispanic Day on Monday 12 October. Timed entry still applies everywhere; Park Güell continues to sell out at weekends even in the low season.',
    body: [
      'Hispanic Day on Monday 12 October is a Spanish national holiday and, landing on a Monday, creates a three-day weekend that brings a wave of domestic visitors into Barcelona. Hotel rates for that weekend behave like a peak-season weekend and Park Güell slots tighten accordingly. The rest of the month is soft. If you are hunting value, avoid 10 to 12 October and take almost any other week.',
      'Do not be lulled into skipping the booking step because it is the low season. Park Güell\'s Monumental Zone runs on timed 30-minute slots year-round, with the first at 09:30 and the last at 19:30, entry refused outside your window and no re-entry. Weekend mornings still sell out. General admission is 18 euros, 13.50 euros for ages 7 to 12 and over-65s, free under 7.',
      'One October quirk on price: the tourist tax does not fall in the low season. It is a flat per-person, per-night charge set by the city, so it makes up a materially bigger share of a cheap October room than of an expensive August one. Two adults on a week in a mid-range place will add most of an extra night to the bill in tax alone. The full rate card is on our August guide.',
    ],
  },

  tours: {
    capsule:
      'The October ten is a wet-weather ranking with one deadline in it. Indoor experiences move to the top because this is the wettest month of the year, and the Costa Brava sea trip stays in the list because it is the last month it is bookable. Figures verified against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: 'barcelona-sagrada-familia-entry-ticket-with-audio-guide',
        label: 'Sagrada Família entry ticket with audio guide',
        bestFor: 'The wettest month of the year',
        why: 'First for October because 105mm of rain rewards an hour spent indoors more than anything else on the list. Note the timetable changes this month: October drops to Monday to Friday 09:00 to 19:00, Saturday to 18:00, Sunday 10:30 to 19:00, an hour earlier than September.',
      },
      {
        slug: 'barcelona-casa-batll-entry-with-self-audioguide-tour',
        label: 'Casa Batlló entry with self-guided audio tour',
        bestFor: 'Waiting out a downpour in a Gaudí interior',
        why: 'Ranked up for October. Casa Batlló keeps its 09:00 to 22:30 daily hours right through the winter while everything around it starts closing earlier, so it is the one Gaudí house that still works after the clocks go back on 25 October. Non-refundable on GetYourGuide.',
      },
      {
        slug: 'barcelona-aquarium-entry-ticket',
        label: 'Barcelona Aquarium entry ticket',
        bestFor: 'The rain plan you actually use',
        why: 'Ranked up from seventh in August. In a month with ten wet days and the year\'s heaviest downpours, a fully indoor attraction on Port Vell stops being a contingency and becomes a scheduled part of the trip. Strongest option here for families with a washed-out afternoon.',
      },
      {
        slug: 'costa-brava-tour-kayak-snorkel-and-cliff-jump-from-barcelona',
        label: 'Costa Brava kayak, snorkel and cliff jump day trip',
        bestFor: 'The last month it is bookable',
        why: 'The site\'s highest-rated tour at 4.9 out of 5, and October is the last month of its season. The sea is still 21 to 22C, warmer than the air on a cool October morning. From November it is genuinely unbookable and does not return until about April, so this is a now-or-spring decision.',
      },
      {
        slug: 'barcelona-park-guell-guided-tour-with-skip-the-line-entry',
        label: 'Park Güell guided tour with skip-the-line entry',
        bestFor: 'A short window between showers',
        why: 'The guided format matters more in October than in any other month, and the reason is length. At 55 to 75 minutes you are in and out inside a single clear spell, whereas an open-ended self-guided wander through the Monumental Zone is exactly the plan an October afternoon ruins.',
      },
      {
        slug: 'barcelona-flamenco-show-at-the-theater-and-quot-city-hall-an',
        label: 'Flamenco show at the City Hall theatre',
        bestFor: 'Evenings that end an hour earlier from the 25th',
        why: 'Ranked up as the light goes. Once the clocks go back, Barcelona\'s evenings start at half past five and there is a long indoor stretch to fill. An hour-long seated show rated 4.6 out of 5 from 11,934 reviews is the most reliable way to fill it.',
      },
      {
        slug: 'barcelona-city-tour-hop-on-hop-off-bus-tour',
        label: 'Barcelona hop-on hop-off bus tour',
        bestFor: 'The best open-deck temperature of the year',
        why: 'At 21.7C this is objectively the most comfortable month of the year to sit on an open top deck, which is exactly why it is ranked here rather than lower. The catch is that it is also the wettest, so check the forecast on the morning and take the first departure rather than the afternoon one.',
      },
      {
        slug: 'barcelona-montserrat-tour-with-cog-wheel-and-black-madonna',
        label: 'Montserrat tour with cog-wheel train and Black Madonna',
        bestFor: 'Before the clocks change on 25 October',
        why: 'Ranked with a deadline attached. A five to seven hour mountain day fits comfortably inside 11 hours 11 minutes of daylight in early October. After 25 October the same trip finishes in the dark, and the whole point of Montserrat is the view across the serrated rock.',
      },
      {
        slug: 'barcelona-fc-barcelona-museum-and-quot-bar-a-immersive-tour-',
        label: 'FC Barcelona Museum and Barça Immersive Tour',
        bestFor: 'A wet afternoon with a purpose',
        why: 'Entirely indoors, at a stadium that is genuinely newsworthy again: Spotify Camp Nou reopened on 22 November 2025 and capacity rose to 62,652 on 10 March 2026, with the third tier still closed and completion now expected in 2027. Listed as non-refundable.',
      },
      {
        slug: 'barcelona-sagrada-familia-skip-the-line-entry-ticket-and-tou',
        label: 'Sagrada Família skip-the-line entry ticket and tour',
        bestFor: 'Not standing outside in October rain',
        why: 'The queue on Carrer de Mallorca has no cover. In August that queue is a sun problem and in October it is a rain problem, and either way the skip-the-line element is doing real work. Rated 4.8 out of 5, the highest of any Sagrada Família option on the site.',
      },
    ],
    note:
      'This is the last page in the guide where the Costa Brava kayak and snorkel trip appears until April. Live GetYourGuide availability runs out after October and does not resume until roughly April or May, so it is listed in the closures section on the November, December, January, February and March pages instead of being quietly ranked below something else.',
  },

  events: {
    capsule:
      'October is Barcelona\'s quietest festival month in this guide. The two dates that matter are structural rather than celebratory: Hispanic Day on Monday 12 October, a national public holiday, and the end of summer time on Sunday 25 October.',
    rows: [
      { event: 'Hispanic Day (Fiesta Nacional)', dates: 'Monday 12 October', where: 'Nationwide public holiday', free: 'Public holiday' },
      { event: 'Clocks go back one hour', dates: 'Sunday 25 October, 03:00 to 02:00', where: 'Spain and the rest of the EU', free: 'Free' },
      { event: 'Sagrada Família moves to autumn hours', dates: 'All October', where: 'Carrer de Mallorca 401', free: 'Ticketed' },
      { event: 'La Pedrera summer season, final days', dates: 'To 1 November', where: 'Passeig de Gràcia 92', free: 'Ticketed' },
    ],
    body: [
      'Hispanic Day on 12 October is a national holiday marking Columbus\'s landfall in 1492, and its reception in Barcelona is more complicated than in Madrid. Expect a quiet civic day rather than a party, with banks and offices closed and a domestic long weekend filling hotels. Attractions and transport run normally.',
      'The clock change on 25 October is the practical event of the month. Spain moves from Central European Summer Time to Central European Time at 03:00, and sunset drops from roughly 18:45 to roughly 17:45. The knock-on effects are specific: the Park Güell 19:30 last slot becomes a night visit, the Montserrat round trip stops finishing in daylight, and the Sagrada Família\'s 19:00 October closing time now sits well after dark.',
      'There is no major public festival in Barcelona in October in this guide, which is genuinely unusual for a Mediterranean city and is one honest reason to prefer September or December if festival atmosphere is what you are after. What October gives you instead is a nearly empty Gothic Quarter at a comfortable temperature.',
    ],
  },

  closures: {
    capsule:
      'Nothing closes outright in October, but two timetables shrink. The Sagrada Família drops to its March and October hours, closing an hour earlier at 19:00 on weekdays, and La Pedrera\'s summer season runs out on 1 November. The Casa Batlló night visit remains unavailable.',
    rows: [
      { site: 'Sagrada Família', closed: 'Nothing, but shorter hours', note: 'October hours: Monday to Friday 09:00 to 19:00, Saturday 09:00 to 18:00, Sunday 10:30 to 19:00. An hour earlier on weekdays than September.' },
      { site: 'La Pedrera (Casa Milà)', closed: 'Nothing', note: 'Last month of the summer season, which ends 1 November. Daytime 09:00 to 20:30, night visit 20:40 to 22:20. The winter timetable starts 2 November.' },
      { site: 'Casa Batlló night visit', closed: 'All month', note: 'Season is 1 April to 31 August only. Casa Batlló itself stays open daily 09:00 to 22:30.' },
      { site: 'Costa Brava sea trips', closed: 'From November', note: 'October is the last bookable month. GetYourGuide availability for the kayak and snorkel day trip resumes around April.' },
      { site: 'Banks and offices', closed: 'Monday 12 October', note: 'Hispanic Day, a Spanish national public holiday. Attractions and transport run normally.' },
      { site: 'Evening daylight', closed: 'From Sunday 25 October', note: 'Clocks go back. Sunset moves from about 18:45 to about 17:45 overnight.' },
    ],
    body: [
      'The Sagrada Família hour change is small on paper and significant in practice. Through the summer you could hold the basilica back for a 19:00 visit; from October the doors shut at 19:00 on weekdays and 18:00 on Saturdays, so it has to move into the working part of the day. Standard prices are 26 euros for the basilica, 30 euros with a guide, 36 euros with tower access and 40 euros for guided plus towers, free for under-11s.',
      'On the towers, one point is regularly got wrong. The Tower of Jesus Christ was completed on 20 February 2026 at 172.5m, which makes the Sagrada Família the tallest church in the world, and it is not open to visitors. What you can climb is either the Nativity tower or the Passion tower, one or the other, not both, and that choice is made when you book.',
      'La Pedrera is worth timing deliberately if your trip crosses into November. The summer season runs to 1 November with the night visit at 20:40 to 22:20; from 2 November the daytime visit ends at 18:30 and the night visit moves to 19:00 to 23:00. The night show itself, Origins, runs all year, so this is a change of hours rather than a closure.',
    ],
  },

  packing: {
    capsule:
      'This is the one month in Barcelona where a genuine waterproof earns its place. October delivers 105mm, the year\'s highest, in heavy bursts, and at 21.7C you want something breathable rather than a winter coat. Add a layer for the evenings after the 25th.',
    body: [
      'The October packing problem is that the day and the evening are different seasons after the clock change. A 21.7C afternoon wants short sleeves; a 14.7C evening at half past six in the dark wants a jumper. Layers rather than one heavy item is the answer, and the same principle covers the rain: a light shell over a t-shirt beats a coat.',
      'Footwear matters more than usual this month. Barcelona\'s Gothic Quarter is paved in worn stone that becomes genuinely slippery in a heavy downpour, and those downpours are what October specialises in. Soles with some grip are a sensible precaution on the narrow streets around the cathedral.',
      'The sea is still 21 to 22C, so swimwear is not a wasted item if you are the sort of person who will get in. It is warmer than the water off Brighton in August.',
    ],
    list: [
      'A light breathable waterproof shell: 105mm is the year\'s wettest month',
      'Shoes with grip for wet stone in the Gothic Quarter',
      'A jumper or mid-layer for evenings, especially after the 25th',
      'Swimwear if you swim: the sea is still 21 to 22C',
      'A small torch or phone light for the Park Güell paths after the clock change',
      'A cover-up for the Sagrada Família dress code',
    ],
  },

  faqs: [
    {
      question: 'Is October the wettest month in Barcelona?',
      answer: 'Yes, by volume. October delivers about 105mm, more than any other month, ahead of September at 92mm and November at 58mm. It falls across ten wet days, fewer than September\'s twelve, which means October downpours are heavier. The typical pattern is a clear morning building to a heavy hour in the late afternoon.',
    },
    {
      question: 'When do the clocks change in Barcelona in 2026?',
      answer: 'On Sunday 25 October 2026, when Spain moves from Central European Summer Time to Central European Time and the clocks go back an hour at 03:00. Sunset shifts from around 18:45 to around 17:45 overnight. That turns Park Güell\'s 19:30 last entry slot into a night visit and means a Montserrat day trip no longer finishes in daylight.',
    },
    {
      question: 'Can you still swim in Barcelona in October?',
      answer: 'Yes, more comfortably than most people expect. The sea holds 21 to 22C through October because the Mediterranean releases its summer heat slowly, which is warmer than the English Channel manages at any point in the year. Air temperature averages 21.7C. April, with almost the same air temperature, has water at only 14 to 15C.',
    },
    {
      question: 'Is anything closed in Barcelona in October?',
      answer: 'Nothing closes outright, but two things shrink. The Sagrada Família moves to its October timetable of 09:00 to 19:00 Monday to Friday, an hour earlier than September, and La Pedrera\'s summer season ends on 1 November, after which the daytime visit finishes at 18:30. The Casa Batlló rooftop night visit remains out of season until April.',
    },
    {
      question: 'Is October a good month for the Costa Brava boat trips?',
      answer: 'It is the last one. The Costa Brava kayak, snorkel and cliff jump day trip is bookable through October with the sea at 21 to 22C, and then GetYourGuide availability runs out until roughly April. If a day on the water north of Barcelona is on your list and you are visiting between November and March, it is not going to happen.',
    },
    {
      question: 'How busy is Barcelona in October?',
      answer: 'Quiet, with one exception. Hispanic Day falls on Monday 12 October, creating a three-day domestic weekend that fills hotels and tightens Park Güell slots from the 10th to the 12th. Outside that window October is the softest month since the spring on both crowds and room rates, while timed entry still needs booking at weekends.',
    },
  ],
};

export const november: MonthContent = {
  slug: 'barcelona-in-november',
  month: 'November',
  monthKey: 'november',
  yearOffset: 0,
  prevMonth: 'October',
  prevPath: '/barcelona-in-october',
  nextMonth: 'December',
  nextPath: '/barcelona-in-december',
  metaDescription:
    'Barcelona in November: daylight drops below ten hours, La Pedrera switches to its winter timetable on 2 November and the Christmas lights are expected from 26 November. Weather, closures, events and ten ranked tours.',
  heroCapsule:
    'November is the month Barcelona goes indoors. Daylight falls to 9 hours 54 minutes, the first time it drops below ten hours, and rain halves from October\'s 105mm to 58mm. La Pedrera flips to its winter timetable on 2 November, moving its night visit to a much later 19:00 to 23:00 slot.',

  verdict: {
    capsule:
      'Yes, if you are here for architecture and food rather than for the coast. Rain drops to 58mm, nearly half of October, and the city is at its emptiest of the year. The constraint is light: 9 hours 54 minutes of daylight, with the sun gone by half past five.',
    body: [
      'November is the most underrated month in this guide and the one where the shape of a good trip changes most. The coastal half of Barcelona effectively shuts down: the sea has fallen to 17 to 19C, the Costa Brava sea trips are no longer bookable at all, and the beach becomes a place to walk rather than a place to be. What is left is a dense, warm, indoor city of Gaudí interiors, Modernista buildings, markets and long lunches, and it is very good at that.',
      'The weather is better than its reputation. Fifty-eight millimetres over eight wet days is roughly half of October\'s total, and average highs of 17.4C are the same as an English June. What has gone is the evening: sunset around 17:30 means the sightseeing day ends about the time you would otherwise be starting the second half of it.',
      'The compensation, and it is a real one, is that this is the cheapest and quietest Barcelona gets before the Christmas market season starts. Park Güell slots are available on the day. The Sagrada Família is calm. Restaurants that need booking three weeks ahead in May will take you tomorrow.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 17.4C and lows of 9.5C, with 58mm of rain across eight wet days, down from 105mm in October. Daylight is 9 hours 54 minutes mid-month, the first month below ten hours. The sea has cooled to 17 to 19C.',
    body: [
      'The 17.4C average high is the number that surprises British visitors, because it is warmer than London manages in June. Barcelona in November is genuinely mild in the middle of the day, and a sunny 17C in the Eixample with no wind is shirtsleeve weather. The catch is the 9.5C average low, which is an eight-degree daily swing and much sharper than the two-degree swing of an August night.',
      'Rain roughly halves from October. Fifty-eight millimetres over eight wet days is a moderate month by any northern European standard, and it no longer arrives as the violent convective storms of September and October. November rain in Barcelona is more likely to be a grey drizzly stretch than a downpour.',
      'The daylight collapse is the number that should drive planning. Nine hours fifty-four minutes on the 15th means sunrise around half past seven and sunset around half past five. Park Güell will still sell you a 19:30 slot; you will be looking at the mosaic terrace by streetlight. Anything where the view is the point belongs in the morning this month.',
    ],
  },

  crowds: {
    capsule:
      'November is the emptiest month of the year in Barcelona until the Christmas lights are switched on, expected from 26 November. Hotel rates sit at their annual floor, and the tourist tax, being a flat per-night charge, therefore takes its largest relative bite.',
    body: [
      'This is the month where you can genuinely improvise. Park Güell timed slots are available same-day outside weekends, the Sagrada Família has capacity, and the queues that define Barcelona from March to October simply are not there. If your idea of a good trip involves deciding at breakfast what to do that day, November is the month for it.',
      'That changes in the last week. Barcelona\'s Christmas lights are expected to be switched on from 26 November through to 6 January, and the switch-on marks the start of the December pricing season. We say "expected" deliberately: we found a single source for those dates and could not corroborate them against the city\'s own published programme, so treat the last week of November as a transition rather than a certainty.',
      'The one cost that refuses to fall with the season is Barcelona\'s per-night tourist tax, which is a flat charge per person regardless of what you paid for the room. Against November rates it can reach a tenth of the total bill, a far larger share than the same charge represents in August. Budget for it separately rather than assuming a cheap month means a cheap total. Full rates are on our August guide.',
    ],
  },

  tours: {
    capsule:
      'The November ten is an indoor and daylight-constrained ranking. Anything whose value depends on a view or on the sea drops; anything with a roof and long opening hours rises. Prices, ratings and review counts were checked against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: 'barcelona-sagrada-familia-entry-ticket-with-audio-guide',
        label: 'Sagrada Família entry ticket with audio guide',
        bestFor: 'A short day that needs one great hour in it',
        why: 'First for November, and with a timing warning attached. The winter timetable starts this month: Monday to Saturday 09:00 to 18:00 and Sunday 10:30 to 18:00, two hours earlier than August. The stained glass needs daylight to work, so aim for late morning rather than the last slot.',
      },
      {
        slug: 'barcelona-casa-batll-entry-with-self-audioguide-tour',
        label: 'Casa Batlló entry with self-guided audio tour',
        bestFor: 'The one Gaudí house that outlasts the daylight',
        why: 'Ranked second because of an opening time nobody else can match in November. Casa Batlló runs 09:00 to 22:30 every day of the year, while the Sagrada Família now shuts at 18:00 and La Pedrera at 18:30. On a day that goes dark at half past five, that is the difference between one attraction and two. Non-refundable on GetYourGuide.',
      },
      {
        slug: 'barcelona-flamenco-show-at-the-theater-and-quot-city-hall-an',
        label: 'Flamenco show at the City Hall theatre',
        bestFor: 'The five hours of darkness before dinner',
        why: 'Ranked up hard for November. With sunset at 17:30 and Spanish dinner at 21:00, there is a long empty evening to fill and very little daylight to fill it with. An hour-long seated show is the cleanest answer, and at 11,934 reviews it is a known quantity.',
      },
      {
        slug: 'barcelona-fc-barcelona-museum-and-quot-bar-a-immersive-tour-',
        label: 'FC Barcelona Museum and Barça Immersive Tour',
        bestFor: 'A full indoor afternoon',
        why: 'A stadium museum is a weather-proof half day, and November is when you need one. Spotify Camp Nou is operating again after reopening on 22 November 2025, with capacity at 62,652 since 10 March 2026, the third tier still closed and full completion expected in 2027. Listed as non-refundable.',
      },
      {
        slug: 'barcelona-aquarium-entry-ticket',
        label: 'Barcelona Aquarium entry ticket',
        bestFor: 'Families with a dark, wet afternoon',
        why: 'With the sea down to 17 to 19C and the Costa Brava trips gone until spring, the aquarium is the only marine experience left on the list. It is entirely indoors on Port Vell, which matters on eight wet days and a great many dark ones.',
      },
      {
        slug: 'barcelona-park-guell-guided-tour-with-skip-the-line-entry',
        label: 'Park Güell guided tour with skip-the-line entry',
        bestFor: 'A morning slot, and only a morning slot',
        why: 'Drops from third in September to sixth here for one reason: light. Park Güell is about colour, mosaic and a view across the city, and none of that survives dusk. Take the 09:30 to 12:00 slots. The guided version is worth the few pounds over a plain ticket when your usable daylight is under ten hours.',
      },
      {
        slug: 'barcelona-sagrada-familia-skip-the-line-entry-ticket-and-tou',
        label: 'Sagrada Família skip-the-line entry ticket and tour',
        bestFor: 'Getting the most out of one short visit',
        why: 'Rated 4.8 out of 5, the best of the Sagrada Família options. When the basilica is only open nine hours a day, a guide compresses the value: you learn what the Nativity and Passion facades are doing in half the time it takes to work it out from an audio guide.',
      },
      {
        slug: 'barcelona-montserrat-tour-with-cog-wheel-and-black-madonna',
        label: 'Montserrat tour with cog-wheel train and Black Madonna',
        bestFor: 'A first-departure mountain day',
        why: 'Still worth doing, but only on the earliest departure. A five to seven hour trip inside 9 hours 54 minutes of daylight leaves no margin, and the serrated ridge that gives Montserrat its name is invisible in the dark. Book the first train out, not the mid-morning one.',
      },
      {
        slug: 'barcelona-city-tour-hop-on-hop-off-bus-tour',
        label: 'Barcelona hop-on hop-off bus tour',
        bestFor: 'Seeing the Christmas lights go up',
        why: 'Ranked here as a late-November option. The city\'s Christmas lights are expected on from 26 November, and a bus route is the fastest way to cover several lit avenues in one go. Earlier in the month, with 17.4C and a covered lower deck available, it is simply a fast orientation.',
      },
      {
        slug: 'barcelona-park-g-ell-and-gaud-house-museum-entry-ticket',
        label: 'Park Güell and Gaudí House Museum entry ticket',
        bestFor: 'Putting a roof inside the park visit',
        why: 'Ranked in specifically for the winter half of the year. The Gaudí House Museum is the one indoor room inside Park Güell, which turns a fully exposed hillside visit into something that still works if the weather turns while you are up there. Listed as non-refundable.',
      },
    ],
    note:
      'The Costa Brava kayak, snorkel and cliff jump trip drops out of the ranking from this month. It is the highest-rated tour on the site at 4.9 out of 5, and we are not hiding it below something weaker: live GetYourGuide availability simply stops after October and does not resume until around April. It is listed in the closures table below instead. The Casa Batlló rooftop night visit remains out of season until 1 April.',
  },

  events: {
    capsule:
      'November is a thin month for events, which is part of its appeal. All Saints falls on Sunday 1 November, so it costs nobody a working day, and the Christmas lights are expected to be switched on from 26 November, running to 6 January.',
    rows: [
      { event: 'All Saints (Tots Sants)', dates: 'Sunday 1 November', where: 'Nationwide public holiday', free: 'Public holiday, falls on a Sunday' },
      { event: 'La Pedrera winter season begins', dates: 'Monday 2 November', where: 'Passeig de Gràcia 92', free: 'Ticketed' },
      { event: 'Christmas lights switch-on (expected)', dates: 'Expected 26 November to 6 January', where: 'Main avenues city-wide', free: 'Free' },
      { event: 'La Liga and European fixtures', dates: 'Throughout', where: 'Spotify Camp Nou', free: 'Ticketed' },
    ],
    body: [
      'All Saints on Sunday 1 November is the quietest possible version of a public holiday: it falls on a day most people already have off, so there is no bridge and no disruption. Traditionally Catalans eat panellets, small marzipan and pine-nut sweets, and roast chestnuts appear on street corners from about this point. Bakeries make a serious effort with them and it is worth seeking one out.',
      'The Christmas lights are the event that changes the character of the month, and we have flagged the dates as expected rather than confirmed. A switch-on from 26 November running to 6 January is what we found, from a single source we could not corroborate against the city\'s own programme. Treat it as likely rather than certain, and check the council listings if you are planning around it.',
      'That is genuinely the extent of November\'s calendar, and it is a fair reason to choose December instead if you want atmosphere. What November offers is the opposite trade: the Sagrada Família without a crowd in it.',
    ],
  },

  closures: {
    capsule:
      'November is the month Barcelona\'s timetables contract. La Pedrera switches to its winter season on 2 November, the Sagrada Família drops to 18:00 closing, and the Costa Brava sea trips stop being bookable at all until the spring.',
    rows: [
      { site: 'Costa Brava sea trips', closed: 'All month, until about April', note: 'The kayak, snorkel and cliff jump day trip is not bookable on GetYourGuide from November. The sea is 17 to 19C.' },
      { site: 'Casa Batlló night visit', closed: 'All month, until 1 April', note: 'Season is 1 April to 31 August only. The house itself stays open daily 09:00 to 22:30.' },
      { site: 'La Pedrera (Casa Milà)', closed: 'Nothing, but new hours from 2 November', note: 'Winter season 2 November to 25 February: daytime 09:00 to 18:30, night visit 19:00 to 23:00. The Origins night show runs all year, just later.' },
      { site: 'Sagrada Família', closed: 'Nothing, but shorter hours', note: 'November to February hours: Monday to Saturday 09:00 to 18:00, Sunday 10:30 to 18:00. Two hours earlier than August.' },
      { site: 'Park Güell', closed: 'Nothing', note: 'Timed slots still run 09:30 to 19:30, but sunset is around 17:30, so the last three slots are effectively after dark.' },
      { site: 'Banks and offices', closed: 'Sunday 1 November', note: 'All Saints. Falling on a Sunday, it causes no midweek disruption.' },
    ],
    body: [
      'The La Pedrera change on 2 November is more interesting than a simple hours cut, and it is the kind of thing most guides miss. The daytime visit does shorten, from 20:30 to 18:30. But the night visit moves the other way, from a summer 20:40 to 22:20 window to a winter 19:00 to 23:00 one. The Origins show itself runs all year at 39.50 euros for an adult; what changes is when. In November the night visit starts an hour and a half earlier in clock terms and a good deal earlier relative to sunset, which makes it much easier to combine with dinner.',
      'The Sagrada Família contraction to an 18:00 close is the more restrictive change, because it takes the basilica out of the evening entirely for four months. Prices are unchanged: 26 euros for the basilica, 30 euros with a guide, 36 euros with tower access, 40 euros guided plus towers, and free for under-11s.',
      'The Costa Brava entry in the table is there deliberately. We would rather tell you that Barcelona\'s best-rated day trip is unavailable in November than quietly rank it eleventh and let you find out at the checkout. It comes back around April, and the sea does not get properly warm again until June.',
    ],
  },

  packing: {
    capsule:
      'Pack for an eight-degree daily swing rather than for cold. A 17.4C afternoon and a 9.5C evening in the same day is November\'s defining feature, so layers beat any single warm item. Add something for the dark: half the waking day now happens after sunset.',
    body: [
      'The mistake British visitors make in November is packing a winter coat, and the mistake southern European visitors make is packing for a Mediterranean autumn. Neither is right. The middle of a sunny Barcelona November day is genuinely warm, and the evenings genuinely are not. A jumper plus a light jacket covers both ends; a heavy coat covers only one.',
      'Rain has halved from October and changed character, so a full waterproof is overkill and a folding umbrella is usually enough. Eight wet days across the month means roughly one in four.',
      'It is also worth thinking about how you will spend the evening, because it starts at half past five. Barcelona\'s indoor evening is restaurants, concerts and Casa Batlló, and one smarter outfit is more useful in November than an extra pair of walking shorts.',
    ],
    list: [
      'Layers for an eight-degree daily swing: 17.4C afternoon, 9.5C evening',
      'A folding umbrella rather than a waterproof; rain has halved from October',
      'One smarter outfit for the long indoor evening',
      'A scarf, which doubles as the Sagrada Família dress-code cover',
      'Comfortable shoes for a city you will now walk rather than swim in',
      'Leave the swimwear at home: the sea is 17 to 19C and falling',
    ],
  },

  faqs: [
    {
      question: 'Is November a good time to visit Barcelona?',
      answer: 'It is, for a city break rather than a beach trip. Rain halves from October\'s 105mm to 58mm, average highs of 17.4C are warmer than an English June, and it is the emptiest and cheapest month of the year until the Christmas lights arrive. The constraint is daylight: 9 hours 54 minutes, with sunset around half past five.',
    },
    {
      question: 'What closes in Barcelona in November?',
      answer: 'Nothing closes outright, but timetables contract sharply. La Pedrera switches to its winter season on 2 November, with the daytime visit ending at 18:30 and the night visit moving to 19:00 to 23:00. The Sagrada Família drops to 09:00 to 18:00. The Costa Brava sea trips stop being bookable until about April, and the Casa Batlló rooftop night visit stays out of season until 1 April.',
    },
    {
      question: 'When do Barcelona\'s Christmas lights come on?',
      answer: 'They are expected to be switched on from 26 November 2026 and to run through to 6 January 2027. We label that as expected rather than confirmed because we found it from a single source and could not corroborate it against the city council\'s own published programme. Check the council listings if you are planning a trip specifically around the switch-on.',
    },
    {
      question: 'Can you swim in Barcelona in November?',
      answer: 'Not comfortably. The sea has fallen to 17 to 19C from October\'s 21 to 22C, and it keeps falling through the winter to a floor of about 13C in February. The Costa Brava kayak and snorkel day trip, which is the highest-rated tour on this site, stops being bookable from November for exactly that reason and does not return until around April.',
    },
    {
      question: 'How dark does it get in Barcelona in November?',
      answer: 'Daylight is 9 hours 54 minutes on the 15th, the first month of the year below ten hours, with sunrise around 07:30 and sunset around 17:30. That has practical consequences: Park Güell will still sell you a 19:30 slot but you will see the mosaic terrace by streetlight, and a Montserrat day trip needs the first departure to finish in daylight.',
    },
    {
      question: 'Is Barcelona cheap in November?',
      answer: 'It is the cheapest month of the year until the Christmas season starts in the last week. Hotel rates sit at their annual floor and timed attraction slots are available on the day outside weekends. Note that the tourist tax is a flat per-person per-night charge and does not fall with the season, so it takes a larger share of a cheap November room than of an expensive August one.',
    },
  ],
};

export const december: MonthContent = {
  slug: 'barcelona-in-december',
  month: 'December',
  monthKey: 'december',
  yearOffset: 0,
  prevMonth: 'November',
  prevPath: '/barcelona-in-november',
  nextMonth: 'January',
  nextPath: '/barcelona-in-january',
  metaDescription:
    'Barcelona in December: the driest month of the year at 25mm across four wet days, with the shortest daylight at 9 hours 13 minutes. La Pedrera closes on 25 December and the Sagrada Família runs 09:00 to 14:00 on the 25th and 26th.',
  heroCapsule:
    'December is the driest month in Barcelona, not the wettest: 25mm across four wet days, against October\'s 105mm across ten. It is also the darkest, at 9 hours 13 minutes of daylight. That combination, reliable dry weather and very short days, is unlike any other month in this guide.',

  verdict: {
    capsule:
      'Yes, and the reason is counterintuitive. December is the driest month of Barcelona\'s year at 25mm over four wet days, less than a quarter of October\'s rainfall. What you give up is daylight: 9 hours 13 minutes, the shortest of the year, and a sunset just after half past five.',
    body: [
      'Almost everyone assumes a Mediterranean winter means rain. In Barcelona it means the opposite. The wet season here is autumn, not winter, and by December the convective storms that define September and October have gone. Twenty-five millimetres across four wet days is drier than August, drier than May and drier than March. If you want to walk the Gothic Quarter without getting wet, statistically this is the best month of the ten to do it.',
      'The price is light, and it is steep. Nine hours thirteen minutes is the annual minimum and it means sunrise a little after eight and sunset a little after half past five. Anything outdoors and view-dependent has to happen between about ten and four, which is a six-hour working window. Park Güell, Montserrat and the Tibidabo side of the city all belong in the morning this month.',
      'Against that, December is the one winter month with genuine atmosphere. The Christmas lights run across the main avenues, the Fira de Santa Llúcia sets up its wooden stalls in front of the cathedral, and the city has something to do after dark for the first time since September. It is the best-value festive city break in this guide, precisely because Barcelona is not a stereotypical Christmas market destination.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 15.0C and lows of 6.2C, with just 25mm of rain across four wet days, the driest month of the Barcelona year. Daylight bottoms out at 9 hours 13 minutes. The sea has cooled to 15 to 16C, still eight degrees above the North Sea in December.',
    body: [
      'Fifteen degrees at midday in a city with almost no wind and a low winter sun is a great deal more pleasant than the number suggests. Barcelona is protected from the north by the Collserola ridge and warmed from the east by a sea that is still at 15 to 16C, so it lacks the raw edge of an inland Spanish December. Madrid, two and a half hours away by train, averages nearer 10C.',
      'The 6.2C average low is the coldest of the ten months here and the swing from a 15.0C afternoon is nearly nine degrees. Frost is very rare in the city itself. Montserrat, at altitude an hour inland, is an entirely different proposition and can be several degrees colder with wind.',
      'The four wet days are worth dwelling on because they change what is worth booking. In October you plan around rain; in December you can reasonably plan an outdoor day and expect it to happen. That is why Park Güell ranks higher on this page than on the November one despite having less daylight to work with: the odds of a clear morning on the mosaic terrace are the best of the winter.',
    ],
  },

  crowds: {
    capsule:
      'December splits in two. The first three weeks are quiet and cheap; from about the 20th, rates climb through Christmas and New Year. Two public holidays fall conveniently, with 6 December on a Sunday and 8 December on a Tuesday.',
    body: [
      'The holiday pattern this year is unusually kind. Constitution Day on 6 December falls on a Sunday, so it costs nobody a working day, and the Immaculate Conception on Tuesday 8 December creates a single-day bridge rather than the full four-day puente that a Thursday date would produce. The practical effect is that the early-December domestic travel surge is smaller than usual.',
      'Christmas Day on Friday 25 December and Sant Esteve on Saturday 26 December then fall as a straight weekend. Sant Esteve, Saint Stephen\'s Day, is a public holiday in Catalonia specifically and not across most of Spain, and it is the day of the family lunch with canelons. Restaurants that open on Christmas Day may well close on the 26th, and vice versa, so book rather than wander.',
      'One quiet advantage of travelling now: Barcelona\'s tourist tax rises again on 1 April 2027, so a Christmas or New Year visit is charged under the older, cheaper schedule. The full rate card is set out on our August guide. A four-night stay over the holidays will typically add somewhere between 24 and 48 euros a head depending on the star rating, which is a rounding error next to a peak-week room rate but not nothing.',
    ],
  },

  tours: {
    capsule:
      'The December ten is ranked for a dry, dark month. Anything outdoors moves into the morning and is ranked on the odds of clear weather rather than on temperature, and evening experiences carry more weight than in any other month. Figures verified against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: 'barcelona-sagrada-familia-entry-ticket-with-audio-guide',
        label: 'Sagrada Família entry ticket with audio guide',
        bestFor: 'The best light of a short day',
        why: 'First again, with the month\'s single most important timing note. The basilica runs 09:00 to 18:00 Monday to Saturday in December, but on 25 and 26 December it opens 09:00 to 14:00 only. Those two half-days are the most commonly missed fact about visiting Barcelona at Christmas.',
      },
      {
        slug: 'barcelona-park-g-ell-admission-ticket',
        label: 'Park Güell admission ticket',
        bestFor: 'The driest month of the year',
        why: 'Ranked up sharply, and the reason is rainfall rather than temperature. Four wet days in December against ten in October gives the best odds of a clear morning on the mosaic terrace of any month in the winter half. Take an early slot: general admission is 18 euros, and sunset is just after 17:30.',
      },
      {
        slug: 'barcelona-casa-batll-entry-with-self-audioguide-tour',
        label: 'Casa Batlló entry with self-guided audio tour',
        bestFor: 'The long dark evening',
        why: 'Casa Batlló\'s 09:00 to 22:30 daily opening is at its most valuable in the darkest month of the year, when the Sagrada Família shuts at 18:00 and La Pedrera at 18:30. It is the only headline Gaudí interior you can visit at nine in the evening. Non-refundable on GetYourGuide.',
      },
      {
        slug: 'barcelona-city-tour-hop-on-hop-off-bus-tour',
        label: 'Barcelona hop-on hop-off bus tour',
        bestFor: 'The Christmas lights across several avenues',
        why: 'Ranked up for December specifically. The city\'s Christmas lights are expected to run to 6 January across the main avenues, and covering Passeig de Gràcia, the Rambla de Catalunya and the Diagonal on foot in nine hours of daylight is not realistic. With only four wet days, the open deck is a fair bet this month.',
      },
      {
        slug: 'barcelona-flamenco-show-at-the-theater-and-quot-city-hall-an',
        label: 'Flamenco show at the City Hall theatre',
        bestFor: 'Filling the darkest evenings of the year',
        why: 'December has the longest gap between sunset and dinner of any month here, roughly half past five to nine. A one-hour seated show rated 4.6 out of 5 from 11,934 reviews is the most dependable way to use it, and it runs on days when half the city is on holiday.',
      },
      {
        slug: 'barcelona-fc-barcelona-museum-and-quot-bar-a-immersive-tour-',
        label: 'FC Barcelona Museum and Barça Immersive Tour',
        bestFor: 'The busiest stretch of the football calendar',
        why: 'The Spanish league plays a dense December programme before pausing for a short winter break, so the ground has more going on this month than at almost any other point in this guide. The museum and immersive tour are entirely under cover, which matters when your usable daylight is six hours. Booked tickets here cannot be refunded.',
      },
      {
        slug: 'barcelona-aquarium-entry-ticket',
        label: 'Barcelona Aquarium entry ticket',
        bestFor: 'A family half-day over the school holidays',
        why: 'Indoors, on Port Vell, and open through the Christmas period when a lot of the city\'s smaller attractions are running reduced hours. With the sea at 15 to 16C and no sea trips bookable, this is the only marine option on the December list.',
      },
      {
        slug: 'barcelona-sagrada-familia-skip-the-line-entry-ticket-and-tou',
        label: 'Sagrada Família skip-the-line entry ticket and tour',
        bestFor: 'A guide when you only have one shot at it',
        why: 'Rated 4.8 out of 5, the highest of the site\'s Sagrada Família options. With the basilica open only nine hours a day and half-days on the 25th and 26th, a guided visit gets more out of a single entry than working it out yourself with an audio guide.',
      },
      {
        slug: 'barcelona-montserrat-tour-with-cog-wheel-and-black-madonna',
        label: 'Montserrat tour with cog-wheel train and Black Madonna',
        bestFor: 'The escolania choir season',
        why: 'A five to seven hour trip inside 9 hours 13 minutes of daylight demands the first departure, and the mountain is several degrees colder than the city with real wind. What December adds is the boys\' choir and the abbey at its most atmospheric. Bring proper layers, not a city jacket.',
      },
      {
        slug: 'barcelona-park-g-ell-and-gaud-house-museum-entry-ticket',
        label: 'Park Güell and Gaudí House Museum entry ticket',
        bestFor: 'Adding an indoor room to a cold hillside',
        why: 'The Gaudí House Museum is the only heated interior inside Park Güell, which changes the calculation on a 6.2C morning on an exposed slope. If you are taking the earliest slot to catch the light, this is the version to book. Listed as non-refundable.',
      },
    ],
    note:
      'The Costa Brava kayak and snorkel trip and the Casa Batlló rooftop night visit are both out of season and are listed in the closures table rather than ranked. The catamaran cruise drops out of the December ranking on our judgement rather than on availability: an hour on an open deck with the sea at 15 to 16C and sunset before half past six is not what that product is for. Everything bookable this month is on our full tour list.',
  },

  events: {
    capsule:
      'December is Barcelona\'s best month for atmosphere. The Fira de Santa Llúcia sets up its wooden stalls in front of the cathedral, the Christmas lights are expected to run to 6 January, and Sant Esteve on Saturday 26 December is a public holiday in Catalonia that most of Spain does not observe.',
    rows: [
      { event: 'Constitution Day', dates: 'Sunday 6 December', where: 'Nationwide public holiday', free: 'Public holiday, falls on a Sunday' },
      { event: 'Immaculate Conception', dates: 'Tuesday 8 December', where: 'Nationwide public holiday', free: 'Public holiday' },
      { event: 'Fira de Santa Llúcia', dates: 'December, 10:00 to 21:00, 2026 dates pending', where: 'Avinguda de la Catedral and Plaça Nova', free: 'Free to browse' },
      { event: 'Christmas Day', dates: 'Friday 25 December', where: 'Nationwide public holiday', free: 'Public holiday' },
      { event: 'Sant Esteve (Saint Stephen\'s Day)', dates: 'Saturday 26 December', where: 'Catalonia only', free: 'Public holiday, Catalonia' },
      { event: 'Christmas lights (expected)', dates: 'Expected to 6 January', where: 'Main avenues city-wide', free: 'Free' },
    ],
    body: [
      'The Fira de Santa Llúcia is Barcelona\'s oldest Christmas market and it sits directly in front of the cathedral on Avinguda de la Catedral and Plaça Nova, trading 10:00 to 21:00. Historically it has finished on 23 December, but Barcelona had not published the official 2026 dates when this page was written, so we are not going to state them as fact. What it sells is worth the visit on its own: nativity figures, mistletoe, and the caganer, a squatting figure traditionally hidden at the back of the crib, produced each year as caricatures of politicians and footballers.',
      'The other Catalan Christmas tradition that catches visitors out is the tió de Nadal, a small log with a painted face and a blanket that children feed through December and then beat with sticks on Christmas Eve until it produces sweets. You will see them for sale everywhere from the start of the month. It is not a tourist invention.',
      'Sant Esteve on 26 December is a public holiday in Catalonia and not in most of the rest of Spain, which is exactly the sort of regional difference that ruins a plan. It is the day of the big family lunch, traditionally canelons made from Christmas Day leftovers. A great many restaurants close on either the 25th or the 26th, and which one varies by restaurant, so book both meals in advance rather than assuming.',
      'We could find no published 2026 dates for a Christmas market at the Sagrada Família anywhere, despite several sites referring to one, so we are not listing it.',
    ],
  },

  closures: {
    capsule:
      'December carries the most closures of the ten months. La Pedrera closes completely on 25 December and switches to a Christmas timetable from the 26th, while the Sagrada Família runs 09:00 to 14:00 only on both 25 and 26 December.',
    rows: [
      { site: 'La Pedrera (Casa Milà)', closed: 'Friday 25 December, all day', note: 'A full closure. From 26 December to 3 January it runs a Christmas timetable of 09:00 to 20:30, with the night visit at 21:00 to 23:00.' },
      { site: 'Sagrada Família', closed: 'Half-days on 25 and 26 December', note: 'Open 09:00 to 14:00 only on both dates. Otherwise November to February hours: Monday to Saturday 09:00 to 18:00, Sunday 10:30 to 18:00.' },
      { site: 'Costa Brava sea trips', closed: 'All month, until about April', note: 'Not bookable on GetYourGuide through the winter. The sea is 15 to 16C.' },
      { site: 'Casa Batlló night visit', closed: 'All month, until 1 April', note: 'Season is 1 April to 31 August only. Casa Batlló itself stays open daily 09:00 to 22:30, including through the Christmas period.' },
      { site: 'Banks, offices and most shops', closed: '8, 25 and 26 December', note: '6 December falls on a Sunday. 26 December is Sant Esteve, a public holiday in Catalonia only.' },
      { site: 'Restaurants', closed: 'Either 25 or 26 December', note: 'Most close on one of the two days and it varies by restaurant. Book both meals ahead.' },
    ],
    body: [
      'The pair of Sagrada Família half-days on 25 and 26 December is the most useful planning fact on this page and it is almost never mentioned. The basilica is not closed on Christmas Day; it opens 09:00 to 14:00, and does the same on Sant Esteve. If you have a four-night Christmas trip, those are two mornings when the single most important building in the city has a five-hour window rather than a nine-hour one, and the slots go accordingly.',
      'La Pedrera is the one full closure of the month, on 25 December. From 26 December to 3 January it then runs a special Christmas timetable: 09:00 to 20:30 for the daytime visit, opening at 11:00 on 1 January, and the Origins night show pushed back to 21:00 to 23:00. That later night slot is arguably the best way to see the building all year, and it exists for nine days only.',
      'Looking ahead, La Pedrera closes again for a full week from 11 to 17 January. If your trip straddles the new year, that is worth checking before you commit to dates.',
    ],
  },

  packing: {
    capsule:
      'Pack layers for a nine-degree daily swing and something genuinely warm for Montserrat, which is a different climate from the city. You will not need much waterproofing: four wet days is the fewest of any month in the Barcelona year.',
    body: [
      'City December in Barcelona is mild and dry, and the single most useful item is a mid-weight jacket you can carry once the sun is up. A 15.0C afternoon on Passeig de Gràcia in low winter sun does not need a coat; a 6.2C evening waiting for a table does.',
      'Montserrat is the exception and people get caught out by it every year. The abbey sits high on an exposed ridge an hour inland, it is several degrees colder than the city, and the wind on the terraces is real. If Montserrat is on your list, pack a proper warm layer and a hat, not a city jacket.',
      'Because it is the driest month, an umbrella is close to optional. What is not optional is planning around the light: with sunset just after half past five, a head torch or at least a decent phone light is genuinely useful on the unlit upper paths at Park Güell if you have taken a late slot.',
    ],
    list: [
      'A mid-weight jacket for a nine-degree swing between afternoon and evening',
      'A proper warm layer and hat for Montserrat, which is not the same climate as the city',
      'An umbrella is close to optional: four wet days is the year\'s fewest',
      'One smarter outfit; Barcelona dresses up for Christmas and New Year',
      'Comfortable shoes for the Fira de Santa Llúcia and the lit avenues',
      'A cover-up for the Sagrada Família dress code, which applies in winter too',
    ],
  },

  faqs: [
    {
      question: 'Is December a wet month in Barcelona?',
      answer: 'No, it is the driest month of the year. December delivers about 25mm across four wet days, against October\'s 105mm across ten and September\'s 92mm across twelve. Barcelona\'s wet season is autumn, not winter. Statistically it is the best month of the ten covered here for walking the city without getting rained on.',
    },
    {
      question: 'Is the Sagrada Família open on Christmas Day?',
      answer: 'Yes, but only for half a day. It opens 09:00 to 14:00 on 25 December and does the same on 26 December, instead of its usual November to February hours of 09:00 to 18:00 Monday to Saturday. It also runs 09:00 to 14:00 on 1 and 6 January. Those four half-days are the most commonly missed fact about a Christmas trip to Barcelona.',
    },
    {
      question: 'What closes in Barcelona at Christmas?',
      answer: 'La Pedrera closes completely on 25 December, then runs a special Christmas timetable from 26 December to 3 January of 09:00 to 20:30, opening at 11:00 on 1 January, with the night visit at 21:00 to 23:00. The Sagrada Família runs half-days on the 25th and 26th. Most restaurants close on either the 25th or the 26th, and which one varies, so book both meals ahead.',
    },
    {
      question: 'What is Sant Esteve?',
      answer: 'Saint Stephen\'s Day, 26 December, which is a public holiday in Catalonia but not in most of the rest of Spain. In 2026 it falls on a Saturday. It is the day of the big family lunch, traditionally canelons made from Christmas Day leftovers, so many restaurants that opened on the 25th close on the 26th while others do the reverse.',
    },
    {
      question: 'Does Barcelona have Christmas markets?',
      answer: 'The main one is the Fira de Santa Llúcia in front of the cathedral, on Avinguda de la Catedral and Plaça Nova, trading 10:00 to 21:00. It has historically finished on 23 December, but Barcelona had not published official 2026 dates when this page was written so we are not stating them. It sells nativity figures, mistletoe and the caganer. We found no published 2026 dates for a Sagrada Família market, so we do not list one.',
    },
    {
      question: 'How short are the days in Barcelona in December?',
      answer: 'Daylight bottoms out at 9 hours 13 minutes on the 15th, the shortest of the year, with sunrise a little after eight and sunset a little after half past five. That gives roughly a six-hour usable window for anything outdoors and view-dependent, so Park Güell, Montserrat and any panoramic viewpoint belong in the morning.',
    },
  ],
};
