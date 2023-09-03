import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar.jsx";

const layout = ({ children }) => {


  return (
    <div className="flex h-screen">
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
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default layout;
