import React, { useState, useMemo } from 'react';
import { Film, Music, Star, TrendingUp, Search, Filter, Heart, Calendar, Sparkles } from 'lucide-react';

const movies = [
  { id: 1, title: "Home Alone", year: 1990, genre: "Comedy", rating: "7.7", mood: "Fun", description: "An eight-year-old troublemaker must protect his house from burglars when accidentally left home alone.", reviews: 650000, poster: "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
  { id: 2, title: "Elf", year: 2003, genre: "Comedy", rating: "7.1", mood: "Cheerful", description: "A man raised as an elf travels to New York City to locate his real father.", reviews: 280000, poster: "https://m.media-amazon.com/images/M/MV5BMzUxNzkzMzQtYjIxZC00NzU0LThkYTQtZjNhNTljMTA1MDA1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" },
  { id: 3, title: "The Polar Express", year: 2004, genre: "Animation", rating: "6.6", mood: "Magical", description: "A young boy embarks on a magical adventure to the North Pole.", reviews: 230000, poster: "https://m.media-amazon.com/images/M/MV5BMTM1NTU0NTE4MV5BMl5BanBnXkFtZTcwMTQ0MjEzMw@@._V1_SX300.jpg" },
  { id: 4, title: "Love Actually", year: 2003, genre: "Romance", rating: "7.6", mood: "Romantic", description: "Eight couples deal with love lives before Christmas in London.", reviews: 520000, poster: "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_SX300.jpg" },
  { id: 5, title: "Its a Wonderful Life", year: 1946, genre: "Drama", rating: "8.6", mood: "Heartwarming", description: "An angel shows a businessman what life would be like if he had never existed.", reviews: 480000, poster: "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg" },
  { id: 6, title: "Die Hard", year: 1988, genre: "Action", rating: "8.2", mood: "Thrilling", description: "An officer tries to save hostages during a Christmas party.", reviews: 920000, poster: "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" },
  { id: 7, title: "Nightmare Before Christmas", year: 1993, genre: "Animation", rating: "7.9", mood: "Whimsical", description: "Jack Skellington discovers Christmas Town and brings confusion.", reviews: 380000, poster: "https://m.media-amazon.com/images/M/MV5BNWE4OTNiM2ItMjY4Ni00ZTViLWFiZmEtZGEyNGY2ZmNlMzIyXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_SX300.jpg" },
  { id: 8, title: "A Christmas Carol", year: 2009, genre: "Drama", rating: "6.8", mood: "Reflective", description: "Animated retelling of Dickens classic about redemption.", reviews: 130000, poster: "https://m.media-amazon.com/images/M/MV5BMTM1MTI5ODYxNV5BMl5BanBnXkFtZTcwMjM2MjQ0Mg@@._V1_SX300.jpg" },
  { id: 9, title: "The Holiday", year: 2006, genre: "Romance", rating: "6.9", mood: "Romantic", description: "Two women swap homes and meet local guys.", reviews: 280000, poster: "https://m.media-amazon.com/images/M/MV5BMTM5MTE5MDMzNV5BMl5BanBnXkFtZTcwNTMwNDIzMQ@@._V1_SX300.jpg" },
  { id: 10, title: "Klaus", year: 2019, genre: "Animation", rating: "8.2", mood: "Heartwarming", description: "A postman befriends toymaker Klaus and their gifts melt a feud.", reviews: 175000, poster: "https://m.media-amazon.com/images/M/MV5BMWYwOThjM2ItZGYxNy00NTQwLWFlZWEtM2MzM2Q5MmY3NDU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg" },
  { id: 11, title: "Christmas Vacation", year: 1989, genre: "Comedy", rating: "7.5", mood: "Fun", description: "Griswold family Christmas plans turn into disaster.", reviews: 150000, poster: "https://m.media-amazon.com/images/M/MV5BMGZkMWQ2MzMtYTkxYS00OThmLTljMDgtNmI0Mzg0YjM5NjY4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
  { id: 12, title: "The Grinch", year: 2018, genre: "Animation", rating: "6.4", mood: "Fun", description: "A grumpy Grinch plots to ruin Christmas.", reviews: 95000, poster: "https://m.media-amazon.com/images/M/MV5BYmE5Yjg0NzktMTQyZS00ZDIzLTg4NzQtMzk5ZmZlY2Q4YjZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" },
  { id: 13, title: "A Christmas Story", year: 1983, genre: "Comedy", rating: "7.9", mood: "Nostalgic", description: "Ralphie wants a Red Ryder BB gun for Christmas.", reviews: 165000, poster: "https://m.media-amazon.com/images/M/MV5BZWQ1MjJmYzEtMzI3Ny00NDE2LThjZjEtMzJlZDY0NzFjMjkwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
  { id: 14, title: "The Santa Clause", year: 1994, genre: "Comedy", rating: "6.6", mood: "Cheerful", description: "A man magically recruited to take Santa's place after an accident.", reviews: 125000, poster: "https://m.media-amazon.com/images/M/MV5BMTZlNTE1MzUtZWI1NC00MjQ0LTk3ODctOTBlNTE0YjIzMGU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
  { id: 15, title: "Miracle on 34th Street", year: 1994, genre: "Family", rating: "6.6", mood: "Heartwarming", description: "A little girl must prove a man is the real Santa Claus.", reviews: 48000, poster: "https://m.media-amazon.com/images/M/MV5BYjVmYTViY2YtZmFiZC00ODZhLWI2NGMtOGUwOTU1OTQyNjkwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
  { id: 16, title: "Jingle All the Way", year: 1996, genre: "Comedy", rating: "5.7", mood: "Fun", description: "A father races to find the hottest toy for his son.", reviews: 87000, poster: "https://m.media-amazon.com/images/M/MV5BMmJlYzViNzctMjQ1Ni00ZWQ4LThkYmItMDg4MzlmZWUxMzhjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
  { id: 17, title: "White Christmas", year: 1954, genre: "Musical", rating: "7.6", mood: "Nostalgic", description: "A song-and-dance team save their former general's Vermont inn.", reviews: 45000, poster: "https://m.media-amazon.com/images/M/MV5BY2Y4ZGY0OTQtOGFhZS00MWIwLWEwM2YtNDZiMjY4NzgzZWIyXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_SX300.jpg" },
  { id: 18, title: "Scrooged", year: 1988, genre: "Comedy", rating: "6.9", mood: "Fun", description: "A cynical TV executive is haunted by three spirits.", reviews: 70000, poster: "https://m.media-amazon.com/images/M/MV5BMTYwNDg3NDk1Ml5BMl5BanBnXkFtZTcwMTk3NjEzNA@@._V1_SX300.jpg" },
  { id: 19, title: "The Muppet Christmas Carol", year: 1992, genre: "Family", rating: "7.7", mood: "Cheerful", description: "The Muppets tell the classic tale of an old miser's redemption.", reviews: 78000, poster: "https://m.media-amazon.com/images/M/MV5BMTZkMjk1OWMtOTEyZC00ZjE1LWFiODYtNGY4NjgxZTVhYTNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
  { id: 20, title: "Bad Santa", year: 2003, genre: "Comedy", rating: "7.1", mood: "Fun", description: "A miserable conman and his partner pose as Santa and elf.", reviews: 145000, poster: "https://m.media-amazon.com/images/M/MV5BMjA4Njg1MDcwN15BMl5BanBnXkFtZTYwMzAxNjM3._V1_SX300.jpg" },
  { id: 21, title: "Gremlins", year: 1984, genre: "Horror", rating: "7.3", mood: "Thrilling", description: "A boy inadvertently breaks three rules about his new pet.", reviews: 235000, poster: "https://m.media-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWMtZmRjMDEwMzEwMTUxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
  { id: 22, title: "Four Christmases", year: 2008, genre: "Romance", rating: "5.7", mood: "Fun", description: "A couple must visit all four of their divorced parents.", reviews: 95000, poster: "https://m.media-amazon.com/images/M/MV5BMTM5NDk5Njg0Ml5BMl5BanBnXkFtZTcwMDI5OTMzMg@@._V1_SX300.jpg" },
  { id: 23, title: "Frozen", year: 2013, genre: "Animation", rating: "7.4", mood: "Magical", description: "A fearless girl sets off to find her sister and end winter.", reviews: 685000, poster: "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg" },
  { id: 24, title: "Noelle", year: 2019, genre: "Family", rating: "6.3", mood: "Cheerful", description: "Santa's daughter must save Christmas when her brother quits.", reviews: 22000, poster: "https://m.media-amazon.com/images/M/MV5BMTUwNjMxMDI5Ml5BMl5BanBnXkFtZTgwMTk4OTYyNzM@._V1_SX300.jpg" },
  { id: 25, title: "Rudolph the Red-Nosed Reindeer", year: 1964, genre: "Animation", rating: "8.0", mood: "Nostalgic", description: "A reindeer with a glowing nose saves Christmas.", reviews: 38000, poster: "https://m.media-amazon.com/images/M/MV5BYzc1YjVlYmMtOTMxNC00ZTZlLTg3MzAtYjZjYmZmZTRmNDJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
  { id: 26, title: "Frosty the Snowman", year: 1969, genre: "Animation", rating: "7.3", mood: "Cheerful", description: "A living snowman and a girl race to the North Pole.", reviews: 19000, poster: "https://m.media-amazon.com/images/M/MV5BMTYwNTM5MTQ3NF5BMl5BanBnXkFtZTcwNDY3MjQyMQ@@._V1_SX300.jpg" },
  { id: 27, title: "Arthur Christmas", year: 2011, genre: "Animation", rating: "7.1", mood: "Fun", description: "Santa's son embarks on a mission to deliver a forgotten gift.", reviews: 125000, poster: "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MjAwNw@@._V1_SX300.jpg" },
  { id: 28, title: "The Man Who Invented Christmas", year: 2017, genre: "Drama", rating: "7.0", mood: "Reflective", description: "Charles Dickens creates A Christmas Carol during a difficult time.", reviews: 18000, poster: "https://m.media-amazon.com/images/M/MV5BMjExMTg5NTU5Ml5BMl5BanBnXkFtZTgwODI2OTM4MzI@._V1_SX300.jpg" },
  { id: 29, title: "Happiest Season", year: 2020, genre: "Romance", rating: "6.6", mood: "Romantic", description: "A woman plans to propose but discovers her girlfriend isn't out to her family.", reviews: 45000, poster: "https://m.media-amazon.com/images/M/MV5BNmMxM2RjMjItZGU5OS00MTY4LTk5ZGMtYTk5MTE3MGU3ZjhkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg" },
  { id: 30, title: "Rise of the Guardians", year: 2012, genre: "Animation", rating: "7.3", mood: "Magical", description: "Guardians like Santa and the Tooth Fairy protect children from evil.", reviews: 175000, poster: "https://m.media-amazon.com/images/M/MV5BMTk2NjY4MTU5MV5BMl5BanBnXkFtZTcwMTA3MjEwOA@@._V1_SX300.jpg" }
];

const songs = [
  { id: 101, title: "All I Want for Christmas Is You", artist: "Mariah Carey", year: 1994, genre: "Pop", rating: "9.2", mood: "Cheerful", streams: 1200000, artwork: "https://upload.wikimedia.org/wikipedia/en/5/50/Mariah_Carey_-_Merry_Christmas.png" },
  { id: 102, title: "Last Christmas", artist: "Wham!", year: 1984, genre: "Pop", rating: "8.5", mood: "Romantic", streams: 950000, artwork: "https://upload.wikimedia.org/wikipedia/en/7/75/Wham%21_-_Last_Christmas.jpg" },
  { id: 103, title: "White Christmas", artist: "Bing Crosby", year: 1942, genre: "Traditional", rating: "9.0", mood: "Nostalgic", streams: 680000, artwork: "https://upload.wikimedia.org/wikipedia/commons/3/39/Bing_Crosby_-_White_Christmas_%281942_single_cover%29.jpg" },
  { id: 104, title: "Jingle Bell Rock", artist: "Bobby Helms", year: 1957, genre: "Rock", rating: "8.3", mood: "Fun", streams: 720000, artwork: "https://upload.wikimedia.org/wikipedia/en/5/53/Bobby_Helms_-_Jingle_Bell_Rock.jpg" },
  { id: 105, title: "Feliz Navidad", artist: "Jose Feliciano", year: 1970, genre: "Latin", rating: "8.7", mood: "Cheerful", streams: 650000, artwork: "https://upload.wikimedia.org/wikipedia/en/d/d4/Jos%C3%A9_Feliciano_-_Feliz_Navidad.jpg" },
  { id: 106, title: "Santa Tell Me", artist: "Ariana Grande", year: 2014, genre: "Pop", rating: "8.1", mood: "Fun", streams: 890000, artwork: "https://upload.wikimedia.org/wikipedia/en/1/1c/Ariana_Grande_-_Santa_Tell_Me.png" },
  { id: 107, title: "Underneath the Tree", artist: "Kelly Clarkson", year: 2013, genre: "Pop", rating: "8.4", mood: "Romantic", streams: 620000, artwork: "https://upload.wikimedia.org/wikipedia/en/6/66/Kelly_Clarkson_-_Wrapped_in_Red.png" },
  { id: 108, title: "The Christmas Song", artist: "Nat King Cole", year: 1946, genre: "Traditional", rating: "9.1", mood: "Nostalgic", streams: 580000, artwork: "https://upload.wikimedia.org/wikipedia/en/9/93/Nat_King_Cole_-_The_Christmas_Song_%281961_album%29.jpg" },
  { id: 109, title: "Mistletoe", artist: "Justin Bieber", year: 2011, genre: "Pop", rating: "7.8", mood: "Romantic", streams: 710000, artwork: "https://upload.wikimedia.org/wikipedia/en/c/c4/Justin_Bieber_-_Under_the_Mistletoe.png" },
  { id: 110, title: "Carol of the Bells", artist: "Pentatonix", year: 2014, genre: "A Cappella", rating: "8.9", mood: "Magical", streams: 540000, artwork: "https://upload.wikimedia.org/wikipedia/en/b/b4/Pentatonix_-_That%27s_Christmas_to_Me.png" },
  { id: 111, title: "Rockin Around the Christmas Tree", artist: "Brenda Lee", year: 1958, genre: "Rock", rating: "8.4", mood: "Fun", streams: 695000, artwork: "https://upload.wikimedia.org/wikipedia/en/5/58/Brenda_Lee_-_Rockin%27_Around_the_Christmas_Tree.jpg" },
  { id: 112, title: "Most Wonderful Time of the Year", artist: "Andy Williams", year: 1963, genre: "Traditional", rating: "8.6", mood: "Cheerful", streams: 485000, artwork: "https://upload.wikimedia.org/wikipedia/en/2/26/Andy_Williams_-_The_Andy_Williams_Christmas_Album.jpg" },
  { id: 113, title: "Sleigh Ride", artist: "The Ronettes", year: 1963, genre: "Pop", rating: "8.2", mood: "Fun", streams: 420000, artwork: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/PhilSpectorChristmasAlbum.jpg/220px-PhilSpectorChristmasAlbum.jpg" },
  { id: 114, title: "Holly Jolly Christmas", artist: "Burl Ives", year: 1964, genre: "Traditional", rating: "8.5", mood: "Cheerful", streams: 510000, artwork: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Rudolph_the_Red-Nosed_Reindeer_soundtrack.jpg/220px-Rudolph_the_Red-Nosed_Reindeer_soundtrack.jpg" },
  { id: 115, title: "Let It Snow", artist: "Dean Martin", year: 1959, genre: "Traditional", rating: "8.3", mood: "Cozy", streams: 465000, artwork: "https://upload.wikimedia.org/wikipedia/en/4/44/Dean_Martin_-_A_Winter_Romance.jpg" },
  { id: 116, title: "Wonderful Christmastime", artist: "Paul McCartney", year: 1979, genre: "Pop", rating: "7.5", mood: "Cheerful", streams: 590000, artwork: "https://upload.wikimedia.org/wikipedia/en/8/85/Paul_McCartney_-_Wonderful_Christmastime.jpg" },
  { id: 117, title: "Happy Xmas War Is Over", artist: "John Lennon", year: 1971, genre: "Rock", rating: "8.6", mood: "Reflective", streams: 525000, artwork: "https://upload.wikimedia.org/wikipedia/en/3/38/Happy_Xmas_%28War_Is_Over%29.jpg" },
  { id: 118, title: "Santa Baby", artist: "Eartha Kitt", year: 1953, genre: "Jazz", rating: "8.0", mood: "Fun", streams: 445000, artwork: "https://upload.wikimedia.org/wikipedia/en/5/5d/Eartha_Kitt_-_Santa_Baby.jpg" },
  { id: 119, title: "Blue Christmas", artist: "Elvis Presley", year: 1957, genre: "Rock", rating: "8.2", mood: "Nostalgic", streams: 475000, artwork: "https://upload.wikimedia.org/wikipedia/en/5/52/Elvis%27_Christmas_Album.jpg" },
  { id: 120, title: "Do They Know Its Christmas", artist: "Band Aid", year: 1984, genre: "Pop", rating: "7.9", mood: "Reflective", streams: 380000, artwork: "https://upload.wikimedia.org/wikipedia/en/8/89/Band_Aid_-_Do_They_Know_It%27s_Christmas.jpg" },
  { id: 121, title: "Have Yourself a Merry Little Christmas", artist: "Frank Sinatra", year: 1957, genre: "Traditional", rating: "8.8", mood: "Nostalgic", streams: 525000, artwork: "https://upload.wikimedia.org/wikipedia/en/f/f0/Frank_Sinatra_-_A_Jolly_Christmas_from_Frank_Sinatra.jpg" },
  { id: 122, title: "Winter Wonderland", artist: "Tony Bennett", year: 1968, genre: "Traditional", rating: "8.4", mood: "Cozy", streams: 390000, artwork: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Tony_Bennett_-_Snowfall.jpg/220px-Tony_Bennett_-_Snowfall.jpg" },
  { id: 123, title: "Its Beginning to Look Like Christmas", artist: "Michael Buble", year: 2011, genre: "Pop", rating: "8.7", mood: "Cheerful", streams: 780000, artwork: "https://upload.wikimedia.org/wikipedia/en/9/9d/Michael_Bubl%C3%A9_-_Christmas_%28Deluxe_Special_Edition%29.png" },
  { id: 124, title: "Christmas Lights", artist: "Coldplay", year: 2010, genre: "Rock", rating: "7.6", mood: "Reflective", streams: 420000, artwork: "https://upload.wikimedia.org/wikipedia/en/8/80/Coldplay_-_Christmas_Lights.png" },
  { id: 125, title: "Silent Night", artist: "Mariah Carey", year: 1994, genre: "Traditional", rating: "8.9", mood: "Nostalgic", streams: 465000, artwork: "https://upload.wikimedia.org/wikipedia/en/5/50/Mariah_Carey_-_Merry_Christmas.png" },
  { id: 126, title: "Little Drummer Boy", artist: "Pentatonix", year: 2014, genre: "A Cappella", rating: "8.7", mood: "Magical", streams: 490000, artwork: "https://upload.wikimedia.org/wikipedia/en/b/b4/Pentatonix_-_That%27s_Christmas_to_Me.png" },
  { id: 127, title: "Run Rudolph Run", artist: "Chuck Berry", year: 1958, genre: "Rock", rating: "7.9", mood: "Fun", streams: 385000, artwork: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Chuck_Berry_-_Run_Rudolph_Run.jpg/220px-Chuck_Berry_-_Run_Rudolph_Run.jpg" },
  { id: 128, title: "Christmas Song Chestnuts", artist: "Ella Fitzgerald", year: 1960, genre: "Jazz", rating: "8.6", mood: "Cozy", streams: 295000, artwork: "https://upload.wikimedia.org/wikipedia/en/e/e6/Ella_Fitzgerald_-_Ella_Fitzgerald%27s_Christmas.jpg" },
  { id: 129, title: "Cozy Little Christmas", artist: "Katy Perry", year: 2018, genre: "Pop", rating: "7.4", mood: "Romantic", streams: 560000, artwork: "https://upload.wikimedia.org/wikipedia/en/f/fb/Katy_Perry_-_Cozy_Little_Christmas.png" },
  { id: 130, title: "December", artist: "Ariana Grande", year: 2014, genre: "Pop", rating: "7.7", mood: "Romantic", streams: 620000, artwork: "https://upload.wikimedia.org/wikipedia/en/1/1c/Ariana_Grande_-_Santa_Tell_Me.png" }
];

const App = () => {
  const [activeTab, setActiveTab] = useState('movies');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedMood, setSelectedMood] = useState('all');
  const [favorites, setFavorites] = useState([]);

  const currentData = activeTab === 'movies' ? movies : songs;
  
  const genres = useMemo(() => {
    return ['all', ...new Set(currentData.map(item => item.genre))];
  }, [currentData]);

  const moods = useMemo(() => {
    return ['all', ...new Set(currentData.map(item => item.mood))];
  }, [currentData]);

  const filteredData = useMemo(() => {
    return currentData.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (activeTab === 'movies' ? true : item.artist.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesGenre = selectedGenre === 'all' || item.genre === selectedGenre;
      const matchesMood = selectedMood === 'all' || item.mood === selectedMood;
      return matchesSearch && matchesGenre && matchesMood;
    });
  }, [currentData, searchTerm, selectedGenre, selectedMood, activeTab]);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const getRecommendations = (item) => {
    return currentData
      .filter(i => i.id !== item.id && (i.genre === item.genre || i.mood === item.mood))
      .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
      .slice(0, 3);
  };

  const trendData = useMemo(() => {
    const decades = {};
    currentData.forEach(item => {
      const decade = Math.floor(item.year / 10) * 10;
      if (!decades[decade]) decades[decade] = 0;
      decades[decade]++;
    });
    return Object.entries(decades).sort((a, b) => a[0] - b[0]);
  }, [currentData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      <div className="bg-gradient-to-r from-red-600 to-green-600 text-white py-8 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Sparkles className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Holiday Entertainment Hub</h1>
            <Sparkles className="w-8 h-8" />
          </div>
          <p className="text-center text-red-100">Discover the perfect Christmas movies and music for your holiday season</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('movies')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'movies' ? 'bg-red-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Film className="w-5 h-5" />
            Movies ({movies.length})
          </button>
          <button
            onClick={() => setActiveTab('music')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'music' ? 'bg-green-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Music className="w-5 h-5" />
            Music ({songs.length})
          </button>
          <button
            onClick={() => setActiveTab('insights')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'insights' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            Insights
          </button>
        </div>

        {activeTab !== 'insights' && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={`Search ${activeTab}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white"
                >
                  {genres.map(genre => (
                    <option key={genre} value={genre}>
                      {genre === 'all' ? 'All Genres' : genre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <select
                  value={selectedMood}
                  onChange={(e) => setSelectedMood(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white"
                >
                  {moods.map(mood => (
                    <option key={mood} value={mood}>
                      {mood === 'all' ? 'All Moods' : mood}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'movies' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map(movie => (
              <div key={movie.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                <div className="bg-gradient-to-r from-red-500 to-red-600 h-2"></div>
                <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 flex-1">{movie.title}</h3>
                    <button onClick={() => toggleFavorite(movie.id)} className="ml-2">
                      <Heart className={`w-6 h-6 ${favorites.includes(movie.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3 flex-wrap">
                    <Calendar className="w-4 h-4" />
                    <span>{movie.year}</span>
                    <span className="mx-2">•</span>
                    <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">{movie.genre}</span>
                    <span className="mx-2">•</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">{movie.mood}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-800">{movie.rating}</span>
                    <span className="text-sm text-gray-500">({(movie.reviews / 1000).toFixed(0)}K votes)</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{movie.description}</p>
                  {getRecommendations(movie).length > 0 && (
                    <div className="border-t pt-4">
                      <p className="text-xs font-semibold text-gray-500 mb-2">SIMILAR MOVIES:</p>
                      <div className="space-y-1">
                        {getRecommendations(movie).map(rec => (
                          <div key={rec.id} className="text-sm text-gray-700">• {rec.title} ({rec.year})</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'music' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map(song => (
              <div key={song.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-green-600 h-2"></div>
                {song.artwork && (
                  <img src={song.artwork} alt={song.title} className="w-full h-64 object-cover" />
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800">{song.title}</h3>
                      <p className="text-gray-600">{song.artist}</p>
                    </div>
                    <button onClick={() => toggleFavorite(song.id)} className="ml-2">
                      <Heart className={`w-6 h-6 ${favorites.includes(song.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3 flex-wrap">
                    <Calendar className="w-4 h-4" />
                    <span>{song.year}</span>
                    <span className="mx-2">•</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">{song.genre}</span>
                    <span className="mx-2">•</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">{song.mood}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-800">{song.rating}</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    <Music className="w-4 h-4 inline mr-1" />
                    {(song.streams / 1000).toFixed(0)}K streams
                  </div>
                  {getRecommendations(song).length > 0 && (
                    <div className="border-t pt-4">
                      <p className="text-xs font-semibold text-gray-500 mb-2">SIMILAR SONGS:</p>
                      <div className="space-y-1">
                        {getRecommendations(song).map(rec => (
                          <div key={rec.id} className="text-sm text-gray-700">• {rec.title} - {rec.artist}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'insights' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-2">
                  <Film className="w-8 h-8 text-red-600" />
                  <span className="text-3xl font-bold text-gray-800">{movies.length}</span>
                </div>
                <p className="text-gray-600">Total Movies</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-2">
                  <Music className="w-8 h-8 text-green-600" />
                  <span className="text-3xl font-bold text-gray-800">{songs.length}</span>
                </div>
                <p className="text-gray-600">Total Songs</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-2">
                  <Star className="w-8 h-8 text-yellow-500" />
                  <span className="text-3xl font-bold text-gray-800">
                    {(movies.reduce((sum, m) => sum + parseFloat(m.rating), 0) / movies.length).toFixed(1)}
                  </span>
                </div>
                <p className="text-gray-600">Avg Movie Rating</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-2">
                  <Heart className="w-8 h-8 text-red-500" />
                  <span className="text-3xl font-bold text-gray-800">{favorites.length}</span>
                </div>
                <p className="text-gray-600">Your Favorites</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Film className="w-6 h-6 text-red-600" />
                  Top Rated Movies
                </h3>
                <div className="space-y-3">
                  {movies.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)).slice(0, 5).map((movie, idx) => (
                    <div key={movie.id} className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-gray-300">{idx + 1}</span>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{movie.title}</p>
                        <p className="text-sm text-gray-500">{movie.year} • {movie.genre}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{movie.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Music className="w-6 h-6 text-green-600" />
                  Top Rated Songs
                </h3>
                <div className="space-y-3">
                  {songs.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)).slice(0, 5).map((song, idx) => (
                    <div key={song.id} className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-gray-300">{idx + 1}</span>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{song.title}</p>
                        <p className="text-sm text-gray-500">{song.artist}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{song.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                Content by Decade
              </h3>
              <div className="space-y-3">
                {trendData.map(([decade, count]) => (
                  <div key={decade}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-semibold text-gray-700">{decade}s</span>
                      <span className="text-gray-600">{count} items</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-red-500 to-green-500 h-3 rounded-full transition-all"
                        style={{ width: `${(count / Math.max(...trendData.map(d => d[1]))) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;