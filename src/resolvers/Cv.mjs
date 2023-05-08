export const Cv = {
  user: ({ userId }, args, { db }, info) => {
    return db.users.find((user) => user.id === userId);
  },
  skills: ({ id }, args, { db }, info) => {
    const myElemts = db.cv_skill.filter((elmt) => elmt.id_cv === id);
    const mySkills = [];
    for (let i = 0; i < myElemts.length; i++) {
      const skillId = myElemts[i].id_skill;
      const skill = db.skills.find((skill) => skill.id === skillId);
      if (skill) {
        mySkills.push(skill);
      }
    }
    return mySkills;
  },
};
