import { Header } from "./_components/header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="w-full max-w-7xl mx-auto">
        <button>
          <textarea name="sudo apt get update" id=""></textarea>
        </button>
        {children}
      </main>
    </>
  )
}