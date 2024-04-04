import Results from '@/components/Results';
import { resolve } from 'path';

const API_KEY = process.env.API_KEY;

type TsearchParams = {
  genre: string
}
interface SearchParams {
  searchParams: TsearchParams
}

export default async function Home(props: SearchParams) {
  const { searchParams } = props
  const genre = searchParams.genre || 'fetchTrending';
  
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=ko-KR&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const results = data.results;
  console.log('data', results)
  return (
    <div>
      <Results results={results} />
    </div>
  );
}