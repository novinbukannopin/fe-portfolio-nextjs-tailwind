import React from "react";
import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto text-center">
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraph>Beberapa kemampuan saya.</SectionParagraph>
        <div className="flex -mx-4 flex-wrap  mt-10">
          <div className="w-4/12 px-4 pb-8 ">
            <SkillCard
              name="Backend Java"
              level="Advanced"
              image="./java.svg"
              imageClassName="h-14 w-14"
            />
          </div>
          <div className="w-4/12 px-4">
            <SkillCard
              name="Next Js"
              level="Beginner"
              image="./next.svg"
              imageClassName="h-14 w-14"
            />
          </div>
          <div className="w-4/12 px-4">
            <SkillCard
              name="Postgre SQL"
              level="Advanced"
              image="./postgresql.svg"
              imageClassName="h-14 w-14"
            />
          </div>
          <div className="w-4/12 px-4">
            <SkillCard
              name="Vue JS"
              level="Advanced"
              image="./vue.svg"
              imageClassName="h-14 w-14"
            />
          </div>
          <div className="w-4/12 px-4">
            <SkillCard
              name="React JS"
              level="Advanced"
              image="./react.svg"
              imageClassName="h-14 w-14"
            />
          </div>
          <div className="w-4/12 px-4">
            <SkillCard
              name="Spring Boot"
              level="Advanced"
              image="./spring-icon.svg"
              imageClassName="h-14 w-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
