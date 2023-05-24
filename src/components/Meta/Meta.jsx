import Head from 'next/head';
import { useRouter } from 'next/router';

const Meta = ({
  title,
  description,
  image = '/public/assets/images/logo.png',
  children,
  type = 'website',
}) => {
  const { asPath } = useRouter();
  const currentUrl = `${process.env.APP_URL}${asPath}`;
  const siteName = 'Rendersee';
  const titleMerge = (title) => `${title} | ${siteName}`;
  return (
    <>
      <Head>
        <title itemProp="headline">{titleMerge(title)}</title>
        {description ? (
          <>
            <meta itemProp="description" name="description" content={description} />
            <link rel="canonical" href={currentUrl} />
            <meta property="og:type" content={type} />
            <meta property="og:locale" content="en" />
            <meta property="og:title" content={titleMerge(title)} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:description" content={description} />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
