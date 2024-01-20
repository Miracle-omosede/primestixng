import ProjectDetailClient from "@/components/ProjectDetailClient";
import ProjectDisplay from "@/components/ProjectDisplay";
import { sanityClient } from "@/lib/sanityClient";

// If you decide to use server component or server data fetching instead,
// although you don't have to,
// you can knock yourself out! 😊
// Although ensure you set NEXT_PUBLIC_URL in your environment variable as
// your origin e.g. `http://localhost:3000` for local env.
// Set it to whatever your deployed server origin is for production env

const ProjectDetail = async ({ params }) => {
  // ---------- SERVER SIDE FETCHING ------------

  const { projectId } = params;
  console.log(projectId);
  const query = `*[_type == 'project' && _id == $projectId]{
    _id,
    bannerImage {
      asset-> {
        url
      }
    },
    name,
    description,
    location,
    price,
    long,
    lat,
    faqs[] {
      question,
      answer
    },
    landmarks[] {
      title,
      description
    },
    amenities[] {
      description
    },
    gallery[]->{
      imageUrl{
        asset-> {
          url
        }
      }
    },
    community->{
      name,
      short_description,
      description
    }
  }`;

  const project = await sanityClient.fetch(query, { projectId });

  console.log("MASTER_PROJECT: ", project);

  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_URL}/api/project/${projectId}`
  // );

  // const data = await response.json();

  // console.log(data);

  return (
    <>
      <ProjectDetailClient />
      {/* <ProjectDisplay /> */}
    </>
  );
};

export default ProjectDetail;
