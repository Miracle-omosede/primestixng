import { sanityClient } from "@/lib/sanityClient";

export const getLocation = async () => {
  const query = `*[_type == "location"]{
        _id,
        name,
    }`;

  const location = await sanityClient.fetch(query);
  return location;
};
