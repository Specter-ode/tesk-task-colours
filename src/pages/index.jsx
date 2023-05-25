import Home from '@/components/Home/Home';
import Layout from '@/components/Layout/Layout';
import { getRandomColors } from 'src/helpers/getRandomColors';
import palette from '@/assets/data/palette.json';

const HomePage = ({ randomColors }) => {
  return (
    <Layout
      title="Home"
      description="Your ultimate destination for designing rooms during renovations or choosing plumbing, wallpaper, tiles, doors, and more"
    >
      <Home randomColors={randomColors} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const randomColors = getRandomColors(palette);

  return {
    props: {
      randomColors,
    },
  };
}

export default HomePage;
