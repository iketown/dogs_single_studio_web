import admin from "firebase-admin";

export const initFB = () => {
  try {
    const project_id = process.env.FB_PROJECTID;
    const private_key = process.env.FB_PRIVATE_KEY;
    const client_email = process.env.FB_CLIENT_EMAIL;
    const databaseURL = process.env.FB_DATABASEURL;

    admin.initializeApp({
      credential: admin.credential.cert({
        project_id,
        private_key: private_key.replace(/\\n/g, "\n"),
        client_email,
      }),
      databaseURL,
    });
  } catch (error) {
    /*
     * We skip the "already exists" message which is
     * not an actual error when we're hot-reloading.
     */
    if (!/already exists/u.test(error.message)) {
      // eslint-disable-next-line no-console
      console.error("Firebase admin initialization error", error.stack);
    }
  }
  const db = admin.firestore();
  try {
    db.settings({ ignoreUndefinedProperties: true });
  } catch (error) {}
  return db;
};
