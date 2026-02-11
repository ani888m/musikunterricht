const teachers = [
  { id: 1, name: "Anna", instrument: "Klavier" },
  { id: 2, name: "Max", instrument: "Gitarre" },
];

export default function LehrerPage() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-6">
        Unsere Lehrer
      </h1>

      <div className="space-y-4">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="border p-4 rounded"
          >
            <h2 className="font-semibold">
              {teacher.name}
            </h2>

            <p>{teacher.instrument}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
