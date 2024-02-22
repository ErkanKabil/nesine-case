import { getBets } from "@/core/requests/bets";
import Bulten from "@/components/Bulten";
import Coupon from "@/components/Coupon";

export default async function Home() {
  const response = await getBets();

  const data = response.slice(0, 10);

  return (
    <main>
      <div className={"container mx-auto my-4"}>
        <Bulten data={data}></Bulten>
      </div>
      <Coupon></Coupon>
    </main>
  );
}
