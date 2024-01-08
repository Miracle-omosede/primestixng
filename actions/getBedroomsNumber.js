import { sanityClient } from "@/lib/sanityClient";

export const getBedroomsNumber = async () => {
  const query = `*[_type == "bedroomsNumber"]{
        _id,
        numberOfRooms,
    }`;

  const bedroomsNumber = await sanityClient.fetch(query);
  return bedroomsNumber;
};
