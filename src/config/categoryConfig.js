// const categoryConfig = {
//   african_capitals: "African Capitals",
//   asian_capitals: "Asian Capitals",
//   canadian_capitals: "Canadian Capitals",
//   european_capitals: "European Capitals",
//   north_american_capitals: "North American Capitals",
//   oceania_capitals: "Oceania Capitals",
//   south_american_capitals: "South American Capitals",
//   us_capitals: "US Capitals",
//   world_capitals: "World Capitals"
// };

const categories = [
  {
    title: 'Capitals',
    quizzes: [
      { 
        id: 1, 
        title: 'African Capitals', 
        url: '/european-capitals' 
      },
      { 
        id: 2, 
        title: 'Asian Capitals', 
        url: '/asian_capitals' 
      },
      { 
        id: 3, 
        title: 'Canadian Capitals', 
        url: '/canadian_capitals' 
      },
      { 
        id: 4, 
        title: 'European Capitals', 
        url: '/european_capitals' 
      },
      { 
        id: 5, 
        title: 'North American Capitals', 
        url: '/north_american_capitals' 
      },
      { 
        id: 6, 
        title: 'Oceania Capitals',
        url: '/oceania-capitals' 
      },
      { 
        id: 7, 
        title: 'South American Capitals', 
        url: '/south_american_capitals' 
      },
      { 
        id: 8, 
        title: 'US Capitals', 
        url: '/us_capitals' 
      },
      { 
        id: 9, 
        title: 'US State Nicknames', 
        url: '/us_state_nicknames' 
      },
      { 
        id: 10, 
        title: 'World Capitals', 
        url: '/world_capitals' 
      }
    ]
  },
  {
    title: 'Government',
    quizzes: [
      { 
        id: 10, 
        title: 'US Presidents', 
        url: '/us_presidents' 
      },
      { 
        id: 11, 
        title: 'US Amendments', 
        url: '/us_amendments' 
      },
      { 
        id: 12, 
        title: 'US Supreme Court Cases', 
        url: '/us_supreme_court_cases' 
      },
      { 
        id: 13, 
        title: 'US Congressional Acts', 
        url: '/us_congressional_acts' 
      },
      { 
        id: 14, 
        title: 'US Governors 2022', 
        url: '/us_governors_2022' 
      },
      { 
        id: 15, 
        title: 'US Senators 2022', 
        url: '/us_senators_2022' 
      },
      { 
        id: 16, 
        title: 'World Leaders 2022', 
        url: '/world_leaders_2022' 
      }
    ]
  },
  {
    title: 'Arts',
    quizzes: [
      { 
        id: 17, 
        title: 'Works of Literature', 
        url: '/works_of_literature' 
      },
      { 
        id: 18, 
        title: 'Painters', 
        url: '/painters' 
      },
      { 
        id: 19, 
        title: 'Composers', 
        url: '/composers' 
      },
      { 
        id: 20, 
        title: 'Authors', 
        url: '/authors' 
      },
      { 
        id: 21, 
        title: 'Literary Characters', 
        url: '/literary_characters' 
      },
      { 
        id: 22, 
        title: 'Artists', 
        url: '/artists' 
      },
      { 
        id: 23, 
        title: 'Authors', 
        url: '/authors' 
      }
    ]
  },
  {
    title: 'Pop Culture',
    quizzes: [
      { 
        id: 24, 
        title: 'Best-Selling Albums', 
        url: '/best_selling_albums' 
      },
      { 
        id: 25, 
        title: 'Oscar Best Picture Winners', 
        url: '/oscar_best_picture_winners' 
      },
      { 
        id: 26, 
        title: 'Highest Grossing Movies by Year', 
        url: '/highest_grossing_movies_by_year' 
      },
      { 
        id: 27, 
        title: 'FT Most Influential 2000s', 
        url: '/ft_most_influential_2000s' 
      },
      { 
        id: 28, 
        title: 'Literary Characters', 
        url: '/literary_characters' 
      },
      { 
        id: 29, 
        title: 'Grammy Songs of the Year', 
        url: '/grammy_songs_of_the_year' 
      },
      { 
        id: 30, 
        title: 'Astrological Signs', 
        url: '/astrological_signs' 
      },
      { 
        id: 31, 
        title: 'TV Shows', 
        url: '/tv_shows' 
      }
    ]
  },
  {
    title: 'Sports',
    quizzes: [
      { 
        id: 32, 
        title: 'Olympics', 
        url: '/olympics' 
      },
      { 
        id: 33, 
        title: 'NFL MVPs', 
        url: '/nfl_mvps' 
      },
      { 
        id: 34, 
        title: 'NBA MVPs', 
        url: '/nba_mvps' 
      },
      { 
        id: 35, 
        title: 'MLB MVPs', 
        url: '/mlb_mvps' 
      },
      { 
        id: 36, 
        title: 'NHL MVPs', 
        url: '/nhl_mvps' 
      },
      { 
        id: 37, 
        title: 'NCAAF Champions', 
        url: '/ncaaf_champions' 
      },
      { 
        id: 38, 
        title: 'NFL Champions', 
        url: '/nfl_champions' 
      },
      { 
        id: 39, 
        title: 'NBA Champions', 
        url: '/nba_champions' 
      },
      { 
        id: 40, 
        title: 'MLB Champions', 
        url: '/mlb_champions' 
      },
      { 
        id: 41, 
        title: 'NHL Champions', 
        url: '/nhl_champions' 
      }
    ]
  },
  {
    title: 'Geography',
    quizzes: [
      { 
        id: 42, 
        title: 'Deserts', 
        url: '/deserts' 
      },
      { 
        id: 43, 
        title: 'Rivers', 
        url: '/rivers' 
      },
      { 
        id: 44, 
        title: 'Mountain Ranges', 
        url: '/mountain_ranges' 
      },
      { 
        id: 45, 
        title: 'US National Parks', 
        url: '/us_national_parks' 
      }
    ]
  },
  {
    title: 'Science',
    quizzes: [
      { 
        id: 46, 
        title: 'Mohs Scale of Hardness', 
        url: '/mohs_scale_of_hardness' 
      },
      { 
        id: 47, 
        title: 'Geologic Time Scale', 
        url: '/geologic_time_scale' 
      },
      { 
        id: 48, 
        title: 'Scientific Laws and Principles', 
        url: '/scientific_laws_and_principles' 
      },
      { 
        id: 49, 
        title: 'Periodic Table', 
        url: '/periodic_table' 
      },
      { 
        id: 50, 
        title: 'Organelles', 
        url: '/organelles' 
      },
      { 
        id: 51, 
        title: 'Scientists', 
        url: '/scientists' 
      }
    ]
  },
  {
    title: 'History',
    quizzes: [
      { 
        id: 52, 
        title: 'British Monarchs', 
        url: '/british_monarchs' 
      },
      { 
        id: 53, 
        title: 'English Monarchs', 
        url: '/english_monarchs' 
      },
      { 
        id: 54, 
        title: 'Chinese Dynasties', 
        url: '/chinese_dynasties' 
      },
      { 
        id: 55, 
        title: 'US Wars and Conflicts', 
        url: '/us_wars_and_conflicts' 
      },
      { 
        id: 56, 
        title: 'Roman Emperors', 
        url: '/roman_emperors' 
      },
      { 
        id: 57, 
        title: 'Russian Leaders', 
        url: '/russian_leaders' 
      },
      { 
        id: 58, 
        title: 'Space Travel', 
        url: '/space_travel' 
      }
    ]
  },
  {
    title: 'Mythology',
    quizzes: [
      { 
        id: 59, 
        title: 'Greek Gods', 
        url: '/greek_gods' 
      },
      { 
        id: 60, 
        title: 'Greek Goddesses', 
        url: '/greek_goddesses' 
      },
      { 
        id: 61, 
        title: 'Greek Heroes', 
        url: '/greek_heroes' 
      },
      { 
        id: 62, 
        title: 'Greek Mythological Creatures', 
        url: '/greek_mythological_creatures' 
      },
      { 
        id: 63, 
        title: 'Roman Gods', 
        url: '/roman_gods' 
      },
      { 
        id: 64, 
        title: 'Bible Books', 
        url: '/bible_books' 
      }
    ]
  },
  {
    title: 'Miscellaneous',
    quizzes: [
      { 
        id: 65, 
        title: 'Airport Codes', 
        url: '/airport_codes' 
      },
      { 
        id: 66, 
        title: 'Roman Numerals', 
        url: '/roman_numerals' 
      },
      { 
        id: 67, 
        title: 'NATO Spelling Alphabet', 
        url: '/nato_spelling_alphabet' 
      }
    ]
  }
];

export default categories; 