import React from "react";
import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import ProjectItem from "./ProjectItem";

export default function ProjectsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto text-center">
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraph>Beberapa proyek bikinan saya.</SectionParagraph>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="w-6/12 px-4 pb-10">
            <ProjectItem
              name="Wumbo"
              description="Eksplorasi Landing Page"
              image="/wumbo.png"
            />
          </div>

          <div className="w-6/12 px-4">
            <ProjectItem
              name="Zeit"
              description="Eksplorasi Landing Page"
              image="/zeit.png"
            />
          </div>
          <div className="w-6/12 px-4">
            <ProjectItem
              name="Zeit"
              description="Eksplorasi Landing Page"
              image="/zeit.png"
            />
          </div>
          <div className="w-6/12 px-4">
            <ProjectItem
              name="Wumbo"
              description="Eksplorasi Landing Page"
              image="/wumbo.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
