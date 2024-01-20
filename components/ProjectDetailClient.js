"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Flickity from "react-flickity-component";
import "./flicky.css";
import Amenities from "./Amenities";
import Maps from "./Maps";
import { useForm } from "react-hook-form";

import axios from "axios";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";

import useOpenController from "./useOpenController";
import Image from "next/image";
import ProjectDisplay from "./ProjectDisplay";

export const Accordion = ({ section, key }) => {
  const { isOpen, toggle } = useOpenController(false);
  
  return (
    <div className="accordion-container font-raleway">
      <ExpendableColumn
        question={section.question}
        isOpen={isOpen}
        toggle={toggle}
      />
      {isOpen && <TextSection text={section.answer} />}
      <div className="underline"></div>
    </div>
  );
};

const ExpendableColumn = ({ question, isOpen, toggle }) => {
  return (
    <div className="flex flex-row w-full justify-between" onClick={toggle}>
      <div className="text-2xl py-5 font-semibold">{question}</div>
      <button className="expendable-button">
        <span
          class="material-symbols-outlined"
          style={{
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
            transition: "all 0.25s",
          }}
        >
          
          expand_more
        </span>
      </button>
    </div>
  );
};

const TextSection = ({ text }) => {
  return (
    <div className="text-xl">
      <div>{text}</div>
    </div>
  );
};

const flickityOptions = {
  initialIndex: 1,
};

function Carousel({ gallery }) {
  // console.log(gallery);
  return (
    <>
      {gallery?.length > 0 && (
        <Flickity
          className={"carousel"}
          elementType={"div"}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {gallery?.map((image, index) => (
            <Image
              alt="gallery-image"
              key={index}
              className="relative w-[600px] px-5 h-auto"
              src={image?.imageUrl?.asset?.url}
              width={1000}
              height={1000}
            />
          ))}
        </Flickity>
      )}
    </>
  );
}

const ProjectDetailClient = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // This is a client data fetching for the detail view.
  // Like I said, you can use server fetching if you like!

  useEffect(() => {
    const fetchDetailProject = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/project/${projectId}`);
        const data = await response.json();

        setProject(data);
      } catch (error) {
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetailProject();
  }, [projectId]);

  return (
    <main className="h-full mt-20 font-raleway">
      {isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <BeatLoader color="#e8d5a1b8" />
        </div>
      ) : (
          <ProjectDisplay projectData={project} />
      )}
    </main>
  );
};

const MessageForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const schema = yup.object({
    firstName: yup.string().required("Please enter your first name."),
    lastName: yup.string().required("Please enter your last name."),
    email: yup.string().email("Invalid email").required("Email is required."),
    phoneNumber: yup
      .string()
      .matches(/^\d+$/, "Invalid phone number.")
      .required("Phone number is required."),
    message: yup.string().required("Please enter your message."),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const customSubmission = async (values) => {
    // alert(JSON.stringify(values));

    try {
      setIsLoading(true);
      const response = await axios.post(`/api/customer`, values);

      const data = response.data;
      // console.log(data);
      if (data.status === 200) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      setIsLoading(false);

      toast.error("Someething went wrong. Try again.");
    } finally {
      setIsLoading(false);
      setValue("email", "");
      setValue("firstName", "");
      setValue("lastName", "");
      setValue("message", "");
      setValue("phoneNumber", "");
    }
  };

  const onSubmit = async (values) => {
    await customSubmission(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="form">
      <div className="max-w-[1100px] mx-auto w-full mb-10">
        <div className="">
          <div className="max-w-screen-xl px-8 flex flex-col py-10 mx-auto text-gray-900 rounded-lg">
            <div className="flex flex-col justify-center items-center md:px-10">
              <div>
                <span className="rounded-full bg-gray-200 px-5 py-4 text-2xl my-4">
                <i className="ri-customer-service-2-fill text-[#A18830]"></i>
                </span>
                <h2 className="text-4xl lg:text-5xl mt-4 font-bold leading-tight">
                  Lets talk about everything!
                </h2>
              </div>
              <div className="mt-8 text-center"></div>
            </div>
            <div className="">
              <div>
                <span className="uppercase text-sm text-gray-600 font-bold">
                  First Name
                </span>
                <input
                  {...register("firstName")}
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                />
                <p className="text-red-500 text-sm">
                  {errors.firstName?.message}
                </p>
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Last Name
                </span>
                <input
                  {...register("lastName")}
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                />
                <p className="text-red-500 text-sm">
                  {errors.lastName?.message}
                </p>
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  {...register("email")}
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
              </div>

              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  phone nummber
                </span>
                <input
                  {...register("phoneNumber")}
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="tel"
                />
                <p className="text-red-500 text-sm">
                  {errors.phoneNumber?.message}
                </p>
              </div>

              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Message
                </span>
                <textarea
                  {...register("message")}
                  className="w-full h-24 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
                <p className="text-red-500 text-sm">
                  {errors.message?.message}
                </p>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-[#A18830] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  {isLoading ? (
                    <BeatLoader color="#e8d5a1b8" />
                  ) : (
                    <>Send Message</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const MainAccordion = ({ data }) => {
  return (
    <div>
      <div>
        <h3 className="text-4xl capitalize font-bold py-10">
          Frequently asked questions
        </h3>

        <div className="main-title-underline"></div>
        {data?.map((section, index) => (
          <Accordion key={index} section={section} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetailClient;
