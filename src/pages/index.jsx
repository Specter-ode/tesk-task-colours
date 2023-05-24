import Layout from '@/components/Layout/Layout';


const MainPage = () => {
  return (
    <Layout
      title="Main page"
      description="Your ultimate destination for designing rooms during renovations or choosing plumbing, wallpaper, tiles, doors, and more"
    >
      <div>
        <h1 className="mb-[20px] text-center text-[20px] font-bold text-main-color sTablet:text-[30px]">
          Welcome to Search Movie App!
        </h1>
        <p className="mb-[20px] font-normal sTablet:text-[16px] sLaptop:text-[20px]">
          Our goal is to provide you with an easy-to-use platform to search for your favorite movies and discover new
          ones. With our comprehensive movie database, you can search for movies by title or keyword and find detailed
          information on each movie, including year, ratings, genre, actors and other.
        </p> 
      </div>
    </Layout>
  );
};

export default MainPage;
