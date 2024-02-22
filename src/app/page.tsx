import { getBets } from "@/core/requests/bets";
import Bulten from "@/components/Bulten";
import Coupon from "@/components/Coupon";
import { Suspense } from "react";

export default async function Home() {
  const data = await getBets();

  return (
    <main>
      <div className={"container mx-auto my-4"}>
        <Suspense>
          <Bulten data={data}></Bulten>
        </Suspense>
      </div>
      <Coupon></Coupon>
    </main>
  );
}
