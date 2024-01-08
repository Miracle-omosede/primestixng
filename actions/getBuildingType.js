import { sanityClient } from "@/lib/sanityClient";

export const getBuildingType = async () => {
  const query = `*[_type == "buildingType"]{
        _id,
        name,
    }`;

  const buildingType = await sanityClient.fetch(query);
  return buildingType;
};
