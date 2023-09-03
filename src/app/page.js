import ContentCard from "./Main/Components/ContentCard.jsx";
import Progress from "./Main/Components/Progress.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";


export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen">
      <div
        style={{
          backgroundColor: "#15132B",
          fontSize: "16px",
          fontWeight: "bold",
        }}
        className="min-h-screen hidden md:block"
      >
        <Sidebar />
      </div>
      <div className="flex-1">
        <div>
          <Navbar />
        </div>
        <main className="p-4 bg-[#0D0B21] min-h-screen relative">
        <Progress />
       <ContentCard /></main>
      </div>
       </div>
    </div>
  );
}
