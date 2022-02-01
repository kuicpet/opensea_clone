import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'azko6dln',
  dataset: 'production',
  token:process.env.NEXT_PUBLIC_TOKEN,
  apiVersion: '2021-03-25',
  useCdn: false,
});
