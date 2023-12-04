const { sanityClient } = require("@/lib/sanityClient");

export const getAllProjects = async () => {
  const query = `*[_type == 'project']{
      _id,
      name,
      city->{name},
      price,
      description,
      bannerImage {
        asset->{
          url
        }
      },
      location,
      projectType,
      country->{name},
      long,
      lat,
      faqs[]{question, answer},
      landmarks[]{title, description},
      amenities[]{description},
      gallery[]->{
        imageUrl{
          asset->{
            url
          }
        }
      },
      createdAt

    }`;

  const projects = await sanityClient.fetch(query);
  return projects;
};
