import Image from "next/image";
import {Poppins} from "next/font/google";
import { cn } from "@/lib/utils";
const font=Poppins({
    subsets:["latin"],
    weight:["200","300","400","500","600","700","800"],
})
export const Logo=()=>{
    return(
        <div className="flex flex-col items-center gap-y-4">
            <div className="bg-white rounded-full p-1 overflow-hidden">
                <Image 
                src="/logoo.jpeg"
                alt="streamHive"
                height="80"
                width="80"
                />

            </div>
            <div className={cn("flex flex-col items-center",
                font.className
            )}>
                <p className={cn("text-xl font-semibold"
                )}>
                    StreamHive
                </p>
                <p className={cn(
                    "text-sm text-muted-foreground"
                )}>
                    Let&apos;s Play!!

                </p>

            </div>
            
        </div>
    );
};