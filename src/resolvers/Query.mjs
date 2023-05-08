export const Query = {
  hello: () => "Hello from Yoga!",
  getCvs: (parent, args, { db }, info) => {
    return db.cvs;
  },
  getCvById: (parent, { cvId }, { db }, info) => {
    const cv = db.cvs.find((cv) => cv.id === cvId);
    if (!cv) {
      throw new Error(`aucun cv ne porte l'id ${cvId}`);
    } else {
      return cv;
    }
  },
};
