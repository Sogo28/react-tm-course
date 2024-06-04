import Card from "./Card";
import Section from "./Section";
export default function HomeCards() {
  return (
    <>
      <Section title="Choose Your path">
        <div className=" flex flex-col gap-12 md:gap-12 md:justify-center md:flex-row ">
          <Card
            title="For Developpers"
            description="Browse our react jobs and start your Career today"
            buttonText="Browse Jobs"
            buttonCustom={"hover:bg-gray-800"}
            link="/jobs"
          />
          <Card
            title="For Employers"
            description="List your job to find the perfect developer for the role"
            buttonText="Post a Job"
            buttonBg="bg-indigo-600"
            cardCustom="bg-indigo-100"
            buttonCustom={"hover:bg-indigo-700"}
          />
        </div>
      </Section>
    </>
  );
}
