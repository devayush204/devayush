import React, { useState } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { projectData } from "../(data)/ProjectData";



export default function Projects() {
  const [data, setData] = useState(projectData);
  return (
    <section id="projects" className="">
      <div className="flex justify-center items-center mb-10">
        <button className={`text-lg xl:text-xl px-5 py-2 rounded-xl bg-black  text-white/70 `}>
          Projects
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {data.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, description, imageUrl, liveUrl, sourceCode }) {
  return (
    <CardContainer className="inter-var relative ">
      <CardBody className="bg-[#262626] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-white dark:text-white">
          {title}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-white/50 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageUrl}
            height="1000"
            width="1000"
            className=" w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex  mt-7 justify-between">
          <a className=" top-5 right-10 underline text-white text-base flex items-center hover:translate-x-1 transition-transform" href="/">
            <p>Live Preview</p>
            <svg version="1.1" id="Layer_1" className="w-4 ml-1" viewBox="0 0 50 50" enable-background="new 0 0 50 50">
              <path fill="white" d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15
  c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422
  C15.172,39.813,15.172,40.446,15.563,40.836z"/>
            </svg>
          </a>
          <a  className=" top-5 right-10 underline text-white text-base flex items-center hover:translate-x-1 transition-transform" href={liveUrl} target="_blank" >
            <p >Source Code</p>
            <svg version="1.1" id="Layer_1" className="w-4 ml-1" viewBox="0 0 50 50" enable-background="new 0 0 50 50">
              <path fill="white" d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15
  c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422
  C15.172,39.813,15.172,40.446,15.563,40.836z"/>
            </svg>
          </a>
        </div>
      </CardBody>
    </CardContainer>
  );
}
