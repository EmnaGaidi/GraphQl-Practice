export const db = {
  users: [
    {
      id: 1,
      name: "emna",
      email: "emna@gmail.com",
      role: "ADMIN",
    },
    {
      id: 2,
      name: "hmoz",
      email: "hamzus@gmail.com",
      role: "USER",
    },
  ],
  skills: [
    {
      id: 1,
      designation: "public speech",
    },
    {
      id: 2,
      designation: "coding",
    },
    {
      id: 3,
      designation: "group work",
    },
  ],
  cvs: [
    {
      id: 1,
      name: "emna",
      age: 22,
      job: "engineer",
      userId: 1,
      //skillsIds: [1, 2],
    },
    {
      id: 2,
      name: "hamza",
      age: 21,
      job: "engineer",
      userId: 2,
      //skillsIds: [2, 3],
    },
  ],
  cv_skill: [
    {
      id_cv: 1,
      id_skill: 1,
    },
    {
      id_cv: 1,
      id_skill: 2,
    },
    {
      id_cv: 2,
      id_skill: 2,
    },
    {
      id_cv: 2,
      id_skill: 3,
    },
  ],
};
