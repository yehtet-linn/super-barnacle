// Utilities Types

// Partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verfied?: boolean;
}

const updateAssignment = (
  props: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...props, ...propsToUpdate };
};

const assignment: Assignment = {
  studentId: "991",
  title: "Capstone Project",
  grade: 0,
};

console.log(updateAssignment(assignment, { grade: 3.7 }));
const assignA = updateAssignment(assignment, { studentId: "444" });
console.log(assignA);

// Required Utilities
const recordAssignment = (requiredProps: Required<Assignment>): Assignment => {
  return requiredProps;
};

console.log(recordAssignment({ ...assignment, verfied: true }));

// Readonly Utilities
const assignmentVerfied: Readonly<Assignment> = {
  ...assignment,
  grade: 3.3,
  verfied: true,
};

console.log(assignmentVerfied);

// Record Utilities
type Student = "Amara" | "Chris" | "Marry";
type GradePoint = "A" | "B" | "C" | "U";

const finalGrades: Record<Student, GradePoint> = {
  Amara: "A",
  Chris: "B",
  Marry: "U",
};

interface Grades {
  assignA: number;
  assignB: number;
}

const semesterGrades: Record<Student, Grades> = {
  Amara: { assignA: 32, assignB: 63 },
  Chris: { assignA: 54, assignB: 52 },
  Marry: { assignA: 43, assignB: 56 },
};

console.log(semesterGrades);

// Pick and Omit Utilities
type AssignResult = Pick<Assignment, "studentId" | "grade">;

const assignResult: AssignResult = {
  studentId: "132",
  grade: 3.78,
};

type AssignPreview = Omit<Assignment, "studentId" | "title">;

const assignPreview: AssignPreview = {
  grade: 3.56,
  verfied: true,
};

type AdjustGrade = Exclude<GradePoint, "U">;

type HighGrade = Extract<GradePoint, "A" | "B">;

type AllGradePoints = "A" | "B" | "C" | "D" | "E" | "F" | null | undefined;

type NameOnly = NonNullable<AllGradePoints>;

// Return Type
// type NewlyAssign = { title: string; points: number };

// const createNewlyAssign = (title: string, points: number):NewlyAssign => {
//   return { title, points };
// };

const createNewlyAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewlyAssign>;

const newAssign: NewAssign = createNewlyAssign("Utility Assing", 60);
console.log(newAssign);

// Parameters
type AssignParams = Parameters<typeof createNewlyAssign>;

const assignArgsA: AssignParams = ["Assign A", 4];

const assignArgsB: NewAssign = createNewlyAssign(...assignArgsA);
console.log(assignArgsB);

// Awaited
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });

  return data;
};

type FetchUserReturn = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
