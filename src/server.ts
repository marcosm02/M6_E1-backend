import app from "./app";
import AppDataSource from "./data-source";

(async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log("Connected database");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });

  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
})();
