const categories = [
  {
    title: 'Capitals',
    quizzes: [
      { 
        id: 1, 
        title: 'African Capitals', 
        url: '/african_capitals' 
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
        id: 11, 
        title: 'US Presidents', 
        url: '/us_presidents' 
      },
      { 
        id: 68, 
        title: 'US Vice Presidents', 
        url: '/vice_presidents' 
      },
      { 
        id: 69, 
        title: 'US First Ladies', 
        url: '/first_ladies' 
      },
      { 
        id: 70, 
        title: 'US Presidential Losers', 
        url: '/presidential_losers' 
      },
      { 
        id: 12, 
        title: 'US Amendments', 
        url: '/us_amendments' 
      },
      { 
        id: 13, 
        title: 'US Supreme Court Cases', 
        url: '/us_supreme_court_cases' 
      },
      { 
        id: 14, 
        title: 'US Congressional Acts', 
        url: '/us_congressional_acts' 
      },
      { 
        id: 71, 
        title: 'US Cabinet Departments', 
        url: '/cabinet_departments' 
      },
      { 
        id: 15, 
        title: 'US Governors 2022', 
        url: '/us_governors_2022' 
      },
      { 
        id: 16, 
        title: 'US Senators 2022', 
        url: '/us_senators_2022' 
      },
      { 
        id: 17, 
        title: 'World Leaders 2022', 
        url: '/world_leaders_2022' 
      }
    ]
  },
  {
    title: 'Arts',
    quizzes: [
      { 
        id: 18, 
        title: 'Works of Literature', 
        url: '/works_of_literature' 
      },
      { 
        id: 19, 
        title: 'Authors', 
        url: '/authors' 
      },
      { 
        id: 20, 
        title: 'Literary Characters', 
        url: '/literary_characters' 
      },
      { 
        id: 21, 
        title: 'Artists', 
        url: '/artists' 
      },
      { 
        id: 22, 
        title: 'Painters', 
        url: '/painters' 
      },
      { 
        id: 23, 
        title: 'Composers', 
        url: '/composers' 
      },
      { 
        id: 24, 
        title: 'Operas', 
        url: '/operas' 
      }
    ]
  },
  {
    title: 'Pop Culture',
    quizzes: [
      { 
        id: 25, 
        title: 'Oscar Best Picture Winners', 
        url: '/oscar_best_picture_winners' 
      },
      { 
        id: 26, 
        title: 'Highest Grossing Movies by Year', 
        url: '/highest_grossing_movies' 
      },
      { 
        id: 27, 
        title: 'TV Shows', 
        url: '/tv_shows' 
      },
      { 
        id: 28, 
        title: 'Grammy Songs of the Year', 
        url: '/grammy_songs_of_the_year' 
      },
      { 
        id: 29, 
        title: 'Best-Selling Albums', 
        url: '/best_selling_albums' 
      },
      { 
        id: 30, 
        title: 'FT Most Influential 2000s', 
        url: '/ft_most_influential_2000s' 
      },
      { 
        id: 31, 
        title: 'Astrological Signs', 
        url: '/astrological_signs' 
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
        title: 'Super Bowl Winners', 
        url: '/nfl_champions' 
      },
      { 
        id: 72, 
        title: 'NFL Stadiums 2023', 
        url: '/nfl_stadiums_2023' 
      },
      { 
        id: 35, 
        title: 'NBA MVPs', 
        url: '/nba_mvps' 
      },
      { 
        id: 36, 
        title: 'NBA Finals Champions', 
        url: '/nba_champions' 
      },
      { 
        id: 37, 
        title: 'MLB MVPs', 
        url: '/mlb_mvps' 
      },
      { 
        id: 38, 
        title: 'World Series Champions', 
        url: '/mlb_champions' 
      },
      { 
        id: 39, 
        title: 'NHL MVPs', 
        url: '/nhl_mvps' 
      },
      { 
        id: 40, 
        title: 'Stanley Cup Champions', 
        url: '/nhl_champions' 
      },
      { 
        id: 41, 
        title: 'NCAAF Champions', 
        url: '/ncaaf_champions' 
      },
      { 
        id: 73, 
        title: 'Heisman Trophy Winners', 
        url: '/heisman_winners' 
      }
    ]
  },
  {
    title: 'Geography',
    quizzes: [
      { 
        id: 28, 
        title: 'Lakes', 
        url: '/lakes' 
      },
      { 
        id: 42, 
        title: 'Rivers', 
        url: '/rivers' 
      },
      { 
        id: 43, 
        title: 'Deserts', 
        url: '/deserts' 
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
        title: 'Periodic Table', 
        url: '/periodic_table' 
      },
      { 
        id: 47, 
        title: 'Scientific Laws and Principles', 
        url: '/scientific_laws_and_principles' 
      },
      { 
        id: 48, 
        title: 'Scientists', 
        url: '/scientists' 
      },
      { 
        id: 49, 
        title: 'Organelles', 
        url: '/organelles' 
      },
      { 
        id: 50, 
        title: 'Mohs Scale of Hardness', 
        url: '/mohs_scale_of_hardness' 
      },
      { 
        id: 51, 
        title: 'Geologic Time Scale', 
        url: '/geologic_time_scale' 
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