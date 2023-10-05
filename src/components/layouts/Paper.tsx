import { ReactNode } from "react";

const Paper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-11/12 md:w-8/12 p-8 bg-slate-50 m-auto mt-8 rounded-xl shadow-xl text-slate-500 relative">
      {children}
    </div>
  );
};

export default Paper;
