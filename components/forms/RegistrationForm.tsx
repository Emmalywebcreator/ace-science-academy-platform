import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import SubjectSelection from "./SubjectSelection";

export default function RegistrationForm() {
  return (
    <form className="space-y-10">

      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-900">
          Student Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="Student Full Name"
            name="studentName"
            placeholder="Enter student's full name"
            required
          />

          <Input
            label="School Name"
            name="schoolName"
            placeholder="Enter school name"
          />

          <Select
            label="Current Class"
            name="class"
            required
            options={["SS1", "SS2", "SS3"]}
          />
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-900">
          Parent / Guardian Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="Parent / Guardian Name"
            name="parentName"
            placeholder="Enter parent or guardian's name"
            required
          />

          <Input
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="+2347039301841"
            required
          />

          <Input
            label="WhatsApp Number"
            name="whatsapp"
            type="tel"
            placeholder="+2349055232108"
            required
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="Optional"
          />
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-900">
          Subject Selection
        </h2>

        <SubjectSelection />
      </section>

    </form>
  );
}