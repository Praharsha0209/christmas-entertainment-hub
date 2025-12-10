# 🎄 Christmas Entertainment Hub

A data-driven recommendation engine for holiday movies and music, featuring content-based filtering, statistical analysis, and interactive data visualization.

## 🎯 Project Overview

Built as a demonstration of data engineering principles applied to entertainment recommendations. This project showcases data pipeline architecture, algorithmic recommendation systems, and real-time analytics.

### Key Features
- **Data Management**: Curated dataset of 30 Christmas movies and 30 holiday songs with structured metadata
- **Content-Based Filtering**: Recommendation algorithm based on genre and mood similarity scoring
- **Real-time Data Processing**: Dynamic filtering and search across multiple dimensions
- **Analytics Dashboard**: Statistical insights including decade-based trend analysis and rating distributions
- **Interactive Visualization**: Real-time data charts and trend graphs

## 🏗️ Data Architecture

### Data Schema
```javascript
{
  id: Number,
  title: String,
  year: Number,
  genre: String,
  rating: Float,
  mood: String,
  description: String,
  reviews: Number,
  poster: URL
}
```

### Data Pipeline
1. **Data Collection**: Structured metadata from entertainment databases
2. **Data Processing**: Genre classification, mood tagging, rating normalization
3. **Feature Engineering**: Similarity scoring for recommendations
4. **Data Aggregation**: Statistical analysis by decade, genre, and rating

### Recommendation Algorithm
- **Method**: Content-Based Filtering
- **Similarity Metrics**: Genre match + Mood match
- **Ranking**: Sorted by rating (descending)
- **Output**: Top 3 similar items per selection

## 🛠️ Tech Stack

**Frontend & Data Processing**
- React 18.2 (Hooks: useState, useMemo)
- JavaScript ES6+ for data transformations
- Tailwind CSS for responsive UI
- Lucide React for iconography

**Data Operations**
- Array methods (filter, map, reduce, sort)
- Memoization for performance optimization
- Real-time filtering and aggregation

**Development Tools**
- Vite (build tool)
- Git for version control
- npm for package management

## 📊 Dataset Statistics

- **Total Items**: 60 (30 movies + 30 songs)
- **Time Span**: 1942-2020 (78 years of content)
- **Genres**: 10+ categories
- **Moods**: 8 distinct emotional classifications
- **Average Movie Rating**: 7.2/10
- **Total Reviews**: 4.5M+ votes analyzed

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Praharsha0209/christmas-entertainment-hub.git
cd christmas-entertainment-hub
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open browser to `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```

## 📈 Features in Detail

### 1. Content Discovery
- Browse 30 curated Christmas movies with real IMDb ratings
- Explore 30 holiday songs from various decades and genres
- High-quality posters and album artwork

### 2. Smart Filtering
- **Search**: Find movies by title or songs by artist
- **Genre Filter**: Comedy, Romance, Animation, Traditional, Pop, Rock, Jazz, etc.
- **Mood Filter**: Cheerful, Romantic, Fun, Nostalgic, Magical, Reflective, etc.

### 3. Recommendation Engine
- Content-based filtering algorithm
- Suggests similar movies/songs based on genre and mood
- Sorted by rating for quality assurance

### 4. Analytics Dashboard
- Total content statistics
- Average ratings across categories
- Top 5 rated movies and songs
- Decade-based trend visualization
- Personal favorites tracking

## 🎓 Data Engineering Concepts Demonstrated

### 1. **Data Modeling**
- Normalized schema design
- Consistent data structure across entities
- Metadata enrichment (ratings, reviews, genres)

### 2. **ETL Principles**
- Extract: Data sourcing from entertainment databases
- Transform: Genre classification, mood tagging, rating normalization
- Load: State management and rendering

### 3. **Algorithm Design**
- Content-based filtering implementation
- Similarity scoring mechanisms
- Performance-optimized sorting and filtering

### 4. **Performance Optimization**
- React useMemo for expensive computations
- Efficient data filtering (O(n) complexity)
- Minimized re-renders through memoization

### 5. **Data Aggregation**
- Statistical calculations (averages, counts)
- Decade-based grouping
- Top-N queries

## 📂 Project Structure
```
christmas-entertainment-hub/
├── public/
├── src/
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```

## 🔮 Future Enhancements

### Data Engineering Improvements
- [ ] External API integration (TMDb, Spotify, OMDb)
- [ ] Backend database (PostgreSQL/MongoDB)
- [ ] ETL pipeline with Apache Airflow
- [ ] Real-time data streaming with Kafka
- [ ] Machine Learning recommendations (collaborative filtering)
- [ ] User behavior analytics
- [ ] Data quality monitoring and validation
- [ ] Caching layer (Redis)

### Technical Features
- [ ] User authentication and profiles
- [ ] Persistent storage for favorites
- [ ] Advanced analytics dashboard
- [ ] A/B testing framework
- [ ] Rating and review system
- [ ] Social sharing features

## 🎯 Learning Outcomes

This project demonstrates proficiency in:
- ✅ Data structure design and schema modeling
- ✅ Algorithm implementation (recommendation systems)
- ✅ Data processing and transformation
- ✅ Statistical analysis and aggregation
- ✅ Performance optimization techniques
- ✅ Clean, maintainable code architecture
- ✅ Modern web development practices
- ✅ Version control with Git

## 📝 Technical Challenges Solved

1. **CORS Issues**: Attempted external API integration, learned about browser security policies
2. **Performance**: Implemented memoization to prevent unnecessary re-computations
3. **Data Consistency**: Ensured uniform data structure across 60 items
4. **Algorithm Efficiency**: Optimized recommendation logic for real-time performance

## 📄 License

MIT License - Free to use for learning and portfolio purposes

## 👤 Author

**Your Name**
- GitHub: [@Praharsha0209](https://github.com/Praharsha0209)
- LinkedIn: https://www.linkedin.com/in/praharsha-prateek-784186190/
- Email: praharsha.m0209@example.com
- Live Demo: https://christmas-entertainment-hub-tcnr-k96cpt8xe.vercel.app/

---

⭐ **Star this repo if you found it interesting!**

💼 **Open to Data Engineering opportunities** - Feel free to reach out!
