// "use client";

// import { useEffect, useState } from "react";
// import { Menu } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Sidebar } from "@/components/sidebar";

// export const MobileSidebar = ({
//   isPro = false,
//   apiLimitCount = 0,
//   totalApiLimitCount = 0,
// }: {
//   isPro: boolean;
//   apiLimitCount: number;
//   totalApiLimitCount: number;
// }) => {
//   const [isMounted, setIsMounted] = useState(false);
//   //totalApiLimitCount = 33;
//   console.log("mobile-sidebar render:", { isPro, apiLimitCount, totalApiLimitCount });
//   // useEffect(() => {
//   //   setIsMounted(true);
//   // }, []);

//   useEffect(() => {
//     setIsMounted(true);
//     console.log("mobile-sidebar props:", { isPro, apiLimitCount, totalApiLimitCount });
//   }, [isPro, apiLimitCount, totalApiLimitCount]);



//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <Sheet>
//       <SheetTrigger>
//         <Button variant="ghost" size="icon" className="md:hidden">
//           <Menu />
//         </Button>
//       </SheetTrigger>
//       <SheetContent side="left" className="p-0">
//         {<Sidebar isPro={isPro} apiLimitCount={apiLimitCount} totalApiLimitCount={totalApiLimitCount}  />  }
//       </SheetContent>
//     </Sheet>
//   );
// };

/////////////////////////////////////////////

"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";

export const MobileSidebar = ({
  isPro = false,
  apiLimitCount = 0,
  totalApiLimitCount = 0,
}: {
  isPro: boolean;
  apiLimitCount: number;
  totalApiLimitCount: number;
}) => {
  console.log("mobile-sidebar:", { isPro, apiLimitCount, totalApiLimitCount });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log("mobile-sidebar props:", { isPro, apiLimitCount, totalApiLimitCount });
  }, [isPro, apiLimitCount, totalApiLimitCount]);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} totalApiLimitCount={totalApiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};