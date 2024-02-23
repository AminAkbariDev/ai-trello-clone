import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "658dbf1458cf6831c4ba",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
