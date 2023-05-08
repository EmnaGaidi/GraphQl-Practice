import { GraphQLError } from "graphql";
export const Mutation = {
  addCv: (parent, { cvAddInput }, { db, pubSub }, infos) => {
    if (!existInArray(db.users, "id", cvAddInput.userId)) {
      throw new GraphQLError(
        `cet id ${cvAddInput.userId} ne correspond à aucun user`
      );
    }
    for (let i = 0; i < cvAddInput.skillsIds.length; i++) {
      if (!existInArray(db.skills, "id", cvAddInput.skillsIds[i])) {
        throw new GraphQLError(
          `cet id ${cvAddInput.skillsIds[i]} ne correspond à aucun skill`
        );
      }
    }
    const newCv = {
      id: db.cvs[db.cvs.length - 1].id + 1,
      ...cvAddInput,
    };
    db.cvs.push(newCv);
    pubSub.publish("TestCv", { newCv: newCv, mutation: "Add cv" });
    return newCv;
  },
  updateCv: (parent, { id, cvUpdateInput }, { db }, infos) => {
    if (!existInArray(db.cvs, "id", id)) {
      throw new GraphQLError(`cet id ${id} ne correspond à aucun cv`);
    }
    if (cvUpdateInput.userId) {
      if (!existInArray(db.users, "id", cvUpdateInput.userId)) {
        throw new GraphQLError(
          `cet id ${cvUpdateInput.userId} ne correspond à aucun user`
        );
      }
    }
    if (cvUpdateInput.skillsIds) {
      for (let i = 0; i < cvUpdateInput.skillsIds.length; i++) {
        if (!existInArray(db.skills, "id", cvUpdateInput.skillsIds[i])) {
          throw new GraphQLError(
            `cet id ${cvUpdateInput.skillsIds[i]} ne correspond à aucun skill`
          );
        }
      }
    }
    const cv = db.cvs.find((cv) => cv.id === id);
    for (let key in cvUpdateInput) {
      cv[key] = cvUpdateInput[key];
    }
    return cv;
  },
  deleteCv: (parent, { id }, { db }, info) => {
    const indexCv = db.cvs.findIndex((cv) => cv.id === id);
    if (indexCv === -1) {
      throw new GraphQLError("cv innexistant !");
    } else {
      const [cv] = db.cvs.splice(indexCv, 1);
      return cv;
    }
  },
};
function existInArray(array, attribut, value) {
  return array.some((element) => element[attribut] == value);
}
