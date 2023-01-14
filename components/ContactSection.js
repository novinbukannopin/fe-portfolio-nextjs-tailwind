import React from "react";
import Button from "./Button";
import ContactItem from "./ContactItem";
import FormField from "./FormField";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  return (
    <section>
      <div className="container mx-auto py-10">
        <div className="bg-primary flex">
          <div className="w-6/12 border-r border-primary-200">
            <div className="p-14">
              <SectionTitle>Contact</SectionTitle>
              <SectionParagraph>
                Beberapa Cara Menghubungi Saya
              </SectionParagraph>
              <ContactItem
                label="Email"
                icon="/icon-mail.svg"
                value="hi@novin.dev"
                className="mt-10"
              />
              <ContactItem
                label="Phone"
                icon="/icon-phone.svg"
                value="085156265910"
                className="mt-6"
              />
              <ContactItem
                label="Email"
                icon="/icon-tweeter.svg"
                value="@nasigorengkeju"
                className="mt-6"
              />
            </div>
          </div>
          <div className="w-6/12">
            <form className="py-14 px-20">
              <div className="flex -mx-4">
                <div className="w-6/12 px-4">
                  <FormField label="Name" name="name" type="text" />
                </div>
                <div className="w-6/12 px-4">
                  <FormField label="Email" name="name" type="text" />
                </div>
              </div>
              <FormField label="Subject" name="name" type="text" />
              <FormField
                label="Message"
                name="name"
                type="textarea"
                className="h-60 w-full"
              />
              <div className="text-right">
                <Button variant="black">Send</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
