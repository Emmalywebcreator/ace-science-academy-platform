import Input from "@/components/ui/Input";

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

            <Input
                label="Student Current Class"
                name="currentClass"
                placeholder="Enter student's current class"
                required
            />
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-900">
          Parent / Guardian Information
        </h2>

        Parent fields coming next...
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-900">
          Subject Selection
        </h2>

        Subject selection coming next...
      </section>

    </form>
  );
}