import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center bg-background-0 text-textcolor-0 h-screen">
      <h1 className="flex flex-row text-4xl font-bold mb-6">Welcome</h1>
      <button
        className="px-4 py-2 flex flex-row rounded m-1 border border-white hover:bg-textcolor-0 hover:text-background-0 hover:font-semibold"
        onClick={() => navigate("/home")}
        aria-label="Get Started"
      >
        Get Started
      </button>
    </main>
  );
};

export default WelcomePage;
