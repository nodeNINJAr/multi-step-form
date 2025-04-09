import Link from "next/link";
import ThemeToggle from "./multi-step-form/components/theme-toggle";


export default function Home() {

  // 
  return (
       <div className="dark:text-black text-white bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 min-h-screen flex flex-col justify-center items-center">
           <ThemeToggle/>
          <h1 className="text-4xl capitalize text-center mt-2">multi step form validation</h1>
            <Link href={"/multi-step-form"} className="border-2 rounded-lg px-6 py-2 mt-4 hover:text-gray-300 transition ease-in-out">CheckOut The Form</Link>
       </div>
  );
}
