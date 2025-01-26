import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }
  return data;
}
export async function createCabin(newCabin) {
  // 1. create image path
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  //   https://dgmykjchkqruwtqvlrmc.supabase.co/storage/v1/object/public/cabinImages/cabin-001.jpg
  const imagePath = `https://dgmykjchkqruwtqvlrmc.supabase.co/storage/v1/object/public/cabinImages/${imageName}`;
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();
  if (error) {
    console.error(error);
    throw new Error("cabins could not be created");
  }
  //2 upload image
  const { error: storageError } = await supabase.storage
    .from("cabinImages")
    .upload(imageName, newCabin.image);
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Cabin image not uploaded, Cabin could not be created");
  }
  return data;
}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (!error) {
    return console.error("Cabin could not be deleted");
  }
  return data;
}
