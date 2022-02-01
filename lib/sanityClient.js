import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'azko6dln',
  dataset: 'production',
  token:
    'skEvpezgrET6erx8iZAN6fM3yHIxxkSavbfjBGivvLE8Es6QlJ311RU0h9FZP06vYBbk87XKVVkfGZ7d2dXyoak22Ct0f2AimlGWpibXPve7Yk5l15VLav4mWqDIDB8WFbXH3aFsKH1DRhfqjlejqMvMx8VD1H0nZgkV1FE85Anff5vD7oUS',
  apiVersion: '2021-03-25',
  useCdn: false,
});
