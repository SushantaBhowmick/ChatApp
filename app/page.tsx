import ChatHeader from "@/components/ChatHeader";
import InitUser from "@/lib/store/InitUser";
import { supabaseServer } from "@/lib/supabase/server";
import React from "react";
import ChatInput from "@/components/ChatInput";

export default async function Page() {
  const supabase = supabaseServer();

  const { data } = await supabase.auth.getSession();

  return (
    <>
      <div className="max-w-3xl mx-auto md:py-10 h-screen">
        <div className="h-full border rounded-md flex flex-col">
          <ChatHeader user={data.session?.user} />

          <div className="flex-1 flex flex-col p-5 h-full overflow-y-auto">
            <div className="flex-1"></div>
            <div className="space-y-7">
            {
              [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((item)=>(
                <>
                  <div className="flex gap-2" key={item}>
                <div className="h-10 w-10 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <h1 className="font-bold">Sushanta</h1>
                    <h1 className="text-sm text-gray-600">{new Date().toDateString()}</h1>
                  </div>
                  <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorem, ipsum eaque numquam harum reiciendis excepturi minus vitae obcaecati voluptatum blanditiis quidem amet necessitatibus repudiandae reprehenderit ea ab! Repellendus, dolore!</p>
                </div>
              </div>
                </>
              ))
            }
            </div>
          </div>

         <ChatInput />
        </div>
      </div>
      <InitUser user={data.session?.user} />
    </>
  );
}
