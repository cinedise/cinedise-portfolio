import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'cinedise/cinedise-portfolio'
  },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        category: fields.select({
          label: 'Category',
          description: 'The category this project belongs to',
          options: [
            { label: 'Commercial', value: 'Commercial' },
            { label: 'VFX', value: 'VFX' },
            { label: 'Events', value: 'Events' },
            { label: 'Social Media', value: 'Social Media' },
            { label: 'Films', value: 'Films' },
            { label: 'Color', value: 'Color' },
            { label: 'Motion Design', value: 'Motion Design' },
            { label: 'Graphic Design', value: 'Graphic Design' },
            { label: 'UI/UX', value: 'UI/UX' },
          ],
          defaultValue: 'Commercial',
        }),
        year: fields.text({ label: 'Year' }),
        headerImage: fields.conditional(
          fields.select({
            label: 'Header Image Source',
            options: [
              { label: 'Upload', value: 'upload' },
              { label: 'URL', value: 'url' },
            ],
            defaultValue: 'upload',
          }),
          {
            upload: fields.image({
              label: 'Header Image',
              directory: 'public/assets/projects/header',
              publicPath: '/assets/projects/header/',
            }),
            url: fields.text({ label: 'Header Image URL' }),
          }
        ),
        description: fields.text({ label: 'Description', multiline: true }),
        videoYoutubeId: fields.text({ label: 'YouTube Video ID' }),
        videoEmbedUrl: fields.text({ label: 'Video Embed URL (Alternative to YouTube)' }),
        gallery: fields.array(
          fields.conditional(
            fields.select({
              label: 'Asset Source',
              options: [
                { label: 'Upload', value: 'upload' },
                { label: 'URL', value: 'url' },
              ],
              defaultValue: 'upload',
            }),
            {
              upload: fields.file({
                label: 'Asset File',
                directory: 'public/assets/projects/gallery',
                publicPath: '/assets/projects/gallery/',
              }),
              url: fields.text({ label: 'Asset URL' }),
            }
          ),
          {
            label: 'Gallery Assets',
            itemLabel: (props) => {
               const val = props.value as any;
               if (val?.discriminator === 'url') return val.value || 'URL Asset';
               if (val?.discriminator === 'upload' && typeof val.value === 'string') return val.value;
               return 'Asset';
            },
          }
        ),
        nextProject: fields.relationship({
            label: 'Next Project',
            collection: 'projects',
        })
      },
    }),
  },
});
