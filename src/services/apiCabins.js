import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }
  return data;
}
export async function createEditCabin(newCabin, id) {
  // 1. create image path
  const imageName = newCabin.image?.startsWith?.(supabaseUrl)
    ? newCabin.image
    : `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
  //   https://dgmykjchkqruwtqvlrmc.supabase.co/storage/v1/object/public/cabinImages/cabin-001.jpg
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabinImages/${imageName}`;

  // Create / Edit Cabins
  let query = supabase.from("cabins");
  //Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  // EDit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  const { data, error } = await query.select().single();
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
  if (error) {
    return console.error("Cabin could not be deleted");
  }
  return data;
}
