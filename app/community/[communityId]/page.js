import CommunityDisplay from "@/components/CommunityDisplay";

import { sanityClient } from "@/lib/sanityClient";
import React from "react";

const CommunityDetail = async ({ params: { communityId } }) => {
  // Here we fetch the community through the server
  const query = `*[_type == 'community' && _id == '${communityId}']{
    _id,
    name,
    short_description,
    description,
    location,
    image{
      asset->{
        url
      }
    },
    gallery[]->{
      imageUrl{
        asset->{
          url
        }
      }
    },
  }`;

  const community = await sanityClient.fetch(query);

  const communityData = community[0];

  return (
    <>
      <CommunityDisplay communityData={communityData} />
    </>
  );
};

export default CommunityDetail;
