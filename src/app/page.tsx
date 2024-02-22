import { getBets } from "@/core/requests/bets";
import Bulten from "@/components/Bulten";
import Coupon from "@/components/Coupon";

export default async function Home() {
  const data = await getBets();

  return (
    <main>
      <div className={"container mx-auto my-4"}>
        <Bulten data={data}></Bulten>
      </div>
      <Coupon></Coupon>
    </main>
  );
}
