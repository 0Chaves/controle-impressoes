import { getImpressoes } from "@/lib/impressaoDB";

export default async function Dashboard() {

    const impressoes = await getImpressoes()

  return (
    <main className="flex flex-col items-center min-h-screen p-8 w-[1280px]">
      <div className="bg-white rounded-md">
        
      </div>
    </main>
  );
}
