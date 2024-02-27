import React, { Suspense } from "react";
import ListMessages from "./ListMessages";
import { supabaseServer } from "@/lib/supabase/server";
import InitMessage from "@/lib/store/InitMessage";

export default async function ChatMessages() {

    const supabase = supabaseServer();
    
    const {data}=await supabase.from("messages").select("*,users(*)")


  return (
    <Suspense fallback={"loading"}>
      <ListMessages />
      <InitMessage messages={data || []} />
    </Suspense>
  );
}
