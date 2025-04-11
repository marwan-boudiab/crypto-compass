# Crypto Compass 🧭

A modern web application designed to simplify cryptocurrency exploration. This platform provides users with up-to-date cryptocurrency rankings, market data, and the latest news from the crypto world, all presented in a clean, dark-themed interface.

<div align="center">
  <a href="https://youtu.be/HpfK4TCeurc">
    <img src="https://img.youtube.com/vi/HpfK4TCeurc/maxresdefault.jpg" alt="Crypto Compass Demo" width="600" style="border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.2);">
    <br>
    <img width="96" height="96" src="https://img.icons8.com/color/96/youtube-play.png" alt="youtube-play"/>
  </a>
</div>

## 🚀 Features

### Dashboard Experience
- **Market Overview**: Real-time statistics including total market cap, 24hr volume, and active cryptocurrencies
- **Top Cryptocurrencies**: Visual cards displaying essential data for the top 10 cryptos
- **Price Change Indicators**: Clear visual feedback for positive and negative price movements
- **User-friendly Interface**: Clean, dark-themed design for optimal viewing

### Cryptocurrency Explorer
- **Comprehensive Rankings**: Top 50 cryptocurrencies by market capitalization
- **Detailed Metrics**:
  - Current price with currency formatting
  - Market capitalization (human-readable format)
  - 24-hour percentage change with color indicators
  - Rank, name, and symbol with logo
- **Responsive Data Display**: Well-structured table format for easy comparison

### News Aggregator
- **Latest Updates**: Recent news articles related to cryptocurrency
- **Visual Presentation**: Card grid layout with article images
- **Content Preview**: Article titles, summaries, and publication dates
- **Source Attribution**: Clear indication of news publishers

### Technical Capabilities
- **Smooth Loading States**: Visual feedback during API data fetching
- **Responsive Design**: Optimized for all device sizes
- **Number Formatting**: Human-readable presentation of large financial figures
- **Modern UI Components**: Using best practices for web accessibility

## 🛠️ Technology Stack

- **Frontend**:
  - Next.js 14
  - React 18
  - Tailwind CSS
  - Radix UI components

- **UI Enhancements**:
  - Lucide React & React Icons
  - React Loader Spinner
  - Millify for number formatting
  - Class Variance Authority for component variants

- **Data Sources**:
  - Cryptocurrency data via RapidAPI (e.g., CoinRanking)
  - News articles via RapidAPI

## 📦 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm, yarn, or pnpm
- RapidAPI account with subscriptions to cryptocurrency and news APIs

### Installation

1. Clone the repository
   ```bash
   git clone [repository-url]
   cd crypto-compass
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables
   Create a `.env.local` file in the root directory with the following variables:
   ```
   # Required for fetching cryptocurrency data
   NEXT_PUBLIC_COINRANKING_RAPID_API_KEY=
   NEXT_PUBLIC_COINRANKING_RAPID_API_HOST=
   NEXT_PUBLIC_COINRANKING_RAPID_API_URL=

   # Required for fetching news data
   NEXT_PUBLIC_NEWS_RAPID_API_KEY=
   NEXT_PUBLIC_NEWS_RAPID_API_HOST=
   NEXT_PUBLIC_NEWS_RAPID_API_URL=
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
   The application will be available at http://localhost:3000

## 🔧 Development Workflow

### Production Build
```bash
npm run build
npm run start
```

### Code Quality
```bash
npm run lint
```

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgements

This project uses various open-source libraries and tools:
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [And many more...](#)

---

Data powered by cryptocurrency and news APIs from [RapidAPI](https://rapidapi.com/).