import { UserButton } from "@clerk/nextjs";

import { MobileSidebar } from "@/components/mobile-sidebar";
import { getApiLimitCount ,getTotalApiLimitCount } from "@/lib/api-limit";
//import { getTotalApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import logger from "@/logger";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const totalApiLimitCount = await getTotalApiLimitCount();
  
  const isPro = await checkSubscription();

  logger.info('[Navbar]:', { apiLimitCount, totalApiLimitCount, isPro });

  return ( 
    <div className="flex items-center p-4">
      {<MobileSidebar 
         isPro={isPro} 
         apiLimitCount={apiLimitCount}
         totalApiLimitCount={totalApiLimitCount} 
      /> }
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
   );
}
 
export default Navbar;